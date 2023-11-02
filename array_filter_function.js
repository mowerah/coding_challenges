// using the array below and filter function, print the book with "Title 3" on the console.log  
let posts = [
    { title: 'Title 1', author: 'Noel' },
    { title: 'Title 2', author: 'Noel' },
    { title: 'Title 3', author: 'Leon' },
  ];

//arrow function
  // let allTheTitle3 = posts.filter(
  //   element => element.title == "Title 3"
  // )

//normal function non arrow
let allTheTitle3 = posts.filter(
  function (element) {
    return element.title == "Title 3"
  }
)

  console.log(allTheTitle3)