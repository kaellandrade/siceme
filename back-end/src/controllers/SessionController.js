import jwt from 'jsonwebtoken';
import User from '../app/models/User';
import authConfig from '../config/auth';

/**
 * Criação do controller para a session
 * e autenticação dos usuários
 * @author Manoel
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

    const { uso_id, uso_nome } = user;

    return res.json({
      user: {
        uso_id,
        uso_nome,
        uso_email,
      },
      token: jwt.sign({ uso_id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
