import User from '../app/models/User';

class UserController {
  async store(req, res) {
    const { uso_id, uso_nome, uso_email, uso_cargo, uso_tipo_user } =
      await User.create(req.body);

    return res.json({
      uso_id,
      uso_nome,
      uso_email,
      uso_cargo,
      uso_tipo_user,
    });
  }

  async update(req, res) {

    return res.json({ ok: true });
  }
}

export default new UserController();
