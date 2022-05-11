import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import User from '../app/models/Usuario';
import authConfig from '../config/auth';

/**
 * Criação do controller parao login;
 * e autenticação dos usuários
 * @author Manoel
 * @version 1.1.0 Realizando validação
 */
class SessionController {
  /**
   * Método responsável pelo pelo Login
   * @param {*} req requisição
   * @param {*} res resposta
   * @returns JSON
   *
   * @since 1.0.0 Realizando validação.
   */
  async store(req, res) {
    const schema = Yup.object().shape({
      uso_email: Yup.string().email().required(),
      uso_senha: Yup.string().required(),
    });
    const dadosValidos = await schema.isValid(req.body);
    if (!dadosValidos) {
      return res.status(400).json({
        error: 'Requisição iniválida. Passe os campos uso_email:, e uso_senha:',
      });
    }
    const { uso_email, uso_senha } = req.body;

    const user = await User.findOne({ where: { uso_email } });

    if (!user) {
      return res.status(401).json({ error: 'Usuário não encontrado ' });
    }

    if (!(await user.checkPassword(uso_senha))) {
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
