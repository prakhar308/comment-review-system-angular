export interface IProduct {
   productId: number;
   productName: string;
   description: string;
   price: number;
   starRating: number;
   imageUrl: string;
   reviews: Array<string>;
}