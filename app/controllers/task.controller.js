'use strict';

const mongoose = require('mongoose');
const {
    ObjectId
} = require('mongodb');

const taskModel = mongoose.model('task');


module.exports.getAll = (req, res) => {
    taskModel.find({}).then(tasks => {
        res.send(tasks);
    }).catch(err => {
        res.status(400).send({
            status: 400,
            message: 'Bad Request',
            stack: err
        });
    });
};

module.exports.get = (req, res) => {

    const _id = req.params.id;

    if (!ObjectId.isValid(_id)) {
        return res.status(404).send({
            status: 404,
            message: 'Please send a valid id'
        });
    }


    taskModel.findById(_id).then(task => {
        if (!task) {
            return res.status(404).send({
                status: 404,
                message: 'Not found task'
            });
        }

        res.send(task);

    }).catch(err => {
        res.status(400).send({
            status: 400,
            message: 'Bad Request',
            stack: err
        });
    });
};

module.exports.create = (req, res) => {
    taskModel.create(req.body).then(task => {
        res.send(task);
    }).catch(err => {
        res.status(400).send({
            status: 400,
            message: 'Bad Request',
            stack: err
        });
    });
};


module.exports.update = (req, res) => {
    
    const _id = req.params.id;

    if (!ObjectId.isValid(_id)) {
        return res.status(404).send({
            status: 404,
            message: 'Please send a valid id'
        });
    }

    taskModel.findByIdAndUpdate(_id, {$set: req.body}).then(task => {
        
        if (!task) {
            return res.status(404).send({
                status: 404,
                message: 'Not found task and not updated'
            });
        }
        res.send(task);
    }).catch(err => {
        res.status(400).send({
            status: 400,
            message: 'Bad Request',
            stack: err
        });
    });
};

module.exports.delete = (req, res) => {
    const _id = req.params.id;

    if (!ObjectId.isValid(_id)) {
        return res.status(404).send({
            status: 404,
            message: 'Please send a valid id'
        });
    }

    taskModel.findByIdAndRemove(_id).then(task => {
        if (!task) {
            return res.status(404).send({
                status: 404,
                message: 'Not found task and not deleted'
            });
        }
        res.send(task);

    }).catch(err => {
        res.status(400).send({
            status: 400,
            message: 'Bad Request',
            stack: err
        });
    });
};