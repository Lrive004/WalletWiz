const { Schema, model, default: mongoose } = require('mongoose');

const transactionSchema = new Schema({
    amount: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

const Transaction = model('Transaction', transactionSchema);

module.exports = Transaction;

