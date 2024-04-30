let cookieCount = 0;

function clickCookie() {
    cookieCount++;
    document.getElementById('nuggetCount').innerText = cookieCount + ' nuggets';
}

function buyUpgrade(cost) {
    if (cookieCount >= cost) {
        cookieCount -= cost;
        document.getElementById('nuggetCount').innerText = cookieCount + ' nuggets';
        // Perform upgrade action here, for example:
        console.log('Upgrade purchased!');
    } else {
        alert('Not enough nuggets!');
    }
}

// Auto-clicker example (runs every second)
setInterval(function() {
    clickCookie();
}, 1000);
