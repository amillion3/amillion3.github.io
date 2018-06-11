
const printToDom = (inputString, divId) => {
  $(divId).html(inputString);
};

const buildBlogString = inputBlogs => {
  let output = '';
  inputBlogs.blogposts.forEach(blog => {
    output += `
    <div class='row blog-entry col-xs-offset-1 col-xs-10' id='${blog.id}'>
      <div>
        <div class='text-left col-xs-6'>
          <h4>${blog.title}</h4>
        </div>
        <div class='text-right col-xs-6'>
          <h5><em>${blog.date}</em></h5>
        </div>
      </div>
      <div class='row col-xs-12'>
        <p>${blog.post}</p>
      </div>
    </div>`;
  });
  printToDom(output, '#container-blog');
};

module.exports = {
  buildBlogString,
};
