document.addEventListener("DOMContentLoaded", async function () {
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

    function displayPosts(posts) {
        postsList.innerHTML = "";

        posts.forEach(post => {
            const postCard = document.createElement("div");
            postCard.classList.add("post-card");

            postCard.innerHTML = `
                <img src="${post.imageUrl}" alt="Post Image">
                <h3>${post.title}</h3>
                <p><strong>Domain:</strong> ${post.domain}</p>
                <p>${post.description}</p>
                <p><strong>Deliverables:</strong> ${post.deliverables}</p>
                <p><strong>Rewards:</strong> ${post.rewards}</p>
                <button class="collab-btn">Collaborate</button>
            `;

            postCard.querySelector(".collab-btn").addEventListener("click", () => {
                alert(`Collaboration request sent for: ${post.title}`);
            });

            postsList.appendChild(postCard);
        });
    }

    displayPosts(dummyPosts);
});

    async function fetchPosts() {
        try {
            const response = await fetch("http://localhost:5000/api/posts"); // Adjust API URL
            const posts = await response.json();

            postsList.innerHTML = ""; // Clear existing posts

            posts.forEach(post => {
                const postCard = document.createElement("div");
                postCard.classList.add("post-card");

                postCard.innerHTML = `
                    <img src="${post.imageUrl}" alt="Post Image">
                    <h3>${post.title}</h3>
                    <p><strong>Domain:</strong> ${post.domain}</p>
                    <p>${post.description}</p>
                    <p><strong>Deliverables:</strong> ${post.deliverables}</p>
                    <p><strong>Rewards:</strong> ${post.rewards}</p>
                    <button class="collab-btn">Collaborate</button>
                `;

                // Add Collaboration Functionality
                const collaborateButton = postCard.querySelector(".collab-btn");
                collaborateButton.addEventListener("click", () => {
                    alert(`Collaboration request sent for: ${post.title}`);
                    // You can add backend request to store collaboration requests
                });

                postsList.appendChild(postCard);
            });
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    }

    fetchPosts();



