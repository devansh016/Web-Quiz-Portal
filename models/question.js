const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    questionIndex: { type: String, unique: true, required: true },
    textQuestion: { 
        question: { type: String, required: true },
        description: { type: String, required: true },
        answer: { type: String, required: true }
    },
    createdDate: { type: Date, default: Date.now }
});

//To remove extra information
questionSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
});

module.exports = mongoose.model('Question', questionSchema);