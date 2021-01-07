function getAttributes(){
    var lien = document.querySelector("a");
    var href = lien.getAttribute('href');
    var hreflang = lien.getAttribute('hreflang');
    var rel = lien.getAttribute('rel');
    var target = lien.getAttribute('target');
    var type = lien.getAttribute('type');
    console.log(href);
    console.log(hreflang);
    console.log(rel);
    console.log(target);
    console.log(type);
}
