//基本控制层
app.controller('baseController',function($scope){
	//重新加载
	$scope.reloadList=function(){
		 //切换页码  
		$scope.search( $scope.paginationConf.currentPage, $scope.paginationConf.itemsPerPage);
	}	
	
	//分页
	$scope.findPage=function(page,rows){	
		brandService.findPage(page,rows).success(
				function(response){
					$scope.list=response.rows;	
					$scope.paginationConf.totalItems=response.total;//更新总记录数
				}			
		);
	}
	
	//分页控件配置 
	$scope.paginationConf = {
			 currentPage: 1,
			 totalItems: 10,
			 itemsPerPage: 10,
			 perPageOptions: [10, 20, 30, 40, 50],
			 onChange: function(){
        	 	$scope.reloadList();//重新加载
			 }
	}; 
	
	
	$scope.selectIds=[];  // 选中复选框的id
	//更新复选
	$scope.updateSelection= function ($event,id) {
		if ($event.target.checked) { // 被选中,添加到数组中
			$scope.selectIds.push(id);
		}else{
			var idx = $scope.selectIds.indexOf(id);
			$scope.selectIds.splice(idx,1);  // 删除
		}
	}
	
});