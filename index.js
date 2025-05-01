let canvas = document.querySelector("canvas")
let c = canvas.getContext("2d")

canvas.width = innerWidth * devicePixelRatio
canvas.height = innerHeight * devicePixelRatio

let COLS, ROWS, SIZE, OFFSETX, OFFSETY , HEIGHT
let nav = document.querySelector("nav")
let menu = document.querySelector(".menu")
let mouseclick = true

if (window.innerWidth > 768) {
    // Desktop
    COLS = 35;
    ROWS = 35;
    SIZE = 40
    HEIGHT = nav.offsetHeight 
    OFFSETX = (canvas.width - (COLS * SIZE)) / 2
    OFFSETY = (canvas.height - (ROWS * SIZE) - HEIGHT) / 2 + HEIGHT
} else {
    // Mobiel
    COLS = 25;
    ROWS = 25;
    SIZE = 40
    HEIGHT = nav.offsetHeight 
    OFFSETX = (canvas.width - (COLS * SIZE)) / 2
    OFFSETY = (canvas.height -  (ROWS * SIZE) - HEIGHT) / 2 + HEIGHT * 2
}

//maze variables
let maze = []
let currentnode = undefined
let stack = []
let mazeTimeout = null
let startnode = null
let endnode = null

//Astar variables
let openset = []
let closedset = []
let current = null
let path = []
let count = 0
let pathAnimating = true

//deadendfilling variables
let route = []


CreateGrid()
draw()

function CreateGrid() {

    maze = []

    for (var i = 0; i < ROWS; i++) {
        maze[i] = []
        for (var j = 0; j < COLS; j++) {
            maze[i][j] = new Node(OFFSETX + j * SIZE + SIZE / 2, OFFSETY + i * SIZE + SIZE / 2, SIZE, i, j)
        }
    }

    startnode = Getnode(1, 0)
    endnode = Getnode(ROWS - 2, COLS - 1)

    startnode.opening = true
    endnode.opening = true

}

function draw() {

    c.clearRect(0, 0, canvas.width, canvas.height)

    //draw the grid
    maze.forEach(row => {

        row.forEach(node => {

            node.draw()
            node.update()

        })
    })

    //draw open set
    if (openset.length > 0) {

        for (var i = 0; i < openset.length; i++) {

            c.beginPath()
            c.fillStyle = "tomato"
            c.rect(openset[i].x - SIZE / 2, openset[i].y - SIZE / 2, SIZE, SIZE)
            c.fill()
            c.closePath()

        }

    }

    //draw closed set
    if (closedset.length > 0) {

        for (var i = 0; i < closedset.length; i++) {

            c.beginPath()
            c.fillStyle = "rgba(50,205,50,.3)"
            c.rect(closedset[i].x - SIZE / 2, closedset[i].y - SIZE / 2, SIZE, SIZE)
            c.fill()
            c.closePath()

        }

    }

    //draw Astar path
    if (path.length > 0) {

        if (count < path.length && pathAnimating) {

            for (var i = 0; i <= count; i++) {

                c.beginPath()
                c.fillStyle = "rgba(255,255,0,.4)"
                c.rect(path[i].x - SIZE / 2, path[i].y - SIZE / 2, SIZE, SIZE)
                c.fill()
                c.closePath()

            }

            count++

        } else {

            pathAnimating = true

            for (var i = 0; i < path.length; i++) {

                c.beginPath()
                c.fillStyle = "rgba(255,255,0,.4)"
                c.rect(path[i].x - SIZE / 2, path[i].y - SIZE / 2, SIZE, SIZE)
                c.fill()
                c.closePath()

            }
        }


    }


    //draw dead end filling
    DrawDeadfilling()

    requestAnimationFrame(draw)

}

function DrawDeadfilling() {

    //draw flooding
    for (var i = 0; i < ROWS; i++) {
        for (var j = 0; j < COLS; j++) {

            let node = maze[i][j]

            if (node.evaluated) {

                c.beginPath();
                c.fillStyle = "rgba(255,102,178,.7)";
                c.rect(node.x - SIZE / 2, node.y - SIZE / 2, SIZE, SIZE);
                c.fill();
                c.closePath();
            }

            if (node.deadend) {

                c.beginPath();
                c.fillStyle = "rgba(153,0,76,1)";
                c.rect(node.x - SIZE / 2, node.y - SIZE / 2, SIZE, SIZE);
                c.fill();
                c.closePath();
            }
        }

    }

    //draw route
    route.forEach(node => {

        c.beginPath();
        c.fillStyle = "rgba(0,255,0,.4)";
        c.rect(node.x - SIZE / 2, node.y - SIZE / 2, SIZE, SIZE);
        c.fill();
        c.closePath();
    })
}


canvas.addEventListener("click", function (e) {

    if(mouseclick){

        clearTimeout(mazeTimeout)
        currentnode = undefined
        stack = []
        path = []
        current = null
        openset = []
        closedset = []
        console.log("Maze (re)started.");
        pathAnimating = true
        route = []
        CreateGrid()
        CreateMaze();
    }
  

})

canvas.addEventListener("touchstart", function (e) {

    if(mouseclick){

        clearTimeout(mazeTimeout)
        currentnode = undefined
        stack = []
        path = []
        current = null
        openset = []
        closedset = []
        console.log("Maze (re)started.");
        pathAnimating = true
        route = []
        CreateGrid()
        CreateMaze();
    }

})

function export_img() {

    const dataURL = canvas.toDataURL("image/png");

    // Maak download link
    const link = document.createElement('a');
    link.download = "maze.png";
    link.href = dataURL;
    link.click();

}

window.addEventListener('resize', () => {
    location.reload(); // herlaadt de pagina zodat alles opnieuw wordt opgebouwd
});

function toggleMenu() {
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}