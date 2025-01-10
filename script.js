const games = [
    { title: "Retro Racer", link: "#", description: "A fast-paced racing game." },
    { title: "Pixel Adventure", link: "#", description: "Embark on a thrilling pixelated journey." },
    { title: "Classic Shooter", link: "#", description: "Shoot your way through classic levels." },
];

function loadGames() {
    const gameList = document.querySelector('.game-list');
    games.forEach(game => {
        const div = document.createElement('div');
        div.className = 'game-item';
        div.innerHTML = `
            <h3>${game.title}</h3>
            <p>${game.description}</p>
            <a href="${game.link}">Play Now</a>
        `;
        gameList.appendChild(div);
    });
}

window.onload = loadGames;
