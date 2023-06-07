const getRecepiByName = require("../controllers/getRecepiByName");
const getAll = require("../controllers/getAll");

module.exports = async (req, res) => {
  try {
    const { name } = req.query;
    if (name) {
      const response = await getRecepiByName(name);
      return res.status(200).json(response);
    }
    // const all = await getAll()
    //return res.status(200).json(all);
    return res.status(200).send("esto es la llamada al getAll");
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
};
