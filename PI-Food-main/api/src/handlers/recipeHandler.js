const apiName = require("../controllers/apiName");
const dataBaseName = require("../controllers/dataBaseName");
const getAll = require("../controllers/getAll");

module.exports = async (req, res) => {
  try {
    const { name } = req.query;
    if (name) {
      const responseData = await dataBaseName(name);
      const responseApi = await apiName(name);
      const response = [...responseData, ...responseApi ]
      return res.status(200).json(response);
    }
    const all = await getAll()
    return res.status(200).json(all);
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
};
