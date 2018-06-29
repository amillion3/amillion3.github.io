let currentPage = 1;
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

const getTotalPages = () => totalPages;

const setTotalPages = blogLength => {
  totalPages = Math.ceil(blogLength / blogEntriesPerPage);
};

module.exports = {
  getCurrentPage,
  getBlogEntriesPerPage,
  getTotalPages,
  setTotalPages,
  increaseCurrentPage,
  decreaseCurrentPage,
};
