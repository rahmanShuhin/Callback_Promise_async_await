const posts = [
  {
    title: "Post One",
    body: "This is post 1",
  },
  {
    title: "Post Two",
    body: "This is post 2",
  },
];
function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error:something went wrong");
      }
    }, 2000);
  });
}
// createPost({ title: "Post 4", body: "This is post 4" })
//   .then(getPosts)
//   .catch((err) => console.log(err));

//async await
async function init() {
  await createPost({ title: "Post 4", body: "This is post 4" });
  getPosts();
}
init();
// //async await with fetch
// async function fetchUser() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();
//   console.log(data);
// }
// fetchUser();

// //promise.all
// const promise1 = Promise.resolve("Hello world");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 2000, "Good Bye");
// });

// Promise.all([promise3, promise2, promise1]).then((val) => console.log(val));
