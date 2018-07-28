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

const GRAPH_COOL_URL = 'https://api.graph.cool/simple/v1/ciwfizwjy07jv01719xn8dhru?query=query%20jsMeetupQuery%20%7B%0A%20%20Event(id%3A%20%22ciwfk26dn25on0152p0co0ucw%22)%20%7B%0A%20%20%20%20name%0A%20%20%20%20sessions%20%7B%0A%20%20%20%20%20%20startAt%0A%20%20%20%20%20%20title%0A%20%20%20%20%20%20speaker%20%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=';

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
            <Image
              src="/images/betlab-logo_wh_cut.png"
              height={20}
              style={{margin:0}}
            />{' '}
            <span style={{fontSize: 21}}>JS Meetup</span>
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
                source={`type Session {
  id: ID
  createdAt: Date
  updatedAt: Date
  startAt: Date
  title: String
  description: String
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
  session(title: "GraphQL") {
    title
    description
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
  "session": {
    "title": "GraphQL"
    "description": "A new actor in the API world"
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
                GET /api/events/7
              </Code>
              <CodePane
                className='prism'
                lang='json'
                source={`[
  {
    "id": 18,
    "name": "BETLAB JS MEETUP",
    "date": "10 DEC"
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
                GET /api/events/7/sessions
              </Code>
              <br />
              <CodePane
                className='prism'
                lang='json'
                source={`[
  {
    "id": 41,
    "startAt": "11.30",
    "title": "Архітектура Front End проектів"
    "speakerId": 4,
  },
  ...
  {
    "id": 44,
    "startAt": "15.30",
    "title": "GraphQL"
    "speakerId": 7
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
              <Code style={{color: '#555', fontSize: 25}}>
                GET /api/speakers/4
              </Code>
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
    "name": "Богдан Лизанець"
  }
]`            }/>
            </Fill>
          </Layout>
        </Slide>
        <Slide bgImage="/images/graph-wash.png" transition={['fade']}>
          <Image src="/images/rest/screen4.png" width={800}/>
        </Slide>
        {/*GQL example*/}
        <Slide bgImage="/images/graph-wash.png" transition={['fade']}>
          <iframe
            src={`${GRAPH_COOL_URL}&hideVariables=true`}
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
            <ListItem>
              <Appear>
                <Text textFont="Roboto Mono" textColor={'secondary'} textSize={23}>
                  GET /api/event-with-all-data-i-need-for-this-screen/7
                </Text>
              </Appear>
            </ListItem>
            <ListItem>
              <Appear>
                <Text textFont="Roboto Mono" textColor={'secondary'} textSize={23}>
                  GET /api/event-with-all-data-i-possibly-ever-need/7
                </Text>
              </Appear>
            </ListItem>
            <ListItem>
              <Appear>
                <Text textFont="Roboto Mono" textColor={'secondary'} textSize={23}>
                  GET /api/events/7?field=name&field=sessions[*].title&...
                </Text>
              </Appear>
            </ListItem>
            <ListItem>
              <Appear>
                <Text textFont="Roboto Mono" textColor={'secondary'} textSize={23}>
                  GET /api/events/7?expand=sessions[*].speaker.name&...
                </Text>
              </Appear>
            </ListItem>
            <ListItem>
              <Appear>
                <Text textFont="Roboto Mono" textColor={'secondary'} textSize={23}>
                  GET /odata/events?
                  <br />
                  $filter=id+eq+7&$select=name...&expand=sessions...
                </Text>
              </Appear>
            </ListItem>
            <ListItem>
              <Appear>
                <Text textFont="Roboto Mono" textColor={'secondary'} textSize={23}>
                  GET /api/your-variant-here/
                </Text>
              </Appear>
            </ListItem>
          </List>
        </Slide>
        {/*Queries and GraphiQL*/}
        <Slide bgImage="/images/graph-wash.png">
          <Heading>
            <Link href={GRAPH_COOL_URL} target={'_blank'}  textColor="secondary">
              Queries with <span style={{color: '#E10098'}}>Graph<em>i</em>QL</span>
            </Link>
          </Heading>
        </Slide>
        {/*resolvers*/}
        <Slide bgImage="/images/graph-wash.png">
          <Link href={GRAPH_COOL_URL} target={'_blank'} textColor="secondary">
            http://<span style={{color: '#E10098'}}>graphql</span>.org/learn/execution/<span style={{color: '#aaa'}}>#root-fields-resolvers</span>
          </Link>
          <br />
          <br />
          <Layout>
            <Fill>
              <CodePane
                className='prism'
                lang='js'
                source={`Session: {
  // id: (session) => session.id,
  // title: (session) => session.title,
  // startAt: (session) => session.startAt,
  // description: (session) => session.description,
  speaker: (session, args, context) => {
    // could be async request with promise
    return context
      .db.loadSpeakerByID(session.speakerId);
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
                source={`const SessionType = new GraphQLObjectType({
  /* ... */
  fields: () => ({
    /* ... */
    speaker: {
      type: SpeakerType,
      args: {/* ... */}
      resolve: (session, args, context) => {
        return context
          .db.loadSpeakerByID(session.speakerId);
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
          <Link href={GRAPH_COOL_URL} target={'_blank'} textColor="secondary">
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
  Event(name: "BETLAB JS MEETUP") {
    ...eventFragment
  }
}

fragment eventFragment on Event {
  name
  date
}`
                }
              />
            </Fill>
            <Fill>
              <CodePane
                className='prism'
                lang='graphql'
                source={`{
  "meetupJSEvent": {
    "name": "BETLAB JS MEETUP",
    "date": "2016-12-10T09:30:00.000Z"
  }
}`
                }
              />
            </Fill>
          </Layout>
        </Slide>
        {/*directives*/}
        <Slide bgImage="/images/graph-wash.png">
          <Link href={GRAPH_COOL_URL} target={'_blank'} textColor="secondary">
            http://<span style={{color: '#E10098'}}>graphql</span>.org/learn/queries/<span style={{color: '#aaa'}}>#variable-definitions</span>
          </Link>
          <br />
          <Link href={GRAPH_COOL_URL} target={'_blank'} textColor="secondary">
            http://<span style={{color: '#E10098'}}>graphql</span>.org/learn/queries/<span style={{color: '#aaa'}}>#directives</span>
          </Link>
          <br />
          <br />
          <Layout>
            <Fill>
              <CodePane
                className='prism'
                lang='graphql'
                source={`query jsMeetupQuery($id: ID, $withAllSessions: Boolean) {
  Event(id: $id) {
    name
    sessions @include(if: $withAllSessions)
  }
}`               }
              />
            </Fill>
            <Fill>
              <CodePane
                className='prism'
                lang='graphql'
                source={`{
  "Event": {
    "name": "BETLAB JS MEETUP"
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
          <Link href={GRAPH_COOL_URL} target={'_blank'} textColor="secondary">
            http://<span style={{color: '#E10098'}}>graphql</span>.org/learn/queries/<span style={{color: '#aaa'}}>#aliases</span>
            <br />
            <br />
            <Layout>
              <Fill>
                <CodePane
                  className='prism'
                  lang='graphql'
                  source={`{
  meetupJSEvent: Event(name: "BETLAB JS MEETUP") {
    name
    date
  }
}`
                  }
                />
              </Fill>
              <Fill>
                <CodePane
                  className='prism'
                  lang='graphql'
                  source={`{
  "meetupJSEvent": {
    "name": "BETLAB JS MEETUP",
    "date": "2016-12-10T09:30:00.000Z"
  }
}`
                  }
                />
              </Fill>
            </Layout>
          </Link>

        </Slide>
        {/*Mutations*/}
        <Slide bgImage="/images/graph-wash.png">
          <Heading textColor='tertiary'>
            Wait! How to change data?
          </Heading>
          <br />
          <Appear>
            <div>
              <Link href={GRAPH_COOL_URL} target={'_blank'} textColor="secondary">
                http://<span style={{color: '#E10098'}}>graphql</span>.org/learn/queries/<span style={{color: '#aaa'}}>#mutations</span>
              </Link>
              <br />
              <br />
              <CodePane
                className='prism'
                lang='graphql'
                source={`mutation UpdateDescriptionForEvent($eventId: ID!, $description: String!) {
  updateEvent(id: $eventId, description: $description) {
    name
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
            source={`subscription meetupJSSubscription {
  updateEvent(id: "ciwfk26dn25on0152p0co0ucw") {
    ...eventFragment
  }
}`          }
          />
          <br />
          <Appear>
          <Link
            href='https://dev-blog.apollodata.com/graphql-subscriptions-in-apollo-client-9a2457f015fb'
            target={'_blank'}
            textColor="secondary">
            https://dev-blog.apollodata.com/<span style={{color: '#E10098'}}>graphql</span>-subscriptions-in-apollo-client-9a2457f015fb
          </Link>
          </Appear>
        </Slide>
        <Slide bgImage="/images/graph-wash.png">
          <Image src="/images/graphql/subscription-network.png" height={500}/>
        </Slide>
        <Slide bgImage="/images/graph-wash.png">
          <Heading>Batch operations</Heading>
          <Image src="/images/graphql/batch.png" width={900}/>
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
  name: String
}

type Speaker implements Entity {
  id: ID!
  name: String
  age: Int
  rating: Float
  isActive: Boolean
  sessions: [Session]!
  favoriteColor: RGB
}

type Root {
   speaker(id: ID!): Speaker
   speakers(limit: Int = 10): [Speaker]!
   sessions(bySpeaker: ID!, limit: Int = 5): [Session]!
}

schema {
  query: Root
  mutation: ...
  subscription: ...
}`
                }
              />
            </Fill>
            <Fill/>
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
Non-null Type                    => <type>!     e.g String!
List Type                        => [<type>]    e.g [String]
List of Non-null Types           => [<type>!]   e.g [String!]
Non-null List Type               => [<type>]!   e.g [String]!
Non-null List of Non-null Types  => [<type>!]!  e.g [String!]!
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
          `}/>
        </Slide>
        {/*Author*/}
        <Slide bgImage="/images/graph-wash.png" transition={["spin"]}>
          <Layout>
            <Fill>
              Author:
              <br />
              <Link href='mailto:bogdan.uz@gmail.com'
                    target='_blank'
                    textColor='tertiary'
                    bold>
                Bohdan Lyzanets
              </Link>
            </Fill>
            <Fill>
              <Link
                href='https://www.facebook.com/events/1055389181250886/permalink/1055391421250662/'
                target='_blank'
                textColor='tertiary'
                bold>
                <Image
                  src="/images/betlab-logo_wh_cut.png"
                  height={20}
                  style={{margin:0}}
                />
                <br />
                <span style={{fontSize: 21}}>
                  JS Meetup
                </span>
              </Link>
            </Fill>
          </Layout>
          <br />
          <Appear>
            <Link href='https://graphql-presentation.now.sh' textColor="white">
              https://<span style={{color: '#E10098'}}>graphql</span>-presentation.now.sh
            </Link>
          </Appear>
        </Slide>
      </Deck>
    </Fragment>
  );
}

export default Presentation;
