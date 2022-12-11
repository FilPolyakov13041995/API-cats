

//=======================Fetch==========================//

//==============GET==============//
const requestURL = 'https://jsonplaceholder.typicode.com/posts';

function send(method, url, body = null) {
    return fetch(url).then(response => {
        return response.json();
    });
}
send('GET', requestURL)
.then(data => console.log(data))
.catch(err => console.log(err));

//=================================//



//=======================2GET=============================//
const requestURL3 = 'https://jsonplaceholder.typicode.com/comments';

function send2(method, url, body = null) {
    return fetch(url).then(response => {
        return response.json();
    });
}

send2('GET', requestURL3)
    .then(data => console.log(data))
    .catch(err => console.log(err));

//======================================//

//===================3GET================================//

const requestURL4 = 'https://jsonplaceholder.typicode.com/albums';

function send3(method, url, body = null) {
    return fetch(url).then(response => {
        return response.json();
    });
}

send3('GET', requestURL4)
    .then(data => console.log(data))
    .catch(err => console.log(err));

//================================================================//

//==========================4GET====================================//

const requestURL5 = 'https://jsonplaceholder.typicode.com/todos';

function send4(method, url, body = null) {
    return fetch(url).then(response => {
        if(!response.ok) {
            throw new Error('Сервер упал на колени!');
        } else {
            return response.json();
        }
        
    });
}

send4('GET', requestURL5)
    .then(data => console.log(data))
    .catch(err => console.log(err));

//==================================================================//

//==========================5GET======================================//

const requestURL6 = 'https://jsonplaceholder.typicode.com/users';

function send5(method, url, body = null) {
    return fetch(url).then(response => {
        return response.json();
    });
}

send5('GET', requestURL6)
    .then(data => console.log(data))
    .catch(err => console.log(err));

//============================================================//

//=======================6GET=============================//





