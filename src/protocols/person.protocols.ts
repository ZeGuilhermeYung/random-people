export type Person = {
  id: number;
  firstName: string;
  lastName: string;
}
export type ObjectId = Omit<Person, "firstName" | "lastName">

export type Ids = Array<ObjectId>;