const userCtrl = require('./userCtrl');

module.exports = {
    loggedIn: (req, res, next) => {
        if(req.cookies.auth) {
            userCtrl.getUserMe(req, res, next)
        } else {
            next();
        }
    }
}