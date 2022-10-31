let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let numberOfClick = 0;

menuBtn.addEventListener('click', function(){
	if ( numberOfClick % 2 == 0 ) {
		menuBtn.classList.toggle('active');
		menu.classList.toggle('active');
	} else {	
		menuBtn.classList.remove('active');
		menu.classList.remove('active');	
		menu.classList.toggle('active2');
		setTimeout(()=>{
			menu.classList.remove('active2');
		},700);
	}
	numberOfClick++;
})



