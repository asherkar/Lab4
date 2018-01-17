function todoCtl($scope){
	$scope.totalTodos = 4;

	$scope.todos = [
	{text:'Learn Angular JS',description:'Learn In depth',done:false},
	{text:'Build an app',done: false}
	];

	
	
	$scope.clear = function()
	{
		$scope.todos = $scope.todos.filter(function(todo){
			return !todo.done;
		});
	}
	
	$scope.complete = function(){
		var cArray = [];
		cArray = $scope.new.filter(function(todo){
			return todo.done;
		})

		console.log(cArray);
		for(i = 0; i < $scope.new.length; i++){
			for(j = 0; j < cArray.length; j++){
				if($scope.new[i] == cArray[j]){
					$scope.new.splice(i, 1);
				}
			}
		}
		for(x = 0; x < cArray.length; x++){
			$scope.dones.push(cArray[x]);
		}
		console.log($scope.dones);
	};


	$scope.addTodo = function()
	{
		$scope.todos.push({text:$scope.todoT,description:$scope.tdescription,done:false});
		$scope.todoT = '';
		$scope.tdescription = '';
		
		for (var i =0; i<$scope.new.length - 1;i++) {
			if($scope.new[i].text == $scope.new[i-1].text){
				$scope.new.splice(i,1);
				alert("Dupilicate Item!");
			}
		}
	};

	var App = angular.module('App', []);
	App.controller('TodoCtrl', function($scope, $http) {
  	$http.get('todo.json').then(function(res){
          $scope.todos = res.data;                
        });
});
}