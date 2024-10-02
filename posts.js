function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=> res.json())
    .then(data=> displayPosts(data))
}
//get the element where you want to add the new elements

function displayPosts(posts){
    for(const post of posts){
        const postContainer = document.getElementById('posts-container')
        console.log(post)
    }

}
loadPosts();