const mongoose = require('mongoose');

const schema = mongoose.Schema;

const session = new schema({
    user_id : {type: String, required: true},
    jwt: {type: String, required: true}
})

module.exports = mongoose.model('sessions', session);