//  constructor function to create project object
function BlogPost (id, title, date, post) {
  this.id = id;
  this.title = title;
  this.date = date;
  this.post = post;
}

var blogArray = [];  //an array of objects, each containing a blog post
blogArray.push(
  new BlogPost(
    "blog001",
    "Partially through week 2",
    "02/21/2018",
    "Well, NSS is well underway. We are into our second week and I am feeling overall positive about everything. Tonight I fully understood what the next 12 months will be like, BUSY! I am thankful I spent the past year preparing for bootcamp, this first couple weeks would feel pretty raw otherwise. I am comfortable with HTML and CSS, though not an expert. I’m hoping that day-to-day use will let it become muscle memory. For now, I feel like I’m having to think a bit too long before tackling the issue at hand. I must be patient, I am still learning (and always will). For me, CSS is always a bit tricky. Since there is more than one way to handle styling, it can be tricky to figure out the best way or the most maintainable way. I want clean code that will be easy to pick up in 3 months time and not be totally lost. As well, there are so many ins and outs and little gotchas with CSS. For example, in my head, I’ll sometimes think it’s text-size: to adjust the font size. No, it’s font-size! In time, I’m sure those little things will go away and I won’t think twice when I adjust the size of the font. Something we haven’t touched on much yet is responsive design. Developing mobile-first is really interesting and changes how one approaches the CSS. I am interested in diving more into this. We also discussed Git/GitHub the past two nights. Boy am I glad I started learning and messing around with this technology months ago. It’s kind of abstract and, “Why would I need this?” at first. Of course, this version control system (VCS) is invaluable to developers and learning it is a fundamental skill. So far, we haven’t touched on anything too far out of what I already learned. One thing I did learn, I have already developed one bad habit with the way I treat my master branch! I frequently pushed directly to the master, instead of doing a pull request. Tsk tsk! Using Git means using the command line. My roommate from college insisted I run Linux (Ubuntu) instead of windows. That was an interesting experiment and gave me fantastic exposure to the command line. Feeling at least partially comfortable in the command line has been incredibly helpful in the past few weeks and especially in NSS. Finally, our class and instructors seem like a really good group so far. I am constantly laughing or smiling during lectures. People sitting around me seem excited to be there and eager to learn. I hope this energy continues and we can feed off each other for the next several months."
  )
);
blogArray.push(
  new BlogPost(
    "blog002",
    "CSS Zen Garden and Git/GitHub for days",
    "02/28/2018",
    "CSS/HTML are complete and now, it’s time for JavaScript! Alright! I’m really looking forward to JS and everything else. After a little review, it should be all fresh things to learn. 2/28/18 Update Well the “little review” part was right! We jumped right into JS, playing with strings one night and arrays the next. We also dealt with regular expressions which are pretty great. I can also see how regular expressions are a huge pain! So far, my favorite part about JS is how powerful it can be with just a little knowledge. The ability to iterate through arrays is incredible and allows us to churn through a lot of data in a short time. Some of the solutions to our challenges (think, algorithm challenges) are really quite clever. I’m looking forward to further looping methods and some functional programming (map, reduce, filter). I have traditionally struggled with these aspects of JS. I’m hopeful NSS and our wonderful instructors can set me on the right path with the proper understanding. Today (2/26/18), our CSS Zen Garden Assignments were due. The goal was to take some CSS Zen Garden design and recreate the HTML and CSS. Our study group tackled this exercise, partially as a team and the rest as an individual. As a team we discussed the HTML structure and appropriate HTML semantic tags. Once we agreed on the HTML, we all sourced the same images (2 total) and began to code away. I chose to code all the HTML first and then tackle the CSS last. I have always fought with CSS (who hasn’t, really?), but this was a fairly smooth styling. Perhaps the muscle memory is starting to be built. I tried to be deliberate and clean with both HTML and CSS. I feel I was reasonably successful at both, with CSS being the more challenging of the two. We used a different header image and we did not use the same font. Another assignment we had was: Create 25 GitHub repos (5 a day for 5 days) Create and push the README.md to the master branch Create a ‘setup’ branch Create HTML boilerplate and CSS to turn the background red Commit changes to Git and push changes to GitHub  Create a pull request, review code, and approve PR if possible Phew! It took a very long time the first day to do all these. By day 5, it was natural and normal. A bit tedious, but it really drove home the basic cycle of Git/GitHub usage. Today at work, I listened to numerous videos discussing rebasing, squashing commits, and ‘git difftool’. These are more advanced topics and I’m still wrapping my head around them. Late yesterday, a local developer noticed my seemingly endless stream of ‘test’ repos and commits. It made for a good laugh!"
  )
);
blogArray.push(
  new BlogPost(
    "blog003",
    "Algorithm Challenges",
    "03/07/2018",
    "JavaScript. Well, it's been a challenging past few days. We had 10 array challenges assigned to us. They were not easy, at least for our class. They certainly dumped us off into the deep end to see how we all fared. I think some people did pretty well and other people were paralyzed with a sense of 'where do I begin?!'. I am fortunate that my time on freeCodeCamp exposed me to such word problems, so it was not immediately overwhelming. This experience gave me some time to think more like a programmer. For example, wrapping my head around nested for loops wasn't too challenging. I still need a lot of practice though, as I tend to come up with extremely complex solutions when there are better and more simple solutions. A daily dose of codewars or something similar would be very beneficial to me. Monday's class left my head spinning. Lauren went through 6 code challenges, as completed by our study groups. After each challenge, she refactored our code in a more efficient manner. In most cases, this involved higher order functions. Higher order functions include: forEach() - Similar to a for loop, but easier to read. Supposedly much, much slower though. (https://coderwall.com/p/kvzbpa/don-t-use-array-foreach-use-for-instead) filter() - Accepts a callback function and executes a set of instructions to determine to keep or delete data in an array. reduce() - Accepts a callback function that summarizes one array into a single variable. map() - Accepts a callback function that transforms each item of an array in the same manner (for example, doubling each function). I found this short set of videos from Fun Fun Function to be pretty helpful in understanding these better. https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84 In the videos, he walks through the each higher order function using a traditional for() loop and then refactors it using the filter() or map() and compares them. I found it very helpful to more completely understand them. As well, he touches on arrrow functions and shows how much cleaner and shorter the code can be, it's pretty incredible! I know these higher order functions and functional programming is very important, so I am going to focus on learning and implementing these where it makes sense. I think it will be difficult at first, but worth it in the long run."
  )
);
blogArray.push(
  new BlogPost(
    "blog004",
    "Language Translator and Planning on GitHub",
    "03/15/2018",
    "Our project from last week was to create a basic language translator. We did the planning as a group, but coded everything individually. It was my first experience using GitHub's Project page. It was a lot more work than I was expecting! I understand why that or a Kanboard is valuable though. As Zoe said, a good project is 70% planning and 30% coding. Breaking down every single step in great detail really makes things easy to follow and easy to delegate. It's also made me realize how 'Wild West' my planning has been in the past. I usually just have an idea in my head, maybe a quick sketch and then I jump right in. It certainly is more fun to go straight to coding, but I find myself without a set path or set of features to tackle.  Another great thing about attending NSS is great opportunity to work with a team and a team that rotates about every 5 weeks. I'll get to know all my cohort members quite well and everyone brings a little something different to the team. On top of that, it's a great opportunity to learn how to code with a team. All of my coding so far has been individual, while most jobs require you work as a team with other devs, as well as management and other roles. I certainly need practice and exposure to working effectively as a team member. My first study group has been pretty great and we have had lots of laughs.I will dive into this more next blog post, but working with Git/GitHub as a team is a much different experience than working solo! I feel comfortable doing my own projects with no other contributors, but working as a team is honestly, a little uncomfortable right now! I want my code to be well understood and not make people scratch their heads. It's a new element and something we will get into more with our study group and lab time this weekend."
  )
);

function writeToDom(domString) {
  var myDiv = document.getElementById("my-blog");
  myDiv.innerHTML += domString;
}

function createBlogPosts() {
  var domOutput = "";
  blogArray.forEach(function(element) {
    domOutput =
      "<h4>" + element.title + "</h4>" +
      "<h5>" + element.date + "</h5>" +
      "<p>" + element.post + "</p>";
    writeToDom(domOutput);
  });
}

createBlogPosts();