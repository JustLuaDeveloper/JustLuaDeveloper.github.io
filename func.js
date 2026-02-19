function showTab(id, element) {
    document.querySelectorAll('.section').forEach(sec => {
        sec.classList.remove('active');
    });

    document.getElementById(id).classList.add('active');

    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });

    element.classList.add('active');
}

function searchObfuscator() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const items = document.querySelectorAll(".obf-item");

    items.forEach(item => {
        const title = item.querySelector("h2").innerText.toLowerCase();
        item.style.display = title.includes(input) ? "block" : "none";
    });
}

