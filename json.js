const user = {id: 1, name: 'gorib amir', job: 'actor'};
//JavaScript object notation
const stringified = JSON.stringify(user)
// console.log(user);
// console.log(stringified);

// { id: 1, name: 'gorib amir', job: 'actor' }
// {"id":1,"name":"gorib amir","job":"actor"}


const shop = {
    owner : 'alia',
    address:{
        street:'kochukhet',
        city:'rabir',
        country: ' bd'
    },
    products:['laptop','monitor','keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false,
};
console.log(shop)
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);