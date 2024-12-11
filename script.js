// function toggleDropdown() {
//     const dropdownMenu = document.getElementById("dropdown-menu");
//     dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
// }

// window.onclick = function(event) {
//     if (!event.target.matches('.dropdown-toggle')) {
//         const dropdowns = document.getElementsByClassName("dropdown-menu");
//         for (let i = 0; i < dropdowns.length; i++) {
//             const openDropdown = dropdowns[i];
//             if (openDropdown.style.display === "block") {
//                 openDropdown.style.display = "none";
//             }
//         }
//     }
// }





function toggleAccordion(element) {
    // Get the associated content panel
    const content = element.nextElementSibling;

    // Toggle 'display' to show or hide content
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        // First, close any open panels
        const allContent = document.getElementsByClassName("accordion-content");
        for (let i = 0; i < allContent.length; i++) {
            allContent[i].style.display = "none";
        }

        // Open the clicked panel
        content.style.display = "block";
    }
}