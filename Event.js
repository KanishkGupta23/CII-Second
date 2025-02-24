document.addEventListener("DOMContentLoaded", function () {
    const postForm = document.getElementById("postForm");
    const postsList = document.getElementById("postsList");
    const postDomain = document.getElementById("postDomain");
    const customDomainField = document.getElementById("customDomainField");
    const customDomainInput = document.getElementById("customDomain");

    // Show or hide custom domain input
    postDomain.addEventListener("change", function () {
        if (postDomain.value === "Other") {
            customDomainField.classList.remove("hidden");
            customDomainInput.required = true;
        } else {
            customDomainField.classList.add("hidden");
            customDomainInput.required = false;
            customDomainInput.value = "";
        }
    });

    // Form submission
    postForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const title = document.getElementById("postTitle").value;
        const description = document.getElementById("postDescription").value;
        let domain = postDomain.value;
        const imageFile = document.getElementById("postImage").files[0];

        // If "Other" is selected, use custom domain
        if (domain === "Other") {
            domain = customDomainInput.value;
        }

        // Read image as data URL
        if (imageFile) {
            const reader = new FileReader();
            reader.onload = function (event) {
                addPost(title, description, domain, event.target.result);
            };
            reader.readAsDataURL(imageFile);
        } else {
            alert("Please upload an image.");
        }

        // Reset form
        postForm.reset();
        customDomainField.classList.add("hidden");
    });

    // Function to add post to the page
    function addPost(title, description, domain, imageUrl) {
        const postCard = document.createElement("div");
        postCard.classList.add("post-card");

        postCard.innerHTML = `
            <img src="${imageUrl}" alt="Post Image">
            <h3>${title}</h3>
            <p><strong>Domain:</strong> ${domain}</p>
            <p>${description}</p>
        `;

        postsList.prepend(postCard);
    }

});

document.addEventListener("DOMContentLoaded", function () {
    const postsList = document.getElementById("postsList");

    const dummyPosts = [
        {
            title: "Enhancing Cybersecurity Audits",
            description: "Explore how industries can implement robust cybersecurity audits to protect sensitive data and prevent cyber threats.",
            domain: "Audits",
            imageUrl: "https://www.1stformationsblog.co.uk/wp-content/uploads/2021/10/shutterstock_505066678.jpg"
        },
        {
            title: "AI-Powered Research in Healthcare",
            description: "A deep dive into how artificial intelligence is transforming medical research, improving diagnostics, and advancing treatments.",
            domain: "Research Paper",
            imageUrl: "https://www.brainvire.com/blog/wp-content/uploads/2024/02/ai-opportunities-in-healthcare-1024x492.png"
        },
        {
            title: "Data Analytics in Business Strategy",
            description: "Join our workshop to understand how data analytics is reshaping business decision-making and improving market predictions.",
            domain: "Workshop",
            imageUrl: "https://www.velvetech.com/wp-content/uploads/2023/06/data-analytics-strategy-fb.png"
        }
    ];

    // Function to add posts
    function addPost(title, description, domain, imageUrl) {
        const postCard = document.createElement("div");
        postCard.classList.add("post-card");

        postCard.innerHTML = `
            <img src="${imageUrl}" alt="Post Image">
            <h3>${title}</h3>
            <p><strong>Domain:</strong> ${domain}</p>
            <p>${description}</p>
        `;

        postsList.appendChild(postCard);
    }

    // Loop through dummy posts and add them to the page
    dummyPosts.forEach(post => {
        addPost(post.title, post.description, post.domain, post.imageUrl);
    });
});

