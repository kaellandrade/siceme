import * as Yup from 'yup';
import User from '../app/models/User';

class UserController {
  async store(req, res) {
    // Validação do usuário utilizando um schema
    const schema = Yup.object().shape({
      uso_nome: Yup.string().required(),
      uso_cargo: Yup.string().required(),
      uso_tipo_user: Yup.string().required(),
      uso_email: Yup.string().email().required(),
      password: Yup.string().required().min(3),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'A validação falhou ' });
    }

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
    const { uso_email, oldPassword, uso_nome } = req.body;

    console.log(`userId: ${req.userId}`);

    // const user = await User.findByPk(req.userId);
    const usuario = await User.findOne({ where: { uso_id: req.userId } });

    /**
     * TODO: Verirficar pois era ela que estava dando error essa parte pois era o que estava causando error na aplicação.
     if (uso_email !== usuario.uso_email) {
       const emailExists = await User.findOne({ where: { uso_email } });

      if (emailExists) {
        return res
          .status(400)
          .json({ error: 'Usuário com esse email já existe' });
      }
    }
    */

    if (oldPassword && !(await usuario.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'A senha está errada' });
    }

    const {
      uso_id,
      uso_nome: novo_nome,
      uso_cargo,
      uso_tipo_user,
    } = await usuario.update({ uso_nome });

    return res.json({
      uso_id,
      uso_nome: novo_nome,
      uso_email,
      uso_cargo,
      uso_tipo_user,
    });
  }
}

export default new UserController();
