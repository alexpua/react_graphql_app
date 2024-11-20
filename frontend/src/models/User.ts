import { User } from "../types/graphql";

export class UserModel {
  id: string;
  name: string;
  status: string;

  constructor(data: User) {
    this.id = data.id;
    this.name = data.name;
    this.status = data.status;
  }

  getDisplayName(): string {
    return `${this.name} (${this.status})`;
  }
}
