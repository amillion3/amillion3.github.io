let currentPage = 0;
const blogEntriesPerPage = 5;
let totalPages = 1;

const increaseCurrentPage = () => {
  currentPage++;
};

const decreaseCurrentPage = () => {
  currentPage--;
};

const getCurrentPage = () => currentPage;

const getBlogEntriesPerPage = () => blogEntriesPerPage;

const getTotalPages = blogLength => {
  totalPages = (blogLength - (blogLength % blogEntriesPerPage)) / blogEntriesPerPage;
  return totalPages;
};

module.exports = {
  getCurrentPage,
  getBlogEntriesPerPage,
  getTotalPages,
  increaseCurrentPage,
  decreaseCurrentPage,
};
