const openMenu = () => {
    document.querySelector('.backdrop').className = 'backdrop active';
    document.querySelector('aside').className = 'active';
}
const closeMenu = () => {
    document.querySelector('.backdrop').className = 'backdrop';
    document.querySelector('aside').className = '';
}

document.getElementById('menuBtn').onclick = e => {
    e.preventDefault();
    openMenu();

}
document.querySelector('aside button.close').onclick = e => {
    closeMenu();
}
document.querySelector('.backdrop').onclick = e => {
    closeMenu();
}

document.lastScrollPosition = 0;
document.lastCentered = 0;
document.onWayTo = null

document.addEventListener('scroll', () => {
    const direction = window.pageYOffset - document.lastScrollPosition > 0 ? 'down' : 'up';
    const sections = [...document,querySelectorAll('section')];

    if (document.onWayTo === null) {
        const destIndex = direction === 'up' ? document.lastCentered - 1 : document.lastCentered + 1
        if (destIndex >= 0 && destIndex < sections.length) {
            console.log({destIndex,direction})
            document.onWayTo = destIndex;
            window.scroll(0, sections[destIndex].offsetTop);
        }
    }


    sections.forEach((section,index) => {
        if (window.pageYOffset === section.offsetTop) {
            document.lastCentered = index;
            section.className = 'active'
            if (document.onWayTo === index) {
                document.onWayTo = null
            }
        } else {
            section.className = ''
        }
    })

    document.lastScrollPosition = window.pageYOffset;
})

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("lang-show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.lang-dropbtn')) {
      var dropdowns = document.getElementsByClassName("lang-dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('lang-show')) {
          openDropdown.classList.remove('lang-show');
        }
      }
    }
  }