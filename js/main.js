angular.module('ui.bootstrap.demo', ['ngAnimate', 'ngSanitize', 'ui.bootstrap', 'angularUtils.directives.dirPagination']);
angular.module('ui.bootstrap.demo').controller('TabsDemoCtrl', function ($scope, $http) {
      $scope.states = [
    {
        "name": "Alabama",
        "abbreviation": "AL"
    },
    {
        "name": "Alaska",
        "abbreviation": "AK"
    },
    {
        "name": "American Samoa",
        "abbreviation": "AS"
    },
    {
        "name": "Arizona",
        "abbreviation": "AZ"
    },
    {
        "name": "Arkansas",
        "abbreviation": "AR"
    },
    {
        "name": "California",
        "abbreviation": "CA"
    },
    {
        "name": "Colorado",
        "abbreviation": "CO"
    },
    {
        "name": "Connecticut",
        "abbreviation": "CT"
    },
    {
        "name": "Delaware",
        "abbreviation": "DE"
    },
    {
        "name": "District Of Columbia",
        "abbreviation": "DC"
    },
    {
        "name": "Federated States Of Micronesia",
        "abbreviation": "FM"
    },
    {
        "name": "Florida",
        "abbreviation": "FL"
    },
    {
        "name": "Georgia",
        "abbreviation": "GA"
    },
    {
        "name": "Guam",
        "abbreviation": "GU"
    },
    {
        "name": "Hawaii",
        "abbreviation": "HI"
    },
    {
        "name": "Idaho",
        "abbreviation": "ID"
    },
    {
        "name": "Illinois",
        "abbreviation": "IL"
    },
    {
        "name": "Indiana",
        "abbreviation": "IN"
    },
    {
        "name": "Iowa",
        "abbreviation": "IA"
    },
    {
        "name": "Kansas",
        "abbreviation": "KS"
    },
    {
        "name": "Kentucky",
        "abbreviation": "KY"
    },
    {
        "name": "Louisiana",
        "abbreviation": "LA"
    },
    {
        "name": "Maine",
        "abbreviation": "ME"
    },
    {
        "name": "Marshall Islands",
        "abbreviation": "MH"
    },
    {
        "name": "Maryland",
        "abbreviation": "MD"
    },
    {
        "name": "Massachusetts",
        "abbreviation": "MA"
    },
    {
        "name": "Michigan",
        "abbreviation": "MI"
    },
    {
        "name": "Minnesota",
        "abbreviation": "MN"
    },
    {
        "name": "Mississippi",
        "abbreviation": "MS"
    },
    {
        "name": "Missouri",
        "abbreviation": "MO"
    },
    {
        "name": "Montana",
        "abbreviation": "MT"
    },
    {
        "name": "Nebraska",
        "abbreviation": "NE"
    },
    {
        "name": "Nevada",
        "abbreviation": "NV"
    },
    {
        "name": "New Hampshire",
        "abbreviation": "NH"
    },
    {
        "name": "New Jersey",
        "abbreviation": "NJ"
    },
    {
        "name": "New Mexico",
        "abbreviation": "NM"
    },
    {
        "name": "New York",
        "abbreviation": "NY"
    },
    {
        "name": "North Carolina",
        "abbreviation": "NC"
    },
    {
        "name": "North Dakota",
        "abbreviation": "ND"
    },
    {
        "name": "Northern Mariana Islands",
        "abbreviation": "MP"
    },
    {
        "name": "Ohio",
        "abbreviation": "OH"
    },
    {
        "name": "Oklahoma",
        "abbreviation": "OK"
    },
    {
        "name": "Oregon",
        "abbreviation": "OR"
    },
    {
        "name": "Palau",
        "abbreviation": "PW"
    },
    {
        "name": "Pennsylvania",
        "abbreviation": "PA"
    },
    {
        "name": "Puerto Rico",
        "abbreviation": "PR"
    },
    {
        "name": "Rhode Island",
        "abbreviation": "RI"
    },
    {
        "name": "South Carolina",
        "abbreviation": "SC"
    },
    {
        "name": "South Dakota",
        "abbreviation": "SD"
    },
    {
        "name": "Tennessee",
        "abbreviation": "TN"
    },
    {
        "name": "Texas",
        "abbreviation": "TX"
    },
    {
        "name": "Utah",
        "abbreviation": "UT"
    },
    {
        "name": "Vermont",
        "abbreviation": "VT"
    },
    {
        "name": "Virgin Islands",
        "abbreviation": "VI"
    },
    {
        "name": "Virginia",
        "abbreviation": "VA"
    },
    {
        "name": "Washington",
        "abbreviation": "WA"
    },
    {
        "name": "West Virginia",
        "abbreviation": "WV"
    },
    {
        "name": "Wisconsin",
        "abbreviation": "WI"
    },
    {
        "name": "Wyoming",
        "abbreviation": "WY"
    }
];
    $scope.leg = [];
	$http.get("api?operation=legislatorsAll").success(function(response){ 
		$scope.leg = response;
	});
    $scope.comm = [];
	$http.get("api?operation=committeesAll").success(function(response){ 
		$scope.comm = response;
	});
    $scope.bills = []; //declare an empty array
	$http.get("api?operation=bills50").success(function(response){ 
		$scope.bills = response;  //ajax request to fetch data into $scope.data
	});
    $scope.tabs = [
    {
        title: 'By State', 
        longTitle: 'Legislators By State',
        headers: ['Party', 'Name', 'Chamber', 'District', 'State', ''],
        table: [
            ['Rep', 'Murkowski, Lisa', 'Senate', 'N.A.', 'Alaska', 'View Details'],
            ['Rep', 'Abraham, Ralph', 'House', 'District 5', 'Louisiana', 'View Details']
        ]
    },
    {
        title: 'House',
        longTitle: 'Legislators By House',
        headers: ['Party', 'Name', 'Chamber', 'District', 'State', ''],
        table: [
            ['Rep', 'Abraham, Ralph', 'House', 'District 5', 'Louisiana', 'View Details']
        ]
    },
    {
        title: 'Senate',
        longTitle: 'Legislators By Senate',
        headers: ['Party', 'Name', 'Chamber', 'State', ''],
        table: [
            ['Rep', 'Murkowski, Lisa', 'Senate', 'Alaska', 'View Details']
        ]
    }
  ];

    $scope.currentLegislator = "";
    $scope.details = [];
    $scope.topFiveCommittees = [];
    $scope.topFiveBills = [];
     $scope.setDetails = function(row) {
          $scope.currentLegislator = row.bioguide_id;
         $scope.details = row;
         var start = moment($scope.details.term_start, "YYYY-MM-DD");
         var end = moment($scope.details.term_end, "YYYY-MM-DD");
         var today = moment();
         $scope.percent = Math.round(((today - start) / (end - start)) * 100);
        $http.get("api?operation=topCommittees&id=" + row.bioguide_id).success(function(response){
            $scope.topFiveCommittees = response.results;
        });
        $http.get("api?operation=topBills&id=" + row.bioguide_id).success(function(response){ 
            $scope.topFiveBills = response.results;
        });
      };
    $scope.billDetails = [];
     $scope.setBillDetails = function(bill) {
        $scope.billDetails = bill;
     };
    $scope.dateConversion = function(time) {
        return moment(time, "YYYY-MM-DD").format("MMM DD, YYYY");
    };
    $scope.capitalizeFirstLetter = function(string) {
        if (string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    };
    $scope.isLocalStorageEnable = function() {

        if(typeof (Storage) !== "undefined"){
            return true;
        }
        else{
            return false;
        }
    };

    $scope.currentPanel = 'legislators';
    $scope.setCurrentPanel = function(panel) {
        $scope.currentPanel = panel;
    };

    $scope.isFavorite = function(id){
        var fav = localStorage.getItem(id);
        return fav;
    };
    
    $scope.toggleFavorite = function(id, value) {
        if (!$scope.isFavorite(id)) {
            $scope.setFav(id, value);
        } else {
            $scope.deleteFav(id);
        }
    };

    $scope.order = 0;
    $scope.setFav = function(id, value){
        var count;
        if (!localStorage.getItem('count')) {
            count = 0;
        } else {
            count = parseInt(localStorage.getItem('count'));
        }
        value['order'] = count;
        localStorage.setItem('count', (count+1).toString());
        localStorage.setItem(id, JSON.stringify(value));
    };


    $scope.deleteFav = function(id){
        localStorage.removeItem(id);
    };

    $scope.favoriteLegislators = [];
    
    $scope.toggleFavoriteLegislator = function(leg) {
        var id = leg.bioguide_id;
        $scope.toggleFavorite('l_' + id, leg);
        $scope.favoriteLegislators = $scope.getFavoriteLegislators();
    };
    
    $scope.isFavoriteLegislator = function(leg) {
        var id = leg.bioguide_id;
        return $scope.isFavorite('l_' + id);
    };
    
    $scope.getFavoriteLegislators = function() {
        favoriteLegislators = [];
        for (var idx in Object.keys(localStorage)) {
            var key = localStorage.key(idx);
            if (key.substring(0,2) === 'l_') {
                var value = localStorage.getItem(key);
                if (value) {
                    var result = JSON.parse(value);
                    favoriteLegislators.push(result);
                }
            }
        }
        return favoriteLegislators;
    };
    $scope.favoriteLegislators = $scope.getFavoriteLegislators();
    
    $scope.removeFavoriteLegislator = function(leg) {
        var id = leg.bioguide_id;
        $scope.deleteFav('l_' + id);
        $scope.favoriteLegislators = $scope.getFavoriteLegislators();
    };
    
    $scope.favoriteBills = [];

    $scope.toggleFavoriteBill = function(bill) {
        var id = bill.bill_id;
        $scope.toggleFavorite('b_' + id, bill);
         $scope.favoriteBills = $scope.getFavoriteBills();
   };
    
    $scope.isFavoriteBill = function(bill) {
        var id = bill.bill_id;
        return $scope.isFavorite('b_' + id);
    };

    $scope.getFavoriteBills = function() {
        favoriteBills = [];
        for (var idx in Object.keys(localStorage)) {
            var key = localStorage.key(idx);
            if (key.substring(0,2) === 'b_') {
                var value = localStorage.getItem(key);
                if (value) {
                    var result = JSON.parse(value);
                    favoriteBills.push(result);
                }
            }
        }
        return favoriteBills;
    };
    $scope.favoriteBills = $scope.getFavoriteBills();
    
    $scope.removeFavoriteBill = function(bill) {
        var id = bill.bill_id;
        $scope.deleteFav('b_' + id);
        $scope.favoriteBills = $scope.getFavoriteBills();
    };

    $scope.favoriteCommittees = [];

    $scope.toggleFavoriteCommittee = function(comm) {
        var id = comm.committee_id;
        $scope.toggleFavorite('c_' + id, comm);
         $scope.favoriteCommittees = $scope.getFavoriteCommittees();
    };
    
    $scope.isFavoriteCommittee = function(comm) {
        var id = comm.committee_id;
        return $scope.isFavorite('c_' + id);
    };
    
    $scope.getFavoriteCommittees = function() {
        favoriteCommittees = [];
        for (var idx in Object.keys(localStorage)) {
            var key = localStorage.key(idx);
            if (key.substring(0,2) === 'c_') {
                var value = localStorage.getItem(key);
                if (value) {
                    var result = JSON.parse(value);
                    favoriteCommittees.push(result);
                }
            }
        }
        return favoriteCommittees;
    };
    $scope.favoriteCommittees = $scope.getFavoriteCommittees();
    
    $scope.removeFavoriteCommittee = function(com) {
        var id = com.committee_id;
        $scope.deleteFav('c_' + id);
        $scope.favoriteCommittees = $scope.getFavoriteCommittees();
    };
    $scope.hasSidebar = true;
    $scope.toggleSidebar = function() {
        $scope.hasSidebar = !$scope.hasSidebar;
    }
});