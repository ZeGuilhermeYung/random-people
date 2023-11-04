import { Ids, Person } from "../protocols/person.protocols";

export function sortPeople(objectIds: Ids) {
  const sortIds = Math.floor(Math.random() * objectIds.length);

  const id = objectIds[sortIds].id;
  
  return id;
}