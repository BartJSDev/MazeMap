function randomRange(min, max) {

    return min + Math.random() * (max - min)
}

function randomColor() {

    return "hsl(" + Math.floor(Math.random() * 360) + ",50%,50%)"
}

function Getnode(row, col) {

    if (maze[row] === undefined) return false
    if (maze[row][col] === undefined) return false
    return maze[row][col]
}

function Createwalls(row, col) {

    for (var i = - 1; i < 2; i++) {
        for (var j = - 1; j < 2; j++) {
            if ((i !== 0) || (j !== 0)) {
                if (Getnode(row + i, col + j) && !Getnode(row + i, col + j).opening) {
                    Getnode(row + i, col + j).iswall = true
                }
            }
        }
    }
}

function PickRandomNode() {

    do {

        var c = Math.floor(Math.random() * COLS)
        var r = Math.floor(Math.random() * ROWS)

    } while (r % 2 === 0 || c % 2 === 0)

    return Getnode(r, c)

}

function CreateOpening(a, b) {

    if (a.row === b.row - 2) {

        Getnode(a.row + 1, a.col).opening = true;
        Getnode(a.row + 1, a.col).iswall = false;
    }

    if (a.row === b.row + 2) {

        Getnode(a.row - 1, a.col).opening = true;
        Getnode(a.row - 1, a.col).iswall = false;
    }

    if (a.col === b.col - 2) {

        Getnode(a.row, a.col + 1).opening = true;
        Getnode(a.row, a.col + 1).iswall = false;
    }

    if (a.col === b.col + 2) {

        Getnode(a.row, a.col - 1).opening = true;
        Getnode(a.row, a.col - 1).iswall = false;
    }
}

function heuristic(a, b) {
    return Math.abs(a.row - b.row) + Math.abs(a.col - b.col);
}