# 🧩 Maze Visualizer

A fully animated maze generation and pathfinding visualizer built with vanilla JavaScript and HTML5 canvas. Supports **Depth-First Maze Generation**, **A* Pathfinding**, and **Dead-End Filling** with smooth, real-time visual feedback.

Maze generation

![src](https://github.com/user-attachments/assets/0c5be1fc-f02f-4056-af36-5faa3cae817b)

A*

![src1](https://github.com/user-attachments/assets/3a82a0e4-7f71-4f8f-a5cd-f541c18d9001)

Deadendfilling

![src2](https://github.com/user-attachments/assets/e4e8b2d6-d335-4492-a41f-757b9ad6e1b3)


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
