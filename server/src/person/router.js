import PersonController from './controller';

const router = require('express').Router();

router.get('/get_person/:person_name', PersonController.pullPerson)
router.get('/vote_question/:question_id/:my_vote', PersonController.submitVote)

export default router;