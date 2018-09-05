# Problems

TLTR:

https://bendiuguid.github.io/long-live-graphql/

- Overfetching
- Underfetching
- Multiple requests
- REST often grows into not REST (custom endpoints)
- REST is not a spec (what is it?)

## Overfetching/Underfetching (Sparse Fieldsets / Partials)

https://blog.runscope.com/posts/you-might-not-need-graphql
http://yaoganglian.com/2013/07/01/partial-response/

Variants:

- Facebook
> Facebook has experimented with various different approaches to sharing all their data between apps

Graph API
GET /frankcarter?fields=id,name,picture 

FQL (Executing SQL-like syntax over a GET endpoint.)

```
GET /fql?q=SELECT%2Buid2%2BFROM%2Bfriend%2BWHERE%2Buid1%3Dme()&access_token=..
```

- Google
```
GET .../calendar/feeds/private/full?fields=entry(title,gd:when)
```

- YouTube
https://developers.google.com/youtube/v3/getting-started#partial
```
GET /feeds/api/users/default/uploads?fields=entry(title,gd:comments,yt:statistics)
```
```
fields=items/id,playlistItems/snippet/title,playlistItems/snippet/position
fields=items(id,snippet/title,snippet/position)
fields=items(id,snippet(title,position))
```

- Linked In
```
GET .../v2/people/456/friends:(name,photo,best-friend:(name,photo))
```

- JSONApi
http://jsonapi.org/format/#fetching-sparse-fieldsets
```
GET /articles?fields[articles]=title,body&fields[people]=name
```

- Jira query language

- OData

Summary (best of all):
```
GET /dogs?fields=name,breed,age,owner(name,age)
```

## Multiple requests (Data Inclusion / Compound Documents)

http://jsonapi.org/format/#fetching-includes
```
GET /articles?include=author&fields[articles]=title,body&fields[people]=name
```

## Query Language (complex filters, nested filters, nested params...)

- OData

GET /Airports?$filter=contains(Location/Address, 'San Francisco')

## Types

Variants:
- JSON schema
- Protobuf
...
 
But not fun to define :/

## Evolution / Versioning

1. path prefix
/v1/foos
/v2/foos

2. deprecating endpoints/fields

How to cleanup deprecated?

Tracks fields usage and drop if not used
- gql +
- REST ? (only with required `?fields=` prop

# NOTES:

- GraphQL is not replacement for REST. It is an alternative. 
- You could do it by RESTish api, but its like JS vs TS - you dont have any asistant in writing "query". Having all of these concepts implemented and documented in one single “package” like GraphQL is super handy

# Resolvers
https://github.com/wix-private/podcasts/blob/master/podcasts-feed-service/src/routers/schema.graphql

https://github.com/wix-private/podcasts/blob/master/podcasts-feed-service/src/routers/graphql.js#L44-L61

```js
// podcast gql server
const schema = graphql.buildSchema(schemaDefinition);
const resolvers = {
  podcast: async ({url, bi}, req) => {
    const aspects = req.aspects;

    try {
      this._biService.feedRequested(aspects, {bi, url});
      const podcast = await this._podcastService.get(url);
      this._biService.feedCompleted(aspects, {bi, url, podcast});
      return podcast;

    } catch (err) {
      await this._biService.feedFailed(aspects, {bi, url, err});
      throw err;
    }
  },
  episode: ({url, id}) => {
    return this._podcastService.getEpisode(url, id);
  },
  episodes: ({url, limit, after}) => {
    return this._podcastService.getEpisodes(url, {limit, after});
  }
};

// https://github.com/graphql/express-graphql
// http://graphql.github.io/graphql-js/passing-arguments/

// NOTE: defaultFieldResolver
https://github.com/graphql/graphql-js/blob/v14.0.0/src/execution/execute.js#L1226-L1240
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers
}));

// OR without graphqlHTTP

app.post('/graphql', (req, res) => {
  graphql(schema, req.body, resolvers)
    .then((result) => {
      res.send(JSON.stringify(result, null, 2));
    });
});
```

```js
// podcast gql client
const url = 'http://example.com/podcast.rss';
const query = `query Podcast($url: String!) {
  podcast(url: $url) { title }
}`;

fetch('/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({
    query,
    variables: { url },
  })
})
  .then(r => r.json())
  .then(data => console.log('podcast:', data.podcast));
```

# Server/Client side

## Server Side

- GraphQL Server
- Apollo server
- Prisma (ORM over databases, ...)

## Client side

- fetch or any other http client
- Apollo
- Relay
- Lokka
- graphql-query
- ....

# Bonus

Graphql query batching
https://blog.apollographql.com/query-batching-in-apollo-63acfd859862

Schema stiching
https://blog.apollographql.com/graphql-schema-stitching-8af23354ac37
https://www.apollographql.com/docs/graphql-tools/schema-stitching.html#remote-schemas

json schema to graphql
https://github.com/apollographql/swapi-rest-graphql

swagger + graphql
https://github.com/yarax/swagger-to-graphql

graphql over other graphql
https://www.prisma.io/features/bindings/