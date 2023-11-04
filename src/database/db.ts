import pg from "pg";

const { Pool } = pg;

const db = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "11062020",
  database: "random-people"
});

export default db;