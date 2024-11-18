document.addEventListener("DOMContentLoaded", () => {
    const blogForm = document.getElementById("blogForm");
    const blogPosts = document.getElementById("blogPosts");
  
    // Handle form submission
    blogForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent page reload
  
      // Get form values
      const title = document.getElementById("title").value;
      const content = document.getElementById("content").value;
      const author = document.getElementById("author").value;
  
      // Create a new blog post element
      const blogPost = document.createElement("div");
      blogPost.classList.add("blogPost");
  
      blogPost.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
        <p><strong>Author:</strong> ${author}</p>
        <hr />
      `;
  
      // Add the new blog post to the blog posts section
      blogPosts.appendChild(blogPost);
  
      // Clear the form
      blogForm.reset();
    });
  });
  