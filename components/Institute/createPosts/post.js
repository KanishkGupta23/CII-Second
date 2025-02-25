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

    function updateDateTime() {
        const now = new Date();
        const options = {
          weekday: "long",
          day: "2-digit",
          month: "long",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        };
        document.getElementById("date-time").textContent = now.toLocaleDateString("en-GB", options);
    }
    
    // Update time every second
    setInterval(updateDateTime, 1000);
    updateDateTime();

    // Form submission
    postForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const title = document.getElementById("postTitle").value;
        const description = document.getElementById("postDescription").value;
        let domain = postDomain.value;
        const deliverablesRewards = document.getElementById("deliverablesRewards").value;
        const imageFile = document.getElementById("postImage").files[0];

        // If "Other" is selected, use custom domain
        if (domain === "Other") {
            domain = customDomainInput.value;
        }

        // Read image as data URL
        if (imageFile) {
            const reader = new FileReader();
            reader.onload = function (event) {
                addPost(title, description, domain, deliverablesRewards, event.target.result);
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
    function addPost(title, description, domain, deliverablesRewards, imageUrl) {
        const postCard = document.createElement("div");
        postCard.classList.add("post-card");

        postCard.innerHTML = `
            <img src="${imageUrl}" alt="Post Image">
            <h3>${title}</h3>
            <p><strong>Domain:</strong> ${domain}</p>
            <p>${description}</p>
            <p><strong>Deliverables & Rewards:</strong> ${deliverablesRewards}</p>
        `;

        postsList.prepend(postCard);
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const postsList = document.getElementById("postsList");

   
    const dummyPosts = [
        {
            "title": "Innovating Smart Campus Solutions",
            "description": "Our institute is looking for industry partners to develop smart campus solutions using IoT, AI, and cloud computing.",
            "domain": "Innovation & Research",
            "imageUrl": "https://atechindia.com/wp-content/uploads/2023/09/Smart-Campus-Solutions-India.jpg",
            "deliverables": "Prototype development, research papers, and technology integration report.",
            "rewards": "Industry recognition, co-authorship on research papers, and internship opportunities for students."
        },
        {
            "title": "AI-Based Student Performance Analytics",
            "description": "We invite industry experts to collaborate on a project to analyze student performance using AI-driven insights and predictive analytics.",
            "domain": "Education & AI",
            "imageUrl": "https://www.xenonstack.com/hs-fs/hubfs/predictive-analytic.png?width=1280&height=720&name=predictive-analytic.png",
            "deliverables": "AI model prototype, dashboard for student insights, and whitepaper on AI in education.",
            "rewards": "Collaboration credits, access to research findings, and networking with top academic researchers."
        },
        {
            "title": "Green Energy Initiatives in Campuses",
            "description": "Seeking industry partners to implement sustainable energy solutions in educational institutions and reduce carbon footprints.",
            "domain": "Sustainability & Environment",
            "imageUrl": "https://environment.co/wp-content/uploads/sites/4/2022/04/Facebook-8-Green-Initiatives-for-College-Campuses.jpg",
            "deliverables": "Feasibility study, solar energy implementation plan, and green energy awareness programs.",
            "rewards": "Recognition in sustainability reports, government project collaboration opportunities, and branding in academic publications."
        }
    ]
    

    // Function to add posts
    function addPost(title, description, domain, imageUrl, deliverables, rewards) {
        const postCard = document.createElement("div");
        postCard.classList.add("post-card");

        postCard.innerHTML = `
            <img src="${imageUrl}" alt="Post Image">
            <h3>${title}</h3>
            <p><strong>Domain:</strong> ${domain}</p>
            <p>${description}</p>
            <p><strong>Deliverables:</strong> ${deliverables}</p>
            <p><strong>Rewards:</strong> ${rewards}</p>
        `;

        postsList.appendChild(postCard);
    }

    // Loop through dummy posts and add them to the page
    dummyPosts.forEach(post => {
        addPost(post.title, post.description, post.domain, post.imageUrl, post.deliverables, post.rewards);
    });
});
