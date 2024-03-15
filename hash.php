<?php

	//print_r($_POST); die;
	
	$response = null;
	
	if(isset($_POST['data'])){
		$data 		= $_POST['data'];

		$md5		= hash('md5', $data);
		$sha1		= hash('sha1', $data);
		$sha256		= hash('sha256', $data);
		$sha512		= hash('sha512', $data);
		$whirlpool	= hash('whirlpool', $data);
		
		$response = array(
						'md5' => $md5,
						'sha1' => $sha1,
						'sha256' => $sha256,
						'sha512' => $sha512,
						'whirlpool' => $whirlpool,
					);
	}

	header('Content-Type: application/json');
	echo(json_encode($response));