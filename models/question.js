const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    totalQuestion: { type: String, required: true },
    quizName: { type: String, unique: true, required: true },
    question: { type: Array, required: true },
    createdDate: { type: Date, default: Date.now }
});

//To remove extra information
questionSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
});

module.exports = mongoose.model('Question', questionSchema);