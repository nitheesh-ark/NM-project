import express from 'express';
import { Questions, addQuestions, updateQuestions, delQuestions, CatQuestions} from '../controller/Questioncontroller.js';

const router = express.Router();

router.route('/').get(Questions);
router.route('/:category').get(CatQuestions);
router.route('/').post(addQuestions);
router.route('/:id').put(updateQuestions);
router.route('/:id').delete(delQuestions);

export default router;