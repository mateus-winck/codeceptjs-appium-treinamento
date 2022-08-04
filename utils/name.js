var Chance = require('chance');
var chance = new Chance();

const getName = () => {
    
    newName = chance.name()
    
    return newName
}

exports.getName = getName