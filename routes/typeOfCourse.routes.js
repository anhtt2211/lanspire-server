module.exports = app => {
  const typeOfCourse = require('../controllers/typeOfCourse.controller.js');

  var router = require('express').Router();

  // Create a new typeOfCourse
  router.post('/', typeOfCourse.create);

  // Retrieve all typeOfCourse
  router.get('/', typeOfCourse.findAll);

  // Retrieve a single typeOfCourse with id
  router.get('/:idtypeofcourse', typeOfCourse.findOne);

  // Update a typeOfCourse with id
  router.put('/:idtypeofcourse', typeOfCourse.update);

  // Delete a typeOfCourse with id
  router.delete('/:idtypeofcourse', typeOfCourse.delete);

  app.use('/api/typeofcourses', router);
};
