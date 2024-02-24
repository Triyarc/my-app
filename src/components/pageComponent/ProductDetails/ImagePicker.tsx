import React, { useState } from "react";
import { ImagePickerComponent } from "../../style/ComponentStyle/ImagePicker.styled";

interface Image {
  id: number;
  url: string;
  description: string;
}

const ImagePicker: React.FC = () => {
  const [images] = useState<Image[]>([
    {
      id: 1,
      url: "https://placedog.net/500/280?id=1",
      description: "Dog Image 1",
    },
    {
      id: 2,
      url: "https://placedog.net/500/280?id=2",
      description: "Dog Image 2",
    },
    {
      id: 3,
      url: "https://placedog.net/500/280?id=3",
      description: "Dog Image 3",
    },
    {
      id: 4,
      url: "https://placedog.net/500/280?id=4",
      description: "Dog Image 4",
    },
  ]);
  const [selectedImage, setSelectedImage] = useState<Image>(images[0]); // Set default to the first image

  const handleImageSelect = (image: Image) => {
    setSelectedImage(image);
  };
  return (
    <ImagePickerComponent>
      <div className='row'> 
        <div className='col-md-2'>
          <div className='row'>
            <div className='col-md-8'>
              <div className='d-flex flex-wrap justify-content-center'>
                {images.map((image) => (
                  <img
                    key={image.id}
                    src={image.url}
                    alt={image.description}
                    className='img-thumbnail mx-2 mb-5'
                    style={{
                      cursor: "pointer",
                      border:
                        selectedImage?.id === image.id
                          ? "2px solid blue"
                          : "none",
                    }}
                    onClick={() => handleImageSelect(image)}
                  />
                ))}
              </div>
            </div>
            <div className='col-md-4'>
                <div className=" vertical_line"></div>
            </div>
          </div>
        </div>
        <div className='col-md-10'>
          <div className='d-flex justify-content-center ms-5'>
            <div className='w-100'>
              {selectedImage && (
                <img
                  src={selectedImage.url}
                  alt={selectedImage.description}
                  className='img-fluid '
                  style={{
                    height: "420px",
                    border: "2px solid #D1D1D1",
                    borderRadius: "5px",
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </ImagePickerComponent>
  );
};

export default ImagePicker;
