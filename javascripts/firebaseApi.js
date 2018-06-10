let firebaseConfig = {};

const setConfig = input => { firebaseConfig = input; };

const getAllBlogs = () => {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.databaseURL}/blogs.json`,
    })
      .done(allBlogPostsObj => {
        resolve(allBlogPostsObj);
      })
      .fail(error => {
      reject(error);
    });
  })
};