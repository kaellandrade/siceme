import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import User from '../app/models/Usuario';
import authConfig from '../config/auth';

/**
 * Criação do controller para a session
 * e autenticação dos usuários
 * @author Manoel
 * @version 1.0.0 Realizando conexão
 */
class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      uso_email: Yup.string().email().required(),
      password: Yup.string().required(),
    });

    const { uso_email, password } = req.body;

    const user = await User.findOne({ where: { uso_email } });

    if (!user) {
      return res.status(401).json({ error: 'Usuário não encontrado ' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Senha errada' });
    }

    const { id, uso_nome } = user;

    return res.json({
      user: {
        id,
        uso_nome,
        uso_email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
