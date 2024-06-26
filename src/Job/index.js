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
      // console.log(response);
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
  const jobListingsContainer = document.querySelector("#job-listing ");

  jobListings.forEach((job) => {
    const jobListingElement = createJobListingElement(job);
    jobListingsContainer.appendChild(jobListingElement);
  });
}

function createJobListingElement(job) {
  const li = document.createElement("li");
  const html = `
  <img class='image' src='${job.imageUrl}' alt='Job Image'>
    <h3>${job.title}</h3>
    <p>Company: ${job.category}</p>
    <p>Location: ${job.location}</p>
    <a href="#">Apply Now</a>
  `;
  li.innerHTML = html;
  return li;
}
