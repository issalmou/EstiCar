$(document).ready(function () {
	"use strict";

	/*==================================
* Author        : "ThemeSine"
* Template Name : CarVilla HTML Template
* Version       : 1.0
==================================== */




	/*=========== TABLE OF CONTENTS ===========
	1. Scroll To Top
	2. welcome animation support
	3. owl carousel
	======================================*/

	// 1. Scroll To Top 
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 300) {
			$('.return-to-top').fadeIn();
		} else {
			$('.return-to-top').fadeOut();
		}
	});
	$('.return-to-top').on('click', function () {
		$('html, body').animate({
			scrollTop: 0
		}, 400);
		return false;
	});

	// 2. welcome animation support

	$(window).on('load', function () {
		// Enlever les classes et cacher au début
		$(".welcome-hero-txt h2, .welcome-hero-txt p").removeClass("animated fadeInUp").css({ 'opacity': '0' });
		$(".welcome-hero-txt button").removeClass("animated fadeInDown").css({ 'opacity': '0' });

		// Puis après un petit délai, ajouter les classes et réafficher
		setTimeout(function () {
			$(".welcome-hero-txt h2, .welcome-hero-txt p").addClass("animated fadeInUp").css({ 'opacity': '1' });
			$(".welcome-hero-txt button").addClass("animated fadeInDown").css({ 'opacity': '1' });
		}, 100); // délai en millisecondes
	});
	// $('.navbar-nav li a').on('click', function(){
	// 	$('.navbar-collapse').collapse('hide');
	// });
	$('.navbar-nav li a').on('click', function() {
    $('.navbar-nav li').removeClass('active'); // enlever active de tous les <li>
    $(this).parent().addClass('active'); // ajouter active sur le parent <li> du <a> cliqué
});


	// 3. owl carousel

	// i.  new-cars-carousel

	$("#new-cars-carousel").owlCarousel({
		items: 1,
		autoplay: true,
		loop: true,
		dots: true,
		mouseDrag: true,
		nav: false,
		smartSpeed: 1000,
		transitionStyle: "fade",
		animateIn: 'fadeIn',
		animateOut: 'fadeOutLeft'
		// navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
	});


	// ii. .testimonial-carousel


	var owl = $('.testimonial-carousel');
	owl.owlCarousel({
		items: 3,
		margin: 0,

		loop: true,
		autoplay: true,
		smartSpeed: 1000,

		//nav:false,
		//navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],

		dots: false,
		autoplayHoverPause: false,

		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			640: {
				items: 2
			},
			992: {
				items: 3
			}
		}


	});

	// iii. .brand-item (carousel)

	$('.brand-item').owlCarousel({
		items: 6,
		loop: true,
		smartSpeed: 1000,
		autoplay: true,
		dots: false,
		autoplayHoverPause: false,
		responsive: {
			0: {
				items: 2
			},
			415: {
				items: 2
			},
			600: {
				items: 3
			},
			1000: {
				items: 6
			}
		}
	});


	$('.play').on('click', function () {
		owl.trigger('play.owl.autoplay', [1000])
	})
	$('.stop').on('click', function () {
		owl.trigger('stop.owl.autoplay')
	})

});
//des js personaliser 
new TomSelect("#ville-maroc", {
	maxItems: 1, // ✅ Une seule sélection possible
	maxOptions: 5, // 🔽 Affiche 5 résultats max
	create: false, // 🔒 Empêche l'ajout de nouvelles villes
	options: [
		{ value: "Casablanca", text: "Casablanca" },
		{ value: "Rabat", text: "Rabat" },
		{ value: "Marrakech", text: "Marrakech" },
		{ value: "Fès", text: "Fès" },
		{ value: "Tanger", text: "Tanger" },
		{ value: "Agadir", text: "Agadir" },
		{ value: "Oujda", text: "Oujda" },
		{ value: "Nador", text: "Nador" },
		{ value: "Mohammedia", text: "Mohammedia" },
		{ value: "Tétouan", text: "Tétouan" },
		{ value: "El Jadida", text: "El Jadida" },
		{ value: "Meknès", text: "Meknès" },
		{ value: "Kenitra", text: "Kenitra" },
		{ value: "Laâyoune", text: "Laâyoune" },
		{ value: "Dakhla", text: "Dakhla" },
		{ value: "Beni Mellal", text: "Beni Mellal" },
		{ value: "Safi", text: "Safi" },
		{ value: "Settat", text: "Settat" },
		{ value: "Ouarzazate", text: "Ouarzazate" }
	],
	onInitialize: function () {
		// 👇 Ajout d'un ID à l'input générée par Tom Select
		const inputEl = this.control_input;
		inputEl.setAttribute("id", "lc_input"); // 👈 ton ID personnalisé ici
	},
	classNames: {
		input: 'form-control '
	}
});
const equipements = [
	'ABS', 'Airbags', 'CD/MP3/Bluetooth', 'Caméra de recul', 'Climatisation',
	'ESP', 'Jantes aluminium', 'Limiteur de vitesse', 'Ordinateur de bord',
	'Radar de recul', 'Régulateur de vitesse', 'Sièges cuir',
	'Système de navigation/GPS', 'Toit ouvrant', 'Verrouillage centralisé à distance',
	'Vitres électriques'
];

