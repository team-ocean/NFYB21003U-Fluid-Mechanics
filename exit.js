document.addEventListener("DOMContentLoaded", function () {
  const path = window.location.pathname;
  const file = path.substring(path.lastIndexOf("/") + 1); // e.g., PS4Slide2.html or Lecture7BSlide12.html

  if (file.includes("Slide")) {
    let overview = "";

    if (file.startsWith("PS")) {
      // Case for PS1, PS2, PS3, PS4
      const base = file.split("Slide")[0]; // e.g., "PS4"
      overview = base + "Overview.html";   // "PS4Overview.html"
    } else {
      // General case: Lecture..., etc.
      const base = file.split("Slide")[0]; // e.g., "Lecture7B"
      overview = base + "Overview.html";   // "Lecture7BOverview.html"
    }

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
