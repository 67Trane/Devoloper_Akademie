let fields = Array(9).fill(null); // Initialisiere das Array mit null
let currentPlayer = "circle"; // Startet mit "circle"

function render() {
    let table = '<table>';
    for (let i = 0; i < 3; i++) {
        table += '<tr>';
        for (let j = 0; j < 3; j++) {
            let index = i * 3 + j;
            let content = '';
            if (fields[index] === 'circle') {
                content = generateCircleSVG();
            } else if (fields[index] === 'cross') {
                content = generateCrossSVG();
            }
            table += `<td onclick="handleCellClick(${index}, this)">${content}</td>`;
        }
        table += '</tr>';
    }
    table += '</table>';
    
    document.getElementById('container').innerHTML = table;
}

function handleCellClick(index, element) {

    if (fields[index] !== null) return; // Überspringen, wenn das Feld bereits gesetzt ist

    if (currentPlayer === "circle") {
        fields[index] = "circle";
        element.innerHTML = generateCircleSVG();
        currentPlayer = "cross";
    } else {
        fields[index] = "cross";
        element.innerHTML = generateCrossSVG();
        currentPlayer = "circle";
    }
    
    // Entfernen des onclick-Handlers
    element.removeAttribute("onclick");

    // Überprüfen, ob jemand gewonnen hat
    const winLine = checkWin();
    if (winLine) {
        drawWinningLine(winLine);
    }
}

function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontale Reihen
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertikale Reihen
        [0, 4, 8], [2, 4, 6]             // diagonale Reihen
    ];

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (fields[a] && fields[a] === fields[b] && fields[a] === fields[c]) {
            return pattern; // Gibt das Gewinnmuster zurück
        }
    }
    return null; // Kein Gewinner
}

function drawWinningLine(winLine) {
    let container = document.getElementById('container');
    let svgHTML = '<svg width="240" height="240" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" style="position:absolute;top:0;left:0;">';

    const positions = [
        { x: 40, y: 40 }, { x: 120, y: 40 }, { x: 200, y: 40 },
        { x: 40, y: 120 }, { x: 120, y: 120 }, { x: 200, y: 120 },
        { x: 40, y: 200 }, { x: 120, y: 200 }, { x: 200, y: 200 }
    ];

    const [start, , end] = winLine; // 'middle' entfernt, da es nicht verwendet wird

    svgHTML += `
        <line x1="${positions[start].x}" y1="${positions[start].y}" x2="${positions[end].x}" y2="${positions[end].y}" stroke="white" stroke-width="5" />
    `;
    svgHTML += '</svg>';

    container.innerHTML += svgHTML;
}

function generateCircleSVG() {
    const svgHTML = `
        <svg width="80" height="80" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" stroke="#00B0EF" stroke-width="10" fill="none">
                <animate 
                    attributeName="stroke-dasharray" 
                    from="0, 282.743" 
                    to="282.743, 0" 
                    dur="0.5s" 
                    begin="0s" 
                    fill="freeze" />
            </circle>
        </svg>
    `;
    return svgHTML;
}

function generateCrossSVG() {
    const svgHTML = `
        <svg width="80" height="80" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <line x1="20" y1="20" x2="80" y2="80" stroke="#FFC000" stroke-width="10">
                <animate 
                    attributeName="stroke-dasharray" 
                    from="0, 84.85" 
                    to="84.85, 0" 
                    dur="0.5s" 
                    begin="0s" 
                    fill="freeze" />
            </line>
            <line x1="80" y1="20" x2="20" y2="80" stroke="#FFC000" stroke-width="10">
                <animate 
                    attributeName="stroke-dasharray" 
                    from="0, 84.85" 
                    to="84.85, 0" 
                    dur="0.5s" 
                    begin="1s" 
                    fill="freeze" />
            </line>
        </svg>
    `;
    return svgHTML;
}

document.addEventListener("DOMContentLoaded", function() {
    render();
});
