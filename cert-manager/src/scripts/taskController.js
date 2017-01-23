var _tasks = [];

angular.module("app").controller("taskController", function($scope, $http, $filter, $uibModal, $rootScope) {


    init();
    function init() {  
        _tasks = [];
        $scope.tasks = _tasks;
        

        $.ajax({
                    type: "post",
                    async: false,
                    url: "https://medicoaid.azurewebsites.net/maa/ei.aspx/Get_Component",
                    contentType: "application/json;charset:utf-8",
                    dataType: "json",
                    data: "",
                    success: function (response) {
                         alert(response.d)
                         var s = ($.parseJSON(response.d)).Table;
                         //alert(s.Table[0].User_Name)
                         for(i in s) {
                            $scope.tasks.push(
                                             {   cid:s[i].Component_Id,
                                                 cname:s[i].Component_Name,
                                                 cgroup:s[i].Component_Group

                                             });
                            console.log(i+' '+s[i].Component_Id+' '+s[i].Component_Name+' '+s[i].Component_Group);
                        }
                    }, error: function (jqXHR, exception) {
                        if (jqXHR.status === 0) {
                            alert('Not connect.\n Verify Network.');
                        } else if (jqXHR.status == 404) {
                            alert('Requested page not found. [404]');
                        } else if (jqXHR.status == 500) {
                            alert('Internal Server Error [500].');
                        } else if (exception === 'parsererror') {
                            alert('Requested JSON parse failed.');
                        } else if (exception === 'timeout') {
                            alert('Time out error.');
                        } else if (exception === 'abort') {
                            alert('Ajax request aborted.');
                        } else {
                            alert('Uncaught Error.\n' + jqXHR.responseText);
                        }
                    }
                })

         , $scope.searchKeywords = "", $scope.filteredStores = [], $scope.row = "", $scope.select = function (page) {
            var end, start;
            return start = (page - 1) * $scope.numPerPage, end = start + $scope.numPerPage, $scope.currentPageStores = $scope.filteredStores.slice(start, end)
        }, $scope.onFilterChange = function () {
            //alert("2");
            return $scope.select(1), $scope.currentPage = 1, $scope.row = ""
        }, $scope.onNumPerPageChange = function () {
            // alert("1");
            return $scope.select(1), $scope.currentPage = 1
        }, $scope.onOrderChange = function () {
            //alert("3");
            return $scope.select(1), $scope.currentPage = 1
        }, $scope.search = function () {
            //alert("4");
            return $scope.filteredStores = $filter("filter")($scope.stores, $scope.searchKeywords), $scope.onFilterChange()
        }, $scope.order = function (rowName) {
            // alert("5");
            return $scope.row !== rowName ? ($scope.row = rowName, $scope.filteredStores = $filter("orderBy")($scope.stores, rowName), $scope.onOrderChange()) : void 0
        }, $scope.numPerPageOpt = [3, 5, 10, 20], $scope.numPerPage = $scope.numPerPageOpt[2], $scope.currentPage = 1, $scope.currentPageStores = [], (init = function () {
            // alert("6");
            return $scope.search(), $scope.select($scope.currentPage)
        });
    }

   
    $scope.items = ['item1', 'item2', 'item3'];

    $scope.animationsEnabled = true;
    //add update
    $scope.open = function (size) {

        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'pcmModalContent.html',
            controller: 'pcmModalInstanceCtrl',
            size: size,
            resolve: {
                items: function () {
                    return $scope.items;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };
    //delete 
    $scope.deleteopen = function (id) {
        //alert(928734)
        //alert(item.Status_Id)
        //$rootScope.id = item.Status_Id;
        _row = id;
        _n = 3; _cid = _components[_row].cid;
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'pcmModalContentdelete.html',
            controller: 'pcmdeleteModalInstanceCtrl',
            size: id,
            resolve: {
                items: function () {
                    return $scope.items;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };
    $scope.toggleAnimation = function () {
        $scope.animationsEnabled = !$scope.animationsEnabled;
    };
   
    $scope.ststusMasterEdit = function (id) {
        //alert(id);
        //$("#xyz").text("checking")
        //$("#myModal").modal('show')
        //open('lg')
        $rootScope.tag = "Update Status";
        //$("#modaltitle").text("Update Status");
        //$rootScope.id = item.Status_Id;
        //alert(item.Status_Id)
        _n = 2;
        _row = id;
        _cid = $scope.components[_row].cid;
        _cname = $scope.components[_row].cname;
        _cgroup = $scope.components[_row].cgroup;

    };
    $scope.ststusMasterSubmit = function () {        
        //alert($rootScope.id)

        $("#lbl_e_Status_Name,#lbl_e_Status_Category_Name").text("");
        if($.trim( $("#txt_Status_Name").val())=="")
        {
            $("#lbl_e_Status_Name").text("Please enter status");
        }
        if ($.trim($("#txt_Status_Category_Name").val()) == "") {
            $("#lbl_e_Status_Category_Name").text("Please enter category");
        }
        //success
    };
    $scope.ststusMasterAdd = function (item) {        

        //$rootScope.tag = "Add Project"; 
        _n = 1; _cid = 0;
        
    };
});


//pcmModalInstanceCtrl
angular.module('app').controller('pcmModalInstanceCtrl', function ($scope, $uibModalInstance, $rootScope) {

    // $scope.items = items;
    // $scope.selected = {
    //     item: $scope.items[0]
    // };

    if(_n==2){
        $scope.cid = _cid;
        $scope.cname = _cname;
        $scope.cgroup = _cgroup;
        console.log($scope.cname+' '+_cname);
    }else{
        $scope.cid = $scope.cname = $scope.cgroup = '';
    }
    $scope.ok = function () {
        
        console.log(_row)
        
            
            // var sid = document.getElementById("txt_Status_Id").value;
            var cname = document.getElementById("txt_Component_Name").value;
            var cgroup =  document.getElementById("txt_Component_Group_Name").value;


 
        // $("#lbl_e_Status_Name,#lbl_e_Status_Category_Name").text("");
        // if ($.trim($("#txt_Status_Name").val()) == "") {
        //     $("#lbl_e_Status_Name").text("Please enter status");
        // }
        // if ($.trim($("#txt_Status_Category_Name").val()) == "") {
        //     $("#lbl_e_Status_Category_Name").text("Please enter category");
        // }

        $.ajax({
                    type: "post",
                    async: false,
                    url: "https://medicoaid.azurewebsites.net/maa/ei.aspx/Project_Component",
                    contentType: "application/json;charset:utf-8",
                    dataType: "json",
                    data: "{a:"+_n+",cid:"+_cid+",c:'"+cname+"',cg:'"+cgroup+"'}",
                    success: function (response) {
                        alert(response.d)
                        var _cid = $.parseJSON(response.d).Table.Status_Id;
                        if(_n==1){
                            
                            _components.push({cid:_cid,cname:cname,cgroup:cgroup});
                        }else{

                            _components[_row].cid = _cid;
                            _components[_row].cname = cname;
                            _components[_row].cgroup = cgroup;
                            //alert(_projects[_row])
                        }
                        alert("Success");


                    }, error: function (jqXHR, exception) {
                        if (jqXHR.status === 0) {
                            alert('Not connect.\n Verify Network.');
                        } else if (jqXHR.status == 404) {
                            alert('Requested page not found. [404]');
                        } else if (jqXHR.status == 500) {
                            alert('Internal Server Error [500].');
                        } else if (exception === 'parsererror') {
                            alert('Requested JSON parse failed.');
                        } else if (exception === 'timeout') {
                            alert('Time out error.');
                        } else if (exception === 'abort') {
                            alert('Ajax request aborted.');
                        } else {
                            alert('Uncaught Error.\n' + jqXHR.responseText);
                        }
                    }
                });
        //success
        //$uibModalInstance.close($scope.selected.item);



        $uibModalInstance.dismiss('cancel');
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});

//pcmdeleteModalInstanceCtrl
angular.module('app').controller('pcmdeleteModalInstanceCtrl', function ($scope, $uibModalInstance, items, $rootScope) {

    // $scope.items = items;
    // $scope.selected = {
    //     item: $scope.items[0]
    // };

    $scope.ok = function () {
        console.log(_row);
        //alert("asfsf" + $rootScope.id);
        //
                $.ajax({
                    type: "post",
                    async: false,
                    url: "https://medicoaid.azurewebsites.net/maa/ei.aspx/Project_Component",
                    contentType: "application/json;charset:utf-8",
                    dataType: "json",
                    data: "{a:"+_n+",cid:"+_cid+",c:'',cg:''}",
                    success: function (response) {
                         _components.splice(_row,1);
                         alert("Success");

                    }, error: function (jqXHR, exception) {
                        if (jqXHR.status === 0) {
                            alert('Not connect.\n Verify Network.');
                        } else if (jqXHR.status == 404) {
                            alert('Requested page not found. [404]');
                        } else if (jqXHR.status == 500) {
                            alert('Internal Server Error [500].');
                        } else if (exception === 'parsererror') {
                            alert('Requested JSON parse failed.');
                        } else if (exception === 'timeout') {
                            alert('Time out error.');
                        } else if (exception === 'abort') {
                            alert('Ajax request aborted.');
                        } else {
                            alert('Uncaught Error.\n' + jqXHR.responseText);
                        }
                    }
                });

        $uibModalInstance.dismiss('cancel');
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});