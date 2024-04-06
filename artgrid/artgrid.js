document.addEventListener('DOMContentLoaded', function() {
    const gridContainer = document.getElementById('grid-container');

    for (let i = 0; i < 30; i++) {
        for (let j = 0; j < 20; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            gridContainer.appendChild(cell);
        }
    }

    gridContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('cell')) {
            const colors = ['white','yellow', 'orange', 'green', 'red', 'blue','black','navy','#ADD8E6'];
            const currentColor = event.target.style.backgroundColor;
            const currentIndex = colors.indexOf(currentColor);
            const nextIndex = (currentIndex + 1) % colors.length;
            event.target.style.backgroundColor = colors[nextIndex];
        }
    });
});
