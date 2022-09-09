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



var g = new Graph(6);
var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];
 
// adding vertices
for (var i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}
 
// adding edges
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');

g.printGraph();