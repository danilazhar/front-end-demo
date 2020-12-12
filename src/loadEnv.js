module.exports = function () {
    let envVariables = require('dotenv').config({
        path: __dirname + '/.env'
    });

    if (envVariables.error) {
        throw envVariables.error;
    }
}();
