function loadRunScript() {
    let s = document.createElement("script");
    s.src = "assets/js/vodka-casino.js";
    s.onload = function() {
        executeRun();
    };
    document.body.appendChild(s);
}
