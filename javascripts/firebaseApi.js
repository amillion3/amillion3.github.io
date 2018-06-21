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
        allProjectObj = allProjectObj.projects;
        if (allProjectObj !== null) {
          Object.keys(allProjectObj).forEach(fbKey => {
            allProjectObj[fbKey].id = fbKey;
            projectArray.push(allProjectObj[fbKey]);
          });
        }
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
