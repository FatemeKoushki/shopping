export interface ProductProps {
    id: number,
    title : string ,
    rowprice : number ,
    price : number ,
    brand : string ,
    rating : string ,
    query:string ,
    discribtion  : string,
    image : string,
    isnew: boolean,
    quantity: number,
    qty : number,
    onSale : string
  }

  export interface StateProps {
    cart: {
      productData: ProductProps[];
    };
  }