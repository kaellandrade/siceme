import Status from '../app/models/Status';

class StatusController {
  async index(req, res) {
    const status = await Status.findAll({
      attributes:[
        'id', 
        'sts_status_nome'
      ]
    });
    return res.status(200).json(status);
  }
}

export default new StatusController();