new TomSelect("#equipement-select", {
	maxItems: null, // Choix unique
	maxOptions: 5, // Limiter l'affichage
	create: false, // Pas de création manuelle
	plugins: ['remove_button'],
	options: equipements.map(e => ({ value: e, text: e })),
	onInitialize: function () {
		this.control_input.setAttribute("id", "equipement-search-input");
		this.control_input.setAttribute("class", "form-control");
	}
});
new TomSelect("#select-marque", {
	maxItems: 1,
	maxOptions: 5,
	options: [
		{ value: "Audi", text: "Audi" },
		{ value: "BMW", text: "BMW" },
		{ value: "Chevrolet", text: "Chevrolet" },
		{ value: "Citroën", text: "Citroën" },
		{ value: "Dacia", text: "Dacia" },
		{ value: "Fiat", text: "Fiat" },
		{ value: "Ford", text: "Ford" },
		{ value: "Honda", text: "Honda" },
		{ value: "Hyundai", text: "Hyundai" },
		{ value: "Kia", text: "Kia" },
		{ value: "Mercedes-Benz", text: "Mercedes-Benz" },
		{ value: "Nissan", text: "Nissan" },
		{ value: "Peugeot", text: "Peugeot" },
		{ value: "Renault", text: "Renault" },
		{ value: "Seat", text: "Seat" },
		{ value: "Skoda", text: "Skoda" },
		{ value: "Toyota", text: "Toyota" },
		{ value: "Volkswagen", text: "Volkswagen" },
		{ value: "Volvo", text: "Volvo" }
	],
	onInitialize: function () {
		// 👇 Ajout d'un ID à l'input générée par Tom Select
		const inputEl = this.control_input;
		inputEl.setAttribute("id", "mq_input"); // 👈 ton ID personnalisé ici
	},
	classNames: {
		input: 'form-control '
	},
	create: false, // ❌ empêcher l'utilisateur de taper une marque qui n'existe pas
	placeholder: "Marque"
});
function submitForm() {
	const equipements = [
		'ABS', 'Airbags', 'CD/MP3/Bluetooth', 'Caméra de recul', 'Climatisation',
		'ESP', 'Jantes aluminium', 'Limiteur de vitesse', 'Ordinateur de bord',
		'Radar de recul', 'Régulateur de vitesse', 'Sièges cuir',
		'Système de navigation/GPS', 'Toit ouvrant', 'Verrouillage centralisé à distance',
		'Vitres électriques'
	];
	date = new Date()
	let data = {
		'Localisation': document.getElementById('ville-maroc').value,
		'Kilométrage': Number(document.getElementById('kilométrage').value),
		'Nombre de portes': Number(document.getElementById('nombre_de_portes').value),
		'Marque': document.getElementById('select-marque').value,
		'Type de carburant': document.getElementById('type_de_carb').value,
		'Modèle': document.getElementById('modele').value,
		'Boite de vitesses': document.getElementById('boite_de_vitesse').value,
		'Origine': document.getElementById('origine').value,
		'age_voiture': date.getFullYear() - Number(document.getElementById('année-modèle').value),
		'État': document.getElementById('état').value,
		'Première main': document.getElementById('première_main').value,
		'Puissance fiscale': Number(document.getElementById('pf_input').value),
	}
	let equip = Array.from(document.getElementById('equipement-select').selectedOptions).map(option => option.value)
	equipements.forEach((i) => {
		let y = 0
		if (equip.includes(i)) {
			y = 1
		}
		data = {
			...data,
			[i]: y

		};
	});
	get_voiture_similaire(data['Localisation'],data['Marque'],data['Modèle'])
	fetch('https://isalmoad-esticar-api.hf.space/predict', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data)
	})
		.then(response => response.json())
		.then(data => {
			const price = data.predicted_price;
			afficher_prix(price)
		})
		.catch(error => {
			console.error('Erreur:', error);
		});
}
function afficher_prix(price) {
	document.getElementById('form_input').innerHTML = `
						<div class="model-search-content" style="padding: 0px 0px 0px 0px;">
							<div class="card-container">
								<div class="card" style="background-color: #f8f8f8;">
									<h2 id="prix" class="text-center">${Math.round(price) ? price : null} DH</h2><br>
									<p><b style="color: black;">Voici comment cela fonctionne :</b> </br>
										Notre modèle d'intelligence artificielle examine des milliers d'annonces de voitures à travers le Maroc pour offrir des estimations de prix précises, basées sur les spécifications et les équipements de votre véhicule.</p>
									<div class="layers">
										<div class="layer"></div>
										<div class="layer"></div>
										<div class="layer"></div>
										<div class="layer"></div>
										<div class="layer"></div>
										<div class="layer"></div>
										<div class="layer"></div>
										<div class="layer"></div>
										<div class="layer"></div>
										<div class="layer"></div>
									</div>
								</div>
							</div>
							<div class="row" style="padding: 40px 23px 40px 23px;">
								<div class="col-xs-12 col-sm-6">
								  <button class="btn btn-default" id="btn1" onclick="goBack()" style="width: 100%;">Revenir au formulaire</button>
								</div>
								<div class="col-xs-12 col-sm-6">
								  <button class="btn btn-default" id="btn2" style="width: 100%;" onclick="convertCentimes()">Convertir en centimes</button>
								</div>							  
						</div>
					</div>
		`;


}
function convertCentimes() {
	const priceElement = document.getElementById('prix');
	let price = parseFloat(priceElement.innerText);
	priceElement.innerText = `${Math.round(price * 100)} centimes`;
	let btn = document.getElementById('btn2')
	btn.innerText = 'Convertir en Dirham'
	btn.onclick = convertDh;

}
function convertDh() {
	const priceElement = document.getElementById('prix');
	let price = parseFloat(priceElement.textContent.split(' centimes')[0]);
	priceElement.innerText = `${Math.round(price / 100)} DH`;
	let btn = document.getElementById('btn2')
	btn.innerText = 'Convertir en centimes'
	btn.onclick = convertCentimes;
}

