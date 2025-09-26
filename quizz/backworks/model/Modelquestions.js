import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
    trim: true
  },
  options: {
    type: [String],     
    required: true,
    validate: v => Array.isArray(v) && v.length > 1  
  },
  correctAnswerIndex: {
    type: Number,
    required: true,
    min: 0
  },
  category: {
    type: String,
    default: "General"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const quizz = mongoose.model('Quiz', quizSchema);
export default quizz;