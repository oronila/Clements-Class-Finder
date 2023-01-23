<script>
	import { page_shown } from "./data";

	import Navbar from "./Navbar.svelte";
	import Sidebar from "./Sidebar.svelte";
	import AboutUs from "./About.svelte";
	import ContactUs from "./Contact.svelte";
	import L from "leaflet";
	import MapToolbar from "./MapToolbar.svelte";
	import MarkerPopup from "./MarkerPopup.svelte";
	import * as markerIcons from "./markers.js";
	import Link from "./Link.svelte";
	import Button from "./Button.svelte";
	import Input from "./Input.svelte";

	//import * as Graph from './algorithm.js';
	//import PriorityQueue from './algorithm.js';
	let map;
	let open = false;
	let menuOpen = false;
	let inputValue = "";
	let room1 = "C1";
	let room2 = "";
	//let priorityQueue = new PriorityQueue();
	//let g = new Graph(1000);
	//var g = new graph(1000);

	class PriorityQueue {
		constructor() {
			this.collection = [];
		}
		enqueue(element) {
			if (this.isEmpty()) {
				this.collection.push(element);
			} else {
				let added = false;
				for (let i = 1; i <= this.collection.length; i++) {
					if (element[1] < this.collection[i - 1][1]) {
						this.collection.splice(i - 1, 0, element);
						added = true;
						break;
					}
				}
				if (!added) {
					this.collection.push(element);
				}
			}
		}
		dequeue() {
			let value = this.collection.shift();
			return value;
		}
		isEmpty() {
			return this.collection.length === 0;
		}
	}

	class Graph {
		// defining vertex array and
		// adjacent list
		constructor() {
			this.nodes = [];
			this.adjacencyList = {};
		}

		// functions to be implemented

		addVertex(node) {
			this.nodes.push(node);
			this.adjacencyList[node] = [];
		}

		addEdge(node1, node2) {
			this.adjacencyList[node1].push({ node: node2, weight: 1 });
			this.adjacencyList[node2].push({ node: node1, weight: 1 });
		}
		addEdge2(node1, node2, node3) {
			this.adjacencyList[node1].push({ node: node2, weight: 1 });
			this.adjacencyList[node2].push({ node: node1, weight: 1 });
			this.adjacencyList[node1].push({ node: node3, weight: 1 });
			this.adjacencyList[node3].push({ node: node1, weight: 1 });
		}
		addEdge3(node1, node2, node3, node4) {
			this.adjacencyList[node1].push({ node: node2, weight: 1 });
			this.adjacencyList[node2].push({ node: node1, weight: 1 });
			this.adjacencyList[node1].push({ node: node3, weight: 1 });
			this.adjacencyList[node3].push({ node: node1, weight: 1 });
			this.adjacencyList[node1].push({ node: node4, weight: 1 });
			this.adjacencyList[node4].push({ node: node1, weight: 1 });
		}
		addEdge4(node1, node2, node3, node4, node5) {
			this.adjacencyList[node1].push({ node: node2, weight: 1 });
			this.adjacencyList[node2].push({ node: node1, weight: 1 });
			this.adjacencyList[node1].push({ node: node3, weight: 1 });
			this.adjacencyList[node3].push({ node: node1, weight: 1 });
			this.adjacencyList[node1].push({ node: node4, weight: 1 });
			this.adjacencyList[node4].push({ node: node1, weight: 1 });
			this.adjacencyList[node1].push({ node: node5, weight: 1 });
			this.adjacencyList[node5].push({ node: node1, weight: 1 });
		}
		addEdge5(node1, node2, node3, node4, node5, node6) {
			this.adjacencyList[node1].push({ node: node2, weight: 1 });
			this.adjacencyList[node2].push({ node: node1, weight: 1 });
			this.adjacencyList[node1].push({ node: node3, weight: 1 });
			this.adjacencyList[node3].push({ node: node1, weight: 1 });
			this.adjacencyList[node1].push({ node: node4, weight: 1 });
			this.adjacencyList[node4].push({ node: node1, weight: 1 });
			this.adjacencyList[node1].push({ node: node5, weight: 1 });
			this.adjacencyList[node5].push({ node: node1, weight: 1 });
			this.adjacencyList[node1].push({ node: node6, weight: 1 });
			this.adjacencyList[node6].push({ node: node1, weight: 1 });
		}
		addEdge5(node1, node2, node3, node4, node5, node6) {
			this.adjacencyList[node1].push({ node: node2, weight: 1 });
			this.adjacencyList[node2].push({ node: node1, weight: 1 });
			this.adjacencyList[node1].push({ node: node3, weight: 1 });
			this.adjacencyList[node3].push({ node: node1, weight: 1 });
			this.adjacencyList[node1].push({ node: node4, weight: 1 });
			this.adjacencyList[node4].push({ node: node1, weight: 1 });
			this.adjacencyList[node1].push({ node: node5, weight: 1 });
			this.adjacencyList[node5].push({ node: node1, weight: 1 });
			this.adjacencyList[node1].push({ node: node6, weight: 1 });
			this.adjacencyList[node6].push({ node: node1, weight: 1 });
		}
		addEdge6(node1, node2, node3, node4, node5, node6, node7) {
			this.adjacencyList[node1].push({ node: node2, weight: 1 });
			this.adjacencyList[node2].push({ node: node1, weight: 1 });
			this.adjacencyList[node1].push({ node: node3, weight: 1 });
			this.adjacencyList[node3].push({ node: node1, weight: 1 });
			this.adjacencyList[node1].push({ node: node4, weight: 1 });
			this.adjacencyList[node4].push({ node: node1, weight: 1 });
			this.adjacencyList[node1].push({ node: node5, weight: 1 });
			this.adjacencyList[node5].push({ node: node1, weight: 1 });
			this.adjacencyList[node1].push({ node: node6, weight: 1 });
			this.adjacencyList[node6].push({ node: node1, weight: 1 });
			this.adjacencyList[node1].push({ node: node7, weight: 1 });
			this.adjacencyList[node7].push({ node: node1, weight: 1 });
		}

		printGraph() {
			// get all the vertices
			console.log(this.adjacencyList);
			console.log(this.adjacencyList.length);
			for (var i = 0; i < this.adjacencyList.length; i++) {
				console.log(this.adjacencyList[i]);
				this.adjacencyList[i].forEach((neighbor) => {
					console.log(neighbor.node);
				});
			}
		}
		findPathWithDijkstra(startNode, endNode) {
			let times = {};
			let backtrace = {};
			let pq = new PriorityQueue();
			times[startNode] = 0;

			this.nodes.forEach((node) => {
				if (node !== startNode) {
					times[node] = Infinity;
				}
			});
			pq.enqueue([startNode, 0]);
			while (!pq.isEmpty()) {
				let shortestStep = pq.dequeue();
				let currentNode = shortestStep[0];
				this.adjacencyList[currentNode].forEach((neighbor) => {
					let time = times[currentNode] + neighbor.weight;
					if (time < times[neighbor.node]) {
						times[neighbor.node] = time;
						backtrace[neighbor.node] = currentNode;
						pq.enqueue([neighbor.node, time]);
					}
				});
			}
			let path = [endNode];
			let lastStep = endNode;
			while (lastStep !== startNode) {
				path.unshift(backtrace[lastStep]);
				lastStep = backtrace[lastStep];
			}
			return path; //and time is ${times[endNode]}`
		}
	}
	var g = new Graph(1000);
	// *       FIRST FLOOR         *
	// *****************************

	// Special Use Rooms
	var specialUseVertices = ['Attendance Office', 'Clinic', 'Girls Gym', 'Boys Gym', 'Faculty Lounge', 'Library', 'English Workroom', 'Front Office', 'Counselor Office', 'B1', 'B2', 'B3', 'Commons', 'Courtyard', 'ARD', 'Registrar'];
	specialUseVertices.forEach((value) => g.addVertex(value));

	// Classrooms
	var classroomVertices = ['1327', '1325', '1326', '1324', '1323', '1322', '1320', '1317', '1315', '1316', '1314', '1313', '1311', '1312', '1520', '1521', '1522', '1510', '1512', '1513', '1515', '1514', '1127', '1125', '1123', '1121', '1120', '1126', '1101', '1111', '1115', '1116', '1117', '1130', '1118', '1131', '1132', '1133', '1134', '1136', '1135', '1601', '1602', '1603', '1604', '1605', '1606', '1801', '1802', '1803', '1804', '1805', '1808']
	classroomVertices.forEach((value) => g.addVertex(value));

	// Hallways, Corners, and Stairwells
	var hallwayVertices = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10', 'H11', 'H12', 'H13', 'H14', 'H15', 'H16', 'H17', 'H18', 'H19', 'H20', 'H21', 'H22', 'H23', 'H24', 'H25', 'H26', 'H27', 'H28', 'H29', 'H30', 'H31', 'H32', 'H33', 'H34']
	hallwayVertices.forEach((value) => g.addVertex(value));

	var cornerVertices = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'C11', 'C12', 'C13', 'C14', 'C15', 'C16', 'C17']
	cornerVertices.forEach((value) => g.addVertex(value));

	var stairwellVertices = ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8','S9','S10','S11','S12']
	stairwellVertices.forEach((value) => g.addVertex(value));

	// *****************************
	// *      SECOND FLOOR         *
	// *****************************

	// Special Use Rooms
	var specialUseVertices2 = ["Math Office","Science Workroom","Book Room","B4",
	];
	specialUseVertices2.forEach((value) => g.addVertex(value));

	// Classrooms
	var classroomVertices2 = ['2327','2325','2323','2326','2324','2322','2320','2331','2330','2317','2315','2316','2314','2313','2311','2312','2310','2412','2521','2413','2518','2517','2519','2525','2527','2531','2529','2513','2515','2516','2514','2512','2510','2511','2218','2216','2214','2220','2136','2132','2131','2130','2120','2122','2125','2123','2108','2107','2103','2102','2101','2012','2003','2011','2001','2010','2007','2008','2801','2802','2803','2810','2812','2820','2822','2824','2826','2828','2814','2815','2830','2816']
	classroomVertices2.forEach((value) => g.addVertex(value));

	// Hallways, Corners, and Stairwells
	var hallwayVertices2 = ['H35','H36','H37','H38','H39','H40','H41','H42','H43','H44','H45','H46','H47','H48','H49','H50','H51','H52','H53','H54','H55','H56','H57','H58','H59','H60','H61','H62','H63']
	hallwayVertices2.forEach((value) => g.addVertex(value));

	var cornerVertices2 = ['C18','C19','C20','C21','C22','C23','C24','C25','C26','C27','C28','C29','C30','C31','C32','C33','C34','C35','C36']
	cornerVertices2.forEach((value) => g.addVertex(value));

	g.addEdge2("H1", "Attendance Office", "C1");
	g.addEdge6("H2", "1327", "1325", "1326", "1325", "1324", "C1");
	g.addEdge6("H3", "1323", "1322", "1320", "B1", "C3", "H2");
	g.addEdge3("H4", "C1", "Clinic", "C2");
	g.addEdge2("H5", "C3", "C4");
	g.addEdge5("H6", "C4", "1311", "1313", "1312", "H7");
	g.addEdge5("H7", "1315", "1317", "1316", "1314", "C2");
	g.addEdge3("H8", "C6", "Faculty Lounge", "C5");
	g.addEdge4("H9", "C6", "1520", "1521", "H10");
	g.addEdge3("H10", "1522", "ARD", "C8");
	g.addEdge4("H11", "C5", "1510", "1512", "H12");
	g.addEdge4("H12", "1513", "1515", "1514", "C7");
	g.addEdge2("H13", "C8", "C7");
	g.addEdge3("H14", "C7", "Commons", "H26");
	g.addEdge4("H15", "Counselor Office", "C5", "Commons", "C9");
	g.addEdge3("H16", "C3", "Library", "C11");
	g.addEdge6("H17", "C11", "B2", "1135", "1136", "1134", "H18");
	g.addEdge5("H18", "1133", "1131", "1132", "1130", "C12");
	g.addEdge4("H19", "C12", "C13", "1116", "1115");
	g.addEdge5("H20", "C13", "1120", "1121", "1123", "H21");
	g.addEdge4("H21", "C10", "1127", "1125", "1126");
	g.addEdge2("H22", "C10", "C11");
	g.addEdge3("H23", "C9", "Courtyard", "C14");
	g.addEdge3("H24", "C14", "Front Office", "H25");
	g.addEdge2("H25", "Registrar", "C15");
	g.addEdge4("H26", "Courtyard", "S4", "1805", "C15");
	g.addEdge4("H27", "C15", "1801", "B3", "H28");
	g.addEdge("H28", "H29");
	g.addEdge4("H29", "1803", "S8", "1808", "1802");
	g.addEdge3("H30", "C8", "H31", "H33");
	g.addEdge2("H31", "1603", "H32");
	g.addEdge3("H32", "1602", "1601", "H34");
	g.addEdge3("H33", "1605", "1606", "1604");
	g.addEdge2("H34", "C7", "S6");

	//Second Floor Edges
	g.addEdge4("H35", "C18", "2331", "2330", "C19");
	g.addEdge6("H36", "C18", "2327", "2325", "2326", "2324", "H37");
	g.addEdge5("H37", "2323", "2322", "B4", "2320", "C20");
	g.addEdge6("H38", "C19", "2317", "2315", "2316", "2314", "H39");
	g.addEdge5("H39", "2313", "2311", "2312", "2310", "C21");
	g.addEdge3("H40", "C20", "2220", "C23");
	g.addEdge3("H41", "2136", "C23", "C26");
	g.addEdge5("H42", "C23", "2132", "2131", "2130", "C24");
	g.addEdge4("H43", "C24", "2125", "2123", "C25");
	g.addEdge4("H44", "C26", "2120", "2122", "C25");
	g.addEdge2("H45", "C25", "C27");
	g.addEdge5("H46", "C27", "2102", "2101", "2103", "H47");
	g.addEdge3("H47", "2108", "2107", "C28");
	g.addEdge2("H48", "C24", "C28");
	g.addEdge6("H49", "C25", "2012", "2003", "2011", "2001", "2010");
	g.addEdge3("H49", "2007", "2008", "C29");
	g.addEdge3("H50", "C29", "2801", "C30");
	g.addEdge5("H51", "2812", "2810", "2820", "C31", "H52");
	g.addEdge3("H52", "2824", "2822", "H53");
	g.addEdge5("H53", "2826", "2828", "C32", "2815", "2814");
	g.addEdge3("H54", "2816", "C33", "2815");
	g.addEdge4("H55", "C33", "2814", "S4", "C29");
	g.addEdge2("H56", "C34", "C33");
	g.addEdge6("H57", "2513", "2515", "2514", "2516", "C34", "H58");
	g.addEdge4("H58", "2511", "2510", "2512", "C22");
	g.addEdge3("H59", "C35", "C34", "2529");
	g.addEdge4("H60", "C35", "2525", "2527", "H61");
	g.addEdge4("H61", "2413", "2521", "2412", "C36");
	g.addEdge4("H62", "C36", "2518", "2517", "C22");
	g.addEdge5("H63", "C22", "2218", "2216", "2214", "C26");

	g.addEdge("C2", "C6");
	g.addEdge("C3", "S1");
	g.addEdge("C4", "C5");
	g.addEdge("C6", "Girls Gym");
	g.addEdge2("C8", "S5", "Boys Gym");
	g.addEdge2("C9", "C10", "S3");
	g.addEdge("C11", "S2");
	g.addEdge2("C12", "1117", "1118");
	g.addEdge("C16", "1111");
	g.addEdge2("C14", "English Workroom", "C13");
	g.addEdge("C17", "1101");
	g.addEdge("C18", "S9");
	g.addEdge("C19", "C36");
	g.addEdge("C20", "S1");
	g.addEdge("C21", "C22");
	g.addEdge("C22", "S7");
	g.addEdge("C23", "S2");
	g.addEdge("C25", "S11");
	g.addEdge2("C26", "S3", "Book Room");
	g.addEdge2("C28", "S10", "Science Workroom");
	g.addEdge("C29", "S12");
	g.addEdge("C30", "C31");
	g.addEdge3("C31", "2802", "2803", "S8");
	g.addEdge("C32", "2830");
	g.addEdge("C34", "S6");
	g.addEdge("C35", "S5");

	g.addEdge("S9", "Math Office");
	g.addEdge("2519", "2518", "2517");
	g.addEdge("2531", "2529");

	var ans = g.findPathWithDijkstra("C1", "1313");
	console.log(ans);
	

	history.replaceState({"href_to_show":"/"}, "", "/")

	window.onload = function () {
		if (window.location == "/about") {
			window.location = "/";
		}
	};

	//var route = g.findPathWithDijkstra('H1','1327')
	var xRooms = ['1327','1325','1326','1324','1323','B1','1322','1320','1317','1315','1313','1311','1316',
	'1312','1311', 'C3','1135','1133','1131','1136','1134','1132','1130','1127','1125','1123','1121','1601','1602', 'Library','H24','H25',
	'1802', '1803', '1805','C18','2327','2325','2326','2324','2323','2322','2320','2317','2316','2315','2314','2313','2312',
	'2311'
	];
	var yRooms = ['Attendance Office','1520','1521','1522','ARD','H16', '1510','1512','1513','1514','1515','1118','1117',
	'1116','1115','1111','1107','1103','1101','1102','1106','1604','1605','Front Office','Registrar', '1801', 'Math Office'
	];
	var the1315 = ['Attendance Office', 'H1', 'C1', 'H2','1327','1326','1325','1324','H3', '1323', '1322','1320', 'H4', 'C2','C6','H9','1520','1521','H10','1522','ARD',
	'H7','H6','1317','1315','1314','1316','1313','1311','1312','C3','H5','C4','H16','H8', 'C5', 'H11', '1510', '1512',
	'H12','1513','1515','1514','C7','H13','C8','Library'];

	var locations1315 = [
		[80, -109.160156],
		[80, -98.5],
		[78.5, -98.5],
		[78.5, -82.8],
		[79.15, -93.515625],
		[77.7, -84.72],
		[79.15, -71.54],
		[77.95, -81.2],
		[78.5, -57.1289],
		[79.15, -68.02734],
		[77.881638, -59.4140625],
		[77.881638, -55.3710937],
		[74, -98.5],
		[68.5, -98.5],
		[60, -98.5],
		[49.5, -98.5],
		[50.67, -95.2],
		[41.96, -95.2],
		[31, -98.5],
		[39.5, -95.2],
		[29.7, -95.2],
		[68.5, -82.6],
		[68.5, -56.42],
		[70, -84.9],
		[70, -80.85],
		[67.27, -71.54],
		[67.27, -71.54],
		[70, -59],
		[70, -55],
		[67.27, -68.2],
		[78.5, -40.5],
		[74.5, -40.5],
		[68.5, -40.5],
		[77.5, -3.5],
		[60, -70],
		[60, -40.5],
		[49.3, -40.5],
		[50.54, -37.78],
		[48.25, -37.78],
		[34.2, -40.5],
		[35.36, -45],
		[21, -45],
		[32, -37.78],
		[15, -40.5],
		[15, -70],
		[15, -98.5],
		[76.7,9.3]
	];


	var the11s = ['C11','H17','H18','1135','1136','1134','1133','1132','1131','1130','C12','H19','1118','1117',
	'1116','1115','C13','H20','H21','C10','H22','1127','1125','1123','1121','C14','H38','C17','H37','H36','C16','H35','1111',
	'1107','1103','1101','1102','1106','H23','C9','H15','Counselor Office'
	];

	var locations11 = [
		[78.5,32],
		[78.5,47.8],
		[78.5,73.65],
		[79.25,59.23],
		[77.9,46.23],
		[77.9,49.57],
		[79.25,62.5],
		[77.9,71.9],
		[79.25,84.9],
		[77.9,75.76],
		[78.5,90],
		[75,90],
		[80.62,93],
		[77.7,93],
		[71.75,93],
		[70.9,93],
		[68.5,90],
		[68.5,73.7],
		[68.5,48.33],
		[68.5,32],
		[74.3,32],
		[70,45.7],
		[70,49.7],
		[70,71.9],
		[70,75.7],
		[60,90],
		[60,113],
		[60,129.2],
		[69,129.2],
		[76.2,129.2],
		[78.5,129.2],
		[78.5,109],
		[78.9,133.5],
		[74.6,133.5],
		[72.25,133.5],
		[69.5,125],
		[73,125],
		[60,60.5],
		[60,32],
		[60,-4.5],
		[62.2,-4.5]
	];
	
	var the16s = ['H30','H31','H34','H32','1602','1601','1603','H33','1604','1605','1606'];
	var location16 = [
		[-8,-98.5],
		[-8,-69.5],
		[-8,-40.5],
		[2,-40.5],
		[-11,-62.2],
		[-11,-41.13],
		[-11,-77.5],
		[-34,-98.5],
		[-32,-102.5],
		[-35.9,-102.5],
		[-34.3,-117]



	];
	var the18s = ['Courtyard','Commons','H24','Front Office','H25','Registrar', 'C15', 'H27', 'H28', 'H29', '1808', '1802', '1803','1801','H26','H14', '1805'];
	var location18 = [
		[41.5,49],
		[41.5,1],
		[45,84],
		[45,88],
		[38.8,84],
		[38.8,88],
		[15,84],
		[1.5,89.5],
		[-25.5,89.5],
		[-35.5,89.5],
		[-35.5,98],
		[-31.5,83],
		[-39,83],
		[-6.5,85],
		[15,49],
		[15,1],
		[8.5,53]
	]

	var the23s = ['S9','Math Office','C18','H35','C19','C36','H36','H37','C20','C21','H39','H38','2327','2325','2326','2324',
	'2323','2322','2320','2317','2316','2315','2314','2313','2312','2311'];
	var location23 = [
		[80.5,259.5],
		[78,257],
		[78.5,264.5],
		[75.3,264.5],
		[67,264.5],
		[57,264.5],
		[77.5,279],
		[77.5,303.5],
		[77.5,319.5],
		[67,319.5],
		[67,303.5],
		[67,279],
		[78.45,268.8],
		[78.45,290],
		[76.7,277.2],
		[76.7,280.9],
		[78.42,292.67],
		[76.72,302.2],
		[76.72,305.7],
		[68.8,277.4],
		[65.67,268.6],
		[68.66,281.1],
		[65.67,289.86],
		[68.8,301.8],
		[65.74,292.85],
		[68.73,305.15]

	]
	var keys = the1315.concat(the11s).concat(the16s).concat(the18s).concat(the23s);
	var values = locations1315.concat(locations11).concat(location16).concat(location18.concat(location23));



	var result = {};
	keys.forEach((key, i) => (result[key] = values[i]));
	console.log(result);
	

	var path = [];
	ans.forEach((value, i) => (path[i] = values[keys.indexOf(value)]));

	for (let i = 0; i < path.length - 1; i++) {
		if (path[i][0] != path[i + 1][0] && path[i][1] != path[i + 1][1]) {
		}
		if (xRooms.indexOf(keys[values.indexOf(path[i])]) != -1) {
			let temp = path[i];
			let temp2 = path[i + 1];
			path.splice(i + 1, 0, [temp2[0], temp[1]]);
		}
		if (xRooms.indexOf(keys[values.indexOf(path[i + 1])]) != -1) {
			let temp = path[i];
			let temp2 = path[i + 1];
			path.splice(i + 1, 0, [temp[0], temp2[1]]);
			i++;
		}
		if (yRooms.indexOf(keys[values.indexOf(path[i])]) != -1) {
			let temp = path[i];
			let temp2 = path[i + 1];
			path.splice(i + 1, 0, [temp[0], temp2[1]]);
		}
		if (yRooms.indexOf(keys[values.indexOf(path[i + 1])]) != -1) {
			let temp = path[i];
			let temp2 = path[i + 1];
			path.splice(i + 1, 0, [temp2[0], temp[1]]);
			i++;
		}
	}
	for (let i = 0; i < path.length - 2; i++) {
		if (path[i][1] > path[i + 1][1] && path[i + 2][1] > path[i + 1][1]) {
			path.splice(i + 1, 1);
			i--;
		}
		if (path[i][1] < path[i + 1][1] && path[i + 2][1] < path[i + 1][1]) {
			path.splice(i + 1, 1);
			i--;
		}
		if (path[i][0] > path[i + 1][0] && path[i + 2][0] > path[i + 1][0]) {
			path.splice(i + 1, 1);
			i--;
		}
		if (path[i][0] < path[i + 1][0] && path[i + 2][0] < path[i + 1][0]) {
			path.splice(i + 1, 1);
			i--;
		}
	}
	let lineLayers;
	function updateRoom(room) {
		lineLayers.remove()
		ans = g.findPathWithDijkstra(room, "1313");
		path = [];
		ans.forEach((value, i) => (path[i] = values[keys.indexOf(value)]));

		console.log(path);

		for (let i = 0; i < path.length - 1; i++) {
			if (path[i][0] != path[i + 1][0] && path[i][1] != path[i + 1][1]) {
				console.log(path[i]);
			}
			if (xRooms.indexOf(keys[values.indexOf(path[i])]) != -1) {
				let temp = path[i];
				let temp2 = path[i + 1];
				path.splice(i + 1, 0, [temp2[0], temp[1]]);
			}
			if (xRooms.indexOf(keys[values.indexOf(path[i + 1])]) != -1) {
				let temp = path[i];
				let temp2 = path[i + 1];
				path.splice(i + 1, 0, [temp[0], temp2[1]]);
				i++;
			}
			if (yRooms.indexOf(keys[values.indexOf(path[i])]) != -1) {
				let temp = path[i];
				let temp2 = path[i + 1];
				path.splice(i + 1, 0, [temp[0], temp2[1]]);
			}
			if (yRooms.indexOf(keys[values.indexOf(path[i + 1])]) != -1) {
				let temp = path[i];
				let temp2 = path[i + 1];
				path.splice(i + 1, 0, [temp2[0], temp[1]]);
				i++;
			}
		}
		for (let i = 0; i < path.length - 2; i++) {
			if (path[i][1] > path[i + 1][1] && path[i + 2][1] > path[i + 1][1]) {
				path.splice(i + 1, 1);
				i--;
			}
			if (path[i][1] < path[i + 1][1] && path[i + 2][1] < path[i + 1][1]) {
				path.splice(i + 1, 1);
				i--;
			}
			if (path[i][0] > path[i + 1][0] && path[i + 2][0] > path[i + 1][0]) {
				path.splice(i + 1, 1);
				i--;
			}
			if (path[i][0] < path[i + 1][0] && path[i + 2][0] < path[i + 1][0]) {
				path.splice(i + 1, 1);
				i--;
			}
		}
		lineLayers = createLines();
	}
	const initialView = [74, -75];
	var mapOptions = {
		zoomControl: false
	}
	function createMap(container) {
		let m = L.map(container, mapOptions).setView(initialView, 10);
		L.tileLayer("images2/{z}/{x}/{y}.png", {
			subdomains: "abcd",
			tileSize: L.point(512, 512),
			maxZoom: 3,
			minZoom: 1,
			noWrap: true,
		}).addTo(m);
		m.on("click", (event) => console.log(event));
		return m;
	}

	let eye = true;
	let lines = true;

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
		let count = 0;
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
		return L.polyline(path, { color: "red", opacity: 1.0 });
	}

	let markerLayers;
	
	function mapAction(container) {
		map = createMap(container);
		toolbar.addTo(map);
		markerLayers = L.layerGroup();
		for (let location of values) {
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

	var menuItems = xRooms.concat(yRooms);
	let filteredItems = [];
	const handleInput = () => {
		return (filteredItems = menuItems.filter((item) =>
			item.toLowerCase().match(inputValue.toLowerCase())
		));
	};
</script>



<Sidebar bind:open/>
<Navbar bind:sidebar={open} />

{#if $page_shown == "about"}
	<AboutUs />
{/if}

<svelte:head>
	<link
		href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
		rel="stylesheet"
	/>
</svelte:head>

<link
	rel="stylesheet"
	href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
	integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
	crossorigin=""
/>
<div class="map" style="height:92%;width:100%" use:mapAction />
<section class="dropdown">
	<Button on:click={() => (menuOpen = !menuOpen)} {menuOpen} />

		<div id="myDropdown" class:show={menuOpen} class="dropdown-content">		
			<Input bind:inputValue on:input={handleInput} />		
				  <!-- MENU -->
				  {#if filteredItems.length > 0}
					  {#each filteredItems as item}
						  <button on:click={() => updateRoom(item)} >{item}</button>
					  {/each}
				  {:else}
					  {#each menuItems as item}
						  <button on:click={() => updateRoom(item)} >{item}</button>
					  {/each}
				  {/if}		
			</div>	
</section>

<style>
	.dropdown {
		position: absolute;
		top: 10%;
		left: 2%;
		display: inline-block;
		border-radius: 25px;
		z-index: 2;
	}

	.dropdown-content {
		display: none;
		position: absolute;
		background-color: #f6f6f6;
		min-width: 230px;
		border: 1px solid #ddd;
		z-index: 2;
		border-radius: 25px;
	}

	/* Show the dropdown menu */
	.show {
		display: block;
	}
	.map {
		width: 100%;
		height: 90%;
		margin: 0;
		padding: 0;
		z-index: 1;
		background: #dbdbdb;
	}

	:global(body) {
		padding: 0;
		overflow-x: hidden;
	}
	.map :global(.marker-text) {
		width: 100%;
		text-align: center;
		font-weight: 600;
		background-color: rgb(38, 90, 165);
		color: #eee;
		border-radius: 0.5rem;
	}

	.map :global(.map-marker) {
		width: 30px;
		transform: translateX(-50%) translateY(-25%);
	}
</style>
