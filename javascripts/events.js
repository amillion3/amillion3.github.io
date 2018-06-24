const firebaseApi = require('./firebaseApi');
const dom = require ('./dom');
const blog = require ('./blog');

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
      blog.setTotalPages(allBlogsArray.length);
      return allBlogsArray;
    })
    .then (allBlogsArray => {
      dom.buildBlogString(allBlogsArray, blog.getCurrentPage());
    })
    .catch(err => {
      console.error('Error getting blogs, ', err);
    });
};

const blogPagerEvents = () => {
  let p = 0;
  $('#container-blog').on('click', e => {
    p = 1 * e.target.dataset.currentpage; // set to current page
    if (e.target.id === 'blog-pager-previous') {
      if (p > 0) {
        blog.decreaseCurrentPage();
        callForBlogs();
      }
    } else if (e.target.id === 'blog-pager-next') {
      if (p <= ((blog.getTotalPages() * 1) - 1)) {
        blog.increaseCurrentPage();
        callForBlogs();
      }
    }
  });
};

//  Navbar click events
const addHideToAllDivs = () => {
  $('#container-home').addClass('hide');
  $('#outer-container-projects').addClass('hide');
  $('#container-resume').addClass('hide');
  $('#container-blog').addClass('hide');
  $('#container-contact').addClass('hide');
};
const navHome = () => {
  $('nav').on('click', '#nav-home', e => {
    addHideToAllDivs();
    $('#container-home').removeClass('hide');
  });
};
const navProjects = () => {
  $('nav').on('click', '#nav-projects', e => {
    callForProjects();
    addHideToAllDivs();
    $('#outer-container-projects').removeClass('hide');
  });
};
const navResume = () => {
  $('nav').on('click', '#nav-resume', e => {
    addHideToAllDivs();
    $('#container-resume').removeClass('hide');
  });
};
const navBlog = () => {
  $('nav').on('click', '#nav-blog', e => {
    callForBlogs();
    addHideToAllDivs();
    $('#container-blog').removeClass('hide');
  });
};
const navContact = () => {
  $('nav').on('click', '#nav-contact', e => {
    addHideToAllDivs();
    $('#container-contact').removeClass('hide');
  });
};
const mobileNavItemClicked = () => {
  $('.navbar-collapse a').click(() => {
    $('.navbar-collapse').collapse('hide');
  });
};
//  END  Navbar click events

// Contact page events
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
  $('#container-contact').on({
    mouseenter: e => {
      const target = e.target.id;
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
  }, '.contact-link');
};
// END contact page events

const bindEvents = () => {
  initialPageLoad();
  navHome();
  navProjects();
  navResume();
  navBlog();
  navContact();
  contactHover();
  contactLinkHover();
  mobileNavItemClicked();
  blogPagerEvents();
};

module.exports = {
  bindEvents,
};
