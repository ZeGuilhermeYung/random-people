import { notFound } from "../errors/errors";
import { Ids, Person } from "../protocols/person.protocols";

export function sortPeople(objectIds: Ids) {
  if (objectIds.length === 0) {
    throw notFound("Não há pessoas cadastradas para serem sorteadas");
  }
  const sortIds = Math.floor(Math.random() * objectIds.length);

  const id = objectIds[sortIds].id;
  
  return id;
}