function goBack() {
	window.location.reload()
}
function scrollToParagraph() {
	const target = document.getElementById("form_input");
	target.scrollIntoView({ behavior: "smooth", block: "start" });
}
function get_voiture() {
	fetch('https://isalmoad-esticar-api.hf.space/list_voiture', {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' }
	})
		.then(response => response.json())
		.then(data => {
			return data.map((i, j) => list_voiture(i, j))
		})
		.catch(error => {
			console.error('Erreur:', error);
		});
}
function list_voiture(data, j) {
	document.getElementById('voiture_body').innerHTML += `
			<div class="col-lg-3 col-md-4 col-sm-6" key=${j}>
				<div class="single-featured-cars">
					<div class="featured-img-box">
						<div class="featured-cars-img">
							<img src="${data.image_link}" alt="${data.Titre}" width="223 px" height="110 px">
						</div>
						<div class="featured-model-info">
							<p>
								État: ${data.État.length > 100 ? data.État.slice(0, 100) + "..." : data.État + "."}</br>
								<span class="featured-mi-span"> Kilométrage : ${data.Kilométrage}</span>
								
							</p>
						</div>
					</div>
					<div class="featured-cars-txt">
						<h2><a href="${data.URL}" target="_blank"><span>${data.Titre}</span></a></h2>
						<h3>${data.Prix} DH</h3>
						
					</div>
				</div>
			</div>
	`
}
function get_voiture_similaire(localisation = null, marque = null, modele = null) {
	const url = 'https://isalmoad-esticar-api.hf.space/list_voiture_similaire';	
	fetch(url, {
		method: (localisation == null && marque == null && modele == null) ? 'GET' : 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: (localisation || marque || modele) ? JSON.stringify({ localisation, marque, modele }) : null
	})
		.then(response => response.json())
		.then(data => {
			const carousel = document.getElementById('new-cars-carousel');
			carousel.innerHTML = ''; // vider l'ancien contenu

			data.forEach((voiture, index) => {
				carousel.innerHTML += generateCarItem(voiture, index);
			});

			// Réinitialiser le carousel
			$('#new-cars-carousel').owlCarousel('destroy'); // détruire l'ancienne instance
			$('#new-cars-carousel').owlCarousel({
				items: 1,
				loop: true,
				margin: 10,
				nav: false,
				dots: true,
				autoplay: true,
				autoplayTimeout: 5000
			});
		})
		.catch(error => {
			console.error('Erreur:', error);
		});
}

