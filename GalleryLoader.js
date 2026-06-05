function GetGallery() {
    (async () => {
        let url = new URLSearchParams(window.location.search);
        let id = url.get("id");
        fetch(`/gallery/${id}/${id}.xml`)
            .then(response => response.text())
            .then(str => {
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(str, "text/xml");
                let rawData = xmlDoc.getElementsByTagName("Specimen");
                let data = {};

                for (let i = 0; i < rawData.length; i++) {
                    let id = rawData[i].getElementsByTagName("id")[0].textContent;
                    let name = rawData[i].getElementsByTagName("name")[0].textContent;
                    data[id] = name;
                }

                UpdateGallery(data, id);
            })
            .catch(err => console.error("Error fetching XML:", err));
    })();
}

//populate the gallery from the data of the csv file.
function UpdateGallery(data, id) {
    document.title = id;
    const container = document.getElementById("container");
    for (const [key, value] of Object.entries(data)) {
        const a = document.createElement("a");
        const img = document.createElement("img");
        const div = document.createElement("div");
        const divP = document.createElement("div");
        img.src = `./gallery/${id}/thumb/thumb - ${key}.jpg`;
        img.style.marginRight = "auto";
        img.style.marginLeft = "auto";
        img.style.display = "block";
        const pName = document.createElement("p");
        pName.innerHTML = `${key}</br> ${value}`;
        pName.style.textAlign = "center";
        pName.style.wordWrap = "break-word";
        pName.style.position = "absolute";
        pName.style.width = "100%";
        pName.style.bottom = "0";
        pName.style.left = "0";
        pName.style.margin = "0";
        pName.style.backgroundColor = "#377EF1B8";
        pName.style.color = "white";
        div.appendChild(img);
        divP.appendChild(pName);
        div.appendChild(divP);
        a.appendChild(div);
        a.style.width = "150px";
        a.style.height = "210px";
        a.style.backgroundColor = "#3498DB";
        a.style.margin = "5px";
        div.style.width = "100%";
        div.style.height = "100%";
        div.style.position = "relative";
        a.setAttribute("href", `specimen.aspx?id=${key}`);
        container.style.borderRadius = "5px";

        a.addEventListener("mouseover", function() {
            a.style.backgroundColor = "DarkBlue";
            pName.style.backgroundColor = "DarkBlue";
        });

        a.addEventListener("mouseout", function() {
            a.style.backgroundColor = "#3498DB";
            pName.style.backgroundColor = "#377EF1B8"
        });

        container.appendChild(a);
    }
}