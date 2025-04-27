# 🧩 Maze Visualizer

A fully animated maze generation and pathfinding visualizer built with vanilla JavaScript and HTML5 canvas. Supports **Depth-First Maze Generation**, **A* Pathfinding**, and **Dead-End Filling** with smooth, real-time visual feedback.

Maze generation

![1](https://github.com/user-attachments/assets/003f7edd-1978-4295-91f5-d77bf9ddeac1)

A*

![3](https://github.com/user-attachments/assets/09ff9e25-38cb-4516-95ef-8f47b1332ed5)

Deadendfilling

![2](https://github.com/user-attachments/assets/a71da69e-449a-4201-a2b1-70fc1a5ac9d3)


---

## 🚀 Features

- 🎮 Click/tap to generate a new maze instantly
- 🧱 Depth-First Search maze generation with animated wall carving
- 🧭 A* Pathfinding algorithm with live open/closed set visualization
- 🧬 Dead-end pruning (dead-end filling) to simplify the maze
- 🖼️ Export maze as PNG image
- 📱 Responsive design for mobile & desktop
- 🔁 Smooth animations using `requestAnimationFrame`

---

## 🧠 Algorithms Used

- **Maze Generation**: Recursive backtracking (Depth-First Search)
- **Pathfinding**: A* (A-star) algorithm with Manhattan heuristic
- **Dead-End Filling**: Flood fill with backtracking to detect and prune dead ends

---

## 📦 Usage

https://bartjsdev.github.io/MazeMap/


### 1. Clone the repo
```bash
git clone https://github.com/BartJSDev/MazeMap.git
cd MazeMap