function generateCarItem(data, j) {
	return `
<div class="new-cars-item" key=${j}>
	<div class="single-new-cars-item">
		<div class="row">
			<div class="col-md-7 col-sm-12">
				<div class="new-cars-img">
					<img src="${data.Image}" alt="${data.Titre ? data.Titre : 'non spécifié'}" style="height: 450px;"	/>
				</div>
			</div>
			<div class="col-md-5 col-sm-12">
				<div class="new-cars-txt">
					<h2><a href="#">${data.Titre ? data.Titre : 'non spécifié'}</a></h2>
					<p>
						✔ Prix : <span>${data.Prix ? data.Prix : 'non spécifié'}</span><br>
						✔ Localisation : <span>${data.Localisation ? data.Localisation : 'non spécifié'}</span><br>
						✔ Marque : <span>${data.Marque ? data.Marque : 'non spécifié'}</span><br>
					</p>
					<p class="new-cars-para2">
						✔ Modèle : <span>${data.Modèle ? data.Modèle : 'non spécifié'}</span><br>
						✔ Année-Modèle : <span>${data.Année_Modèle ? data.Année_Modèle : 'non spécifié'}</span><br>
						✔ Type de carburant : <span>${data.Type_de_carburant ? data.Type_de_carburant : 'non spécifié'}</span><br>
					</p>
					<button class="welcome-btn new-cars-btn" onclick="window.open('${data.URL ? data.URL : '/'}', '_blank')">
						view details
					</button>
				</div>
			</div>
		</div>
	</div>
</div>`;
}
function generateBrandItem(i){
	return `
				<div class="item">
				<a href="/">
					<img src="assets/images/brand/${i}.png" alt="brand-image" />
				</a>
			</div><!--/.item-->
	`
}
function list_brands() {
	const carousel = document.getElementById('brand-area');
	carousel.innerHTML = ''; // vider l'ancien contenu
	for (let i = 1; i < 20; i++){
		carousel.innerHTML += generateBrandItem(i);
	}
	// Réinitialiser le carousel
	$('#brand-area').owlCarousel('destroy'); // détruire l'ancienne instance
	$('#brand-area').owlCarousel({
		items: 6,
		loop: true,
		margin: 5,
		nav: false,
		dots: false,
		autoplay: true,
		autoplayTimeout: 3000
	});
}
window.onload = function () {
	get_voiture();
	get_voiture_similaire()
	list_brands()
}
