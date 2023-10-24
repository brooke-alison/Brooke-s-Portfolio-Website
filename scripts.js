document.addEventListener("DOMContentLoaded", function () {
  const navigationLinks = document.querySelectorAll(".nav-link");
  navigationLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const sectionId = link.getAttribute("href");
      scrollToSection(sectionId);
    });
  });
});
function scrollToSection(sectionId) {
  const targetSection = document.querySelector(sectionId);
  const navBarHeight = document.querySelector(".navbar").offsetHeight;
  const targetPosition =
    targetSection.getBoundingClientRect().top + window.scrollY - navBarHeight;
  window.scrollTo({ top: targetPosition, behavior: "smooth" });
}

const navEl = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 56) {
    navEl.classList.add("navbar-scrolled");
  }
});

const skillsIcon = document.getElementById("checkmarkIcon");
const aboutMeIcon = document.getElementById("aboutMeIcon");
const projectsIcon = document.getElementById("projectsIcon");

skillsIcon.addEventListener("click", function () {
  skillsIcon.classList.toggle("rotate");
});

aboutMeIcon.addEventListener("click", function () {
  aboutMeIcon.classList.toggle("rotate");
});

projectsIcon.addEventListener("click", function () {
  projectsIcon.classList.toggle("rotate");
});

document.addEventListener("DOMContentLoaded", function () {
  function isSkillsSectionInView() {
    const skillsSection = document.querySelector("#skills");
    if (!skillsSection) return false;

    const rect = skillsSection.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }

  function isAboutMeSectionInView() {
    const aboutMeSection = document.querySelector("#about-me");
    if (!aboutMeSection) return false;

    const rect = aboutMeSection.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }

  function isProjectsSectionInView() {
    const projectsSection = document.querySelector("#projects");
    if (!projectsSection) return false;

    const rect = projectsSection.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }

  function toggleRotationAnimation() {
    if (isSkillsSectionInView()) {
      skillsIcon.classList.add("rotate");
    } else {
      skillsIcon.classList.remove("rotate");
    }

    if (isAboutMeSectionInView()) {
      aboutMeIcon.classList.add("rotate");
    } else {
      aboutMeIcon.classList.remove("rotate");
    }

    if (isProjectsSectionInView()) {
      projectsIcon.classList.add("rotate");
    } else {
      projectsIcon.classList.remove("rotate");
    }
  }

  toggleRotationAnimation();

  window.addEventListener("scroll", toggleRotationAnimation);
});
