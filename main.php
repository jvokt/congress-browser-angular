<?php
// $domain = "https://congress.api.sunlightfoundation.com";
$domain = "http://104.198.0.197:8080";
switch ($_GET["operation"]) {
    case "legislatorsAll":
        $url = $domain . "/legislators?apikey=7484beab012d46bc95d002d12e066535&per_page=all";
        $page = file_get_contents($url);
        echo $page;
        break;
    case "committeesAll":
        $url = $domain . "/committees?apikey=7484beab012d46bc95d002d12e066535&per_page=all";
        $page = file_get_contents($url);
        echo $page;
        break;
    case "bills50":
        $url = $domain . "/bills?apikey=7484beab012d46bc95d002d12e066535&per_page=50";
        $page = file_get_contents($url);
        echo $page;
        break;
    case "topCommittees":
        $id = $_GET["id"];
        $url = $domain . "/committees?apikey=7484beab012d46bc95d002d12e066535&per_page=5&member_ids=" . $id;
        $page = file_get_contents($url);
        echo $page;
        break;
    case "topBills":
        $id = $_GET["id"];
        $url = $domain . "/bills?apikey=7484beab012d46bc95d002d12e066535&per_page=5&sponsor_id=" . $id;
        $page = file_get_contents($url);
        echo $page;
        break;
    default:
        break;
}
?>