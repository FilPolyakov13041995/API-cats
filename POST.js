// //====================POST======================//

// const newPost = {
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   };

  
//   fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST', // Здесь так же могут быть GET, PUT, DELETE
//     body: JSON.stringify(newPost), // Тело запроса в JSON-формате
//     headers: {
//       // Добавляем необходимые заголовки
//       'Content-type': 'application/json; charset=UTF-8',
//     }
//   })
//     .then(response => {
//         if(!response.ok) {
//             throw new Error('Сервер накрыли хакеры');
//         } else {
//             return response.json();
//         }
//     })

//     .then(data => console.log(data))
//     .catch(err => console.log(err));

//========================================================//




//============================2====================================//

const URL1 = 'https://jsonplaceholder.typicode.com/posts';

function postResponse(method, url, body = null) {
    const headers = {
        'Content-Type': 'application/json'
    };
    return fetch(url,  {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    })
    .then(response => { // обрабатываем ошибку.
        if(!response.ok) {
            throw new Error('Что-то пошло не так!');
        } else {
            return response.json();
        }
        
    });
}


const user = {
  name: 'Helen',
  age: 22,
  country: 'Belarus',
  city: 'Zhodino'
};

postResponse('POST', URL1, user)
    .then(data => console.log(data))
    .catch(err => console.log(err));

//==================================================//

//==============================3=====================================//

const URL2 = 'https://jsonplaceholder.typicode.com/comments';

function post2(method, url, body = null) {
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if(!response.ok) {
            throw new Error('Вы просто будьте терпеливее!');
        } else {
            return response.json();
        }
    });
}

const userFilipp = {
    name: 'Filipp',
    age: 27,
    country: 'Belarus',
    city: 'Zhodino'
};

post2('POST', URL2, userFilipp)
    .then(data => console.log(data))
    .catch(err => console.log(err));

//=============================================================//

//===================================4============================//

const URL3 = 'https://jsonplaceholder.typicode.com/albums';

function post3(method, url, body = null) {
    return fetch(url, {
        method,
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if(!response.ok) {
            throw new Error('Повторите по-позже, у сервера заболел API');
        } else {
            return response.json();
        }
    });
}

const userVladimir = {
    name: 'Vladidmir',
    age: 27,
    country: 'Belarus',
    city: 'Zhodino'
};

post3('POST', URL3, userVladimir)
    .then(data => console.log(data))
    .catch(err => console.log(err));

//=============================================//

//=====================5=============================//

const URL4 = 'https://jsonplaceholder.typicode.com/users';

function post4(method, url, body = null) {
    return fetch(url, {
        method,
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if(!response.ok) {
            throw new Error('Плиз, зайдите потом, когда всё будет впорядке!');
        } else {
            return response.json();
        }
    });
}

const userErnest = {
    name: 'Ernest',
    age: 32,
    country: 'Belarus',
    city: 'Zhodino'
};

post4('POST', URL4, userErnest)
    .then(data => console.log(data))
    .catch(err => console.log(err));

//============================================//


//====================6===============================//

const URL5 = 'https://jsonplaceholder.typicode.com/todos';

function post5(method, url, body = null) {
    return fetch(url, {
        method,
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if(!response.ok) {
            throw new Error('Сервер запутался!');
        } else {
            return response.json();
        }
    });
}

const userValentina = {
    name: 'Valentina',
    age: 25,
    country: 'Belarus',
    city: 'Zhodino'
};


post5('POST', URL5, userValentina)
    .then(data => console.log(data))
    .catch(err => console.log(err));

