import User from '../app/models/User';

class UserController {
  async store(req, res) {
    const { id, uso_nome, uso_email, uso_cargo, uso_tipo_user } =
      await User.create(req.body);

    return res.json({
      id,
      uso_nome,
      uso_email,
      uso_cargo,
      uso_tipo_user,
    });
  }
}

export default new UserController();