import { CodegenConfig } from "@graphql-codegen/cli";
import * as dotenv from "dotenv";

dotenv.config();
const { VITE_API_URL } = process.env;

const config: CodegenConfig = {
  /* @ts-expect-error:outside the scope */
  schema: VITE_API_URL,
  documents: ["src/schemas/*.ts"],
  generates: {
    "./src/types/graphql-types.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHooks: true,
      },
    },
  },
  overwrite: true,
};

export default config;
