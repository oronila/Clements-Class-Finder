
<meta charset="utf-8">
<meta name="viewport" content="initial-scale=1.0, user-scalable=no">
<meta name="apple-mobile-web-app-capable" content="yes">


<script>
	import { page_shown } from "./data";

	import Navbar from "./Navbar.svelte";
	import Sidebar from "./Sidebar.svelte";
	import Main from "./Main.svelte";
	import AboutUs from "./About.svelte";
	import ContactUs from "./Contact.svelte";
	import L from "leaflet";
	import MapToolbar from "./MapToolbar.svelte";
	import MarkerPopup from "./MarkerPopup.svelte";
	import * as markerIcons from "./markers.js";
	import "./test.js";

	history.replaceState({ href_to_show: "/" }, "", "/");

	window.addEventListener("popstate", (e) => {
		console.log(e.state.href_to_show);
		$page_shown = e.state.href_to_show;
	});
	let open = false;

	
	/*
	function createMap(container) {
		var map = L.map(container, { preferCanvas: true }).setView([0.0018, 0.0009], 100);
		L.tileLayer(
			"https://api.maptiler.com/tiles/ae99d4c3-0837-4d58-a1cd-5a90fb8dc8d5/{z}/{x}/{y}.png?key=qBCWEKsk0ghptooQD7FI",
			{
				attribution:
					'Rendered with \u003ca href="https://www.maptiler.com/desktop/"\u003eMapTiler Desktop\u003c/a\u003e',
				crossOrigin: true,
			}
		).addTo(map);

		return map;
	}
	*/
	/*
	let toolbar = L.control({ position: "topright" });
	let toolbarComponent;
	toolbar.onAdd = (map) => {
		let div = L.DomUtil.create("div");
		toolbarComponent = new MapToolbar({
			target: div,
			props: {},
		});

		toolbarComponent.$on("click-eye", ({ detail }) => (eye = detail));
		toolbarComponent.$on("click-lines", ({ detail }) => (lines = detail));
		toolbarComponent.$on("click-reset", () => {
			map.setView(initialView, 5, { animate: true });
		});

		return div;
	};
	
	toolbar.onRemove = () => {
		if (toolbarComponent) {
			toolbarComponent.$destroy();
			toolbarComponent = null;
		}
	};

	// Create a popup with a Svelte component inside it and handle removal when the popup is torn down.
	// `createFn` will be called whenever the popup is being created, and should create and return the component.

	function bindPopup(marker, createFn) {
		let popupComponent;
		marker.bindPopup(() => {
			let container = L.DomUtil.create("div");
			popupComponent = createFn(container);
			return container;
		});

		marker.on("popupclose", () => {
			if (popupComponent) {
				let old = popupComponent;
				popupComponent = null;
				// Wait to destroy until after the fadeout completes.
				setTimeout(() => {
					old.$destroy();
				}, 500);
			}
		});
	}
	
	let markers = new Map();

	function markerIcon(count) {
		let html = `<div class="map-marker"><div>${markerIcons.library}</div><div class="marker-text">${count}</div></div>`;
		return L.divIcon({
			html,
			className: "map-marker",
		});
	}

	function createMarker(loc) {
		let count = Math.ceil(Math.random() * 25);
		let icon = markerIcon(count);
		let marker = L.marker(loc, { icon });
		bindPopup(marker, (m) => {
			let c = new MarkerPopup({
				target: m,
				props: {
					count,
				},
			});

			c.$on("change", ({ detail }) => {
				count = detail;
				marker.setIcon(markerIcon(count));
			});

			return c;
		});

		return marker;
	}

	function createLines() {
		return L.polyline(markerLocations, { color: "#E4E", opacity: 0.5 });
	}

	let markerLayers;
	let lineLayers;
	function mapAction(container) {
		map = createMap(container);
		toolbar.addTo(map);

		markerLayers = L.layerGroup();
		for (let location of markerLocations) {
			let m = createMarker(location);
			markerLayers.addLayer(m);
		}

		lineLayers = createLines();

		markerLayers.addTo(map);
		lineLayers.addTo(map);

		return {
			destroy: () => {
				toolbar.remove();
				map.remove();
				map = null;
			},
		};
	}
	
	// We could do these in the toolbar's click handler but this is an example
	// of modifying the map with reactive syntax.
	$: if (markerLayers && map) {
		if (eye) {
			markerLayers.addTo(map);
		} else {
			markerLayers.remove();
		}
	}

	$: if (lineLayers && map) {
		if (lines) {
			lineLayers.addTo(map);
		} else {
			lineLayers.remove();
		}
	}

	function resizeMap() {
		if (map) {
			map.invalidateSize();
		}
	}
	*/
</script>

<style>
	#map {
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
		}
		
	:global(body) {
		padding: 0;
		overflow: hidden;
	}
	#map :global(.marker-text) {
		width: 100%;
		text-align: center;
		font-weight: 600;
		background-color: #444;
		color: #eee;
		border-radius: 0.5rem;
	}

	#map :global(.map-marker) {
		width: 30px;
		transform: translateX(-50%) translateY(-25%);
	}
</style>

<Sidebar bind:open />
<Navbar bind:sidebar={open} />
<Main />

