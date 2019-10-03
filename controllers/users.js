const mongoose = require('mongoose');
const User = require('../models/user');

exports.get = function(id, callback){
    if(!id){
        
        return callback(new Error('Invalid user id'))
    }
    User.findById(id, function(err, result){
        if (err){
            return callback(err)
        }
        let response = {
            success: true,
            data: result,
            message: 'User Found'
        }
        return callback(null, response)
    })
}