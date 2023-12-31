const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name:{
        type:String,
    },
    description:{
        type:String
    },
    status:{
        type:String,
        enum: ['Not Started', 'In Progress', 'Completed']
    },
    clientId:{
        type:mongoose.Schema.ObjectId,
        ref:"Client"
    }
}, {timestamps:true});

module.exports = mongoose.model('Project', projectSchema) 