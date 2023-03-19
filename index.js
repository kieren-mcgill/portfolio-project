const accordion = document.getElementsByClassName("project-info");

for (let i=0; i <= accordion.length; i++) {
    const accord = accordion[i]
    accord.addEventListener('click' , () => {
        accord.classList.toggle('active')
    })
}

//Light dark theme


