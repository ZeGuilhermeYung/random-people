import { Request, Response } from "express";
import status from "http-status";
import { Ids, ObjectId } from "../protocols/person.protocols";
import peopleRepository from "../repositories/person.repositories";
import { sortPeople } from "../services/person.services";

async function getPerson (req: Request, res: Response) {
  const ids = await peopleRepository.getPeopleId() as ObjectId[];
  //console.log(ids);
  const id = sortPeople(ids);
  
  const person = await peopleRepository.getPerson(id);

  return res.status(status.CREATED).send(person);
};

export default getPerson;