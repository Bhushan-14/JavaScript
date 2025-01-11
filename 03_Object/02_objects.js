//Singleton object

const tinderUder = new Object();
tinderUder.id = 12;
tinderUder.name = 'Sagar';
tinderUder.age = 30;
tinderUder.location = 'India';
tinderUder.email = 'sagar@gmail.com';

// console.log(tinderUder);

const regUser = {
    fullName: {
        fname: 'Hrishi',
        lname: 'Patil',
    },
    email: 'hrishi@gmail.com',
    address: {
        city: {
            cname: 'Mumbai',
            zip: 400001,
        },
        state: 'MH',
        country: 'India',
    }
}
console.log(regUser.fullName?.fname)

const obj1 = {1 : 'a', 2 : 'b'};
const obj2 = {2 : 'b', 3 : 'c'};

// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = {...obj1, ...obj2};

console.log(obj3);


const user2 = [
    {
        id : 1,
        email: 'h@example.com',
    },
    {
        id : 2,
        email: 'v@example.com',
    }
];

console.log(Object.keys(user2));
console.log(Object.values(user2));
console.log(Object.entries(user2));

console.log(user2[1].email);
