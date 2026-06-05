<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
    <script src="NavBar.js"></script>
    <script src="GalleryLoader.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css">
    <title>Gallery</title>
</head>
<header>
    <div class="btn-group">
        <button type="button" class="btn btn-secondary btn-lg dropdown-toggle" data-bs-toggle="dropdown"
            aria-expanded="false">
            Specimen Galleries
        </button>
        <ul class="dropdown-menu" id="dropdown-menu">
        </ul>
    </div>
</header>
<!-- dropdown button -->
<script>
    GetNav();
</script>
<!-- populate gallery -->
<script>
    GetGallery();
</script>

<body>
    <div id="container" style="display:flex; flex-flow:row wrap; justify-content: center;">
    </div>
</body>

</html>