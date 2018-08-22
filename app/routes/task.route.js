'use strict'

module.exports = app => {
    const controller = require('../controllers/task.controller');


    app.route('/v1/tasks')
        .get(controller.getAll)
        .post(controller.create);

    app.route('/v1/tasks/:id')
        .get(controller.get)
        .put(controller.update)
        .delete(controller.delete);

};