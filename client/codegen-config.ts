import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  /* @ts-expect-error:outside the scope */
  schema: "http://localhost:4000",
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
