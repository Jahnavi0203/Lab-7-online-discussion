function setCookie() {
    fetch('/set-cookie')
        .then(response => response.text())
        .then(result => {
            document.getElementById('cookie-result').innerText = result;
            console.log('Set Cookie Response:', result);
        })
        .catch(error => {
            console.error('Error setting cookie:', error);
        });
}

function getCookie() {
    fetch('/get-cookie')
        .then(response => response.text())
        .then(result => {
            document.getElementById('cookie-result').innerText = result;
            console.log('Get Cookie Response:', result);
        })
        .catch(error => {
            console.error('Error getting cookie:', error);
        });
}
