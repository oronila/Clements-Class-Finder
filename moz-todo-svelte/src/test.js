
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
    addEdge2(v, w, w2){
        this.AdjList.get(v).push(w);
        this.AdjList.get(w).push(v);
        this.AdjList.get(v).push(w2);
        this.AdjList.get(w2).push(v);
    }
    addEdge3(v, w, w2, w3){
        this.AdjList.get(v).push(w);
        this.AdjList.get(w).push(v);
        this.AdjList.get(v).push(w2);
        this.AdjList.get(w2).push(v);
        this.AdjList.get(v).push(w3);
        this.AdjList.get(w3).push(v);
    }
    addEdge4(v, w, w2, w3, w4){
        this.AdjList.get(v).push(w);
        this.AdjList.get(w).push(v);
        this.AdjList.get(v).push(w2);
        this.AdjList.get(w2).push(v);
        this.AdjList.get(v).push(w3);
        this.AdjList.get(w3).push(v);
        this.AdjList.get(v).push(w4);
        this.AdjList.get(w4).push(v);
    }
    addEdge5(v, w, w2, w3, w4, w5){
        this.AdjList.get(v).push(w);
        this.AdjList.get(w).push(v);
        this.AdjList.get(v).push(w2);
        this.AdjList.get(w2).push(v);
        this.AdjList.get(v).push(w3);
        this.AdjList.get(w3).push(v);
        this.AdjList.get(v).push(w4);
        this.AdjList.get(w4).push(v);
        this.AdjList.get(v).push(w5);
        this.AdjList.get(w5).push(v);
    }
    addEdge6(v, w, w2, w3, w4, w5, w6){
        this.AdjList.get(v).push(w);
        this.AdjList.get(w).push(v);
        this.AdjList.get(v).push(w2);
        this.AdjList.get(w2).push(v);
        this.AdjList.get(v).push(w3);
        this.AdjList.get(w3).push(v);
        this.AdjList.get(v).push(w4);
        this.AdjList.get(w4).push(v);
        this.AdjList.get(v).push(w5);
        this.AdjList.get(w5).push(v);
        this.AdjList.get(v).push(w6);
        this.AdjList.get(w6).push(v);
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
var specialUseVertices = ['Attendance Office', 'Clinic','Girls Gym','Boys Gym','Faculty Lounge','Library','English Workroom','Front Office','Counselor Office','B1','B2','B3','Commons','Courtyard','ARD','Registrar'];
for (var i = 0; i < specialUseVertices.length; i++) {
    g.addVertex(specialUseVertices[i]);
}

//
// CLASSROOMS
//
var classroomVertices = ['1327','1325','1326','1324','1323','1322','1320','1317','1315','1316','1314','1313','1311','1312','1520','1521','1522','1510','1512','1513','1515','1514','1127','1125','1123','1121','1120','1126','1101','1111','1115','1116','1117','1130','1118','1131','1132','1133','1134','1136','1135','1601','1602','1603','1604','1605','1606','1801','1802','1803','1804','1805','1808']
for (var i = 0; i < classroomVertices.length; i++){
    g.addVertex(classroomVertices[i])
}

//
// HALLWAYS, CORNERS, AND STAIRWELLS
//
var hallwayVertices = ['H1','H2','H3','H4','H5','H6','H7','H8','H9','H10','H11','H12','H13','H14','H15','H16','H17','H18','H19','H20','H21','H22','H23','H24','H25','H26','H27','H28','H29','H30','H31','H32','H33','H34']
for (var i = 0; i < hallwayVertices.length; i++){
    g.addVertex(hallwayVertices[i])
}

var cornerVertices = ['C1','C2','C3','C4','C5','C6','C7','C8','C9','C10','C11','C12','C13','C14','C15','C16','C17']
for (var i = 0; i < cornerVertices.length; i++){
    g.addVertex(cornerVertices[i])
}

var stairwellVertices = ['S1','S2','S3','S4','S5','S6','S7','S8']
for (var i = 0; i < stairwellVertices.length; i++){
    g.addVertex(stairwellVertices[i])
}

//
// ADDING EDGES
//

g.addEdge2('H1','Attendance Office','C1')
g.addEdge6('H2','1327','1325','1326','1325','1324','C1')
g.addEdge6('H3','1323','1322','1320','B1','C3','H2')
g.addEdge3('H4','C1','Clinic','C2')
g.addEdge2('H5','C3','C4')
g.addEdge5('H6','C4','1311','1313','1312','H7')
g.addEdge5('H7','1315','1317','1316','1314','C2')
g.addEdge3('H8','C6','Faculty Lounge','C5')
g.addEdge4('H9','C6','1520','1521','H10')
g.addEdge3('H10','1522','ARD','C8')
g.addEdge4('H11','C5','1510','1512','H12')
g.addEdge4('H12','1513','1515','1514','C7')
g.addEdge2('H13','C8','C7')
g.addEdge3('H14','C7','Commons','H26')
g.addEdge4('H15','Counselor Office','C5','Commons','C9')
g.addEdge3('H16','C3','Library','C11')
g.addEdge6('H17','C11','B2','1135','1136','1134','H18')
g.addEdge5('H18','1133','1131','1132','1130','C12')
g.addEdge4('H19','C12','C13','1116','1115')
g.addEdge5('H20','C13','1120','1121','1123','H21')
g.addEdge4('H21','C10','1127','1125','1126')
g.addEdge2('H22','C10','C11')
g.addEdge3('H23','C9','Courtyard','C14')
g.addEdge3('H24','C14','Front Office','H25')
g.addEdge2('H25','Registrar','C15')
g.addEdge4('H26','Courtyard','S4','1805','C15')
g.addEdge4('H27','C15','1801','B3','H28')
g.addEdge2('H28','1802','H29')
g.addEdge3('H29','1803','S8','1808')
g.addEdge3('H30','C8','H31','H33')
g.addEdge2('H31','1603','H32')
g.addEdge3('H32','1602','1601','H34')
g.addEdge3('H33','1605','1606','1604')
g.addEdge2('H34','C7','S6')

g.addEdge('C2','C6')
g.addEdge('C3','S1')
g.addEdge('C4','C5')
g.addEdge('C6','Girls Gym')
g.addEdge2('C8','S5','Boys Gym')
g.addEdge2('C9','C10','S3')
g.addEdge('C11','S2')
g.addEdge2('C12','1117','1118')
g.addEdge('C16','1111')
g.addEdge2('C14','English Workroom','C13')
g.addEdge('C17','1101')



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