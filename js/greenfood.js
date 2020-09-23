var slideshow = document.getElementById('slideshow');
		var slides = slideshow.getElementsByTagName('img');
		var index  = 0;

		function nextSlide()
		{
			slides[index].classList.remove('active');
			index = (index + 1) % slides.length;
			slides[index].classList.add('active');

		}
		function backSlide(){
			slides[index].classList.remove('active');
			index = (index - 1 + slides.length) % slides.length;
			slides[index].classList.add('active');
		}
		
		var slidetext = document.getElementById('slidetext');
		var slidetxt = slidetext.getElementsByTagName('div');
		var index1  = 0;

		function nextSlidetext()
		{
			slidetxt[index1].classList.remove('active');
			index1 = (index1 + 1) % slidetxt.length;
			slidetxt[index1].classList.add('active');

		}
		function backSlidetext(){
			slidetxt[index1].classList.remove('active');
			index1 = (index1 - 1 + slidetxt.length) % slidetxt.length;
			slidetxt[index1].classList.add('active');
		}
		function menutoggle(){
			var nav = document.getElementById('navbar');
			nav.classList.toggle('active');
		}