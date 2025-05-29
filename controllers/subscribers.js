const Subscriber = require('../models/subscriber')

const getAllSubscribers = async (req,res) => {
    try {
        const subscribers = await Subscriber.find()
        res.send(subscribers)
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

const getOneSubscriber = (req,res) => {
    res.send(res.subscriber.name)
}

const createSubscriber = async (req,res) => {
    const subscriber = new Subscriber({
        name: req.body.name, 
        subscribedToChannel: req.body.subscribedToChannel
    })

    try {
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)
    } catch(err) {
        res.status(400).json({ message: err.message })
    }
}

const updateSubscriber = async (req,res) => {
    if(req.body.name != null) {
        res.subscriber.name = req.body.name
    } 
    if(req.body.subscribedToChannel != null) {
        res.subscriber.subscribedToChannel = req.body.subscribedToChannel
    }
    try {
        const updatedSubscriber = await res.subscriber.save()
        res.send(updatedSubscriber)
    } catch(err) {
        res.status(400).send({ message: err.message })
    }
}

const deleteSubscriber = async (req,res) => {
    try {
        await res.subscriber.deleteOne()
        res.send('Deleted subscriber!')
    } catch(err) {
        res.status(500).send({ message: err.message })
    }
}


module.exports = {
  getAllSubscribers,
  getOneSubscriber,
  createSubscriber,
  updateSubscriber,
  deleteSubscriber
}