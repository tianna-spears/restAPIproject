// Middleware
async function getSubscriber(req, res, next) {
    let subscriber
    try {
        subscriber = await Subscriber.findById(req.params.id)
        if (!subscriber) {
            return res.status(404).send({ message: 'Subscriber not found!' })
        }
    } catch (err) {
        return res.status(500).send({ message: err.message })
    }

    res.subscriber = subscriber
    next()
}  

module.exports = getSubscriber;