// const { parse } = require("pg-connection-string");

// module.exports = ({ env }) => {
//   const { host, port, database, user, password } = parse(env("DATABASE_URL"));

//   return {
//     defaultConnection: "default",
//     connections: {
//       default: {
//         connector: "default",
//         settings: {
//           client: "postgres",
//           host,
//           port,
//           database,
//           username: user,
//           password,
//         },
//       },
//     },
//   };
// };

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "oregon-postgres.render.com"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "strapi_h6xe"),
      user: env("DATABASE_USERNAME", "strapi_h6xe_user"),
      password: env("DATABASE_PASSWORD", "kZhHvb1DCqJMM2TskhUNdJ1JSLU99qVY"),
      schema: env("DATABASE_SCHEMA", "public"), // Not required
      ssl: {
        ssl: env("DATABASE_SSL", true),
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
        contentSecurityPolicy: false,
      },
    },
    debug: false,
  },
});
