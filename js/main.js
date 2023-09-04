// Humberger Menu Toggler
const toggleBtn = document.getElementsByClassName("toggler")[0];
const navLinks = document.getElementsByClassName("navbar-list");

toggleBtn.addEventListener("click", ()=>{
	for(i = 0; i<navLinks.length; i++){
		navLinks[i].classList.toggle("active")
	}
});

// Dynamic year for copyright
document.getElementById("year").innerHTML = new Date().getFullYear()
