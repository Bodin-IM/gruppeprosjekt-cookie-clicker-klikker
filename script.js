let nuggetCount = 0;
 
function clicknugget() {
nuggetCount++;
document.getElementById('nuggetCount').innerText = nuggetCount + ' nuggets';
}

function buyUpgrade(cost) {
    if (nuggetCount >= cost) {
        nuggetCount -= cost;
        document.getElementById('nuggetCount').innerText = nuggetCount + ' nuggets';
        // Perform upgrade action here, for example:
        console.log('Upgrade purchased!');
    } else {
        alert('Not enough nuggets!');
    }
}

// Auto-clicker example (runs every second)
setInterval(function() {
    clicknugget();
}, 1000);
