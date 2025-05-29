const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber');
const getSubscriberMiddleware = require('../middleware/getSubscriber')
const { 
    getAllSubscribers, 
    getOneSubscriber, 
    createSubscriber, 
    updateSubscriber, 
    deleteSubscriber } 
    = require('../controllers/subscribers');

router.get('/', getAllSubscribers)
router.get('/:id', getSubscriberMiddleware, getOneSubscriber)
router.post('/', createSubscriber)
router.patch('/:id',getSubscriberMiddleware, updateSubscriber)
router.delete('/:id',getSubscriberMiddleware, deleteSubscriber)


module.exports = router;