<?php 

class APPMODEL { 

	


	public function JsonT($value){
		if ($value == '' || count($value) == 0 || $value == null) {
			return json_encode(json_encode([code => 'value_false']));
		}
		else{
			return json_encode(json_encode($value));
		}
	}






	public function sqlTest(){
		global $conn;
		
		$query="Select * from Cars";
		
		$result = $conn->query($query);
		
		if ($result->num_rows > 0) {
			$rows = [];
			$res = $result->fetch_assoc();
			$rows = $res;
		
		} else {
			echo "0 results";
		}
		
		return $rows;
		
		$conn->close();
		
	}	


	






	

	function bMemberFunc() { 
		return "bmemb"; 
	 } 
	 
	
} 

?>