# 🧩 MazeMapper

A fully animated maze generation and pathfinding visualizer built with vanilla JavaScript and HTML5 canvas. Supports **Depth-First Maze Generation**, **A* Pathfinding**, and **Dead-End Filling** with smooth, real-time visual feedback.

Maze generation

![screenshot1](https://github.com/user-attachments/assets/2fc71630-0a9d-40fe-8a22-7bd0aec515f4)
![screenshot2](https://github.com/user-attachments/assets/7acaa12a-a715-4613-b231-d3143bb1d4ab)

A*

![screenshot3](https://github.com/user-attachments/assets/20cb8f16-4f01-4cad-89bb-21c85d491cd5)

Deadendfilling

![screenshot4](https://github.com/user-attachments/assets/883108bc-be9f-4c32-b28c-e2e681940c85)


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

https://bartjsdev.github.io/MazeMapper/


### 1. Clone the repo
```bash
git clone https://github.com/BartJSDev/MazeMap.git
cd MazeMap
