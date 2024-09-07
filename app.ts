// Function to toggle the visibility of sections
function toggleSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      if (section.style.display === 'block') {
        section.style.display = 'block';
      } else {
        section.style.display = 'block';
      }
    }
  }
  
  window.onload = () => {
    console.log('Resume loaded successfully!');
  };
  