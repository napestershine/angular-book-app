export class Book {
  constructor(
    public _id: string,
    public name: string,
    public author: string,
    public imgSrc: string,
    public price: number
  ) {}
}

// export interface Book {
//     _id: string;
//     name: string;
//     author: string;
//     imgSrc: string;
//     price: number;
// }
