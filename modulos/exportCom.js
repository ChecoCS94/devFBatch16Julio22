const error = "Error";
const info = true;

function log(params) {
    return "Exportando con commonJS.";
}

module.exports.error = error;
module.exports.info = info;
module.exports.log = log;