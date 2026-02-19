function goToObf(name) {
    localStorage.setItem("selectedObf", name);
    window.location.href = "obfuscator.html";
}

window.onload = function () {
    const title = document.getElementById("obfTitle");

    if (title) {
        const name = localStorage.getItem("selectedObf");
        if (name) {
            title.innerText = name;
            document.getElementById("obfDesc").innerText = name + " full description here.";
        }
    }
};
