function translateText(response) {
  document.getElementById("translation").innerHTML += "<br>" + response.data.translations[0].translatedText;
}



function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function changeLanguage(language) {
    // var element = document.getElementById("url");
    // element.value = language;
    // element.innerHTML = language;

    var newScript = document.createElement('script');
    newScript.type = 'text/javascript';
    var sourceText = escape(document.getElementById("sourceText").innerHTML);
    // WARNING: Your API key will be visible in the page source.
    // To prevent misuse, restrict your key to designated domains or use a
    // proxy to hide your key.
    var original = 'en';
    // var language = 'de';
    var source = 'https://www.googleapis.com/language/translate/v2?key=AIzaSyB37v3YFUGwmHw7D2Bn1wUFS4j6RD_AZbA&source=' +
                  original + '&target=' + language + '&callback=translateText&q=' + sourceText;
    newScript.src = source;

    document.getElementsByTagName('head')[0].appendChild(newScript);
}
