const conn = require('./conn');
const Customer = require('./Customer');

const sync = () => {
    return conn.sync({ force: true });
}

const seed = () => {
   // return Customer.create({ email: 'pinkie@gmail.com' })
   return Promise.all([
       Customer.create({email: 'pink@gmail.com'}),
       Customer.create({email: 'orange@gmail.com'}),
       Customer.create({email: 'blue@yahoo.com'})
   ])
}



module.exports = {
    sync,
    seed,
    models: {
        Customer
    }
};