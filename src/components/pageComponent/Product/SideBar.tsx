import React, { useState } from "react";
import { SideBarComponent } from "../../style/ComponentStyle/SideBar.styled";

const SideBar: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({
    cat: false,
    dog: false,
    cow: false,
    Bufallow: false,
  });
  const [breedCheckedItems, setBreedCheckedItems] = useState<{
    [key: string]: boolean;
  }>({
    labrador: false,
    poodle: false,
    pug: false,
  });

  const [sortingOption, setSortingOption] = useState<string>("none");


  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCheckedItems({
      ...checkedItems,
      [name]: checked,
    });
  };
  const handleBreedCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, checked } = event.target;
    setBreedCheckedItems({
      ...breedCheckedItems,
      [name]: checked,
    });
  };

  const handleSortingOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSortingOption(event.target.value);
  };

  console.log(
    "Checked items:",
    Object.keys(checkedItems).filter((key) => checkedItems[key])
  );

  console.log(
    "Breed Checked Items:",
    Object.keys(breedCheckedItems).filter((key) => breedCheckedItems[key])
  );

  console.log("Sorting Option:", sortingOption);
  return (
    <SideBarComponent>
      {" "}
      <div className=' ms-3'>
      <div className='sidebar_Head'>Filter</div>
        <div className='sidebar mt-3'>Top Searched Pets</div>
        <div>
          <label className="radio-label">
            <input
              type='checkbox'
              name='cat'
              checked={checkedItems.cat}
              onChange={handleCheckboxChange}
            />
            Cat
          </label>
          <br />
          <label className="radio-label">
            <input
              type='checkbox'
              name='dog'
              checked={checkedItems.dog}
              onChange={handleCheckboxChange}
            />
            Dog
          </label>
          <br />
          <label className="radio-label">
            <input
              type='checkbox'
              name='cow'
              checked={checkedItems.cow}
              onChange={handleCheckboxChange}
            />
            Cow
          </label>
          <br />
          <label className="radio-label">
            <input
              type='checkbox'
              name='Buffallow'
              checked={checkedItems.Buffallow}
              onChange={handleCheckboxChange}
            />
            Buffallow
          </label>
        </div>
        <div className='sidebar mt-3'>Top Searched Breed</div>
        <div>
          {" "}
          <label className="radio-label">
            <input
              type='checkbox'
              name='labrador'
              checked={breedCheckedItems.labrador}
              onChange={handleBreedCheckboxChange}
            />
            Labrador
          </label>
          <br />
          <label className="radio-label">
            <input
              type='checkbox'
              name='poodle'
              checked={breedCheckedItems.poodle}
              onChange={handleBreedCheckboxChange}
            />
            Poodle
          </label>
          <br />
          <label className="radio-label">
            <input
              type='checkbox'
              name='pug'
              checked={breedCheckedItems.pug}
              onChange={handleBreedCheckboxChange}
            />
            Pug
          </label>
        </div>
        <div className='sidebar mt-3'>Price</div>
        <div> <label className="radio-label">
        <input
          type="radio"
          name="sortingOption"
          value="lowToHigh"
          checked={sortingOption === "lowToHigh"}
          onChange={handleSortingOptionChange}
        />
        Low to High
      </label>
      <br />
      <label className="radio-label">
        <input
          type="radio"
          name="sortingOption"
          value="highToLow"
          checked={sortingOption === "highToLow"}
          onChange={handleSortingOptionChange}
        />
        High to Low
      </label>
      <br />
      <label className="radio-label">
        <input
          type="radio"
          name="sortingOption"
          value="none"
          checked={sortingOption === "none"}
          onChange={handleSortingOptionChange}
        />
        None
      </label></div>
      </div>
    </SideBarComponent>
  );
};

export default SideBar;
