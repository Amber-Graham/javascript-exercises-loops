const number = Math.floor(Math.random() * 1000);

const repeatString = function(str, num) {
    let welcomeString = '';
    for(i = 0; i < num; i++) {
        welcomeString += str;
    } if(num < 0) {
            return('ERROR');
        }
    return welcomeString;
}


repeatString('hey', 3);
repeatString('hey', 10);
repeatString('hey', 1);
repeatString('hey', 0);
repeatString('hey', -1);
repeatString('hey', number);
repeatString('', 10);

// Do not edit below this line
module.exports = repeatString;
