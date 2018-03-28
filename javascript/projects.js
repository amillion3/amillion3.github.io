const writeToDom = (domString) => {
  const myDiv = document.getElementById("my-projects");
  myDiv.innerHTML += domString;
};

const createProjectCards = (input) => {
  console.log("createProjectCards ",input);
  let toDom = "";
  for (let i = 0; i < input.length; i++) {
    toDom =
      `<article class="projects-wrapper">
        <section>
            <img src="${input[i].imageURL}">
            <h4>${input[i].title}</h4>
            <p>${input[i].description}</p>
            <a href="${input[i].githubURL}">project link</a>
        </section>
      </article>`;
    writeToDom(toDom);
  };
};

function xhrSuccess() {
  const parsedData = JSON.parse(this.responseText);
  createProjectCards(parsedData.projects);
};

const xhrFailed = () => {
  console.log("XHR FAILED");
};

const startUpApplication = () => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener("load", xhrSuccess);
  myRequest.addEventListener("error", xhrFailed);
  myRequest.open("GET", "../db/projects.json");
  myRequest.send();
};
startUpApplication();