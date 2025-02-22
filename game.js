const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const gridSize = 40; // Размер клеток
const rows = Math.floor(canvas.height / gridSize);
const cols = Math.floor(canvas.width / gridSize);
let grid = [];

// Инициализация карты
for (let y = 0; y < rows; y++) {
    let row = [];
    for (let x = 0; x < cols; x++) {
        row.push({ owner: null, x: x * gridSize, y: y * gridSize });
    }
    grid.push(row);
}

// Игрок
const player = { color: "blue" };

// Рисуем карту
function drawGrid() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let row of grid) {
        for (let cell of row) {
            ctx.fillStyle = cell.owner ? cell.owner.color : "white";
            ctx.fillRect(cell.x, cell.y, gridSize - 1, gridSize - 1);
        }
    }
}

// Захват территории при клике
canvas.addEventListener("click", (event) => {
    const x = Math.floor(event.clientX / gridSize);
    const y = Math.floor(event.clientY / gridSize);
    if (grid[y] && grid[y][x]) {
        grid[y][x].owner = player;
    }
    drawGrid();
});

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawGrid();
});

drawGrid();
