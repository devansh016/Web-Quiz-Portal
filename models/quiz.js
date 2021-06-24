const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizSchema = new Schema({
    user_id: { type: String, unique: true, required: true },
    user_name: { type: String, unique: true, required: true },
    current_question: { type: Number, default: 0 },
    question_type: { type: String, default: "text" }
});

//To remove extra information
quizSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
});

module.exports = mongoose.model('Quiz', quizSchema);