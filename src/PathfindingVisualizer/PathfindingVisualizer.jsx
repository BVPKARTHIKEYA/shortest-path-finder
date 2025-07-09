import React, { Component } from 'react';
import Node from './Node/Node';
import { dijkstra, getNodesInShortestPathOrder } from '../dijkstra';
import './PathfindingVisualizer.css';

export default class PathfindingVisualizer extends Component {
  constructor() {
    super();
    this.state = {
      grid: [],
      mouseIsPressed: false,
      mode: 'wall',
      startNode: { row: 10, col: 15 },
      finishNode: { row: 10, col: 35 },
    };
  }

  componentDidMount() {
    this.initializeGrid();
  }

  initializeGrid() {
    const { startNode, finishNode } = this.state;
    const grid = getInitialGrid(startNode, finishNode);

    // Clear all previous classes from DOM
    for (let row = 0; row < 20; row++) {
      for (let col = 0; col < 50; col++) {
        const nodeElement = document.getElementById(`node-${row}-${col}`);
        if (nodeElement) {
          nodeElement.className = 'node';
        }
      }
    }

    this.setState({ grid });
  }

  resetGrid() {
    this.initializeGrid();
  }

  handleMouseDown(row, col) {
    const { mode, grid } = this.state;
    if (mode === 'wall') {
      const newGrid = getNewGridWithWallToggled(grid, row, col);
      this.setState({ grid: newGrid, mouseIsPressed: true });
    } else if (mode === 'start') {
      const newGrid = setStartNode(grid, row, col);
      this.setState({
        grid: newGrid,
        startNode: { row, col },
        mode: 'wall',
      });
    } else if (mode === 'finish') {
      const newGrid = setFinishNode(grid, row, col);
      this.setState({
        grid: newGrid,
        finishNode: { row, col },
        mode: 'wall',
      });
    }
  }

  handleMouseEnter(row, col) {
    if (!this.state.mouseIsPressed || this.state.mode !== 'wall') return;
    const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
    this.setState({ grid: newGrid });
  }

  handleMouseUp() {
    this.setState({ mouseIsPressed: false });
  }

  animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder) {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          this.animateShortestPath(nodesInShortestPathOrder);
        }, 10 * i);
        return;
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          'node node-visited';
      }, 10 * i);
    }
  }

  animateShortestPath(nodesInShortestPathOrder) {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        const el = document.getElementById(`node-${node.row}-${node.col}`);
        el.className = 'node node-hinokami'; // Animation effect
        setTimeout(() => {
          el.className = 'node node-shortest-path';
        }, 500);
      }, 50 * i);
    }
  }

  visualizeDijkstra() {
    const { grid, startNode, finishNode } = this.state;

    // Validate start and finish node are set
    const start = grid[startNode.row][startNode.col];
    const finish = grid[finishNode.row][finishNode.col];

    if (!start.isStart) {
      alert('Please select a Start Node before visualizing.');
      return;
    }
    if (!finish.isFinish) {
      alert('Please select an End Node before visualizing.');
      return;
    }

    const visitedNodesInOrder = dijkstra(grid, start, finish);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finish);
    this.animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
  }

  setMode(mode) {
    this.setState({ mode });
  }

  render() {
    const { grid, mouseIsPressed } = this.state;
    return (
      <div className="App">
        <h2>Pathfinding Visualizer</h2>
        <div className="grid">
          {grid.map((row, rowIdx) => (
            <div key={rowIdx} className="grid-row">
              {row.map((node, nodeIdx) => {
                const { row, col, isFinish, isStart, isWall } = node;
                return (
                  <Node
                    key={nodeIdx}
                    col={col}
                    row={row}
                    isFinish={isFinish}
                    isStart={isStart}
                    isWall={isWall}
                    mouseIsPressed={mouseIsPressed}
                    onMouseDown={(row, col) => this.handleMouseDown(row, col)}
                    onMouseEnter={(row, col) => this.handleMouseEnter(row, col)}
                    onMouseUp={() => this.handleMouseUp()}
                  />
                );
              })}
            </div>
          ))}
        </div>
        <div style={{ marginTop: '20px' }}>
          <button onClick={() => this.visualizeDijkstra()}>
            Visualize Dijkstra's Algorithm
          </button>
          <button onClick={() => this.resetGrid()} style={{ marginLeft: '10px' }}>
            Reset Grid
          </button>
          <button onClick={() => this.setMode('start')} style={{ marginLeft: '10px' }}>
            Set Start Node
          </button>
          <button onClick={() => this.setMode('finish')} style={{ marginLeft: '10px' }}>
            Set End Node
          </button>
        </div>
      </div>
    );
  }
}

// ===================
// Helper Functions
// ===================

const getInitialGrid = (startNode, finishNode) => {
  const grid = [];
  for (let row = 0; row < 20; row++) {
    const currentRow = [];
    for (let col = 0; col < 50; col++) {
      currentRow.push(createNode(col, row, startNode, finishNode));
    }
    grid.push(currentRow);
  }
  return grid;
};

const createNode = (col, row, startNode, finishNode) => {
  return {
    col,
    row,
    isStart: row === startNode.row && col === startNode.col,
    isFinish: row === finishNode.row && col === finishNode.col,
    distance: Infinity,
    isVisited: false,
    isWall: false,
    previousNode: null,
  };
};

const getNewGridWithWallToggled = (grid, row, col) => {
  const newGrid = grid.map((r) => r.map((node) => ({ ...node })));
  const node = newGrid[row][col];
  if (node.isStart || node.isFinish) return newGrid;
  node.isWall = !node.isWall;
  return newGrid;
};

const setStartNode = (grid, row, col) => {
  const newGrid = grid.map((r) =>
    r.map((node) => ({ ...node, isStart: false }))
  );
  newGrid[row][col].isStart = true;
  return newGrid;
};

const setFinishNode = (grid, row, col) => {
  const newGrid = grid.map((r) =>
    r.map((node) => ({ ...node, isFinish: false }))
  );
  newGrid[row][col].isFinish = true;
  return newGrid;
};
