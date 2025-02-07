# TileShift

TileShift is a React-based puzzle game where players must shift tiles strategically to solve the puzzle. The game features three difficulty levels: Beginner, Intermediate, and Advanced.

## Features 🚀
- **Multiple Difficulty Levels**: Choose from Beginner, Intermediate, and Advanced modes.
- **Dynamic Grid System**: The game board adapts to the chosen difficulty.
- **Win Detection**: The game detects when a player has successfully solved the puzzle.

## Technologies Used 🛠

- **ReactJS**: For building the user interface.
- **Context API**: Manages game state across components.
- **CSS**: For styling and animations.

## Installation 📥

1. Clone the repository:
```bash
git clone https://github.com/yourusername/tileshift.git
cd tileshift
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

## File Structure 📁

```php
TileShift/
│── src/
│   ├── components/
│   │   ├── display/
|   |   |   ├── ChoiceCard.jsx
|   |   |   └── MenuDisplay.jsx
│   │   ├── grid/
│   │   |   ├── Cell.jsx
│   │   |   ├── Grid.jsx
|   │   │   └── GridHolder.jsx
│   │   └── win/
|   |       └── WinScreen.jsx
│   ├── contexts/
│   │   ├── VisContext.jsx
│   │   └── GridContext.jsx
│   ├── App.jsx
|   └── index.jsx
│── index.html
└── README.md
```
## How to Play 🎮

1. Select a difficulty level from the menu.
2. The grid will generate based on your selection.
3. Shift the tiles to solve the puzzle.
4. Once completed, a win screen will appear.

## Contribution 🤝

1. Fork the repository.
2. Create a new branch:
```bash
git checkout -b feature-branch
```
3. Commit your changes:
```bash
git commit -m "Add new feature"
```
4. Push to your branch:
```bash
git push origin feature-branch
```
5. Submit a Pull Request.

## Credits

Made with ❤️ by [jAnubhav](https://github.com/jAnubhav).  