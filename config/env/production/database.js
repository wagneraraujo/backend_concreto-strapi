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
      host: env("DATABASE_HOST", process.env.DATABASE_HOST),
      port: env.int("DATABASE_PORT", process.env.DATABASE_PORT),
      database: env("DATABASE_NAME", process.env.DATABASE_NAME),
      user: env("DATABASE_USERNAME", process.env.DATABASE_USERNAME),
      password: env("DATABASE_PASSWORD", process.env.DATABASE_PASSWORD),
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
