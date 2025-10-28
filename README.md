# 🗺️ Shortest Path Finder

An interactive React-based visualization tool for exploring and understanding shortest path algorithms in graph theory. This application provides a visual and intuitive way to see how different pathfinding algorithms work in real-time.


## 🌟 Features

- **🎨 Interactive Visualization**: Click and drag to create custom graphs and nodes
- **🔍 Multiple Algorithms**: Supports various pathfinding algorithms:
  - Dijkstra's Algorithm
  - A* (A-Star) Algorithm
  - Breadth-First Search (BFS)
  - Depth-First Search (DFS)
- **⚡ Real-time Animation**: Watch algorithms explore paths step-by-step
- **🎯 Customizable Grid**: Adjust grid size and add obstacles
- **📊 Performance Metrics**: Compare algorithm efficiency and path lengths
- **🎨 Modern UI**: Clean, responsive design with smooth animations
- **💾 Save/Load Grids**: Save your custom grid configurations

---


## 📋 Table of Contents

- [Installation](#-installation)
- [Usage](#-usage)
- [Algorithms](#-algorithms)
- [Project Structure](#-project-structure)
- [Technologies Used](#️-technologies-used)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 💻 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/BVPKARTHIKEYA/shortest-path-finder.git
   cd shortest-path-finder
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:3000` to see the application running.

---

## 🎮 Usage

### Basic Operations

1. **Set Start Point**: Click on any cell to set the starting node (green)
2. **Set End Point**: Click on another cell to set the destination node (red)
3. **Add Obstacles**: Click and drag on cells to create walls/obstacles (black)
4. **Select Algorithm**: Choose your preferred pathfinding algorithm from the dropdown
5. **Visualize**: Click the "Find Path" button to see the algorithm in action
6. **Clear**: Reset the grid to start over

### Keyboard Shortcuts

- `Space` - Start/Pause visualization
- `R` - Reset grid
- `C` - Clear path (keeps walls)
- `G` - Generate random maze

---

## 🧮 Algorithms

### Dijkstra's Algorithm
- **Type**: Weighted graph algorithm
- **Guarantee**: Finds the shortest path
- **Time Complexity**: O((V + E) log V)
- **Best for**: Graphs with non-negative weights


### Breadth-First Search (BFS)
- **Type**: Unweighted graph algorithm
- **Guarantee**: Finds shortest path in unweighted graphs
- **Time Complexity**: O(V + E)
- **Best for**: Simple, unweighted pathfinding

### Depth-First Search (DFS)
- **Type**: Exploration algorithm
- **Guarantee**: Does NOT guarantee shortest path
- **Time Complexity**: O(V + E)
- **Best for**: Graph exploration and maze generation

---

## 📁 Project Structure

```
shortest-path-finder/
├── public/
│   ├── index.html
│   └── logo.svg
├── src/
│   ├── PathfindingVisualizer/
│   │   ├── PathfindingVisualizer.jsx
│   │   └── algorithms/
│   │       ├── dijkstra.js
│   │       ├── astar.js
│   │       ├── bfs.js
│   │       └── dfs.js
│   ├── App.js
│   ├── App.css
│   ├── App.test.js
│   ├── index.js
│   ├── index.css
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

### Key Files

- **`PathfindingVisualizer/`**: Main component containing the grid and visualization logic
- **`algorithms/`**: Implementation of different pathfinding algorithms
- **`App.js`**: Root component managing application state
- **`dijkstra.js`**: Dijkstra's algorithm implementation

---

## 🛠️ Technologies Used

- **React** - Frontend library for building UI components
- **JavaScript (ES6+)** - Core programming language
- **CSS3** - Styling and animations
- **HTML5** - Markup structure
- **Create React App** - Project bootstrapping and build tooling

---

## 🎨 Customization

### Changing Grid Size

Edit the grid dimensions in `PathfindingVisualizer.jsx`:

```javascript
const NUM_ROWS = 20;
const NUM_COLS = 50;
```

### Modifying Animation Speed

Adjust the visualization speed in milliseconds:

```javascript
const ANIMATION_SPEED = 10; // Lower = faster
```

### Styling

Customize colors and styles in `App.css` and component-specific CSS files.

---

## 🧪 Testing

Run the test suite:

```bash
npm test
# or
yarn test
```

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and development process.

---

## 🐛 Known Issues

- Large grids may cause performance issues on slower devices
- Mobile touch controls need improvement

---

## 🗺️ Roadmap

- [ ] Add more pathfinding algorithms (Bellman-Ford, Floyd-Warshall)
- [ ] Implement weighted nodes
- [ ] Add maze generation algorithms
- [ ] Mobile responsiveness improvements
- [ ] Export/Import grid configurations as JSON
- [ ] Add tutorial mode for beginners
- [ ] Performance optimizations for large grids

---



## 📧 Contact

**Boddeda Venkata Pavan Karthikeya**

- 📧 Email: sunny.penny041@gmail.com
- 🔗 LinkedIn: [Boddeda Venkata Pavan Karthikeya](https://www.linkedin.com/in/boddeda-venkata-pavan-karthikeya-1a670b255)
- 💻 GitHub: [@BVPKARTHIKEYA](https://github.com/BVPKARTHIKEYA)

---

## 🙏 Acknowledgments

- Inspired by [Clément Mihailescu's Pathfinding Visualizer](https://github.com/clementmihailescu/Pathfinding-Visualizer)
- Algorithm visualizations inspired by VisuAlgo
- Thanks to the React community for excellent documentation and resources

---

## ⭐ Show Your Support

If you found this project helpful or interesting, please consider giving it a star! It helps others discover the project.

[![GitHub stars](https://img.shields.io/github/stars/BVPKARTHIKEYA/shortest-path-finder?style=social)](https://github.com/BVPKARTHIKEYA/shortest-path-finder/stargazers)

---

**Made with ❤️ and React**
