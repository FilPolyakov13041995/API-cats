//================Promise=====================//

console.log('Request data...');

const prom = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('Preparing data...');
        const backendData = {
            server: 'myServer',
            port: 3000,
            status: 'Working'
        };
        resolve(backendData);
    }, 2500);
});

prom.then((data) => { // сюда передаётся объект, который мы передавали в resolve выше.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true;
            resolve(data); // говорим что промис завершился.
        }, 2500);
    });

}).then(clientData => {
    clientData.country = 'Belarus';
    return clientData;
}).then(newCountryObj => {
    newCountryObj.male = false;
    console.log('added obj', newCountryObj);
})  
.catch(err => console.error('Error: ', err));

//=========================================================================//