import React, {Fragment} from 'react';
// Import Spectacle Core tags
import {
  Deck,
  Slide,
  Heading,
  Link,
  Text,
  CodePane,
  Code,
  List,
  ListItem,
  Layout,
  Fill,
  Image,
  Appear
} from "spectacle";

import './prism-graphql';

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
import "normalize.css";
import "./Presentation.css";

const theme = createTheme({
  primary: '#171E26',
  secondary: 'white',
  tertiary: 'white',
  quartenary: '#E10098'
}, {
  primary: "Rubik",
  secondary: "Roboto Mono"
});

// const GRAPH_COOL_URL = 'https://api.graph.cool/simple/v1/ciwfizwjy07jv01719xn8dhru?query=query%20jsMeetupQuery%20%7B%0A%20%20Event(id%3A%20%22ciwfk26dn25on0152p0co0ucw%22)%20%7B%0A%20%20%20%20name%0A%20%20%20%20sessions%20%7B%0A%20%20%20%20%20%20startAt%0A%20%20%20%20%20%20title%0A%20%20%20%20%20%20speaker%20%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=';
const FEED_GRAPHQL_URL = 'https://podcasts.wix.com/feed/graphql';

CodePane.defaultProps.theme = 'external';

function Presentation() {
  return (
    <Fragment>
      <Deck theme={theme} transition={["slide"]} transitionDuration={500} progress='bar'>
        {/*main*/}
        <Slide bgImage="/images/graph-wash.png"  transition={["spin"]}>
          <div style={{marginBottom: 100}}>
            <Link href="http://graphql.org/" target='_blank'>
              <Image
                src="/images/logo.svg"
                width={120}
                height={120}
              />
              <Heading textColor="#E10098" bold={false}>
                GraphQL
              </Heading>
            </Link>
          </div>
          <Layout>
            <Fill>
              <Text
                textSize={24}
                textAlign='left'
                textColor='tertiary'>
                Describe your data
              </Text>
              <br />
              <CodePane
                className='prism'
                lang='graphql'
                source={`type Episode {
  id: ID
  createdAt: Date
  updatedAt: Date
  startAt: Date
  title: String
  speaker: Speaker
}`
                }
              />
            </Fill>
            <Fill>
              <Text
                textSize={24}
                textAlign='left'
                textColor='tertiary'>
                Ask for what you want
              </Text>
              <br />
              <CodePane
                className='prism'
                lang='graphql'
                source={`{
  episode(title: "GraphQL") {
    title
    speaker {
      name
    }
  }
}`
                }
              />
            </Fill>
            <Fill>
              <Text
                textSize={24}
                textAlign='left'
                textColor='tertiary'>
                Get predictable results
              </Text>
              <br />
              <CodePane
                className='prism'
                lang='json'
                source={`{
  "episode": {
    "title": "GraphQL"
    "speaker": {
      "name": "Bohdan Lyzanets"
    }
  }
}`
                }
              />
            </Fill>
          </Layout>
        </Slide>
        {/*is QL*/}
        <Slide bgImage="/images/graph-wash.png">
          So <span style={{color: '#E10098'}}>GraphQL</span> is a “query language” just like URLs are the “query language” of REST.
        </Slide>
        {/*fry*/}
        <Slide bgImage="/images/fry.png" align="flex-end flex-end">
          <Heading>I AM SKEPTICAL</Heading>
        </Slide>
        {/*REST example*/}
        <Slide bgImage="/images/graph-wash.png">
          <Image src="/images/rest/screen0.png" width={800}/>
        </Slide>
        <Slide bgImage="/images/graph-wash.png" transition={['fade']}>
          <Layout>
            <Fill>
              <Image src="/images/rest/screen1.png" width={500}/>
            </Fill>
            <Fill style={{textAlign: 'left'}}>
              <Code style={{color: 'white', fontSize: 25}}>
                GET /api/podcasts/7
              </Code>
              <CodePane
                className='prism'
                lang='json'
                source={`[
  {
    "id": 7,
    "image": "http://example.com/podcast.jpg",
    "title": "Space Explorer Podcast",
    "author": "Floyd Warner",
    "description": "I was really into cars when..."
  }
]`            }/>
            </Fill>
          </Layout>
        </Slide>
        <Slide bgImage="/images/graph-wash.png" transition={['fade']}>
          <Layout>
            <Fill>
              <Image src="/images/rest/screen2.png" width={500}/>
            </Fill>
            <Fill style={{textAlign: 'left'}}>
              <Code style={{color: 'white', fontSize: 25}}>
                GET /api/podcasts/7/episodes
              </Code>
              <br />
              <CodePane
                className='prism'
                lang='json'
                source={`[
  {
    "id": 1,
    "image": "http://example.com/episode-1.jpg",
    "title": "Sungrazing Comets"
    "date": "Oct 08, 2017",
    "duration": "24 min",
    "description": "The upcoming solar eclipse..."
  },
  ...
  {
    "id": 3,
    "image": "http://example.com/episode-3.jpg",
    "title": "Space Launch System"
    "date": "Oct 08, 2017",
    "duration": "34 min",
    "description": "I was really into cars when..."
  }
]`            }/>
            </Fill>
          </Layout>
        </Slide>
        <Slide bgImage="/images/graph-wash.png" transition={['fade']}>
          <Layout>
            <Fill>
              <Image src="/images/rest/screen3.png" width={500}/>
            </Fill>
            <Fill style={{textAlign: 'left'}}>
              <br />
              <Code style={{color: '#555', fontSize: 25}}>
                GET /api/speakers/5
              </Code>
              <br />
              <Code style={{color: '#555', fontSize: 25}} >
                GET /api/speakers/6
              </Code>
              <br />
              <Code style={{color: 'white', fontSize: 25}}>
                GET /api/speakers/7
              </Code>
              <br />
              <CodePane
                className='prism'
                lang='json'
                source={`[
  {
    "id": 7,
    "name": "Floyd Warner"
  }
]`            }/>
            </Fill>
          </Layout>
        </Slide>
        {/*GQL example*/}
        <Slide bgImage="/images/graph-wash.png" transition={['fade']}>
          <Link
            href={FEED_GRAPHQL_URL}
            target={'_blank'}
            textColor="secondary">
            {FEED_GRAPHQL_URL}
          </Link>
          <iframe
            src={FEED_GRAPHQL_URL + '?query=' + encodeURIComponent(`{
  podcast(url: "https://viavhs.podiant.co/rss/") {
    title
    author
    # image
    # description
    episodes {
      # id
      # slug
      # image
      title
      # description
    }
  }
}
            `)}
            style={{width: '900px', height: '60vh', boxShadow: '0px 0px 50px -2px rgba(0,0,0,0.3)'}}
          />
        </Slide>
        {/*fry*/}
        <Slide bgImage="/images/fry.png" align="flex-end flex-end">
          <Heading>STILL SKEPTICAL</Heading>
        </Slide>
        {/*can handle it*/}
        <Slide bgImage="/images/graph-wash.png" notes={'Of course REST can handle it'}>
          <Heading>
            We can handle it without <span style={{color: '#E10098'}}>GraphQL</span>!
          </Heading>
          <List>
            <Appear>
              <ListItem>
                <span style={{fontFamily: 'Roboto Mono', fontSize: 23}}>
                  GET /api/podcast-with-all-data-i-need-for-this-screen/7
                </span>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <span style={{fontFamily: 'Roboto Mono', fontSize: 23}}>
                  GET /api/podcast-with-all-data-i-possibly-ever-need/7
                </span>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <span style={{fontFamily: 'Roboto Mono', fontSize: 23}}>
                  GET /api/podcasts/7?field=name&field=episodes[*].title&...
                </span>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <span style={{fontFamily: 'Roboto Mono', fontSize: 23}}>
                  GET /api/podcasts/7?expand=episodes[*].speaker.name&...
                </span>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <span style={{fontFamily: 'Roboto Mono', fontSize: 23}}>
                  GET /odata/podcasts?$filter=id+eq+7&$select=name...&expand=...
                </span>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <span style={{fontFamily: 'Roboto Mono', fontSize: 23}}>
                  GET /api/your-variant-here/
                </span>
              </ListItem>
            </Appear>
          </List>
        </Slide>
        {/*Queries and GraphiQL*/}
        <Slide bgImage="/images/graph-wash.png">
          <Heading>
            <Link href={FEED_GRAPHQL_URL} target={'_blank'}  textColor="secondary">
              Queries with <span style={{color: '#E10098'}}>Graph<em>i</em>QL</span>
            </Link>
          </Heading>
        </Slide>
        {/*resolvers*/}
        <Slide bgImage="/images/graph-wash.png">
          <Link href="http://graphql.org/learn/execution/#root-fields-resolvers" target={'_blank'} textColor="secondary">
            http://<span style={{color: '#E10098'}}>graphql</span>.org/learn/execution/<span style={{color: '#aaa'}}>#root-fields-resolvers</span>
          </Link>
          <br />
          <br />
          <Layout>
            <Fill>
              <CodePane
                className='prism'
                lang='js'
                source={`Episode: {
  // id: (session) => episode.id,
  // title: (episode) => episode.title,
  // image: (episode) => episode.image,
  // description: (episode) => episode.description,
  speaker: (episode, args, context, info) => {
    // could be async request with promise
    return context
      .db.loadSpeakerByID(episode.speakerId);
  }
}`
                }
              />
            </Fill>
            <Appear>
            <Fill>
              <CodePane
                className='prism'
                lang='js'
                source={`const EpisodeType = new GraphQLObjectType({
  /* ... */
  fields: () => ({
    /* ... */
    speaker: {
      type: SpeakerType,
      args: {/* ... */}
      resolve: (episode, args, context, info) => {
        return context
          .db.loadSpeakerByID(episode.speakerId);
      }
    },
  }),
});`
                }
              />
            </Fill>
            </Appear>
          </Layout>
          <br />
          <Appear>
            <div>
              <Link href='https://github.com/facebook/dataloader' target={'_blank'} textColor="secondary">
                https://github.com/facebook/dataloader
              </Link>
              <CodePane
                className='prism'
                lang='js'
                source={`
                  const speakerLoader = new DataLoader(keys => loadSpeakersByKeys(keys));
                  // speakerLoader.load(key);
                  // speakerLoader.loadMany(keys);
`               }
              />
            </div>
          </Appear>
        </Slide>
        {/*Still*/}
        <Slide bgImage="/images/fry.png" align="flex-end flex-end">
          <Heading>STILL</Heading>
        </Slide>
        {/*fragments*/}
        <Slide bgImage="/images/graph-wash.png">
          <Link href="http://graphql.org/learn/queries/#fragments" target={'_blank'} textColor="secondary">
            http://<span style={{color: '#E10098'}}>graphql</span>.org/learn/queries/<span style={{color: '#aaa'}}>#fragments</span>
          </Link>
          <br />
          <br />
          <Layout>
            <Fill>
              <CodePane
                className='prism'
                lang='graphql'
                source={`{
  podcast(url: "http://example.com/podcast/rss") {
    ...podcastFragment
  }
}

fragment podcastFragment on Podcast {
  title
  author
}`
                }
              />
            </Fill>
            <Fill>
              <CodePane
                className='prism'
                lang='graphql'
                source={`{
  "podcast": {
    "title": "Space Explorer Podcast",
    "author": "Floyd Warner"
  }
}`
                }
              />
            </Fill>
          </Layout>
        </Slide>
        {/*directives*/}
        <Slide bgImage="/images/graph-wash.png">
          <Link href="http://graphql.org/learn/queries/#variable-definitions" target={'_blank'} textColor="secondary">
            http://<span style={{color: '#E10098'}}>graphql</span>.org/learn/queries/<span style={{color: '#aaa'}}>#variable-definitions</span>
          </Link>
          <br />
          <Link href="http://graphql.org/learn/queries/#directives" target={'_blank'} textColor="secondary">
            http://<span style={{color: '#E10098'}}>graphql</span>.org/learn/queries/<span style={{color: '#aaa'}}>#directives</span>
          </Link>
          <br />
          <br />
          <Layout>
            <Fill>
              <CodePane
                className='prism'
                lang='graphql'
                source={`{
  "url": "http://example.com/podcast/rss",
  "id": "42",
  "withPodcast": true,
}`
                }
              />
              <CodePane
                className='prism'
                lang='graphql'
                source={`query Episode($url: String!, $id: String!, $withPodcast: Boolean) {
  episode(url: $url, id: $id) {
    title
    podcast @include(if: $withPodcast) {
      title
    }
  }
}`               }
              />
            </Fill>
            <Fill>
              <CodePane
                className='prism'
                lang='graphql'
                source={`{
  "episode": {
    "title": "Sungrazing Comets",
    "podcast": {
      "title": "Space Explorer Podcast"
    }
  }
}`
                }
              />
            </Fill>
          </Layout>
        </Slide>
        {/*directives + inline fragment*/}
        <Slide bgImage="/images/graph-wash.png">
          <Link href="http://graphql.org/learn/queries/#variable-definitions" target={'_blank'} textColor="secondary">
            http://<span style={{color: '#E10098'}}>graphql</span>.org/learn/queries/<span style={{color: '#aaa'}}>#variable-definitions</span>
          </Link>
          <br />
          <Link href="http://graphql.org/learn/queries/#directives" target={'_blank'} textColor="secondary">
            http://<span style={{color: '#E10098'}}>graphql</span>.org/learn/queries/<span style={{color: '#aaa'}}>#directives</span>
          </Link>
          <br />
          <Link href="https://graphql.org/learn/queries/#inline-fragments" target={'_blank'} textColor="secondary">
            http://<span style={{color: '#E10098'}}>graphql</span>.org/learn/queries/<span style={{color: '#aaa'}}>#inline-fragments</span>
          </Link>
          <br />
          <br />
          <Layout>
            <Fill>
              <CodePane
                className='prism'
                lang='graphql'
                source={`{
  "url": "http://example.com/podcast/rss",
  "id": "42",
  "withExpandedInfo": false,
}`
                }
              />
              <CodePane
                className='prism'
                lang='graphql'
                source={`query Episode($url: String!, $id: String!, $withExpandedInfo: Boolean) {
  episode(url: $url, id: $id) {
    title
    ... @include(if: $expandedInfo) {
      podcast {
        title
      }
      enclosure {
        url
        type
      }
      tags
    }
  }
}`               }
              />
            </Fill>
            <Fill>
              <CodePane
                className='prism'
                lang='graphql'
                source={`{
  "episode": {
    "title": "Sungrazing Comets",
  }
}`
                }
              />
            </Fill>
          </Layout>
        </Slide>
        {/*silent fry*/}
        <Slide bgImage="/images/fry.png" align="flex-end flex-end">
          {/*silent fry*/}
        </Slide>
        {/*aliases*/}
        <Slide bgImage="/images/graph-wash.png">
          <Link href="http://graphql.org/learn/queries/#aliases" target={'_blank'} textColor="secondary">
            http://<span style={{color: '#E10098'}}>graphql</span>.org/learn/queries/<span style={{color: '#aaa'}}>#aliases</span>
          </Link>
            <br />
            <br />
            <Layout>
              <Fill>
                <CodePane
                  className='prism'
                  lang='graphql'
                  source={`podcast(url: "http://example.com/podcast/rss") {
  title
  image: smallImage
  # image(size: Small)
}`
                  }
                />
              </Fill>
              <Fill>
                <CodePane
                  className='prism'
                  lang='graphql'
                  source={`{
  "podcast": {
    "title": "Space Explorer Podcast",
    "image": "http://example.com/podcast/image-sm.jpg",
  }
}`
                  }
                />
              </Fill>
            </Layout>
        </Slide>
        {/*Mutations*/}
        <Slide bgImage="/images/graph-wash.png">
          <Heading textColor='tertiary'>
            Wait! How to change data?
          </Heading>
          <br />
          <Appear>
            <div>
              <Link href="http://graphql.org/learn/queries/#mutations" target={'_blank'} textColor="secondary">
                http://<span style={{color: '#E10098'}}>graphql</span>.org/learn/queries/<span style={{color: '#aaa'}}>#mutations</span>
              </Link>
              <br />
              <br />
              <CodePane
                className='prism'
                lang='graphql'
                source={`mutation UpdateDescriptionForPodcast($podcastId: ID!, $description: String!) {
  updatePodcast(id: $podcastId, description: $description) {
    id
    description
  }
}`               }
              />
            </div>
          </Appear>
        </Slide>
        <Slide bgImage="/images/graph-wash.png">
          <Heading>
            What next?
          </Heading>
          <Link
            href='https://dev-blog.apollodata.com/new-features-in-graphql-batch-defer-stream-live-and-subscribe-7585d0c28b07'
            target={'_blank'}
            textColor="secondary">
            New features in GraphQL
          </Link>
        </Slide>
        <Slide bgImage="/images/graph-wash.png">
          <Heading>Subscriptions</Heading>
          <br />
          <CodePane
            className='prism'
            lang='graphql'
            source={`subscription podcastCommentsSubscription {
  commentAdded(id: 7) {
    ...commentFragment
  }
}`          }
          />
          <br />
          <Appear>
          <Link
            href='https://github.com/facebook/graphql/blob/master/rfcs/Subscriptions.md'
            target={'_blank'}
            textColor="secondary">
            https://github.com/facebook/<span style={{color: '#E10098'}}>graphql</span>/blob/master/rfcs/Subscriptions.md
          </Link>
          </Appear>
        </Slide>
        <Slide bgImage="/images/graph-wash.png">
          <Image src="/images/graphql/subscription-network.png" height={500}/>
        </Slide>
        <Slide bgImage="/images/graph-wash.png">
          <Heading>Batch operations</Heading>
          <Image src="/images/graphql/batch.png" width={900}/>
          <Appear>
            <div>
            <Link
              href='https://blog.apollographql.com/query-batching-in-apollo-63acfd859862'
              target={'_blank'}
              textColor="secondary">
              https://blog.apollo<span style={{color: '#E10098'}}>graphql</span>.com/query-batching-in-apollo-63acfd859862
            </Link>
            <br />
            <Link
              href='https://www.apollographql.com/docs/link/links/batch-http.html'
              target={'_blank'}
              textColor="secondary">
              https://www.apollo<span style={{color: '#E10098'}}>graphql</span>.com/docs/link/links/batch-http.html
            </Link>
            </div>
          </Appear>
        </Slide>
        <Slide bgImage="/images/graph-wash.png">
          <Image src="/images/graphql/batching-network.png" height={500}/>
        </Slide>
        <Slide bgImage="/images/graph-wash.png">
          <Heading>Defer</Heading>
          <Image src="/images/graphql/defer.png" width={900}/>
        </Slide>
        <Slide bgImage="/images/graph-wash.png">
          <Heading>Stream</Heading>
          <Image src="/images/graphql/streem-and-defer.png" width={900}/>
        </Slide>
        <Slide bgImage="/images/graph-wash.png">
          <Heading>Live</Heading>
          <Image src="/images/graphql/live.png" width={900}/>
        </Slide>
        {/*Types*/}
        <Slide bgImage="/images/graph-wash.png">
          <Heading textColor='tertiary' textSize={50}>
            Schemas and Types
          </Heading>
          <Appear>
            <Link
              href='https://graphql.org/learn/schema/'
              target={'_blank'}
              textColor="secondary">
              http://<span style={{color: '#E10098'}}>graphql</span>.org/learn/schema/
            </Link>
          </Appear>
          <br />
          <Layout>
            <Fill>
              <CodePane
                className='prism'
                lang='graphql'
                source={`enum RGB {
  RED
  GREEN
  BLUE
}

interface Entity {
  id: ID!
  title: String
}

type Episode implements Entity {
  id: ID!
  title: String
  views: Int
  rating: Float
  isActive: Boolean
  color: RGB
  podcast: Podcast
}

type Root {
   podcast(url: String!): Podcast
   episode(url: String!, id: ID!): Episode
   episodes(url: String!, limit: Int = 10): [Episode]!
}

schema {
  query: Root
  mutation: ...
  subscription: ...
}`
                }
              />
            </Fill>
            <Fill>
              <CodePane
                className='prism'
                lang='markdown'
                source={`
Schema
=======
GraphQL Schema => schema

Built-in scalar types
=====================
GraphQL Int     => Int
GraphQL Float   => Float
GraphQL String  => String
GraphQL Boolean => Boolean
GraphQL ID      => ID

Type Definitions
================
Scalar Type        => scalar
Object Type        => type
Interface Type     => interface
Union Type         => union
Enum Type          => enum
Input Object Type  => input

Type Markers
============
Non-null Type             => <type>!    e.g String!
List Type                 => [<type>]   e.g [String]
List of Non-null Types    => [<type>!]  e.g [String!]
Non-null List Type        => [<type>]!  e.g [String]!
Non-null List of Non-null => [<type>!]! e.g [String!]!
`}
              />
            </Fill>
          </Layout>
        </Slide>
        {/*Cons*/}
        <Slide bgImage="/images/graph-wash.png">
          <Heading>
            GraphQL cons
          </Heading>
          <List>
            <Appear>
              <ListItem>
                Separate evolution of the client and server?
                {/*https://twitter.com/leeb/status/780674500442468352*/}
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Multiple content-types (XML, JSON, whatever...)?
                {/*XML to XML, JSON to JSON, etc.*/}
              </ListItem>
            </Appear>
            <Appear>
            <ListItem>
              HTTP Status Codes?
            </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Young community?
              </ListItem>
            </Appear>
          </List>
        </Slide>
        {/*Links*/}
        <Slide bgImage="/images/graph-wash.png">
          <Heading>
            Links
          </Heading>
          <CodePane
            className='prism'
            lang='markdown'
            source={`
[Official site](http://graphql.org)
[Specification](https://facebook.github.io/graphql)
[Lee Byron - GraphQL, React, Immutable.js, ...](https://twitter.com/leeb)
[Sashko Stubailo - Apollo GraphQL, MeteorJS](https://twitter.com/stubailo)
[Haters gonna hate](https://twitter.com/leeb/status/780674500442468352)
[The next generation of API design](https://dev-blog.apollodata.com/graphql-the-next-generation-of-api-design-f24b1689756a)
[Apollo GraphQL blog](https://dev-blog.apollodata.com/)
[Awesome list of GraphQL & Relay](https://github.com/chentsulin/awesome-graphql)
[The GitHub GraphQL API](http://githubengineering.com/the-github-graphql-api)
[GraphQL backend-as-a-service](https://www.graph.cool)
[GraphQL server with any database](https://www.prisma.io/)
          `}/>
        </Slide>
        {/*Author*/}
        <Slide bgImage="/images/graph-wash.png" transition={["spin"]}>
          Author:
          <br />
          <Link href='mailto:bogdan.uz@gmail.com'
                target='_blank'
                textColor='tertiary'
                bold>
            Bohdan Lyzanets
          </Link>
          <br />
          <br />
          <Appear>
            <Link href='https://bodia-uz.github.io/graphql-presentation' textColor="white">
              https://bodia-uz.github.io/<span style={{color: '#E10098'}}>graphql</span>-presentation
            </Link>
          </Appear>
        </Slide>
      </Deck>
    </Fragment>
  );
}

export default Presentation;
