const router = require('express').Router();
const {
    createThought,
    getAllThought, 
    getThoughtById,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction,
} = require('../../controllers/thoughtController');

router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);
router.route('/').get(getAllThought).post(createThought);
router.route('/:thoughtId/reactions').post(addReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;