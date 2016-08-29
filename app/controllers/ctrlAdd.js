module.exports = function($scope) {
    var self = this;
    self.$scope = $scope;
	self.name = 'city';
    self.add = function(){
        self.$scope.$close({name: self.name});
    }
}