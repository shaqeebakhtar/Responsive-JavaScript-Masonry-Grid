const grid = document.querySelector(".grid");

function generateGrid(columns, posts) {
  grid.innerHTML = "";

  // column container for all the columns with posts
  let columnWrapper = {};

  // creating the columns
  for (let index = 0; index < columns; index++) {
    columnWrapper[`column${index}`] = [];
  }
  console.log(columnWrapper);

  // adding the posts to each column
  for (let index = 0; index < posts.length; index++) {
    // using this method so each post get stored sequentially from left to right (instead of top to bottom in each column)
    const columnIndex = index % columns;
    columnWrapper[`column${columnIndex}`].push(posts[index]);
    // console.log(columnIndex);
  }

  // adding the posts to the DOM
  for (let index = 0; index < columns; index++) {
    let columnPosts = columnWrapper[`column${index}`];
    let columnDiv = document.createElement("div");
    columnDiv.classList.add("column");

    columnPosts.forEach((post) => {
      let postDiv = document.createElement("div");
      postDiv.classList.add("post");

      let image = document.createElement("img");
      image.src = post.postImage;

      let overlayDiv = document.createElement("div");
      overlayDiv.classList.add("overlay");
      let postCount = document.createElement("h3");
      postCount.classList.add("post-count");
      postCount.innerText = post.id;

      overlayDiv.appendChild(postCount);
      postDiv.append(image, overlayDiv);
      columnDiv.appendChild(postDiv);
    });
    grid.appendChild(columnDiv);
  }
  console.log(columnWrapper);
}

let screenSize = window.innerWidth;
// console.log(screenSize);

// making it responsive
window.addEventListener("resize", () => {
  imageIndex = 0;

  if (window.innerWidth < 600 && screenSize > 600) {
    generateGrid(1, posts);
  } else if (
    window.innerWidth >= 600 &&
    window.innerWidth < 1000 &&
    (screenSize < 600 || screenSize > 1000)
  ) {
    generateGrid(2, posts);
  } else if (window.innerWidth >= 1000 && screenSize < 1000) {
    generateGrid(4, posts);
  }
  screenSize = window.innerWidth;
});

if (screenSize < 600) {
  generateGrid(1, posts);
} else if (screenSize >= 600 && screenSize < 1000) {
  generateGrid(2, posts);
} else {
  generateGrid(4, posts);
}
