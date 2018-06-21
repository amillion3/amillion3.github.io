
const printToDom = (inputString, divId) => {
  $(divId).html(inputString);
};

const buildIconStringForInsertion = input => {
  let output = '';
  const icons = input.techIcons;

  if (icons) {
    icons.forEach(i => {
      if (i === 'browserify') {
        output += `<img src='../img/icons/browserify.svg' class='tech-icon-svg' alt='Browserify logo'>`;
      } else if (i === 'css3') {
        output += `<img src='../img/icons/css3.svg' class='tech-icon-svg' alt='CSS3 logo'>`;
      }  else if (i === 'es6') {
        output += `<img src='../img/icons/es6.svg' class='tech-icon-svg' alt='JavaScript ES6 logo'>`;
      } else if (i === 'firebase') {
        output += `<img src='../img/icons/firebase.svg' class='tech-icon-svg' alt='Firebase logo'>`;
      } else if (i === 'grunt') {
        output += `<img src='../img/icons/grunt.svg' class='tech-icon-svg' alt='Grunt logo'>`;
      } else if (i === 'html5') {
        output += `<img src='../img/icons/html5.svg' class='tech-icon-svg' alt='HTML5 logo'>`;
      } else if (i === 'jquery') {
        output += `<img src='../img/icons/jquery.svg' class='tech-icon-svg' alt='jQuery logo'>`;
      } else if (i === 'node') {
        output += `<img src='../img/icons/nodejs.svg' class='tech-icon-svg' alt='NodeJS logo'>`;
      }
    });
    return output;
  }
  return output;
};

const buildProjectString = inputProjects => {
  let output = '';
  inputProjects.forEach((project, index) => {
    if (index % 3 === 0) {
      output += '<div class="row">';
    }
    output += `
    <div id='${project.id}' class='project col-xs-offset-1 col-xs-10 col-md-offset-0 col-md-4'>
      <div class="panel panel-default">
        <div class="panel-heading">
          <h2 class="panel-title text-center"><strong>${project.title}</strong></h2>
        </div>
        <div class="panel-body">
          <div class='row'>
            <img class="text-center img-projects img-responsive" src="${project.imageURL}" alt="Project picture, ${project.title}">
          </div>
          <div class="row div-projects">
            <p>${project.description}</p>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-6">
              <a href="${project.githubURL}" target="_blank" alt="Link to GitHub" class="btn btn-info btn-projects">GitHub</a>
            </div>
            <div class="col-xs-12 col-sm-6">
              <a href="${project.liveDemoURL}" target="_blank" alt="Link to Live Demo" class="btn btn-info btn-projects">Live Demo</a>
            </div>
          </div>
        </div>
        ${buildIconStringForInsertion(project)}
      </div>
    </div>
    `;
    index % 3 === 2 ? output += `</div>` : output += '';
  });
  printToDom(output, '#container-projects');
};

const buildBlogString = inputBlogs => {
  let output = '';
  inputBlogs.blogposts.forEach(blog => {
    output += `
    <div id='${blog.id}' class='row blog-entry col-xs-offset-1 col-xs-10'>
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
  buildProjectString,
};
