export const orders = [
    {
        id: 1342,
        orderName: 'Rabiul isalm',
        placedDate: '31/10/2023',
        orderStatus: 'pending',
        subTotal: 153,
        shippingFee: 45,
        deliveryCost: 15,
        totalCost: 213,
        productId: 24,
        productTittle:'Outing with friends',
        productItems: 3,
        image: 'assets/images/fnf.jpg',

    }
]

const customer = {
    name: 'Rabiul islam',
    phoneNumber: 01758480064,
    email:'rabiul4kb@gmail.com',
    address: 'chandana',
    placedDate: '31/10/2023',
    prductItems:[
        {
            itemsId: '124',
            itemName: 'super Rib touser',
            quantity: 2,
            Price: 549,
        },
        {
            itemsId: '124',
            itemName: 'super Rib touser',
            quantity: 2,
            Price: 549,
        },
        {
            itemsId: '124',
            itemName: 'super Rib touser',
            quantity: 2,
            Price: 549,
        }

    ],
    subTotal: 549,
    prductShipping: [
        {
            shippingFee: 15,
        }
    ],
    totalAmount: 564,
    orderStatus: 'processing'
}