<?php

$file = "assets/cvNicolasAlvarez2024.pdf";
$filename = "cvNicolasAlvarez.pdf";

header("Content-Type: application/pdf");
header("Content-Disposition: inline; filename='" . $filename . "'");
header("Content-Transfer-Encoding: binary");
header("Content-Length: '" . $file . "'");
header("Content-Ranges: bytes");

@readfile($file);

?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="">
    </head>
    <body>

        <script src="" async defer>
            
        </script>
    </body>
</html>