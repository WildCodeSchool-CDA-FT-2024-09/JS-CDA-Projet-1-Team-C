import { ApolloServer } from "@apollo/server"; // preserve-line
import { startStandaloneServer } from "@apollo/server/standalone";
import { dataSource } from "./db/data-source";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import * as dotenv from "dotenv";

import TeamResolver from "./team/team.resolver";
import JuryResolver from "./jury/jury.resolver";

dotenv.config();
const { API_PORT } = process.env;

(async () => {
  await dataSource.initialize();
  const schema = await buildSchema({
    resolvers: [TeamResolver, JuryResolver],
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: API_PORT as undefined | number },
  });

  console.info(`🚀  Server ready at: ${url}`);
})();
