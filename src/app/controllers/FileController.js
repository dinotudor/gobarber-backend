import File from '../models/File';

class FileController {
  async store(req, res) {
    const { orginalname: name, filename: path } = req.file;
    console.log(`NAME->${name} PATH->${path}`);
    console.log(`reqFILE-> ${req.file.originalname} ${req.file.path}`);
    const file = await File.create({
      name,
      path,
    });
    return res.json(file);
  }
}

export default new FileController();
