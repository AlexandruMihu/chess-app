# React Chessboard

This project is a simple **interactive chessboard interface** built with **ReactJS**. It allows users to grab and move any chess piece around the board. Pieces snap back to the nearest tile when released.

⚠️ **Note:** The actual chess movement rules (e.g., legal moves, check, checkmate) have **not** been implemented yet. This is a foundational interface for a future chess game.

---

## Features

*  Renders a complete chessboard with all pieces in their initial positions.
*  Drag-and-drop interaction: grab a piece and move it anywhere on the board.
*  Pieces automatically **snap to the nearest tile** when dropped.
*  Works with all chess pieces (pawns, rooks, knights, bishops, queen, and king).
*  Built with React functional components and hooks.

---

## Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/AlexandruMihu/chess-app.git
   cd react-chessboard
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm start
   ```

4. Open in browser:

   ```
   http://localhost:3000
   ```

---

## Usage

* Click and hold a chess piece to **grab it**.
* Move the mouse to drag the piece around the board.
* Release the mouse button to **drop** the piece.
* The piece will snap into the closest tile.

---

## Future Improvements

*  Enforce legal chess moves.
*  Implement turn-based play.
*  Highlight possible moves for each piece.
*  Add move history and undo functionality.
*  Multiplayer or AI opponent mode.

---

## Technologies Used

* **ReactJS** (with hooks)
* **TypeScript**
* **CSS Modules** for styling

