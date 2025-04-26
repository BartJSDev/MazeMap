function getOpenNeighbors(row, col) {

    let nodes = [];

    let dirs = [
        { row: -1, col: 0 },
        { row: 1, col: 0 },
        { row: 0, col: -1 },
        { row: 0, col: 1 }
    ];

    for (let d of dirs) {
        let n = Getnode(row + d.row, col + d.col);
        if (n && !n.iswall && !n.evaluated) {
            nodes.push(n);
        }
    }

    return nodes;
}

function Deadendfilling(){

    let start = Getnode(1,0);
    let end = Getnode(ROWS - 2, COLS - 1)
    let pending = []

    let current_node = start

    function loop(){

        let neighbors = getOpenNeighbors(current_node.row , current_node.col)

        neighbors.forEach(node => {
            if(!node.evaluated){
                node.parent = current_node
                pending.push(node)
            } 
        })

        current_node.evaluated = true

        if(current_node === end){
            //draw path
            getPath(end)
            console.log("we are done")
            return
        }

        if(neighbors.length === 1){

            neighbors[0].deadend = true
        }

        if(pending.length > 0){

            current_node = pending.pop()

        }else{

            console.log("dead end filling complete")
            return
        }
       

        requestAnimationFrame(loop)

    }

    loop()
    
}

function getPath(node) {
    while (node) {
        route.push(node); // Or draw a visual representation
        node = node.parent;
    }

}