export class OrdersService {
  async getAll() {
    return "orders";
  }

  async getOne(id: number) {
    return "order " + id;
  }
}
