import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

/**
 * Criação do model usuário
 * @author Manoel e Micael
 * @version 1.0.0 Realizando conexão
 */
class User extends Model {
  static init(sequelize) {
    super.init(
      {
        uso_id: Sequelize.INTEGER,
        uso_nome: Sequelize.STRING,
        uso_cargo: Sequelize.STRING,
        uso_email: Sequelize.STRING,
        uso_tipo_user: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'uso_usuario',
      },
    );
    this.removeAttribute('id');

    this.addHook('beforeSave', async (uso_usuario) => {
      if (uso_usuario.password) {
        uso_usuario.password_hash = await bcrypt.hash(uso_usuario.password, 8);
      }
    });

    return this;
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
