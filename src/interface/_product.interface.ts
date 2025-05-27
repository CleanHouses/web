export interface IProduct {
  images?: {
    main: string;
  };
  descriptions?: string;
  tags?: string[];
  title?: string;
  price: number;
  id: string | number;
  category?: string;
  isSoon?: boolean;
}
