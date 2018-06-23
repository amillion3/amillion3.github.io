const firebaseApi = require('./firebaseApi');
const dom = require ('./dom');

const initialPageLoad = () => {
  $('#container-home').removeClass('hide');
};

const callForProjects = () => {
  firebaseApi.getAllProjects()
    .then(allProjectsArray => {
      dom.buildProjectString(allProjectsArray);
    })
    .catch(err => {
      console.error('Error getting projects, ', err);
    });
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

//  Navbar click events
const navHome = () => {
  $('#nav').on('click', '#nav-home', e => {
    $('#container-home').removeClass('hide');
    $('#outer-container-projects').addClass('hide');
    $('#container-resume').addClass('hide');
    $('#container-blog').addClass('hide');
    $('#container-contact').addClass('hide');
  });
};
const navProjects = () => {
  $('nav').on('click', '#nav-projects', e => {
    callForProjects();
    $('#container-home').addClass('hide');
    $('#outer-container-projects').removeClass('hide');
    $('#container-resume').addClass('hide');
    $('#container-blog').addClass('hide');
    $('#container-contact').addClass('hide');
  });
};
const navResume = () => {
  $('nav').on('click', '#nav-resume', e => {
    $('#container-home').addClass('hide');
    $('#outer-container-projects').addClass('hide');
    $('#container-resume').removeClass('hide');
    $('#container-blog').addClass('hide');
    $('#container-contact').addClass('hide');
  });
};
const navBlog = () => {
  $('nav').on('click', '#nav-blog', e => {
    callForBlogs();
    $('#container-home').addClass('hide');
    $('#outer-container-projects').addClass('hide');
    $('#container-resume').addClass('hide');
    $('#container-blog').removeClass('hide');
    $('#container-contact').addClass('hide');
  });
};
const navContact = () => {
  $('nav').on('click', '#nav-contact', e => {
    $('#container-home').addClass('hide');
    $('#outer-container-projects').addClass('hide');
    $('#container-resume').addClass('hide');
    $('#container-blog').addClass('hide');
    $('#container-contact').removeClass('hide');
  });
};
//  END  Navbar click events

const contactHover = () => {
  $(document).on({
    mouseenter: e => {
      const target = e.target.id;
      if (target === 'icon-phone') {
        $('#contact-phone').addClass('contact-hover-active');
      } else if (target === 'icon-email') {
        $('#contact-email').addClass('contact-hover-active');
      } else if (target === 'icon-github') {
        $('#contact-github').addClass('contact-hover-active');
      } else if (target === 'icon-twitter') {
        $('#contact-twitter').addClass('contact-hover-active');
      } else if (target === 'icon-linkedin') {
        $('#contact-linkedin').addClass('contact-hover-active');
      }
    },
    mouseleave: () => {
      $('#contact-phone').removeClass('contact-hover-active');
      $('#contact-email').removeClass('contact-hover-active');
      $('#contact-github').removeClass('contact-hover-active');
      $('#contact-twitter').removeClass('contact-hover-active');
      $('#contact-linkedin').removeClass('contact-hover-active');
    },
  }, '.icon');
};

const contactLinkHover = () => {
  $(document).on({
    mouseenter: e => {
      const target = e.target.id;
      console.error(target);
      if (target === 'contact-phone') {
        $('#icon-phone').addClass('link-hover-active');
      } else if (target === 'contact-email') {
        $('#icon-email').addClass('link-hover-active');
      } else if (target === 'contact-github') {
        $('#icon-github').addClass('link-hover-active');
      } else if (target === 'contact-twitter') {
        $('#icon-twitter').addClass('link-hover-active');
      } else if (target === 'contact-linkedin') {
        $('#icon-linkedin').addClass('link-hover-active');
      }
    },
    mouseleave: () => {
      $('#icon-phone').removeClass('link-hover-active');
      $('#icon-email').removeClass('link-hover-active');
      $('#icon-github').removeClass('link-hover-active');
      $('#icon-twitter').removeClass('link-hover-active');
      $('#icon-linkedin').removeClass('link-hover-active');
    },
  }, '#contact-links');
};

const bindEvents = () => {
  initialPageLoad();
  navHome();
  navProjects();
  navResume();
  navBlog();
  navContact();
  contactHover();
  contactLinkHover();
};

module.exports = {
  bindEvents,
};
