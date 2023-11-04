import { Ids } from "protocols/person.protocols";

export function sortPeople(ids: Ids) {
  const min = ids[0];
  const max = ids[ids.length];
  const sortIds = Math.floor(Math.random() * (max - min + 1)) + min;
  
  return ids[sortIds];
}