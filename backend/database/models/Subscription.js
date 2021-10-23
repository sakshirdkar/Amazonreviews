const mongoose = require('mongoose');

const SubscriptionSchema = mongoose.Schema({
    username: String,
    topic: String
});

module.exports = mongoose.model('Subscriptions', SubscriptionSchema);