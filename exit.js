document.addEventListener("DOMContentLoaded", function () {
  const path = window.location.pathname;
  const file = path.substring(path.lastIndexOf("/") + 1); // e.g., Lecture7BSlide12.html, PS4Slide2.html, TestExamSlide6.html

  if (file.includes("Slide")) {
    // Build overview filename by removing everything after "Slide"
    const base = file.split("Slide")[0];    // e.g., "Lecture7B", "PS4", "TestExam"
    const overview = base + "Overview.html"; // e.g., "Lecture7BOverview.html", "PS4Overview.html", "TestExamOverview.html"

    // Create the image
    const img = document.createElement("img");
    img.src = "ExitRubber.png";
    img.alt = "Exit";
    img.className = "exit-rubber";

    // Wrap in a link pointing to overview
    const link = document.createElement("a");
    link.href = overview;
    link.appendChild(img);

    document.body.appendChild(link);
  }
});
