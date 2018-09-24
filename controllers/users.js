const User = require('../models/User');

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

exports.signup = async function (req, res) {
    let user = new User({
        'name': req.body.name,
        'email': req.body.email,
        'password': req.body.password,
        'role': req.body.role
    });

    const newUser =  await user.save();

    response.data = newUser;
    const jwt = user.generateJwt();

    response.token = jwt;

    res.json(response);
};

exports.login =  function (req, res) {
    User.findOne({email : req.body.email}, function (err, user) {
        if (err){
            sendError(err, res);

        }
        else{
            if(user){
                console.log(user);

                user.comparePassword(req.body.password ,  function(err, match){
                    if(err){
                        response.status = 400;
                        response.message = "Error";
                        response.data = err
                    }
                    else {
                        if(match){
                            response.status = 200;
                            response.message = "Logged in ";
                            response.data = user;
                            const jwt = user.generateJwt();
                            response.token = jwt;

                        }
                        else{
                            response.status = 400;
                            response.message = "Incorrect email or password";
                        }
                    }
                    res.json(response);

                });

            }
        }
    });
};
