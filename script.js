const API = "https://script.google.com/macros/s/AKfycbwPbdfNQ5ricGadTssdEclKI3f2VQdjHXfwkU8evcemJWc2dm1v8kMRHxuhotepgDShLA/exec";

let apps = [];

async function loadApps() {
    const container = document.getElementById("apps");

    container.innerHTML = "<h2>Yükleniyor...</h2>";

    try {
        const response = await fetch(API);
        apps = await response.json();
        render(apps);
    } catch (e) {
        container.innerHTML = "<h2>Veriler yüklenemedi.</h2>";
        console.error(e);
    }
}

function render(list) {

    const container = document.getElementById("apps");

    container.innerHTML = "";

    if (list.length === 0) {
        container.innerHTML = "<h2>Sonuç bulunamadı.</h2>";
        return;
    }

    list.forEach(app => {

        container.innerHTML += `

        <a href="${app.link}" target="_blank" class="cardLink">

            <div class="card">

                <h2>${app.name}</h2>

                <div class="download">
                    Download
                </div>

            </div>

        </a>

        `;

    });

}

function searchApps() {

    const text = document
        .getElementById("search")
        .value
        .toLowerCase();

    const filtered = apps.filter(app =>
        app.name.toLowerCase().includes(text)
    );

    render(filtered);

}

window.onload = () => {

    loadApps();

    document
        .getElementById("search")
        .addEventListener("input", searchApps);

};
