<?php
	header('Content-Type:application/json');
	$name=$_REQUEST['name'];
	$pwd=$_REQUEST['pwd'];
	$conn = mysqli_connect('127.0.0.1','root','','lenovo',3306);
	$sql = "SET NAMES UTF8";
	mysqli_query($conn,$sql);
	$sql = "SELECT * FROM username WHERE name='$name' AND pwd='$pwd'";
	$result = mysqli_query($conn,$sql);

	$output = [];
	$row = mysqli_fetch_assoc($result);
	if($row===null){
	  $output['msg'] = 'err';
	}else {
	  $output['msg'] = 'succ';
	  $output['cmd'] = $row['cmd'];
	  $output['name'] = $row['name'];
	  $output['pwd'] = $row['pwd'];
	}
	echo json_encode($output);