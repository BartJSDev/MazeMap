function CreateMaze() {

    if (!currentnode) currentnode = PickRandomNode()

    if (currentnode) {

        let nextnode = GetAdjacentnode(currentnode.row, currentnode.col)

        if (nextnode) {

            CreateOpening(currentnode, nextnode)
            Createwalls(currentnode.row, currentnode.col)
            Createwalls(nextnode.row, nextnode.col)
            nextnode.visited = true
            stack.push(nextnode)
            currentnode = nextnode

        } else {

            if (stack.length > 0) {

                currentnode = stack.pop()

            } else {

                console.log("Maze generation complete.");
                //Astar()
                Deadendfilling()
                return;
            }
        }

    }

    mazeTimeout = setTimeout(CreateMaze, 30)

}

function GetAdjacentnode(row, col) {

    var nodes = []

    var adjacent = [

        { row: -2, col: 0 },
        { row: 0, col: -2 },
        { row: 0, col: 2 },
        { row: 2, col: 0 }

    ]

    adjacent.forEach((el, i) => {

        let neighbor = Getnode(row + el.row, col + el.col);

        if (neighbor && !neighbor.visited) {

            nodes.push(neighbor);
        }

    })

    return nodes[Math.floor(Math.random() * nodes.length)]
}