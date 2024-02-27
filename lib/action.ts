import { GraphQLClient , gql } from "graphql-request";
const isProduction = process.env.NODE_ENV === 'production';
const apiUrl =   'http://127.0.0.1:4000/graphql';
const apiKey =  process.env.NEXT_PUBLIC_GRAFBASE_API_KEY || '' ;


const serverUrl = isProduction ? process.env.NEXT_PUBLIC_SERVER_URL : 'http://localhost:3000';
const client = new GraphQLClient(apiUrl)
console.log(client)
const makeGraphQLRequest = async (query: string, variables = {}) => {
    try {
      return await client.request(query, variables);
    } catch (err) {
      throw err;
    }
  };
  interface IUSER {
    name :string 
    email:string
  }
  export const CreateUsers = async(user : IUSER) =>{
try{
    client.setHeader("x-api-key", apiKey);
    const { name , email }  = JSON.stringify(user)
    const variables =user as IUSER
   const createUserMutation = `
mutation {
  mongoDB {
    userCreate(input: 
      {name: "Jamie Barton",
    email: "jamie@grafbase.com"}) {
      insertedId
    }
  }
}
`;

    return await makeGraphQLRequest( createUserMutation, variables)
}
catch(err:any){
    console.log(err)
}

  }
  export  const GetUsers =async( ) =>{
  
    
    const createUserQuery =
    `query GetUsers {
      mongoDB {
        userCollection(first: 100) {
          edges {
            node {
              name
              email
            }
          }
        }
      }
    }
    `
    
    try{
      return await makeGraphQLRequest( createUserQuery, {})

    }
    catch(err :any) {
      console.log(err)
    }
  }