import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

/**
 * Criação do model usuário
 * @author Manoel e Micael
 * @version 1.0.0 Realizando conexão
 * @version 1.0.1 Definindo o nome do model em Português
 */
class Usuario extends Model {
  /**
   * @version 1.0.0 Trocando campo password para uso_senha
   * @param {*} sequelize
   * @returns void
   */
  static init(sequelize) {
    super.init(
      {
        uso_nome: Sequelize.STRING,
        uso_cargo: Sequelize.STRING,
        uso_email: Sequelize.STRING,
        uso_tipo_user: Sequelize.STRING,
        uso_senha: Sequelize.VIRTUAL,
        senha_hash: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'uso_usuario',
      },
    );

    this.addHook('beforeSave', async (usuario) => {
      if (usuario.uso_senha) {
        try {
          usuario.senha_hash = await bcrypt.hash(usuario.uso_senha, 8);
        } catch (error) {
          console.log('error!');
        }
      }
    });

    return this;
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.senha_hash);
  }
}

export default Usuario;
