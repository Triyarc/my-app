export type cardProps = {
	id: number;
	name: String;
	price: number;
};

export interface StoreItemProps {
  data: {
    id: number;
    pet: string;
    breed: string;
    images: {
      image_one: string;
      birth_certificate: {
        image_one: string;
      };
    };
    age: string;
    gender: string;
    posted_on: string;
    category:string;
  };

  handleNavigateCard?: () => void;
}


interface PostData {
  id: number;
  post_status: string;
  category: string;
  price: number | null;
  pet: string;
  breed: string;
  age: string;
  gender: string;
  color: string;
  weight: string;
  height: string;
  description: string;
  thumbnail_image: string;
  images: {
    image_one: string;
    image_two: string;
    birth_certificate: {
      image_one: string;
    };
  };
  posted_on: string;
}

export interface ProductViewProps {
  data: PostData[];
  categoryResult: string; 
}