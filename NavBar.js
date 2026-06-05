function GetNav() {
    (async () => {
        fetch("Types.xml")
            .then(response => response.text())
            .then(str => {
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(str, "text/xml");
                rawData = xmlDoc.getElementsByTagName("type");
                let data = {};

                for (let i = 0; i < rawData.length; i++) {
                    let id = rawData[i].getElementsByTagName("id")[0].textContent;
                    data[id] = rawData[i].getElementsByTagName("name")[0].textContent;
                }
                updateTypes(data);
            })
            .catch(err => console.error("Error fetching XML:", err));
    })();
}

function updateTypes(data) {
    const ulTest = document.getElementById("dropdown-menu");
    ulTest.parentElement.style.marginLeft = "25px";
    ulTest.parentElement.parentElement.style.backgroundColor = "#D1DFFF";
    for (const [key, value] of Object.entries(data)) {
        const newLi = document.createElement("li");
        const newA = document.createElement("a");
        newA.textContent = `${key} (${value})`;
        newA.setAttribute("href", `gallery.aspx?id=${key}`);
        newLi.appendChild(newA);
        ulTest.appendChild(newLi);
    }
}