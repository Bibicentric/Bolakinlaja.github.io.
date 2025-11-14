// Script to scroll to projects section
const projectsSection = document.getElementById('projects');
if (projectsSection) {
  projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
