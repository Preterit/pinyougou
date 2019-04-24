app.controller("brandController",function($scope,$controller,brandService){
	//继承
	$controller('baseController',{$scope:$scope});
	
	//查询品牌列表
	$scope.findAll=function(){
		brandService.findAll().success(
				function(response){
					$scope.list=response;
				}		
			);		
	}
	
	//保存
	$scope.save = function () {
		var serviceObject;//方法名字
		if ($scope.entity.id!=null) {  // 更新
			serviceObject = brandService.update($scope.entity);
		}else{
			serviceObject = brandService.add($scope.entity);
		}
		serviceObject.success(
			function (response) {
				if (response.success) {
					//重新查询 
					 $scope.reloadList();//重新加载
				}else{
					alert(response.msg);
				}
			}			
		);
	}
	
	//根据id查找
	$scope.findOne = function (id) {
		brandService.findOne(id).success(
			function (response) {
				$scope.entity = response;
			}		
		);
	}

	//删除
	$scope.dele=function(){
		brandService.dele($scope.selectIds).success(
			function (response) {
				if (response.success) {
					$scope.reloadList();//重新加载
				}else{
					alert(response.msg);
				}
			}		
		);
	}
	
	$scope.searchEntity={};//定义搜索对象 	
	
	//条件语句查询
	$scope.search=function(page,rows){
		brandService.search(page,rows,$scope.searchEntity).success(
			function (response) {
				$scope.paginationConf.totalItems=response.total;//总记录数 
				$scope.list=response.rows;//给列表变量赋值 
			}		
		);
	}
	
	
});