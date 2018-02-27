const ul = document.getElementById('customerList');

const url = '/api/customers';
   

fetch (url)
    .then (result => result.json())
    .then (customers => {
        customers.forEach(customer => {
            const email = document.createTextNode(customer.email)
            const li = document.createElement('li');
            li.appendChild(email);
            ul.appendChild(li)
        })
    })
    .catch(err => console.error(err));



