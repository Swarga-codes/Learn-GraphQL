const {ApolloServer}=require('@apollo/server')
const {startStandaloneServer}=require('@apollo/server/standalone')

const typeDefs=`
type Books{
    title:String!
    author:String!
}

type Query{
    getBooks:[Books]
}
`;
const books=[
    {title:'Harry Potter',author:'JK Rowling'},
    {title:'2 States',author:'Chetan Bhagat'}
]
async function StartServer(){
const server=new ApolloServer({typeDefs:
typeDefs
,
resolvers:{
Query:{
getBooks:()=>books
}
}
})
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);
}
StartServer();