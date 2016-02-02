// Controller of menu dashboard page.
appControllers.controller('loginCtrl', ['$scope',"$mdToast","$ionicLoading",function ($scope, $mdToast,$ionicLoading) {
     $scope.login = { email: "" };
     $scope.controlLogin = function (login) {
        if(!login){
             $mdToast.show({
                controller: 'toastController',
                templateUrl: 'toast.html',
                hideDelay: 800,
                position: 'top',
                locals: {
                    displayOption: {
                        title: 'Merci de remplir le formulaire de connexion'
                    }
                }
            });
            return;
        }else{

            if(!login.email){
                 $mdToast.show({
                    controller: 'toastController',
                    templateUrl: 'toast.html',
                    hideDelay: 800,
                    position: 'top',
                    locals: {
                        displayOption: {
                            title: 'Merci de définir un mot de passe correcte'
                        }
                    }
                });
                return;
            }

            if(!login.password){
                $mdToast.show({
                    controller: 'toastController',
                    templateUrl: 'toast.html',
                    hideDelay: 800,
                    position: 'top',
                    locals: {
                        displayOption: {
                            title: 'Merci de définir un mot de passe'
                        }
                    }
                });
                return;
            }

           var dataString="email="+login.email+"&password="+login.password+"&login=";
            $ionicLoading.show({
              template: 'Connexion...'
            });

            $.ajax({
                type: "POST",
                url: "http://localhost/phonegap/CRC-Don/CRCPhp/login.php",
                data: dataString,
                crossDomain: true,
                cache: false,
                beforeSend: function(){ $("#login").html('Connecting...');},
                success: function(data){
                    $ionicLoading.hide({
                      template: 'Enregistrement...'
                    });
                    if(data=="success"){
                        localStorage.login=true;
                        localStorage.email=login.email;
                        $mdToast.show({
                            controller: 'toastController',
                            templateUrl: 'toast.html',
                            hideDelay: 1500,
                            position: 'bottom',
                            locals: {
                                displayOption: {
                                    title: 'Connexion OK'
                                }
                            }
                        });
                        window.location.href = "index.html";
                        return;
                    }else if(data=="failed"){
                        $mdToast.show({
                            controller: 'toastController',
                            templateUrl: 'toast.html',
                            hideDelay: 1500,
                            position: 'bottom',
                            locals: {
                                displayOption: {
                                    title: 'Erreur de connexion'
                                }
                            }
                        });
                        return;
                    }else if(data=="passworderror"){
                         $mdToast.show({
                            controller: 'toastController',
                            templateUrl: 'toast.html',
                            hideDelay: 1500,
                            position: 'bottom',
                            locals: {
                                displayOption: {
                                    title: 'Votre mot de passe ne correspond pas'
                                }
                            }
                        });
                        return;
                    }else if(data=="emailnotexist"){
                        $mdToast.show({
                            controller: 'toastController',
                            templateUrl: 'toast.html',
                            hideDelay: 1500,
                            position: 'bottom',
                            locals: {
                                displayOption: {
                                    title: 'Cet email n\'existe pas' 
                                }
                            }
                        });
                        return;
                    }  
                }
            });


        }
    }

}]);// End of controller menu dashboard.

