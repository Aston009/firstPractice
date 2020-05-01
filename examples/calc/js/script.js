let inputRu = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRu.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    // request.open(method, url, async, login, pass);
    request.open('GET', 'js/currect.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);

            inputUsd.value = inputRu.value / data.usd;
        } else {
            inputUsd.value = "ERROR!!!!!!!!!!!";
        }
    })

})