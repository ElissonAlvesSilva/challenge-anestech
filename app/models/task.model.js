'use strict';

const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({

    delivery_time : {
        type: String,
        require: true
    },
    task: {
        type: String,
        require: true
    }

});

mongoose.model('task', taskSchema);