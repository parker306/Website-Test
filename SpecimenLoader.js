function GetSpecimen() {
    (async () => {
        let url = new URLSearchParams(window.location.search);
        let id = url.get("id");
        let currentBreadCrumb = document.getElementById("currentBreadCrumb");
        currentBreadCrumb.parentElement.style.marginLeft = "25px";
        currentBreadCrumb.textContent = id;
        let backBreadCrumb = document.getElementById("backBreadCrumb");
        backBreadCrumb.setAttribute("href", "gallery.aspx?id=" + id[0]);
        backBreadCrumb.textContent = id[0];

        fetch(`/gallery/${id[0]}/${id}/${id}.xml`)
            .then(response => response.text())
            .then(str => {
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(str, "text/xml");
                let rawData = xmlDoc.getElementsByTagName("Specimen");
                let data = [];
                let noOfImages;
                let headingName;

                noOfImages = rawData[0].getElementsByTagName("noOfImages")[0].textContent;
                headingName = rawData[0].getElementsByTagName("name")[0].textContent;
                headingName = headingName.replace(/(\r\n|\n|\r)/gm, "<br>");
                
                let descriptionTest = rawData[0].getElementsByTagName("description");
                let descriptionText = "";

                if (descriptionTest.length != 0) {
                    descriptionText = descriptionTest[0].textContent.replace(/(\r\n|\n|\r)/gm, "<br>");
                }
                let historyTest = rawData[0].getElementsByTagName("history");
                let historyText = "";

                if (historyTest.length != 0) {
                    historyText = historyTest[0].textContent.replace(/(\r\n|\n|\r)/gm, "<br>");
                }

                UpdateSpecimen(noOfImages, headingName, descriptionText, historyText, id);
            })
            .catch(err => console.error("Error fetching XML:", err));
    })();
}

function UpdateSpecimen(noOfImages, headingName, description, history, id) {
    let cloudimage = document.getElementById("cloudimage-360");
    cloudimage.setAttribute("data-folder", `/gallery/${id[0]}/${id}/`);
    cloudimage.setAttribute("data-filename-x", id + " ({index}).jpg");
    cloudimage.setAttribute("data-amount-x", noOfImages);

    window.CI360.init();
    document.title = id;

    let eHeadingID = document.getElementById("headingID");
    eHeadingID.innerHTML = id;
    let eHeadingName = document.getElementById("headingName");
    eHeadingName.innerHTML = headingName;

    let descContainer = document.getElementById("descContainer");
    let text = "";

    if (description != "") {
        text += `<b>Description</b></br>${description}</br>`;
    }

    if (history != "") {
        text += `<b>History</b></br>${history}</br>`;
    }

    let p = document.createElement("p");
    p.innerHTML = text;
    p.style.backgroundColor = "#3498DB";
    p.style.margin = "0";
    p.style.padding = "10px";
    p.style.borderRadius = "10px";
    descContainer.appendChild(p);
}