(function app () {
    angular.module('app', []);

    angular.module('app').controller('home', function ($scope) {
        $scope.title = 'Hello Angular';
    });
})();