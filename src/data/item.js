import dog from '../assets/images/dog.png';

export const data = [
  {
    Users: {
      id: 1,
      password: 'bcrypt',
      name: 'Thaarun',
      age: 25,
      date_of_birth: '25/12/1997',
      gender: 'male',
      contact: '9678678722',
      profile_Image: '---',
      region: 'india',
      state: 'tamil nadu',
      district: 'coimbatore',
      pincode: '641026',
      description:
        "psum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
      Active_post: 2,
      total_post: 1,
      post: [
        {
          id: 1,
          post_status: 'active',
          category: 'mating',
          price: null,
          pet: 'dog',
          breed: 'mustif',
          age: '3 month',
          gender: 'male',
          color: 'white',
          weight: '5 kg',
          height: '2.1 ft',
          description:
            "psum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
          thumbnail_image: '--',
          images: {
            image_one: dog,
            image_two: '---',
            birth_certificate: {
              image_one: '---',
            },
          },
          suggestion: [{ idea: 'no' }],
          location: {
            address: '28, raj nagar, selvapuram, coimbatore-26',
          },
          posted_on: '02/09/2021',
        },
        {
          id: 2,
          post_status: 'active',
          category: 'selling',
          price: 6000,
          pet: 'dog',
          breed: 'mustif',
          age: '3 month',
          gender: 'male',
          color: 'white',
          weight: '5 kg',
          height: '2.1 ft',
          description:
            "psum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
          thumbnail_image: '--',
          images: {
            image_one: dog,
            image_two: '---',
            birth_certificate: {
              image_one: '---',
            },
          },
          posted_on: '02/09/2021',
        },
        {
          id: 3,
          post_status: 'disable',
          category: 'selling',
          price: 6000,
          pet: 'dog',
          breed: 'mustif',
          age: '3 month',
          gender: 'male',
          color: 'white',
          weight: '5 kg',
          height: '2.1 ft',
          description:
            "psum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
          thumbnail_image: '--',
          images: {
            image_one: dog,
            image_two: '---',
            birth_certificate: {
              image_one: '---',
            },
          },
          posted_on: '02/07/2021',
        },
      ],
    },
  },
];
