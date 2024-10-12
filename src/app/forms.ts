// export const dataForm = 
//     {
//         customerName: 'Rabiul Islam',
//         customerPhone: '01758480064',
//         customerEmail: 'rabiul4kb@gmail.com',
//         address: {
//             country: 'Bangladesh',
//             city: 'Gazipur',
//             state: 'Chandana',
//             zipCode: '1702',
//             shortAddress: 'Counsilor Market, Bonorupa Road, Block-C, House:17/2'
//         }
// }

export class dataForm {
    constructor(
      public name: string,
      public phone: string,
      public email: string,
      public address: string,
      public city: string,
      public state: string,
      public zip: string,
      public country: string,
    ) {}
  }
