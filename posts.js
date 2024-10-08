// function loadPosts(){
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res=> res.json())
//     .then(data=> displayPosts(data))
// }
//get the element where you want to add the new elements

// function displayPosts(posts){
//     for(const post of posts){
//         const postContainer = document.getElementById('posts-container')
//         console.log(post)
//     }

// }
// loadPosts();

function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=> res.json())
    .then(data=>displayPosts(data))

}
//get the element where you want to add the new elements
function displayPosts(posts){
    const postContainer = document.getElementById('posts-container');
    for(const post of posts){
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        console.log(post)
        postDiv.innerHTML = `
        <h5> User- ${post.userId}</h5>
        <h6>Post : title ${post.title}</h6>
        <p> Post Description: ${post.body} </p>
        `;
        postContainer.appendChild(postDiv);
    }
}
loadPosts();

function deletePost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
      });
      
}

function patchPost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH',
        body: JSON.stringify({
          title: 'foo',
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}


function createPost(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}









