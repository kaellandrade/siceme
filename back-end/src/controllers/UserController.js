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
    const { uso_email, oldPassword } = req.body;

    // TODO: Apagar depois
    console.log(`userId: ${req.userId}`);

    //const user = await User.findByPk(req.userId);
    const user = await User.findOne({ where: { uso_id: req.userId } });

    // Verifica se o email a ser atualizado já existe
    // eslint-disable-next-line eqeqeq
    if (uso_email != user.uso_email) {
      const emailExists = await User.findOne({ where: { uso_email } });

      if (emailExists) {
        return res
          .status(400)
          .json({ error: 'Usuário com esse email já existe' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'A senha está errada' });
    }

    // eslint-disable-next-line prettier/prettier
    const { uso_id, uso_nome, uso_cargo, uso_tipo_user } = await user.update({uso_nome:'Teste'});
    await user.save();

    return res.json({
      uso_id,
      uso_nome,
      uso_email,
      uso_cargo,
      uso_tipo_user,
    });
  }
}

export default new UserController();
