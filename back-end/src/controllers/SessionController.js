import jwt from 'jsonwebtoken';
import User from '../app/models/User';

/**
 * Criação do controller para a session
 * e autenticação dos usuários
 * @author Manoel e Micael
 * @version 1.0.0 Realizando conexão
 */
class SessionController {
  async store(req, res) {
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
      token: jwt.sign({ id }, '40ef4ed18074f8f100dbf546955a2e85', {
        expiresIn: '30d',
      }),
    });
  }
}

export default new SessionController();
