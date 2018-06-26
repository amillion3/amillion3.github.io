const blog = require ('./blog');

const printToDom = (inputString, divId) => {
  $(divId).html(inputString);
};

const buildIconStringForInsertion = input => {
  let output = '';
  const icons = input.techIcons;
  if (icons) {
    output += `<div class="panel-footer tech-icons text-center">`;
    icons.forEach(i => {
      if (i === 'browserify') {
        output += `<img src='https://www.andymillion.com/personal-portfolio/icons/browserify.svg' class='tech-icon-svg' alt='Browserify logo'>`;
      } else if (i === 'css3') {
        output += `<img src='https://www.andymillion.com/personal-portfolio/icons/css3.svg' class='tech-icon-svg' alt='CSS3 logo'>`;
      }  else if (i === 'es6') {
        output += `<img src='https://www.andymillion.com/personal-portfolio/icons/es6.svg' class='tech-icon-svg' alt='JavaScript ES6 logo'>`;
      } else if (i === 'firebase') {
        output += `<img src='https://www.andymillion.com/personal-portfolio/icons/firebase.svg' class='tech-icon-svg' alt='Firebase logo'>`;
      } else if (i === 'grunt') {
        output += `<img src='https://www.andymillion.com/personal-portfolio/icons/grunt.svg' class='tech-icon-svg' alt='Grunt logo'>`;
      } else if (i === 'html5') {
        output += `<img src='https://www.andymillion.com/personal-portfolio/icons/html5.svg' class='tech-icon-svg' alt='HTML5 logo'>`;
      } else if (i === 'jquery') {
        output += `<img src='https://www.andymillion.com/personal-portfolio/icons/jquery.svg' class='tech-icon-svg' alt='jQuery logo'>`;
      } else if (i === 'node') {
        output += `<img src='https://www.andymillion.com/personal-portfolio/icons/nodejs.svg' class='tech-icon-svg' alt='NodeJS logo'>`;
      }
    });
    output += `</div>`;
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
            </div>`;
    if (project.isLive) {
      output += `
        <div class="col-xs-12 col-sm-6">
          <a href="${project.liveDemoURL}" target="_blank" alt="Link to Live Demo" class="btn btn-info btn-projects">Live Demo</a>
        </div>`;
    }
    output += `
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

const buildPageArrays = (inputBlogs, currentPage) => {
  const blogsToPrint = [];
  const pageSize = blog.getBlogEntriesPerPage();
  inputBlogs.forEach((blog, i) => {
    if (i >= pageSize * (currentPage - 1) && i < pageSize * currentPage) {
      blogsToPrint.push(blog);
    }
  });
  return blogsToPrint;
};

const buildBlogString = (inputAllBlogs, currentPage) => {
  // const totalPages = (inputAllBlogs - (inputAllBlogs % 5)) / 5;
  const inputBlogs = buildPageArrays(inputAllBlogs, blog.getCurrentPage());
  let output = '<h2 class="text-center">Million\'s Musings</h2>';
  inputBlogs.forEach(blog => {
    output += `
    <div id='${blog.id}' class='row blog-entry'>
      <div class='blog-title'>
        <div class='text-left col-xs-6'>
          <h4 class='blog-entry-title'>${blog.title}</h4>
        </div>
        <div class='text-right col-xs-6'>
          <h5><em>${blog.date}</em></h5>
        </div>
      </div>
      <div class='row col-xs-12 blog-single-entry'>
        <p>${blog.post}</p>
      </div>
    </div>`;
  });
  output += `
  <nav aria-label="blog-pager">
    <ul class="pager">`;
  if (currentPage === 1) {
    output += `
      <li class="disabled"><a href="#" id='blog-pager-previous'><span aria-hidden="true">&larr;</span> Older</a></li>
      <li class="enabled"><a href="#" id='blog-pager-next' data-currentPage="${blog.getCurrentPage()}">Newer...<span aria-hidden="true">&rarr;</span></a></li>`;
  }
  else if (currentPage === blog.getTotalPages()) {
    output += `
      <li class="enabled"><a href="#" id='blog-pager-previous' data-currentPage="${blog.getCurrentPage()}"><span aria-hidden="true">&larr;</span>Older...</a></li>
      <li class="disabled"><a href="#" id='blog-pager-next'>Newer<span aria-hidden="true">&rarr;</span></a></li>`;
  } else {
    output += `
      <li class="enabled"><a href="#" id='blog-pager-previous' data-currentPage="${blog.getCurrentPage()}"><span aria-hidden="true">&larr;</span>Older...</a></li>
      <li class="enabled"><a href="#" id='blog-pager-next' data-currentPage="${blog.getCurrentPage()}">Newer...<span aria-hidden="true">&rarr;</span></a></li>`;
  }
  output += `
    </ul>
  </nav>`;
  printToDom(output, '#container-blog');
};

module.exports = {
  buildBlogString,
  buildProjectString,
};
