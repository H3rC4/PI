const apiName = require("../controllers/apiName");
const dataBaseName = require("../controllers/dataBaseName");
const getAllFromApi = require("../controllers/getAllFromApi");
const getAllFromDB = require("../controllers/getAllFromDB");
module.exports = async (req, res) => {
  try {
    const { name } = req.query;
    if (name) {
      const responseData = await dataBaseName(name);
      const responseApi = await apiName(name);
      const response = [...responseData, ...responseApi ]
      return res.status(200).json(response);
    }
    const allApi = await getAllFromApi()
    const allDB = await getAllFromDB()
    const all = [...allDB,...allApi]
    return res.status(200).json(all);
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
};
