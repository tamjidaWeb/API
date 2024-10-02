function loadPost(){
fetch('https://jsonplaceholder.typicode.com/posts')
.then(res=> res.json())
.then(data => displayPost(data))
}

// 1. get the container where you want to add the new elements
//create child element
//3. set innerText or innerHTML






function displayPost(posts){
        const postContainer = document.getElementById('post-container');
        for(const post of posts){
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');
            console.log(post);
            postDiv.innerHTML =  `
            <h4>User- ${post.userId}</h4>
            <h5>Post: titel ${post.title}</h5>
            <p> Post Description ${post.body}</p>`;
            postContainer.appendChild(postDiv)
        }
    }


loadPost();