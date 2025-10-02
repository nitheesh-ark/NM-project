import quizz from '../model/Modelquestions.js'

export const Questions = async (req, res)=>{
    try {
        const quizzes = await quizz.find()
        res.status(200).json(quizzes)
    } catch (error) {
        res.status(404).json({message : error.message})
    }
}

export const SingleQuestions = async (req, res)=>{
    try{
        const {id} = req.params;
        
        const question = await quizz.findById(id);
        if (!question){
            return res.status(404).json({err_mes:"question not found"})
        }
        res.status(200).json(question)
    }catch(error){
        res.status(404).json({mess:error.message})
    }
}

export const CategoryQuestion = async (req, res) => {
  try {
    const { category } = req.params;
    const questions = await quizz.find({category: category});

    if (!questions || questions.length === 0) {
      return res.status(404).json({ msg: "No questions found for this category" });
    }

    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ err_msg: error.message });
  }
};

export const Categorys = async(req, res, next) => {
    try {
        
        const categorys = await quizz.distinct("category");
        if (!categorys) {
            res.status(404).json({message:"no such category found"})
        }

        res.status(200).json(categorys)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

export const addQuestions = async (req, res)=>{
    try {
        const quiz = await quizz.create(req.body)
        res.status(201).json(quiz)
    } catch (error) {
        res.status(409).json({message : error.message})
    }
}

export const updateQuestions = async (req, res) => {
    try {
        const {id} = req.params
        const updatedata = req.body
        if(id && updatedata){
            const updated_data = await quizz.findByIdAndUpdate(id, updatedata, { new: true })
            res.status(201).json({mes:"sucessfully updated", updated_data})
        }else{
            res.status(404).json({mes:"failed to updated updated"})
        }
    } catch (error) {
        res.status(404).json({mes:error.message})
    }
}

export const delQuestions = async (req, res) => {
    try {
        const {id} = req.params
        console.log(id)
        if(id){
            const del = await quizz.findByIdAndDelete(id)
            res.status(201).json({mes:"deleted successfully", delitedId:id})
        }else{
            res.status(404).json({mes:"id not dound"})
        }
    } catch (error) {
        res.status(409).json({message : error.message})
    }
}
