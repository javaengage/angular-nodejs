const Event = require('../models/Event');

let WebSocketServer = require('ws').Server;
let wss = new WebSocketServer({port: 5500});
let wsObj = null;


wss.on('connection', function (ws) {

    console.log('websocket started');

    wsObj = ws;
    ws.on('message', function (message) {
        console.log('received: %s', message)
    })

});

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: {},
    message: null
};

exports.createEvent = async function (req, res) {
    let event = new Event({
        'name': req.body.name,
        'venue': req.body.venue,
        'time': req.body.time,
        "location": {
            "type": "Point",
            "coordinates": [req.body.lng, req.body.lat]
        },
        'user_id' : req.body.user_id
    });

    const newEvent =  await event.save();

    if(wsObj){
        wsObj.send(JSON.stringify(newEvent));
    }
    response.data = newEvent;
    res.json(response);

};


exports.getEvents = async function (req, res) {

    const events = await Event.find({});
    response.data = events;
    res.json(response);
};

exports.getUserEvents = async function (req, res) {
    const events = await Event.find({user_id : req.body.user_id});
    response.data = events;
    res.json(response);
};

exports.deleteEvent = async function (req, res) {
    let eventId = req.body.event_id;

    const deletedEvent = await Event.findByIdAndRemove(eventId);
    response.data = 'Event Deleted';
    res.json(response);

};

exports.updateEvent = async function (req, res) {
    const event = await Event.findById(req.body._id);

    event.name =  req.body.name;
    event.venue =  req.body.venue;
    event.time =  req.body.time;
    event.location.coordinates =  [req.body.lng, req.body.lat];

    const updatedEvent = await event.save();
    response.data = updatedEvent;
    res.json(response);
};


