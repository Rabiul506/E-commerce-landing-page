// src/app/data.ts
export const data = [
    {
        id: 1,
        name: 'Rabiul Islam',
        myPhoto: '/assets/images/rabiul.jpg',
        postTittle:'Outing with friends',
        image: 'assets/images/fnf.jpg',
        time: Math.round(Math.random()/6 *100),
        like: 0,
        comment: 0,
        share: 0,
    },
    {
        id: 2,
        name: 'Rocky Islam',
        myPhoto: '/assets/images/p-one.jpg',
        postTittle:'Outing with friends',
        image: 'assets/images/14feb.jpg',
        time: Math.round(Math.random()/6 *100),
        like: 0,
        comment: 0,
        share: 0,
    },
    {
        id: 2,
        name: 'Abu Sayed',
        myPhoto: '/assets/images/sayed.jpg',
        postTittle:'Peacefull Payra',
        image: 'assets/images/tongi.jpg',
        time: Math.round(Math.random()/6 *100),
        like: 0,
        comment: 0,
        share: 0,
    },

  ];


  export interface myData{
    id: number;
    name: string;
  }
  