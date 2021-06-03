import { IFile } from "./IFile";
import { IIngredient } from "./IIngredient";

export interface IProduct {
  id: string;
  // category: Categories;
  // brand: Brand;
  ingredients: IIngredient[];
  name: string;
  description: string;
  isVegan: boolean;
  thumbnail_url: string;
  files?: IFile[];
}
