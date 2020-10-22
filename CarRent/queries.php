<?php 
	header('Access-Control-Allow-Origin: *');  
		
	require_once("dbConfig.php");
	require_once("model.php");

	$app = new APPMODEL; 
	
	$json = file_get_contents('php://input');
	$obj = json_decode($json,true);



	
	switch ($obj["req"]) {
		




		case "test":
            
            
            file_put_contents("sqlTest.txt",'a intrat in functie');
			$result = $app->sqlTest();
			file_put_contents("sqlTest.txt",$result);
			echo $result;
		break;



		



		
		case "other":
			
			echo "i equals 2";
		
		break;
	
	}

?>