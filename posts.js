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










