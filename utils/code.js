var Chance = require('chance');
var chance = new Chance();

const getCode = () => {
    
    newCode = chance.natural({min:1000, max:9999})

    return newCode
}

exports.getCode = getCode