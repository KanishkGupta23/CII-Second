// Function to update date and time
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
  document.getElementById("date-time").textContent = now.toLocaleDateString(
    "en-GB",
    options
  );
}

// Update time every second
setInterval(updateDateTime, 1000);
updateDateTime();

function toggleText() {
  const moreText = document.getElementById("more-text");
  const button = document.getElementById("toggle-text");

  if (moreText.classList.contains("hidden")) {
    moreText.classList.remove("hidden");
    button.innerText = "Show Less";
  } else {
    moreText.classList.add("hidden");
    button.innerText = "Learn More";
  }
}

function toggleContent() {
  var content = document.getElementById("moreContent");
  var button = document.querySelector(".learn-more");

  if (content.style.display === "block") {
    content.style.opacity = "0";
    setTimeout(() => {
      content.style.display = "none";
      button.textContent = "Learn More";
    }, 500);
  } else {
    content.style.display = "block";
    setTimeout(() => {
      content.style.opacity = "1";
    }, 10);
    button.textContent = "Show Less";
  }
}

document.querySelector(".view-button").addEventListener("click", function () {
  alert("Redirecting to Tech Innovations Inc.");
});

$(document).ready(function () {
  $(".logo-slider").slick({
    slidesToShow: 5, // Number of logos visible at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Slide every 2 seconds
    infinite: true,
    dots: false,
    arrows: true, // Show navigation arrows
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  });
});

