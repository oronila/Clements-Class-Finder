class PriorityQueue {
    constructor() {
      this.collection = [];
    }
    enqueue(element){
        if (this.isEmpty()){ 
          this.collection.push(element);
        } else {
          let added = false;
          for (let i = 1; i <= this.collection.length; i++){
            if (element[1] < this.collection[i-1][1]){ 
              this.collection.splice(i-1, 0, element);
              added = true;
              break;
            }
          }
          if (!added){
              this.collection.push(element);
          }
        }
      };
      dequeue() {
        let value = this.collection.shift();
        return value;
      };
      isEmpty() {
        return (this.collection.length === 0) 
      };
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
        this.adjacencyList[node1].push({node:node2, weight: 1});
        this.adjacencyList[node2].push({node:node1, weight: 1});
    }
    addEdge2(node1, node2, node3) {
        this.adjacencyList[node1].push({node:node2, weight: 1});
        this.adjacencyList[node2].push({node:node1, weight: 1});
        this.adjacencyList[node1].push({node:node3, weight: 1});
        this.adjacencyList[node3].push({node:node1, weight: 1});
    }
    addEdge3(node1, node2, node3, node4) {
        this.adjacencyList[node1].push({node:node2, weight: 1});
        this.adjacencyList[node2].push({node:node1, weight: 1});
        this.adjacencyList[node1].push({node:node3, weight: 1});
        this.adjacencyList[node3].push({node:node1, weight: 1});
        this.adjacencyList[node1].push({node:node4, weight: 1});
        this.adjacencyList[node4].push({node:node1, weight: 1});
    }
    addEdge4(node1, node2, node3, node4, node5) {
        this.adjacencyList[node1].push({node:node2, weight: 1});
        this.adjacencyList[node2].push({node:node1, weight: 1});
        this.adjacencyList[node1].push({node:node3, weight: 1});
        this.adjacencyList[node3].push({node:node1, weight: 1});
        this.adjacencyList[node1].push({node:node4, weight: 1});
        this.adjacencyList[node4].push({node:node1, weight: 1});
        this.adjacencyList[node1].push({node:node5, weight: 1});
        this.adjacencyList[node5].push({node:node1, weight: 1});
    }
    addEdge5(node1, node2, node3, node4, node5, node6) {
        this.adjacencyList[node1].push({node:node2, weight: 1});
        this.adjacencyList[node2].push({node:node1, weight: 1});
        this.adjacencyList[node1].push({node:node3, weight: 1});
        this.adjacencyList[node3].push({node:node1, weight: 1});
        this.adjacencyList[node1].push({node:node4, weight: 1});
        this.adjacencyList[node4].push({node:node1, weight: 1});
        this.adjacencyList[node1].push({node:node5, weight: 1});
        this.adjacencyList[node5].push({node:node1, weight: 1});
        this.adjacencyList[node1].push({node:node6, weight: 1});
        this.adjacencyList[node6].push({node:node1, weight: 1});
    }
    addEdge5(node1, node2, node3, node4, node5, node6) {
        this.adjacencyList[node1].push({node:node2, weight: 1});
        this.adjacencyList[node2].push({node:node1, weight: 1});
        this.adjacencyList[node1].push({node:node3, weight: 1});
        this.adjacencyList[node3].push({node:node1, weight: 1});
        this.adjacencyList[node1].push({node:node4, weight: 1});
        this.adjacencyList[node4].push({node:node1, weight: 1});
        this.adjacencyList[node1].push({node:node5, weight: 1});
        this.adjacencyList[node5].push({node:node1, weight: 1});
        this.adjacencyList[node1].push({node:node6, weight: 1});
        this.adjacencyList[node6].push({node:node1, weight: 1});
    }
    addEdge6(node1, node2, node3, node4, node5, node6, node7) {
        this.adjacencyList[node1].push({node:node2, weight: 1});
        this.adjacencyList[node2].push({node:node1, weight: 1});
        this.adjacencyList[node1].push({node:node3, weight: 1});
        this.adjacencyList[node3].push({node:node1, weight: 1});
        this.adjacencyList[node1].push({node:node4, weight: 1});
        this.adjacencyList[node4].push({node:node1, weight: 1});
        this.adjacencyList[node1].push({node:node5, weight: 1});
        this.adjacencyList[node5].push({node:node1, weight: 1});
        this.adjacencyList[node1].push({node:node6, weight: 1});
        this.adjacencyList[node6].push({node:node1, weight: 1});
        this.adjacencyList[node1].push({node:node7, weight: 1});
        this.adjacencyList[node7].push({node:node1, weight: 1});
    }


    printGraph() {
        // get all the vertices
        console.log(this.adjacencyList);
        console.log(this.adjacencyList.length);
        for (var i = 0; i < this.adjacencyList.length; i++){
            console.log(this.adjacencyList[i]);
            this.adjacencyList[i].forEach(neighbor => {
                console.log(neighbor.node);
            });
        }
        

    }

    // bfs(startingNode) {

    //     // create a visited object
    //     var visited = {};

    //     // Create an object for queue
    //     var q = new Queue();

    //     // add the starting node to the queue
    //     visited[startingNode] = true;
    //     q.enqueue(startingNode);

    //     // loop until queue is empty
    //     while (!q.isEmpty()) {
    //         // get the element from the queue
    //         var getQueueElement = q.dequeue();

    //         // passing the current vertex to callback function
    //         console.log(getQueueElement);

    //         // get the adjacent list for current vertex
    //         var get_List = this.AdjList.get(getQueueElement);

    //         // loop through the list and add the element to the
    //         // queue if it is not processed yet
    //         for (var i in get_List) {
    //             var neigh = get_List[i];

    //             if (!visited[neigh]) {
    //                 visited[neigh] = true;
    //                 q.enqueue(neigh);
    //             }
    //         }
    //     }
    // }
    // dfs(v)
    findPathWithDijkstra(startNode, endNode){
        let times = {};
        let backtrace = {};
        let pq = new PriorityQueue();
        times[startNode] = 0;
      
        this.nodes.forEach(node => {
            if (node !== startNode) {
                times[node] = Infinity
            }
        });
        pq.enqueue([startNode, 0]);
        while (!pq.isEmpty()) {
            let shortestStep = pq.dequeue();
            let currentNode = shortestStep[0];
            this.adjacencyList[currentNode].forEach(neighbor => {
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
        while(lastStep !== startNode) {
          path.unshift(backtrace[lastStep])
          lastStep = backtrace[lastStep]
        }
        return `Path is ${path} and time is ${times[endNode]}`
    }
}



var g = new Graph(1000);
// *****************************
// *       FIRST FLOOR         *
// *****************************

// Special Use Rooms
var specialUseVertices = ['Attendance Office', 'Clinic', 'Girls Gym', 'Boys Gym', 'Faculty Lounge', 'Library', 'English Workroom', 'Front Office', 'Counselor Office', 'B1', 'B2', 'B3', 'Commons', 'Courtyard', 'ARD', 'Registrar'];
for (var i = 0; i < specialUseVertices.length; i++) {
    g.addVertex(specialUseVertices[i]);
}

// Classrooms
var classroomVertices = ['1327', '1325', '1326', '1324', '1323', '1322', '1320', '1317', '1315', '1316', '1314', '1313', '1311', '1312', '1520', '1521', '1522', '1510', '1512', '1513', '1515', '1514', '1127', '1125', '1123', '1121', '1120', '1126', '1101', '1111', '1115', '1116', '1117', '1130', '1118', '1131', '1132', '1133', '1134', '1136', '1135', '1601', '1602', '1603', '1604', '1605', '1606', '1801', '1802', '1803', '1804', '1805', '1808']
for (var i = 0; i < classroomVertices.length; i++) {
    g.addVertex(classroomVertices[i])
}

// Hallways, Corners, and Stairwells
var hallwayVertices = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10', 'H11', 'H12', 'H13', 'H14', 'H15', 'H16', 'H17', 'H18', 'H19', 'H20', 'H21', 'H22', 'H23', 'H24', 'H25', 'H26', 'H27', 'H28', 'H29', 'H30', 'H31', 'H32', 'H33', 'H34']
for (var i = 0; i < hallwayVertices.length; i++) {
    g.addVertex(hallwayVertices[i])
}

var cornerVertices = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'C11', 'C12', 'C13', 'C14', 'C15', 'C16', 'C17']
for (var i = 0; i < cornerVertices.length; i++) {
    g.addVertex(cornerVertices[i])
}

var stairwellVertices = ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8','S9','S10','S11','S12']
for (var i = 0; i < stairwellVertices.length; i++) {
    g.addVertex(stairwellVertices[i])
}

// *****************************
// *      SECOND FLOOR         *
// *****************************

// Special Use Rooms
var specialUseVertices2 = ['Math Office','Science Workroom','Book Room','B4']
for (var i = 0; i < specialUseVertices2.length; i++) {
    g.addVertex(specialUseVertices2[i]);
}

// Classrooms
var classroomVertices2 = ['2327','2325','2323','2326','2324','2322','2320','2331','2330','2317','2315','2316','2314','2313','2311','2312','2310','2412','2521','2413','2518','2517','2519','2525','2527','2531','2529','2513','2515','2516','2514','2512','2510','2511','2218','2216','2214','2220','2136','2132','2131','2130','2120','2122','2125','2123','2108','2107','2103','2102','2101','2012','2003','2011','2001','2010','2007','2008','2801','2802','2803','2810','2812','2820','2822','2824','2826','2828','2814','2815','2830','2816']
for (var i = 0; i < classroomVertices2.length; i++) {
    g.addVertex(classroomVertices2[i]);
}

// Hallways, Corners, and Stairwells
var hallwayVertices2 = ['H35','H36','H37','H38','H39','H40','H41','H42','H43','H44','H45','H46','H47','H48','H49','H50','H51','H52','H53','H54','H55','H56','H57','H58','H59','H60','H61','H62','H63']
for (var i = 0; i < hallwayVertices2.length; i++) {
    g.addVertex(hallwayVertices2[i])
}

var cornerVertices2 = ['C18','C19','C20','C21','C22','C23','C24','C25','C26','C27','C28','C29','C30','C31','C32','C33','C34','C35','C36']
for (var i = 0; i < cornerVertices2.length; i++) {
    g.addVertex(cornerVertices2[i])
}

// *****************************
// *      ADDING EDGES         *
// *****************************

// First Floor Edges
g.addEdge2('H1', 'Attendance Office', 'C1')
g.addEdge6('H2', '1327', '1325', '1326', '1325', '1324', 'C1')
g.addEdge6('H3', '1323', '1322', '1320', 'B1', 'C3', 'H2')
g.addEdge3('H4', 'C1', 'Clinic', 'C2')
g.addEdge2('H5', 'C3', 'C4')
g.addEdge5('H6', 'C4', '1311', '1313', '1312', 'H7')
g.addEdge5('H7', '1315', '1317', '1316', '1314', 'C2')
g.addEdge3('H8', 'C6', 'Faculty Lounge', 'C5')
g.addEdge4('H9', 'C6', '1520', '1521', 'H10')
g.addEdge3('H10', '1522', 'ARD', 'C8')
g.addEdge4('H11', 'C5', '1510', '1512', 'H12')
g.addEdge4('H12', '1513', '1515', '1514', 'C7')
g.addEdge2('H13', 'C8', 'C7')
g.addEdge3('H14', 'C7', 'Commons', 'H26')
g.addEdge4('H15', 'Counselor Office', 'C5', 'Commons', 'C9')
g.addEdge3('H16', 'C3', 'Library', 'C11')
g.addEdge6('H17', 'C11', 'B2', '1135', '1136', '1134', 'H18')
g.addEdge5('H18', '1133', '1131', '1132', '1130', 'C12')
g.addEdge4('H19', 'C12', 'C13', '1116', '1115')
g.addEdge5('H20', 'C13', '1120', '1121', '1123', 'H21')
g.addEdge4('H21', 'C10', '1127', '1125', '1126')
g.addEdge2('H22', 'C10', 'C11')
g.addEdge3('H23', 'C9', 'Courtyard', 'C14')
g.addEdge3('H24', 'C14', 'Front Office', 'H25')
g.addEdge2('H25', 'Registrar', 'C15')
g.addEdge4('H26', 'Courtyard', 'S4', '1805', 'C15')
g.addEdge4('H27', 'C15', '1801', 'B3', 'H28')
g.addEdge2('H28', '1802', 'H29')
g.addEdge3('H29', '1803', 'S8', '1808')
g.addEdge3('H30', 'C8', 'H31', 'H33')
g.addEdge2('H31', '1603', 'H32')
g.addEdge3('H32', '1602', '1601', 'H34')
g.addEdge3('H33', '1605', '1606', '1604')
g.addEdge2('H34', 'C7', 'S6')

//Second Floor Edges
g.addEdge4('H35','C18','2331','2330','C19')
g.addEdge6('H36','C18','2327','2325','2326','2324','H37')
g.addEdge5('H37','2323','2322','B4','2320','C20')
g.addEdge6('H38','C19','2317','2315','2316','2314','H39')
g.addEdge5('H39','2313','2311','2312','2310','C21')
g.addEdge3('H40','C20','2220','C23')
g.addEdge3('H41','2136','C23','C26')
g.addEdge5('H42','C23','2132','2131','2130','C24')
g.addEdge4('H43','C24','2125','2123','C25')
g.addEdge4('H44','C26','2120','2122','C25')
g.addEdge2('H45','C25','C27')
g.addEdge5('H46','C27','2102','2101','2103','H47')
g.addEdge3('H47','2108','2107','C28')
g.addEdge2('H48','C24','C28')
g.addEdge6('H49','C25','2012','2003','2011','2001','2010')
g.addEdge3('H49','2007','2008','C29')
g.addEdge3('H50','C29','2801','C30')
g.addEdge5('H51','2812','2810','2820','C31','H52')
g.addEdge3('H52','2824','2822','H53')
g.addEdge5('H53','2826','2828','C32','2815','2814')
g.addEdge3('H54','2816','C33','2815')
g.addEdge4('H55','C33','2814','S4','C29')
g.addEdge2('H56','C34','C33')
g.addEdge6('H57','2513','2515','2514','2516','C34','H58')
g.addEdge4('H58','2511','2510','2512','C22')
g.addEdge3('H59','C35','C34','2529')
g.addEdge4('H60','C35','2525','2527','H61')
g.addEdge4('H61','2413','2521','2412','C36')
g.addEdge4('H62','C36','2518','2517','C22')
g.addEdge5('H63','C22','2218','2216','2214','C26')

g.addEdge('C2', 'C6')
g.addEdge('C3', 'S1')
g.addEdge('C4', 'C5')
g.addEdge('C6', 'Girls Gym')
g.addEdge2('C8', 'S5', 'Boys Gym')
g.addEdge2('C9', 'C10', 'S3')
g.addEdge('C11', 'S2')
g.addEdge2('C12', '1117', '1118')
g.addEdge('C16', '1111')
g.addEdge2('C14', 'English Workroom', 'C13')
g.addEdge('C17', '1101')
g.addEdge('C18','S9')
g.addEdge('C19','C36')
g.addEdge('C20','S1')
g.addEdge('C21','C22')
g.addEdge('C22','S7')
g.addEdge('C23','S2')
g.addEdge('C25','S11')
g.addEdge2('C26','S3','Book Room')
g.addEdge2('C28','S10','Science Workroom')
g.addEdge('C29','S12')
g.addEdge('C30','C31')
g.addEdge3('C31','2802','2803','S8')
g.addEdge('C32','2830')
g.addEdge('C34','S6')
g.addEdge('C35','S5')

g.addEdge('S9','Math Office')
g.addEdge('2519','2518','2517')
g.addEdge('2531','2529')

// Print the graph
//g.printGraph();
console.log(g.findPathWithDijkstra('C29','Math Office'));
g.printGraph();
//console.log("BFS")
//g.bfs('C10')