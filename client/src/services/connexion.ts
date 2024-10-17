import { ApolloClient, InMemoryCache } from "@apollo/client";

const connexion = new ApolloClient({
  uri: import.meta.env.API_URL,
  cache: new InMemoryCache(),
});

export default connexion;
