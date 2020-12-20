import { ApolloClient, InMemoryCache } from "@apollo/client";
import { RestLink } from "apollo-link-rest";

// setup your `RestLink` with your endpoint
const restLink = new RestLink({ uri: "http://localhost:3001/" });

// setup your client
const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});

export default client;
