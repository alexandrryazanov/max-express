export class UsersService {
  constructor() {}

  async getAll() {
    return "users";
  }

  async getOne(id: number) {
    return "user " + id;
  }
}