appControllers.controller('signupCtrl', ['$scope',"$mdToast","$ionicLoading",function ($scope, $mdToast,$ionicLoading) {
     $scope.controlSignup = function (signup) {
        if(!signup){
             $mdToast.show({
                controller: 'toastController',
                templateUrl: 'toast.html',
                hideDelay: 800,
                position: 'top',
                locals: {
                    displayOption: {
                        title: 'Merci de remplir le formulaire d\'inscription'
                    }
                }
            });
            return;
        }else{

            if(!signup.checkbox){
                 $mdToast.show({
                    controller: 'toastController',
                    templateUrl: 'toast.html',
                    hideDelay: 800,
                    position: 'top',
                    locals: {
                        displayOption: {
                            title: 'Merci d\'accepter les conditions d\'utilisations'
                        }
                    }
                });
                return;
            }

            if(!signup.email){
                $mdToast.show({
                    controller: 'toastController',
                    templateUrl: 'toast.html',
                    hideDelay: 800,
                    position: 'top',
                    locals: {
                        displayOption: {
                            title: 'Merci de remplir correctement votre adresse email'
                        }
                    }
                });
                return;
            }

            if(!signup.password){
                $mdToast.show({
                    controller: 'toastController',
                    templateUrl: 'toast.html',
                    hideDelay: 800,
                    position: 'top',
                    locals: {
                        displayOption: {
                            title: 'Merci de remplir votre mot de passe'
                        }
                    }
                });
                return;
            }

            if(!signup.passwordconfirm){
                $mdToast.show({
                    controller: 'toastController',
                    templateUrl: 'toast.html',
                    hideDelay: 800,
                    position: 'top',
                    locals: {
                        displayOption: {
                            title: 'Merci de remplir votre confirmation de mot de passe'
                        }
                    }
                });
                return;
            }

            if(signup.passwordconfirm != signup.password){
                $mdToast.show({
                    controller: 'toastController',
                    templateUrl: 'toast.html',
                    hideDelay: 800,
                    position: 'top',
                    locals: {
                        displayOption: {
                            title: 'Vos mots de passe ne correspondent pas'
                        }
                    }
                });
                return;
            }

            var dataString="email="+signup.email+"&password="+signup.password+"&signup=";
            $ionicLoading.show({
              template: 'Enregistrement...'
            });

            $.ajax({
                type: "POST",
                url: "http://localhost/phonegap/CRC-Don/CRCPhp/signup.php",
                data: dataString,
                crossDomain: true,
                cache: false,
                beforeSend: function(){ $("#login").html('Connecting...');},
                success: function(data){
                    $ionicLoading.hide({
                      template: 'Enregistrement...'
                    });
                    if(data=="success"){
                        localStorage.login=true;
                        localStorage.email=signup.email;
                        $mdToast.show({
                            controller: 'toastController',
                            templateUrl: 'toast.html',
                            hideDelay: 1500,
                            position: 'bottom',
                            locals: {
                                displayOption: {
                                    title: 'Votre compte a été correctement crée, vous receverez une confirmation par mail d\'ici quelques minutes'
                                }
                            }
                        });
                        window.location.href = "index.html";
                        return;
                    }else if(data=="failed"){
                        $mdToast.show({
                            controller: 'toastController',
                            templateUrl: 'toast.html',
                            hideDelay: 1500,
                            position: 'bottom',
                            locals: {
                                displayOption: {
                                    title: 'Erreur dans la création de votre compte'
                                }
                            }
                        });
                        return;
                    }else if(data=="alreadyexist"){
                        $mdToast.show({
                            controller: 'toastController',
                            templateUrl: 'toast.html',
                            hideDelay: 1500,
                            position: 'bottom',
                            locals: {
                                displayOption: {
                                    title: 'Votre email est déjà pris. Vous pouvez récupérer votre mot de passe ici'
                                }
                            }
                        });
                        return;
                    }          
                }
            });


        }
    }
}]);


appControllers.controller('moncompteCtrl', ['$scope',"$mdToast",function ($scope, $mdToast) {
  $scope.controlSignup = function (signup) {}

}]);// End of controller menu dashboard.


appControllers.controller('mesinfospersoCtrl', ['$scope',"$mdToast",function ($scope, $mdToast) {
       $scope.user = { email: localStorage.email };

}]);// End of controller menu dashboard.

appControllers.controller('passwordupdateCtrl', ['$scope',"$mdToast",function ($scope, $mdToast) {
  $scope.controlSignup = function (signup) {}

}]);// End of controller menu dashboard.

appControllers.controller('paiementprefereCtrl', ['$scope',"$mdToast",function ($scope, $mdToast) {
  $scope.controlSignup = function (signup) {}

}]);// End of controller menu dashboard.

appControllers.controller('montantprefereCtrl', ['$scope',"$mdToast",function ($scope, $mdToast) {
  $scope.controlSignup = function (signup) {}

}]);// End of controller menu dashboard.