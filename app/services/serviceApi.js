module.exports = function($http) {
    var self = this;
    self.$http = $http;

    self.api = 'http://api.openweathermap.org/data/2.5/weather';
    self.appid = '408e514e8bebc5baf6a1c75f4e979456';

    self.get = function(data){
    	var data = {
    		appid: self.appid,
    		q: data.name
    	}
    	return self.$http({
            method: 'GET',
            url: self.api,
            params: data
        });
    }
}