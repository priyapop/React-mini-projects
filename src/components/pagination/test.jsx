import { useState } from "react";
import Pagination from ".";
import './pagination.css'

function PaginationTest() {
  const dummyData = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
  }));

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  function handlePageChange(currentPage) {
    setCurrentPage(currentPage);
  }

  const indexofLastItem = currentPage * itemsPerPage;
  const indexofFirstItem = indexofLastItem - itemsPerPage;
  const currentListofitems = dummyData.slice(indexofFirstItem, indexofLastItem);

  console.log(currentListofitems);
  return (
    <div>
      <h1>Pagination</h1>
      <ul className="list-items">
        {currentListofitems.map((listItem) => (
          <li key={listItem.id}>{listItem.name}</li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(dummyData.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
export default PaginationTest;
