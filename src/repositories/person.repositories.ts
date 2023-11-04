import db from "database/db";
import { Ids, Person } from "protocols/person.protocols";

async function getPeopleId() {
  const query = `SELECT id FROM people;`;
  const result = await db.query<Ids>(query);
  console.log(result.rows);
  return result.rows;
}

async function getPerson(id: number) {
  const query = `SELECT * FROM people WHERE id = $1;`;
  const result = await db.query<Person>(query, [id]);
  console.log(result.rows[0]);
  return result.rows[0];
}

const peopleRepository = {
  getPeopleId,
  getPerson
}

export default peopleRepository;