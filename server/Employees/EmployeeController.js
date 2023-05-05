var Employee = require('./Employee');

exports.createOne = function (req, res) {
  Employee.create(req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send('An error occurred while creating the Employee.');
    });
};
exports.retrieve = function (req, res) {
  Employee.find({}).then((result) => {
    res.send(result);
  }).catch((error) => {
    console.log(error);
    res.status(500).send('An error occurred while retrieving Employees.');
  });
};



exports.deleteOne = function (req, res) {
  Employee.deleteOne({ name: req.params.name })
    .then((result) => {
      if (!result.deletedCount) {
        return res.status(404).send('Employee not found.');
      }
      res.send(result);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send('An error occurred while deleting the Employee.');
    });
};