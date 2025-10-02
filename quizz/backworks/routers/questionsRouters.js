import express from 'express';
import { Questions, addQuestions, updateQuestions, delQuestions, SingleQuestions, CategoryQuestion, Categorys} from '../controller/Questioncontroller.js';

const router = express.Router();

router.route('/categorys').get(Categorys)
router.route('/category/:category').get(CategoryQuestion)
router.route('/:id').get(SingleQuestions);
router.route('/').get(Questions);

router.route('/').post(addQuestions);
router.route('/:id').put(updateQuestions);
router.route('/:id').delete(delQuestions);

export default router;