// joblistings.js

document.addEventListener("DOMContentLoaded", function () {
  fetchJobListings();
});

function fetchJobListings() {
  fetch("https://mocki.io/v1/589a84e5-3fa7-40a0-b56e-f5f1dd69a564")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch job listings");
      }
      return response.json();
    })
    .then((data) => {
      renderJobListings(data);
    })
    .catch((error) => {
      console.error("Error fetching job listings:", error);
    });
}

function renderJobListings(jobListings) {
  const jobListingsContainer = document.querySelector(".job-listings ul");

  jobListings.forEach((job) => {
    const jobListingElement = createJobListingElement(job);
    jobListingsContainer.appendChild(jobListingElement);
  });
}

function createJobListingElement(job) {
  const li = document.createElement("li");
  const html = `
  <a href='${job.image}'></a>
    <h3>${job.title}</h3>
    <p>Company: ${job.company}</p>
    <p>Location: ${job.location}</p>
    <p>Description: ${job.description}</p>
    <a href="#">Apply Now</a>
  `;
  li.innerHTML = html;
  return li;
}
