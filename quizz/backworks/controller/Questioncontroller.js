import quizz from '../model/Modelquestions.js'

export const Questions = async (req, res)=>{
    try {
        const quizzes = await quizz.find()
        res.status(200).json(quizzes)
    } catch (error) {
        res.status(404).json({message : error.message})
    }
}

export const CatQuestions = async (req, res)=>{
    try{
        const {category} = req.params;
        console.log(category)
        if (category){
            res.status(200).json(await quizz.find({category:category}));

        }
        else{
            res.status(404).json({err_mes:"category not found"})
        }
    }catch(error){
        res.status(404).json({mess:error.message})
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
