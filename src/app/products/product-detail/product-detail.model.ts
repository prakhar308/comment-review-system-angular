import { IAttributeRating } from "src/app/attribute-rating/attribute-rating.model";
import { IProductReview } from "../../reviews/product-review.model";

export interface IProductDetail {
  productId: string;
  productName: string;
  description: string;
  price: number;
  overAllRating: number;
  imageUrl: string;
  reviews: IProductReview[];
  attributeRating: IAttributeRating[];
}