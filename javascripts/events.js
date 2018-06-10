
const navHome = () => {
  $('nav').on('click', '#nav-home', e => {
    $('#nav-home').removeClass('hide');
    $('#nav-projects').addClass('hide');
    $('#nav-resume').addClass('hide');
    $('#nav-blog').addClass('hide');
    $('#nav-contact').addClass('hide');
  });
};

const bindEvents = () => {
  navHome();
  navProjects();
  navResume();
  navBlog();
  navContact();
};

module.exports = {
  bindEvents,
};
