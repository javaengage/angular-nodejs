const userController = require('../controllers/users');
const eventController = require('../controllers/events');

const router = require('express-promise-router')() ;



router.post('/login',  userController.login);
router.post('/signup', userController.signup);

router.post('/events', eventController.getEvents);
router.post('/events/user/', eventController.getUserEvents);
router.post('/events/create', eventController.createEvent);
router.post('/events/edit', eventController.updateEvent);
router.post('/events/delete', eventController.deleteEvent);



module.exports = router;
