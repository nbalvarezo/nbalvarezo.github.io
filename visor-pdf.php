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