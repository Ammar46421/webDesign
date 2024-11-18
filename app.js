function submitBlog() {
    const title = document.getElementById('addTitle').value;
    const content = document.getElementById('addContent').value;

    if (title === "" || content === "") {
        alert("Please fill in both the title and content.");
        return;
    }

   
    const blogPost = document.createElement("div");
    blogPost.classList.add("blogPost");

    blogPost.innerHTML = `
    <h3>${title}</h3>
    <p>${content}</p>
    <button class="editButton" onclick="editBlog(this)">Edit</button>
    <button class="deleteButton" onclick="deleteBlog(this)">Delete</button>`;

 
    document.getElementById("blogPost").appendChild(blogPost);

    document.getElementById("addTitle").value = ""; 
    document.getElementById("addContent").value = ""; 
};


function editBlog(button) {
    const blogPost = button.parentElement;
    const titleElement = blogPost.querySelector('h3');
    const contentElement = blogPost.querySelector('p');

    document.getElementById('addTitle').value = titleElement.innerText;
    document.getElementById('addContent').value = contentElement.innerText;

    blogPost.remove();

    button.innerText = "Save";
    button.setAttribute('onclick', 'saveBlog(this)');
}

function saveBlog(button) {
    const newTitle = document.getElementById('addTitle').value.trim();
    const newContent = document.getElementById('addContent').value.trim();

    if (newTitle === "" || newContent === "") {
        alert("Please fill in both the title and content.");
        return;
    }

    const blogPost = button.parentElement;
    const titleElement = blogPost.querySelector('h3');
    const contentElement = blogPost.querySelector('p');

    titleElement.innerText = newTitle;
    contentElement.innerText = newContent;

    document.getElementById('addTitle').value = "";
    document.getElementById('addContent').value = "";

    button.innerText = "Edit";
    button.setAttribute('onclick', 'editBlog(this)');
}

function deleteBlog(button) {
    const blogPost = button.parentElement;
    blogPost.remove();
}
