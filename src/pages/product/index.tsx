import React, { useEffect, useState } from "react";
import { ProductContainer } from "../../components/style/pageStyle/Product.styled";
import SideBar from "../../components/pageComponent/Product/SideBar";
import ProductView from "../../components/pageComponent/Product/ProductView";
import { Post } from "../../data/post";
import ReactPaginate from "react-paginate";

interface ProductProps {}

const Product: React.FC<ProductProps> = () => {
  const [currentPage, setCurrentPage] = useState<number>(0); // Changed to 0-based index
  const [itemsPerPage] = useState<number>(15); // Adjust as needed
  const [categoryResult, setCategoryResult] = useState<string>("");
  const [mate, setMate] = useState<any[]>([]);
  const [adopt, setAdopt] = useState<any[]>([]);

  useEffect(() => {
    const pathname = window.location.pathname;
    const words = pathname.split("/");
    const currentLastWord = words[words.length - 1];
    setCategoryResult(currentLastWord);
    setMate(Post.filter((el: any) => el.category === "mating"));
    setAdopt(Post.filter((el: any) => el.category === "adoption"));
  }, []);

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMate = mate.slice(indexOfFirstItem, indexOfLastItem);
  const currentAdopt = adopt.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <ProductContainer>
      <div className='row my-5 '>
        <div className='col-2 '>
          <SideBar />
        </div>
        <div className='col-10 '>
          {categoryResult === "mating" && (
            <>
              <ProductView data={currentMate} categoryResult={categoryResult} />
              <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                breakLabel={"..."}
                pageCount={Math.ceil(mate.length / itemsPerPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                activeClassName={"active"} // Apply this class to the active page
                pageClassName={"page-item"} // Optional: Wrap each page in a <li> element with this class
                pageLinkClassName={"page-link"} // Optional: Style the <a> elements inside each page
              />
            </>
          )}
          {categoryResult === "adoption" && (
            <>
              <ProductView
                data={currentAdopt}
                categoryResult={categoryResult}
              />
              <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                breakLabel={"..."}
                pageCount={Math.ceil(mate.length / itemsPerPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                activeClassName={"active"} // Apply this class to the active page
                pageClassName={"page-item"} // Optional: Wrap each page in a <li> element with this class
                pageLinkClassName={"page-link"} // Optional: Style the <a> elements inside each page
              />
            </>
          )}
        </div>
      </div>
    </ProductContainer>
  );
};

export default Product;
