import db from "../database/db";
import { Ids, ObjectId } from "../protocols/person.protocols";

async function getPeopleId(): Promise<ObjectId[]> {
  const query = `SELECT id FROM people;`;
  const result = await db.query<ObjectId>(query);
  //console.log(result.rows);
  return result.rows;
}

async function getPerson(id: number) {
  //console.log(id)
  const query = `SELECT * FROM people WHERE id = $1;`;
  const result = await db.query<ObjectId>(query, [id]);
  //console.log(result.rows[0]);
  return result.rows[0];
}

const peopleRepository = {
  getPeopleId,
  getPerson
}

export default peopleRepository;