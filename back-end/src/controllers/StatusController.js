import Status from '../app/models/Status';

class StatusController {
  async index(req, res) {
    const { id, sts_status_nome } = await Status.findByPk(req.params.id);
    return res.status(200).json({ id, sts_status_nome });
  }
}

export default new StatusController();
