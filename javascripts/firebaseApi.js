let firebaseConfig = {};

const setConfig = input => { firebaseConfig = input; };

const getAllBlogs = () => {
  const blogsArray = [];
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.databaseURL}/blogs.json?orderBy="id"`,
    })
      .done(allBlogPostsObj => {
        Object.keys(allBlogPostsObj).forEach(fbKey => {
          allBlogPostsObj[fbKey].id = fbKey;
          blogsArray.push(allBlogPostsObj[fbKey]);
        });
        blogsArray.sort((a, b) => {
          return new Date(b.date) - new Date(a.date);
        });
        resolve(blogsArray);
      })
      .fail(error => {
        reject(error);
      });
  });
};

const getAllProjects = () => {
  const projectArray = [];
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.databaseURL}/projects.json`,
    })
      .done(allProjectObj => {
        if (allProjectObj !== null) {
          Object.keys(allProjectObj).forEach(fbKey => {
            allProjectObj[fbKey].id = fbKey;
            projectArray.push(allProjectObj[fbKey]);
          });
        }
        projectArray.sort((a, b) => {
          return a.projectId - b.projectId;
        });
        resolve(projectArray);
      })
      .fail(error => {
        reject(error);
      });
  });
};

module.exports = {
  getAllBlogs,
  getAllProjects,
  setConfig,
};
