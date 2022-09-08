<?php

$x = $_GET['x'];
$y = $_GET['y'];
$r = $_GET['r'];

$answer = [];
if (checkAnswer($x,$y,$r) || checkData($x,$y,$r)) {
	$answer[] = $x;
	$answer[] = $y;
	$answer[] = $r;
	$answer[] = checkAnswer($x, $y, $r);

}
echo json_encode($answer);





function checkAnswer($x, $y, $r){
	if (($x<=0 && $y <= 0 && $y <= $x && $x >= -$r/2 && $y >= -$r/2) || ((($x**2 + $y**2) <= $r**2 ) && $x <= 0 && $y <= 0 ) || ($x >= 0 && $y >= 0 && $x <= $r && $y <= $r)) {
		return "true";
	} else return "false";

}

function checkData($x, $y, $r) {
    return in_array($x, array(-3, -2, -1, 0, 1, 2, 3, 4, 5)) &&
        is_numeric($y) && ($y > -3 && $y < 5) &&
        in_array($r, array( 1, 2, 3, 4, 5));
}
?>