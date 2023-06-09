const getDiets = require("../controllers/getDiets");

module.exports = async (req, res) => {
 
    const response = await getDiets();
    try {
        response
            ? res.status(200).json(response)
            : res.status(400).send(error)
        
    } catch (error) {
        res.status(500).send(error.message)
    }



};

// module.exports = (req, res) => {
//   getDiets()
//     .then(response => {
//       if (response) {
//         res.status(200).json(response);
//       } else {
//         res.status(400).send(error);
//       }
//     })
//     .catch(error => {
//       res.status(500).send(error.message);
//     });
// };
