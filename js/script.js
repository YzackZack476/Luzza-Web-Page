/*HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
HH				Overlay
HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH*/
(function() {
	var triggerBttn = document.getElementById( 'trigger-overlay' ),
		overlay = document.querySelector( 'div.overlay' ),
		closeBttn = overlay.querySelector( 'button.overlay-close' );
		transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		}
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		support = { transitions : Modernizr.csstransitions };

	function toggleOverlay() {
		if( classie.has( overlay, 'open' ) ) {
			classie.remove( overlay, 'open' );
			classie.add( overlay, 'close' );
			var onEndTransitionFn = function( ev ) {
				if( support.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}
				classie.remove( overlay, 'close' );
			};
			if( support.transitions ) {
				overlay.addEventListener( transEndEventName, onEndTransitionFn );
			}
			else {
				onEndTransitionFn();
			}
		}
		else if( !classie.has( overlay, 'close' ) ) {
			classie.add( overlay, 'open' );
		}
	}

	$(".overlay ul li a").click(function(){
		toggleOverlay();
	});


	triggerBttn.addEventListener( 'click', toggleOverlay );
	closeBttn.addEventListener( 'click', toggleOverlay );
})();


$(document).ready(function() {
    $("#client-speech").owlCarousel({
        autoPlay: 3000,
        navigation : false, // Show next and prev buttons
        slideSpeed : 700,
        paginationSpeed : 1000,
        singleItem:true
    });
});




 $('#screenshots > a').nivoLightbox({effect: 'fadeScale'});

  var owl = $("#screenshots");
 
  owl.owlCarousel({
    autoPlay: false,
    pagination: false,
    stopOnHover: true,
    items: 5,
  });



  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })


//   ================= [Show PDF] =======================

function show_Viewer(cartificacion){
	// Obtener el objeto pdf_viewer
	let pdf_viewer = document.getElementById("pdf_viewer");
	
	// Mostrar u Ocultar diferentes iframe
	if (cartificacion === undefined){
		let frames = document.querySelectorAll(".pdf_to_show");
		frames.forEach(function(item){
			item.style.display = "none";
		});	
	
	}else{
		let frame = document.getElementById("pdf_to_show_"+String(cartificacion));
		frame.style.display = "block";
	}
	

	// Crear un objeto llamado obj 
	obj = pdf_viewer.classList;

	// Obtener la lista dentro del objeto
	let myArray = Object.keys(obj).map(function(key){
		return obj[key];
	});




	// Verificar si tiene clase none
	if (myArray.includes("none")){	
		pdf_viewer.classList.remove("none");
		pdf_viewer.classList.add("block");
	}else{
		pdf_viewer.classList.remove("block");
		pdf_viewer.classList.add("none");
	}

}