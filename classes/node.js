class Node {

    constructor(x, y, size, row, col) {

        this.x = x;
        this.y = y;
        this.size = size;
        this.row = row;
        this.col = col;
        this.iswall = false
        this.currentsize = 0
        this.opening = false
        this.visited = false
        this.g = 0
        this.h = 0
        this.f = 0
        this.previous = null
        this.deadend = false
        this.evaluated = false
        this.parent = false
    }

    draw() {


        c.save()
        c.translate(this.x, this.y)

        // Draw outline
        c.beginPath();
        c.strokeStyle = "rgb(11,11,11)";
        c.rect(-this.size / 2, -this.size / 2, this.size, this.size);
        c.stroke();
        c.closePath();

        // Draw fill
        c.beginPath();
        c.fillStyle = "rgb(44,44,44)";
        c.rect(-this.currentsize / 2, -this.currentsize / 2, this.currentsize, this.currentsize);
        c.fill();
        c.closePath();

        c.restore()


    }


    update() {


        if (this.iswall) {

            if (this.currentsize < this.size) {

                this.currentsize += (this.size - this.currentsize) * 0.07;
                if (Math.abs(this.currentsize - this.size) < 0.5) this.currentsize = this.size;

            }

        } else {
            if (this.currentsize > 0) {
                this.currentsize -= this.currentsize * 0.07;
                if (this.currentsize < 0.5) this.currentsize = 0;
            }
        }
    }
}