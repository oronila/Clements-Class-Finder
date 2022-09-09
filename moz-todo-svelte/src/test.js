class Graph {
    // defining vertex array and
    // adjacent list
    constructor(noOfVertices)
    {
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
    }
 
    // functions to be implemented
 
    addVertex(v){
        this.AdjList.set(v, []);
    }

    addEdge(v, w){
        this.AdjList.get(v).push(w);
        this.AdjList.get(w).push(v);
    }
    printGraph(){
        // get all the vertices
        var get_keys = this.AdjList.keys();
 
        // iterate over the vertices
        for (var i of get_keys){
            // great the corresponding adjacency list
            // for the vertex
            var get_values = this.AdjList.get(i);
            var conc = "";
            
            // iterate over the adjacency list
            // concatenate the values into a string
            for (var j of get_values)
                conc += j + " ";
 
            // print the vertex and its adjacency list
            console.log(i + " -> " + conc);
        }
    }
 
    // bfs(v)
    // dfs(v)
}



var g = new Graph(1000);
//
// SPECIAL USE ROOMS
//
var specialUseVertices = ['Attendance Ofice', 'Clinic','Girls Gym','Boys Gym','Faculty Lounge','Library','English Workroom','Front Office','Counselor Office','B1','B2','Commons','Courtyard','ARD'];
for (var i = 0; i < specialUseVertices.length; i++) {
    g.addVertex(specialUseVertices[i]);
}

//
// CLASSROOMS
//
var classroomVertices = ['1327','1325','1326','1324','1323','1322','1320','1317','1315','1316','1314','1313','1311','1312','1520','1521','1522','1510','1512','1513','1515','1514','1127','1125','1123','1121','1120','1126','1115','1116','1117','1130','1118','1131','1132','1133','1134','1136','1135']
for (var i = 0; i < classroomVertices.length; i++){
    g.addVertex(classroomVertices[i])
}

//
// HALLWAYS, CORNERS, AND STAIRWELLS
//
var hallwayVertices = ['H1','H2','H3','H4','H5','H6','H7','H8','H9','H10','H11','H12','H13','H14','H15','H16','H17','H18','H19','H20','H21','H22','H23','H24','H25','H26','H27','H28','H29','H30','H31','H32','H33']
for (var i = 0; i < hallwayVertices.length; i++){
    g.addVertex(hallwayVertices[i])
}

var cornerVertices = ['C1','C2','C3','C4','C5','C6','C7','C8','C9','C10','C11','C12','C13','C14','C15']
for (var i = 0; i < cornerVertices.length; i++){
    g.addVertex(cornerVertices[i])
}

var stairwellVertices = ['S1']
for (var i = 0; i < stairwellVertices.length; i++){
    g.addVertex(stairwellVertices[i])
}

//
// ADDING EDGES
//

g.addEdge('H1','Attendance Office')
g.addEdge('H1','C1')
g.addEdge('H2','1327')
g.addEdge('H2','1325')
g.addEdge('H2','1326')
g.addEdge('H2','1325')
g.addEdge('H2','H3')
g.addEdge('H3','1323')
g.addEdge('H3','1322')
g.addEdge('H3','1320')
g.addEdge('H3','B1')
g.addEdge('H3','C3')
g.addEdge('H4','C1')
g.addEdge('H4','Clinic')
g.addEdge('H4','C2')
g.addEdge('H5','C3')
g.addEdge('H5','C4')
g.addEdge('H6','C4')
g.addEdge('H6','1311')
g.addEdge('H6','1313')
g.addEdge('H6','1312')
g.addEdge('H6','H7')
g.addEdge('H7','1315')
g.addEdge('H7','1317')
g.addEdge('H7','1316')
g.addEdge('H7','1314')
g.addEdge('H7','C2')
g.addEdge('H8','C6')
g.addEdge('H8','Faculty Lounge')
g.addEdge('H8','C5')
g.addEdge('H9','C6')
g.addEdge('H9','1520')
g.addEdge('H9','1521')
g.addEdge('H9','H10')
g.addEdge('H10','1522')
g.addEdge('H10','ARD')
g.addEdge('H10','C8')
g.addEdge('H11','C5')
g.addEdge('H11','1510')
g.addEdge('H11','1512')
g.addEdge('H11','H12')
g.addEdge('H12','1513')
g.addEdge('H12','1515')
g.addEdge('H12','1514')
g.addEdge('H12','C7')
g.addEdge('H13','C8')
g.addEdge('H13','C7')
g.addEdge('H14','C7')
g.addEdge('H14','Commons')
g.addEdge('H14','H26')


/* Special Use Room Edges

g.addEdge('Attendance Office', 'H1')
g.addEdge('Clinic', 'H4')
g.addEdge('Girls Gym','C6')
g.addEdge('Boys Gym','C8')
g.addEdge('Faculty Lounge','H8')
g.addEdge('Library','H16')
g.addEdge('English Workroom','C14')
g.addEdge('Front Office','C14')
g.addEdge('Counselor Office','H15')
g.addEdge('B1','H3')
g.addEdge('B2','H17')
g.addEdge('Commons','')
*/




// Print the graph
g.printGraph();