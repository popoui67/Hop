



import { config, connector, graph } from '@grafbase/sdk'

const g = graph.Standalone()

const mongo = connector.MongoDB('MongoDB', {
  url: g.env('MONGODB_API_URL'),
  apiKey: g.env('MONGODB_API_KEY'),
  dataSource: g.env('MONGODB_DATASOURCE'),
  database: g.env('MONGODB_DATABASE'),
})

g.datasource(mongo)



mongo
  .model('User', {
    name: g.string(),
    email: g.string().optional(),
    
  })
  .collection('users')
 const inp= g.input("CreateUserInput" , {
name :g.string(),
email :g.string()
})
g.mutation('CreateUsers', {
  args: { input: g.inputRef(inp) },
  returns: g.string(),
  resolver: 'user',
})
g.query ( 'GetUsers', {
  args: { },
  returns: g.string().list(),
  resolver: 'user',
})
export default config({
  graph: g,

})

/*
import { g, config, auth } from '@grafbase/sdk';

// @ts-ignore
const User = g.model('User', {
  name: g.string().length({ min: 2, max: 100 }),
  email: g.string().unique(),
})

  cache: {
    rules: [
      {
        maxAge: 120,
        staleWhileRevalidate: 60,
        types: ['User'],
        mutationInvalidation: 'entity',
      },
      {
        maxAge: 10,
        staleWhileRevalidate: 10,
        types: [{ name: 'Query', fields: ['userCollection', 'user'] }],
      },
    ],
  },
// @ts-ignore


export default config({
  schema: g,
 
})
*/