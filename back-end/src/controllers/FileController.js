import Arquivo from '../app/models/Arquivo';

class FileController {
  async store(req, res) {
    const { originalname: ars_nome, filename: ars_path } = req.file;

    const arquivo = await Arquivo.create({
      ars_nome,
      ars_path,
    });

    return res.json(arquivo);
  }
}

export default new FileController();
