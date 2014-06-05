<?php
include("Crud.php");
$db = new Crud();
$db->connect();
header("content-type: text/javascript");

/* Login usuario */
if(isset($_GET['callback']) && $_GET['action']=="login"){
   $db->select("users", "id_u,names_u", "WHERE email_u='".$_GET['email']."'");
  if($db->num_rows()>0){
	$fields=$db->fetch_assoc();
	$array = array("id_u" => $fields['id_u'],"names_u" => utf8_encode($fields['names_u']));
  }
  echo $_GET['callback'].'('.json_encode($array).')';
}

/* Obtener lista de RSS registrados para el usuario */
if(isset($_GET['callback']) && $_GET['action']=="get_rss"){
	$array = array();
   $db->select("rssxuser rs", "r.*", "INNER JOIN rss r ON r.id_r=rs.id_r WHERE r.status_r=1 AND rs.id_u=".$_GET['id_u']);
  if($db->num_rows()>0){
	while($row= $db->fetch_assoc()):
	array_push($array, array("name_r" => utf8_encode($row['name_r']),"rss_r" => urlencode($row['rss_r']),"description_r" => utf8_encode($row['description_r'])));
	endwhile;
  }
  echo $_GET['callback'].'('.json_encode($array).')';
}
?>