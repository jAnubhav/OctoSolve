const createGrid = n => {
    const y = [1, -1, 0, 0], x = [0, 0, 1, -1], m = n * n;

    let r, c; r = c = n - 1; const grid = [...Array(n)].map(
        (_, i) => [...Array(n)].map((_, j) => (i * n + j + 1) % m));

    for (let k = 0; k < (n - 2) * 50; k++) {
        const val = Math.floor(Math.random() * 4), i = r + y[val], j = c + x[val];

        if (0 <= i && i < n && 0 <= j && j < n) {
            grid[r][c] = grid[i][j]; grid[i][j] = 0; r = i; c = j;
        }
    }

    return [grid, [r, c]];
}

const validateGrid = (n, grid) => {
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++)
        if ((i * n + j + 1) % (n * n) != grid[i][j]) return false;

    return true;
}

const find = (n, grid, value) => {
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++)
        if (grid[i][j] == value) return [i, j];
}

export { createGrid, validateGrid, find };