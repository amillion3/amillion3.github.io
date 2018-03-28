const writeToDom = (domString) => {
  const myDiv = document.getElementById("my-blog");
  myDiv.innerHTML += domString;
};

const createBlogPosts = (input) => {
  let domOutput = "";
  for (let i = 0; i < input.length; i++) {
    domOutput =
      `<h4>${input[i].title}</h4>
      <h5>${input[i].date}</h5>
      <p>${input[i].post}</p>`;
    writeToDom(domOutput);
  }
};

function xhrSuccess() {
  const data = JSON.parse(this.responseText);
  createBlogPosts(data.projects);
};

const xhrFailed = () => {
  console.log("XHR failed");
};

const startUpApplication = () => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener("load", xhrSuccess);
  myRequest.addEventListener("error", xhrFailed);
  myRequest.open("GET", "../db/blogs.json");
  myRequest.send();
};
startUpApplication();