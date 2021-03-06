// Controller of menu toggle.
// Learn more about Sidenav directive of angular material
// https://material.angularjs.org/latest/#/demo/material.components.sidenav
appControllers.controller('menuCtrl', function ($scope, $timeout, $mdUtil, $mdSidenav, $log, $ionicHistory, $state) {
    
    $scope.toggleLeft = buildToggler('left');
    $scope.login = localStorage.login;

    $scope.getLoginState = function(){
        if(typeof localStorage.login !== 'undefined'){
             $scope.login = localStorage.login;
            return $scope.login
        }else{
            return "false";
        }
    }
    // buildToggler is for create menu toggle.
    // Parameter :  
    // navID = id of navigation bar.
    function buildToggler(navID) {
        var debounceFn = $mdUtil.debounce(function () {
            $mdSidenav(navID).toggle();
        }, 0);
        return debounceFn;
    };// End buildToggler.

    // navigateTo is for navigate to other page 
    // by using targetPage to be the destination state. 
    // Parameter :  
    // stateNames = target state to go
    $scope.navigateTo = function (stateName) {
        $timeout(function () {
            $mdSidenav('left').close();
            if ($ionicHistory.currentStateName() != stateName) {
                $ionicHistory.nextViewOptions({
                    disableAnimate: true,
                    disableBack: true
                });
                $state.go(stateName);
            }
        }, ($scope.isAndroid == false ? 300 : 0));
    };// End navigateTo.

    $scope.logout = function () {
        localStorage.login=false;
        localStorage.nom=null;
        localStorage.prenom=null;
        localStorage.prenom=null;
        $scope.login=false;
        $mdSidenav('left').close();
        $state.go('app.tryAppNoBackBtn');

    };// End navigateTo.



}); // End of menu toggle controller.