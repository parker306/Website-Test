<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="js-cloudimage-360-view.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
    <script src="NavBar.js"></script>
    <script src="SpecimenLoader.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css">
    <title>Specimen</title>
</head>
<header>
    <div>
        <div class="btn-group">
            <button type="button" class="btn btn-secondary btn-lg dropdown-toggle" data-bs-toggle="dropdown"
                aria-expanded="false">
                Specimen Galleries
            </button>
            <ul class="dropdown-menu" id="dropdown-menu">
            </ul>
        </div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a id="backBreadCrumb" href="gallery.html?=A">Gallery</a></li>
                <li class="breadcrumb-item active" id="currentBreadCrumb" aria-current="page">A5</li>
            </ol>
        </nav>
    </div>
</header>
<!-- dropdown button -->
<script>
    GetNav();
</script>

<body>
    <h1 id="headingID" style="text-align: center;"></h1>
    <h1 id="headingName" style="text-align: center;"></h1>
    <div id="container"
        style="display:grid; grid-template-columns: repeat(2, [col-start] 1fr); margin: 0 auto; width: 90%;">
        <div id="descContainer" style="margin:0 40px; padding:0 10px;">

        </div>
        <div style="max-width:55%">
            <div id="cloudimage-360" class="cloudimage-360" data-fullscreen data-zoomMax="5" data-zoom-controls="true"
                data-pinch-zoom="true"></div>
        </div>
    </div>
    <script>
        GetSpecimen();
    </script>
</body>

</html>