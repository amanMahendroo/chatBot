window.onload = function () {
	const particlesJSON = {
		"particles": {
			"number": {
				"value": 50,
				"density": {
					"enable": true,
					"value_area": 1000
				}
			},
			"color": {
				"value": "#fa0"
			},
			"shape": {
				"type": "polygon",
				"stroke": {
					"width": 2,
					"color": "#f60"
				},
				"polygon": {
					"nb_sides": 6
				}
			},
			"opacity": {
				"value": 0.5,
				"random": true
			},
			"size": {
				"value": 10,
				"random": false
			},
			"line_linked": {
				"enable": true,
				"distance": 200,
				"color": "#f60",
				"opacity": 0.5,
				"width": 2
			},
			"move": {
				"enable": true,
				"speed": 2,
				"direction": "none",
				"random": true,
				"straight": false,
				"out_mode": "bounce",
				"bounce": true, 
			}
		},
		"interactivity": {
			"detect_on": "canvas",
			"events": {
				"onhover": {
					"enable": true,
					"mode": [
					"grab"
					]
				},
				"resize": true
			},
			"modes": {
				"grab": {
					"distance": 400,
					"line_linked": {
						"opacity": 0.7
					}
				},
				"bubble": {
					"distance": 600,
					"size": 12,
					"duration": 1,
					"opacity": 0.8,
					"speed": 2
				},
				"repulse": {
					"distance": 400,
					"duration": 0.4
				},
				"push": {
					"particles_nb": 5
				},
				"remove": {
					"particles_nb": 10
				}
			}
		},
		"retina_detect": true
	}
	particlesJS('bg', particlesJSON)
}