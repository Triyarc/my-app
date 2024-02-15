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