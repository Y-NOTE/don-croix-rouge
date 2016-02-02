// Controller of menu dashboard page.
appControllers.controller('loginCtrl', ['$scope',"$mdToast","$ionicLoading","$state","$mdSidenav",function ($scope, $mdToast,$ionicLoading,$state,$mdSidenav) {
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
                url: "http://cosnac.y-note.cm/login.php",
                data: dataString,
                crossDomain: true,
                cache: false,
                beforeSend: function(){ $("#login").html('Connecting...');},
                success: function(data){
                    $ionicLoading.hide({
                      template: 'Enregistrement...'
                    });
                    if(data=="success"){
                        localStorage.login='true';
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
                        $state.go('app.appelUrgence');
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

appControllers.controller('signupCtrl', ['$scope',"$mdToast","$ionicLoading","$state",function ($scope, $mdToast,$ionicLoading,$state) {
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
                url: "http://cosnac.y-note.cm/signup.php",
                data: dataString,
                crossDomain: true,
                cache: false,
                beforeSend: function(){ $("#login").html('Connecting...');},
                success: function(data){
                    $ionicLoading.hide({
                      template: 'Enregistrement...'
                    });
                    if(data=="success"){
                        localStorage.login='true';
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
                        $state.go('app.appelUrgence');
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


appControllers.controller('mesinfospersoCtrl' , ['$scope',"$mdToast","$ionicLoading",function ($scope, $mdToast,$ionicLoading) {
       $scope.user = { 
            email: localStorage.email,
            nom: localStorage.nom,
            prenom: localStorage.prenom,
            telephone: localStorage.telephone,
            oldemail: localStorage.email,          
        };

          $scope.updateProfile = function () {
            var dataString="email="+$scope.user.email+"&nom="+$scope.user.nom+"&prenom="+$scope.user.prenom+"&telephone="+$scope.user.telephone+"&oldemail="+localStorage.email;
            $ionicLoading.show({
              template: 'Mise a jour...'
            });

            $.ajax({
                type: "POST",
                url: "http://cosnac.y-note.cm/updateprofile.php",
                data: dataString,
                crossDomain: true,
                cache: false,
                success: function(data){
                    $ionicLoading.hide({
                        template: 'Mise a jour...'
                    });
                    if(data=="success"){
                        localStorage.email=$scope.user.email;
                        window.localStorage.nom=$scope.user.nom;
                        window.localStorage.prenom=$scope.user.prenom;
//                        window.localStorage.datenaissance=$scope.user.datenaissance;
                        window.localStorage.telephone=$scope.user.telephone;
                        $mdToast.show({
                            controller: 'toastController',
                            templateUrl: 'toast.html',
                            hideDelay: 1500,
                            position: 'bottom',
                            locals: {
                                displayOption: {
                                    title: 'Votre profile a bien été mise a jour'
                                }
                            }
                        });
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
                    }     
                }
            });


          }

}]);// End of controller menu dashboard.

appControllers.controller('passwordupdateCtrl', ['$scope',"$mdToast","$ionicLoading",function ($scope, $mdToast,$ionicLoading) {
            $scope.user = { 
                email: localStorage.email,
            };

          $scope.updatePassword = function () {
            var dataString="email="+$scope.user.email+"&password="+$scope.user.password;
            console.log($scope.user.password);
            if(typeof $scope.user.password == 'undefined'){
                $mdToast.show({
                    controller: 'toastController',
                    templateUrl: 'toast.html',
                    hideDelay: 1500,
                    position: 'bottom',
                    locals: {
                        displayOption: {
                            title: 'Votre mot de passe est vide'
                        }   
                    }
                });
            }else if($scope.user.password!=$scope.user.passwordconfirm){
              $mdToast.show({
                    controller: 'toastController',
                    templateUrl: 'toast.html',
                    hideDelay: 1500,
                    position: 'bottom',
                    locals: {
                        displayOption: {
                            title: 'Vos mots de passe ne correspondent pas'
                        }
                    }
                });
            }else{
                $ionicLoading.show({
                  template: 'Mise a jour...'
                });

                $.ajax({
                    type: "POST",
                    url: "http://cosnac.y-note.cm/updatepassword.php",
                    data: dataString,
                    crossDomain: true,
                    cache: false,
                    success: function(data){
                        $ionicLoading.hide({
                            template: 'Mise a jour...'
                        });
                        if(data=="success"){
                            $mdToast.show({
                                controller: 'toastController',
                                templateUrl: 'toast.html',
                                hideDelay: 1500,
                                position: 'bottom',
                                locals: {
                                    displayOption: {
                                        title: 'Votre mot de passe a bien été mise a jour'
                                    }
                                }
                            });
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
                        }     
                    }
                });
        }
  }

}]);// End of controller menu dashboard.

appControllers.controller('paiementprefereCtrl', ['$scope',"$mdToast",function ($scope, $mdToast) {
  $scope.controlSignup = function (signup) {}

}]);// End of controller menu dashboard.

appControllers.controller('montantprefereCtrl', ['$scope',"$mdToast",function ($scope, $mdToast) {
  $scope.controlSignup = function (signup) {}

}]);// End of controller menu dashboard.