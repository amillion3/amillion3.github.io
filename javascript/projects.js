//  constructor function to create project object
function Project (id, title, imageURL, description, githubURL) {
  this.id = id;
  this.title = title;
  this.imageURL = imageURL;
  this.description = description;
  this.githubURL = githubURL;
}

let projectArray = [];  //an array of objects, each containing a project
projectArray.push(
  new Project(
    "project1",
    "Elephant",
    "./img/1.jpg",
    "Wow. Ben Franklin, you're really kind of a sleazebag. I don't talk trash, I talk smack. They're totally different. I never smile if I can help it, Showing one's teeth is a submission signal in primates. Someone smiles at me, all I see is a chimpanzee begging for its life.",
    ""
  )
);
projectArray.push(
  new Project(
    "project2",
    "Duckling",
    "./img/2.jpg",
    "Dwight you ignorant slut. Sometimes you just have to be the boss of dancing. Saddle shoes with denim? I will literally call Protective Services. I DECLARE BANKRUPTCY! In an ideal world I would have all ten fingers on my left hand and the right one would just be left for punching.",
    ""
  )
);
projectArray.push(
  new Project(
    "project3",
    "Hedgehog",
    "./img/3.jpg",
    "Crazy world. Lotta smells. I'll be the Number Two guy here in Scranton in six weeks. How? Name repetition, personality mirroring, and never breaking off a handshake. I'm always thinking one step ahead. Like a carpenter that makes stairs. DID I STUTTER?",
    ""
  )
);
projectArray.push(
  new Project(
    "project4",
    "Panda",
    "./img/4.jpg",
    "What is wrong with these people? They have no willpower. I went -- I once went 28 years without having sex. And then again for seven years. I don't understand the desire to push sweet potato fries on me. I just want regular fries. Oh God, my mind is going a mile an hour.",
    ""
  )
);
projectArray.push(
  new Project(
    "project5",
    "Sloth",
    "./img/5.jpg",
    "If I had a gun with two bullets and I was in a room with Hitler, Bin Laden, and Toby, I would shoot Toby twice. Just pretend like we're talking until the cops leave. Dwight you ignorant slut. I love catching people in the act. That's why I always whip open doors.",
    ""
  )
);
projectArray.push(
  new Project(
    "project6",
    "Fox",
    "./img/6.jpg",
    "There is no such thing as an appropriate joke, that's why it's a joke. You couldn't handle my undivided attention. Every word out of your mouth is like the squawk of an ugly pelican. I feel God in this Chili's. I sprout mung beans on a damp paper towel in my desk drawer. Very nutritious. But they smell like death.",
    ""
  )
);

const writeToDom = (domString) => {
  const myDiv = document.getElementById("my-projects");
  myDiv.innerHTML += domString;
};

const createProjectCards = () => {
  let toDom = "";
  projectArray.forEach(function(element) {
    toDom =
      `<article class="projects-wrapper">
        <section>
            <img src="${element.imageURL}">
            <h4>${element.title}</h4>
            <p>${element.description}</p>
            <a href="${element.githubURL}">project link</a>
        </section>
      </article>`;
    writeToDom(toDom);
  });
};

createProjectCards();