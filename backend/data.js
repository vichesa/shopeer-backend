import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name:'Yolana',
            email:'admin@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name:'Budi',
            email:'user@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],
    products: [
        {
            name:'Samsung Smart Monitor',
            category: 'MOnitor',
            image:'/image/image1.jpg',
            price: 120,
            countInStock: 4,
            brand:'Samsung',
            rating:'3.5',
            numReviews: 10,
            description:'SNI',
        },
        {
            name:'Lenovo Yoga',
            category: 'Laptop',
            image:'/image/image2.jpg',
            price: 100,
            countInStock: 5,
            brand:'Lenovo',
            rating:'4.5',
            numReviews: 12,
            description:'good quality',
        },
        {
            name:'Panasonic HZ1000',
            category: 'TV',
            image:'/image/image3.jpg',
            price: 150,
            countInStock: 0,
            brand:'Panasonic',
            rating:'2',
            numReviews: 15,
            description:'Standard quality',
        },
        {
            name:'iPad Air',
            category: 'iPad',
            image:'/image/image4.jpg',
            price: 130,
            countInStock: 22,
            brand:'Apple',
            rating:'5',
            numReviews: 16,
            description:'high quality',
        },
        {
            name:'iWatch 12 Pro',
            category: 'Watch',
            image:'/image/image5.jpg',
            price: 80,
            countInStock: 21,
            brand:'Apple',
            rating:'4.5',
            numReviews: 17,
            description:'HIgh quality',
        },
    ],
}

export default data;