function getQuote(quoteType) {
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/quotes?category=' + quoteType,
        headers: {'X-Api-Key': '/zG8fTmvMWXUXk146pgAjg==7NkZydOkpYONpdmO'},
        contentType: 'application/json',
        success: function(result) {
            postQuote(result);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
}

function postQuote(quote) {
    //startImageTransition();
    console.log(quote[0]);

    document.getElementById('quote').innerHTML = quote[0]['quote'];
    document.getElementById('author').innerHTML = '-' + quote[0]['author'];
    document.getElementById('bg').style.backgroundImage="url(/images/scenicImage2.jpg)";
}

function startImageTransition() {
    document.getElementById('overlay').style.backgroundColor="rgba(255, 255, 255, 0.1)";
}