{#if $page_shown == "about"}
	<AboutUs />
{/if}

<svelte:head>
	<link
	href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
	rel="stylesheet"
	/>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/leaflet.css">
	<link rel="stylesheet" href="https://cdn.rawgit.com/ardhi/Leaflet.MousePosition/master/src/L.Control.MousePosition.css">
	<script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/leaflet.js" type="text/javascript"></script>
    <script src="https://cdn.rawgit.com/ardhi/Leaflet.MousePosition/master/src/L.Control.MousePosition.js" type="text/javascript"></script>
	<style>
		html, body, #map { width:100%; height:98%; margin:0; padding:0; z-index: 1; background: #ffffff; }
		#slider{ position: absolute; top: 10px; right: 10px; z-index: 5; }
	  </style>
</svelte:head>

<body>
	<div id="map"></div>
	<script>
		import L from 'leaflet';
	import MapToolbar from './MapToolbar.svelte';
	import MarkerPopup from './MarkerPopup.svelte';
	import * as markerIcons from './markers.js';
	let map;
	
	const markerLocations = [
		[29.8283, -96.5795],
		[37.8283, -90.5795],
		[43.8283, -102.5795],
		[48.40, -122.5795],
		[43.60, -79.5795],
		[36.8283, -100.5795],
		[38.40, -122.5795],
	];
	
	  var mapExtent = [0.00000000, -2250.00000000, 3000.00000000, 0.00000000];
      var mapMinZoom = 0;
      var mapMaxZoom = 3;
      var mapMaxResolution = 1.00000000;
      var mapMinResolution = Math.pow(2, mapMaxZoom) * mapMaxResolution;
      var tileExtent = [0.00000000, -2250.00000000, 3000.00000000, 0.00000000];
      var crs = L.CRS.Simple;
      crs.transformation = new L.Transformation(1, -tileExtent[0], -1, tileExtent[3]);
      crs.scale = function(zoom) {
        return Math.pow(2, zoom) / mapMinResolution;
      };
      crs.zoom = function(scale) {
        return Math.log(scale * mapMinResolution) / Math.LN2;
      };
      var layer;
      var map = new L.Map('map', {
          maxZoom: mapMaxZoom,
          minZoom: mapMinZoom,
          crs: crs
        });
        
        layer = L.tileLayer("images/{z}/{x}/{y}.png", {
          minZoom: mapMinZoom, maxZoom: mapMaxZoom,
          tileSize: L.point(512, 512),
          noWrap: true,
          tms: false
        }).addTo(map);
      map.fitBounds([
        crs.unproject(L.point(mapExtent[2], mapExtent[3])),
        crs.unproject(L.point(mapExtent[0], mapExtent[1]))
      ]);
      L.control.mousePosition().addTo(map)
	  let eye = true;
	let lines = true;
	
	let toolbar = L.control({ position: 'topright' });
	let toolbarComponent;
	toolbar.onAdd = (map) => {
		let div = L.DomUtil.create('div');
		toolbarComponent = new MapToolbar({
			target: div,
			props: {}
		});

		toolbarComponent.$on('click-eye', ({ detail }) => eye = detail);
		toolbarComponent.$on('click-lines', ({ detail }) => lines = detail);
		toolbarComponent.$on('click-reset', () => {
			map.setView(initialView, 5, { animate: true })
		})

		return div;
	}

	toolbar.onRemove = () => {
		if(toolbarComponent) {
			toolbarComponent.$destroy();
			toolbarComponent = null;
		}
	};
	
	// Create a popup with a Svelte component inside it and handle removal when the popup is torn down.
	// `createFn` will be called whenever the popup is being created, and should create and return the component.
	function bindPopup(marker, createFn) {
		let popupComponent;
		marker.bindPopup(() => {
			let container = L.DomUtil.create('div');
			popupComponent = createFn(container);
			return container;
		});

		marker.on('popupclose', () => {
			if(popupComponent) {
				let old = popupComponent;
				popupComponent = null;
				// Wait to destroy until after the fadeout completes.
				setTimeout(() => {
					old.$destroy();
				}, 500);

			}
		});
	}
	
	let markers = new Map();
	
	function markerIcon(count) {
		let html = `<div class="map-marker"><div>${markerIcons.library}</div><div class="marker-text">${count}</div></div>`;
		return L.divIcon({
			html,
			className: 'map-marker'
		});
	}
	

	function createMarker(loc) {
		let count = Math.ceil(Math.random() * 25);
		let icon = markerIcon(count);
		let marker = L.marker(loc, {icon});
		bindPopup(marker, (m) => {
			let c = new MarkerPopup({
				target: m,
				props: {
					count
				}
			});
			
			c.$on('change', ({detail}) => {
				count = detail;
				marker.setIcon(markerIcon(count));
			});
			
			return c;
		});
		
		return marker;
	}
	
	function createLines() {
		return L.polyline(markerLocations, { color: '#E4E', opacity: 0.5 });
	}

	let markerLayers;
	let lineLayers;
  function mapAction(container) {
    map = createMap(container); 
		toolbar.addTo(map);
		
		markerLayers = L.layerGroup()
 		for(let location of markerLocations) {
 			let m = createMarker(location);
			markerLayers.addLayer(m);
 		}
		
		lineLayers = createLines();
		
		markerLayers.addTo(map);
		lineLayers.addTo(map);
		
    return {
       destroy: () => {
				 toolbar.remove();
				 map.remove();
				 map = null;
			 }
    };
	}
	
	// We could do these in the toolbar's click handler but this is an example
	// of modifying the map with reactive syntax.
	$: if(markerLayers && map) {
		if(eye) {
			markerLayers.addTo(map);
		} else {
			markerLayers.remove();
		}
	}
	
	$: if(lineLayers && map) {
		if(lines) {
			lineLayers.addTo(map);
		} else {
			lineLayers.remove();
		}
	}

	function resizeMap() {
	  if(map) { map.invalidateSize(); }
  }
	</script>
</body>
