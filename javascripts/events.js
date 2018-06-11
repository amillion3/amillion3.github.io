const firebaseApi = require('./firebaseApi');
const dom = require ('./dom');

const initialPageLoad = () => {
  $('#container-home').removeClass('hide');
};

const callForBlogs = () => {
  firebaseApi.getAllBlogs()
    .then(allBlogsArray => {
      dom.buildBlogString(allBlogsArray);
    })
    .catch(err => {
      console.error('Error getting blogs, ', err);
    });
};

//          Navbar click events
const navHome = () => {
  $('nav').on('click', '#nav-home', e => {
    $('#container-home').removeClass('hide');
    $('#container-projects').addClass('hide');
    $('#container-resume').addClass('hide');
    $('#container-blog').addClass('hide');
    $('#container-contact').addClass('hide');
  });
};
const navProjects = () => {
  $('nav').on('click', '#nav-projects', e => {
    $('#container-home').addClass('hide');
    $('#container-projects').removeClass('hide');
    $('#container-resume').addClass('hide');
    $('#container-blog').addClass('hide');
    $('#container-contact').addClass('hide');
  });
};
const navResume = () => {
  $('nav').on('click', '#nav-resume', e => {
    $('#container-home').addClass('hide');
    $('#container-projects').addClass('hide');
    $('#container-resume').removeClass('hide');
    $('#container-blog').addClass('hide');
    $('#container-contact').addClass('hide');
  });
};
const navBlog = () => {
  $('nav').on('click', '#nav-blog', e => {
    callForBlogs();
    $('#container-home').addClass('hide');
    $('#container-projects').addClass('hide');
    $('#container-resume').addClass('hide');
    $('#container-blog').removeClass('hide');
    $('#container-contact').addClass('hide');
  });
};
const navContact = () => {
  $('nav').on('click', '#nav-contact', e => {
    $('#container-home').addClass('hide');
    $('#container-projects').addClass('hide');
    $('#container-resume').addClass('hide');
    $('#container-blog').addClass('hide');
    $('#container-contact').removeClass('hide');
  });
};
//          END  Navbar click events

const bindEvents = () => {
  initialPageLoad();
  navHome();
  navProjects();
  navResume();
  navBlog();
  navContact();
};

module.exports = {
  bindEvents,
};
