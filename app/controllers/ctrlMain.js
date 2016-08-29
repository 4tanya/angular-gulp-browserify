module.exports = function($scope, $modal, serviceApi) {
	var self = this;
	self.$scope = $scope;
	self.$modal = $modal;
	self.serviceApi = serviceApi;
	self.data = [];

	self.openAddDialog = function(){
		self.$modal.open({
			templateUrl:'../templates/add.html',
            controller:'ctrlAdd as ctrl'
        }).result.then((data) => {
            self.serviceApi.get(data).then(
            	res => {
            		self.data.push(res.data);
            		localStorage.setItem(data.name, res.data);
            	},
            	error => {

            	}
            );
        });
	}
	self.getAllItems = function(){
	    /*for (i=0; i<=localStorage.length-1; i++)  
	    {  
	        var key = localStorage.key(i),  
	        	value = localStorage.getItem(key);
	        self.data.push({key:value});
	    } */ 
	}
	self.init = function(){
		self.getAllItems();
	}
}