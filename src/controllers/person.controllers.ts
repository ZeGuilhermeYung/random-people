import { Request, Response } from "express";
import status from "http-status";
import { Ids } from "protocols/person.protocols";
import peopleRepository from "repositories/person.repositories";
import { sortPeople } from "services/person.services";

async function getPerson (req: Request, res: Response) {
  const ids = await peopleRepository.getPeopleId();
  
  const id = sortPeople(ids);

  await peopleRepository.getPerson(id);

  return res.sendStatus(status.CREATED);
};

export default getPerson;