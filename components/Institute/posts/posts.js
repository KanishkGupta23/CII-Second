document.addEventListener("DOMContentLoaded", async function () {
    const postsList = document.getElementById("postsList");

    const dummyPosts = [
        {
            title: "Enhancing Cybersecurity Audits",
            description: "Explore how industries can implement robust cybersecurity audits to protect sensitive data and prevent cyber threats.",
            domain: "Audits",
            imageUrl: "https://www.1stformationsblog.co.uk/wp-content/uploads/2021/10/shutterstock_505066678.jpg",
            deliverables: "Comprehensive audit report, risk assessment guide, and best practices checklist.",
            rewards: "Certificate of completion and exclusive access to cybersecurity webinars."
        },
        {
            title: "AI-Powered Research in Healthcare",
            description: "A deep dive into how artificial intelligence is transforming medical research, improving diagnostics, and advancing treatments.",
            domain: "Research Paper",
            imageUrl: "https://www.brainvire.com/blog/wp-content/uploads/2024/02/ai-opportunities-in-healthcare-1024x492.png",
            deliverables: "Case studies, AI-driven research methodologies, and dataset access.",
            rewards: "Recognition in AI research forums and internship opportunities."
        },
        {
            title: "Data Analytics in Business Strategy",
            description: "Join our workshop to understand how data analytics is reshaping business decision-making and improving market predictions.",
            domain: "Workshop",
            imageUrl: "https://www.velvetech.com/wp-content/uploads/2023/06/data-analytics-strategy-fb.png",
            deliverables: "Hands-on project, analytics dashboard template, and business insights report.",
            rewards: "Certificate of participation and networking with industry experts."
        }
    ];

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



