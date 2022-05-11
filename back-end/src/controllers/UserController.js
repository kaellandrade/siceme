import * as Yup from 'yup';
import User from '../app/models/Usuario';

const TAMANHO_MINIMO_SENHA = 2;

/**
 * Controller do Usuário
 * @author Manoel e Micael
 * @version 1.0.1 Adição do GET usuário
 */
class UserController {
  /**
   * @author Micael e Manoel
   * @param {*} req
   * @param {*} res
   * @returns void
   *
   * @since 1.0.0 Versão inicial
   * @since 1.0.0 Tranto erros ao pesistir no banco.
   */

  async index(req, res) {
    const todosUsuarios = await User.findAll();
    return res.status(200).json(todosUsuarios);
  }

  async store(req, res) {
    // Validação do usuário utilizando um schema
    const schema = Yup.object().shape({
      uso_nome: Yup.string().required(),
      uso_cargo: Yup.string().required(),
      uso_tipo_user: Yup.string().required(),
      uso_email: Yup.string().email().required(),
      uso_senha: Yup.string().required().min(TAMANHO_MINIMO_SENHA),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'A validação falhou ' });
    }

    try {
      const { id, uso_nome, uso_email, uso_cargo, uso_tipo_user } =
        await User.create(req.body);

      return res.json({
        id,
        uso_nome,
        uso_email,
        uso_cargo,
        uso_tipo_user,
      });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao salvar!' });
    }
  }

  /**
   * TODO: Depois devemos poder mudar o tipo do usuário.
   * Validando e atualizando dados com Yup.
   * @author Micael Andrade
   * @param {*} req
   * @param {*} res
   * @returns void
   *
   * @since 1.0.0 Versão inicial
   */
  async update(req, res) {
    const schema = Yup.object().shape({
      uso_nome: Yup.string(),
      uso_email: Yup.string().email().required(),
      uso_senha_antiga: Yup.string().min(TAMANHO_MINIMO_SENHA),
      uso_senha: Yup.string()
        .min(TAMANHO_MINIMO_SENHA)
        // when -> Validação condicional
        // recebe o valor de senha, e acontinuação do campo no caso uso_password
        .when('uso_senha_antiga', (uso_senha, nextField) =>
          uso_senha ? nextField.required() : nextField,
        ),

      uso_confimacaoSenha: Yup.string().when(
        'uso_senha',
        (uso_senha, nextField) =>
          uso_senha
            ? nextField.required().oneOf([Yup.ref('uso_senha')])
            : nextField,
      ),
    });
    const dadosValidos = await schema.isValid(req.body);
    const uso_id = req.userId;

    if (!dadosValidos) {
      return res.status(400).json({
        error: 'Dados inválidos, verifique os dados e tente novamente.',
      });
    }

    const { uso_senha_antiga, uso_email } = req.body;
    const usuario = await User.findByPk(uso_id);

    const desejaMudarEmail = uso_email && uso_email !== usuario.uso_email;

    if (desejaMudarEmail) {
      const usuarioJaExiste = await User.findOne({ where: { uso_email } });
      if (usuarioJaExiste) {
        return res
          .status(400)
          .json({ error: 'Já existe um usuário com esse email.' });
      }
    }

    // Deseja alterar a senha também.
    if (uso_senha_antiga && !(await usuario.checkPassword(uso_senha_antiga))) {
      return res.status(401).json({ error: 'A senha está errada' });
    }

    const { uso_nome: nome, uso_email: email } = await usuario.update(req.body);

    return res.json({
      uso_nome: nome,
      uso_email: email,
    });
  }
}

export default new UserController();
