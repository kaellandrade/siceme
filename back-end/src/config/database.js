module.exports = {
  dialect: 'postgres',
  host: 'pg_container',
  username: 'root',
  password: 'siceme123',
  database: 'siceme',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    freezeTableName: true,
  },
};
