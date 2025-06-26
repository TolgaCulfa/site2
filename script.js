// İstatistikler için yeni değerler
function animateStats() {
    const stats = [
        { element: document.getElementById('serverCount'), targetValue: 1250, duration: 2000 },
        { element: document.getElementById('userCount'), targetValue: 50000, duration: 2500 },
        { element: document.getElementById('verifiedCount'), targetValue: 15000, duration: 3000 }
    ];
    stats.forEach(stat => animateValue(stat.element, 0, stat.targetValue, stat.duration));
}
