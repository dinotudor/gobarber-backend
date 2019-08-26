class AvailableController {
  async index(req, res) {
    return res.json('Hola!');
  }
}

export default new AvailableController();
