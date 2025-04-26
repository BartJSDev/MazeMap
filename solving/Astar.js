function Astar() {

    startnode.g = 0
    startnode.h = heuristic(startnode, endnode)
    startnode.f = startnode.g + startnode.h
    openset = [startnode]
    closedset = []

    function run() {

        //while there are nodes in the openset
        if (openset.length > 0) {

            var winner = 0

            //search node with lowest f and make it current
            for (var i = 0; i < openset.length; i++) {

                if (openset[i].f < openset[winner].f) {

                    winner = i
                }
            }

            current = openset[winner]

            //if we are done
            if (current === endnode) {

                console.log("✅ Pad gevonden!");
                path = tracePath(endnode)
                return

            }

            //remove node with lowest f from the openset and push in closedset
            openset.splice(winner, 1)
            closedset.push(current)

            let neighbors = getNeighbors(current.row, current.col)

            for (var i = 0; i < neighbors.length; i++) {

                var neighbor = neighbors[i]

                //if neighbor is a wall or in the closed set continue
                if (closedset.includes(neighbor) || neighbor.iswall) {
                    continue;
                }

                if (!openset.includes(neighbor)) {
    
                    openset.push(neighbor);
                }

                neighbor.g = current.g + 1 
                neighbor.h = heuristic(neighbor , endnode)
                neighbor.f = neighbor.g + neighbor.h 
                neighbor.previous = current
            }

        }else{

            console.log("❌ Geen pad gevonden — maze is niet oplosbaar.");
            return
        }

       requestAnimationFrame(run)

    }

    run()

}

function getNeighbors(row, col) {

    let nodes = []

    var adjacent = [

        { row: -1, col: 0 },
        { row: 0, col: -1 },
        { row: 0, col: 1 },
        { row: 1, col: 0 }

    ]

    adjacent.forEach((el, i) => {

        let neighbor = Getnode(row + el.row, col + el.col);

        if (neighbor && !neighbor.iswall) {

            nodes.push(neighbor)
        }

    })

    return nodes

}

function tracePath(end){

    let path = [];
    let temp = end;

    while (temp.previous) {
        path.push(temp);
        temp = temp.previous;
    }

    path.push(startnode)

    return path
}