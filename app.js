function submitBlog() {
    const title = document.getElementById("title") ? document.getElementById("title").value : "";
    const content = document.getElementById("content") ? document.getElementById("content").value : "";

    if (title === "" || content === "") {
        alert("Please fill in both the title and content.");
        return;
    }

    const blogPost = document.createElement("div");
    blogPost.classList.add("blogPost");
    blogPost.innerHTML = `
      <h3>${title}</h3>
      <p>${content}</p>
      <button class="deleteButton" onclick="deleteBlog(this)">Delete</button>
    `;

    const blogPostsSection = document.getElementById("blogPosts");
    blogPostsSection.appendChild(blogPost);
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
}


function deleteBlog(button) {
    const blogPost = button.parentElement;
    blogPost.remove();
}
