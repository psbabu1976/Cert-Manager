var _id;
var _row;
var _n;
var _uname = '';
var _upwd = '';
var _pid;
var _pcode;
var _pname;
var _psdate;
var _cid;
var _cname;
var _cgroup;
var _projects = [];
var _statuses = [];
var _pstatuses = [];
var _components = [];
var _curUID,_curPID,_curCID,_fD,_tD;
angular.module("app.master", []).controller("sController", function($scope, $http, $filter, $uibModal, $rootScope) {


});



angular.module("app").controller("ProjectMasterController", function($scope, $http, $filter, $uibModal, $rootScope) {


    //$scope.test = "sample";
    init();

    function init() {
        _projects = [];
        _pstatuses = [];
        $scope.projects = _projects;
        $scope.pstatuses = _pstatuses;

        $.ajax({
            type: "post",
            async: false,
            url: "https://medicoaid.azurewebsites.net/maa/ei.aspx/Get_Projects",
            contentType: "application/json;charset:utf-8",
            dataType: "json",
            data: "",
            success: function(response) {
                //alert(response.d)
                var s = ($.parseJSON(response.d)).Table;
                var t = ($.parseJSON(response.d)).Table1;
                //alert(s.Table[0].User_Name)
                //alert(t[0].Status_Id+' '+t[0].Status_Name);
                for (i in s) {
                    $scope.projects.push({
                        pid: s[i].Project_Id,
                        pname: s[i].Project_Details,
                        pcode: s[i].Project_Code,
                        psdate: s[i].Project_Start_Date,
                        psid: s[i].Project_Status_Id,
                        pstatus: s[i].Status_Name,
                        cnt:s[i].Count
                    });
                    console.log(i + ' ' + s[i].Project_Id + ' ' + s[i].Project_Code + ' ' + s[i].Project_Details);
                }
                for(j in t){

                    $scope.pstatuses.push({psid:t[j].Status_Id,pstatus:t[j].Status_Name});
                }
                alert(JSON.stringify($scope.pstatuses))
            },
            error: function(jqXHR, exception) {
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

        , $scope.searchKeywords = "", $scope.filteredStores = [], $scope.row = "", $scope.select = function(page) {
            var end, start;
            return start = (page - 1) * $scope.numPerPage, end = start + $scope.numPerPage, $scope.currentPageStores = $scope.filteredStores.slice(start, end)
        }, $scope.onFilterChange = function() {
            //alert("2");
            return $scope.select(1), $scope.currentPage = 1, $scope.row = ""
        }, $scope.onNumPerPageChange = function() {
            // alert("1");
            return $scope.select(1), $scope.currentPage = 1
        }, $scope.onOrderChange = function() {
            //alert("3");
            return $scope.select(1), $scope.currentPage = 1
        }, $scope.search = function() {
            //alert("4");
            return $scope.filteredStores = $filter("filter")($scope.stores, $scope.searchKeywords), $scope.onFilterChange()
        }, $scope.order = function(rowName) {
            // alert("5");
            return $scope.row !== rowName ? ($scope.row = rowName, $scope.filteredStores = $filter("orderBy")($scope.stores, rowName), $scope.onOrderChange()) : void 0
        }, $scope.numPerPageOpt = [3, 5, 10, 20], $scope.numPerPage = $scope.numPerPageOpt[2], $scope.currentPage = 1, $scope.currentPageStores = [], (init = function() {
            // alert("6");
            return $scope.search(), $scope.select($scope.currentPage)
        });
    }


    $scope.items = ['item1', 'item2', 'item3'];

    $scope.animationsEnabled = true;
    //add update
    $scope.open = function(size) {

        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            resolve: {
                items: function() {
                    return $scope.items;
                }
            }
        });

        modalInstance.result.then(function(selectedItem) {
            $scope.selected = selectedItem;
        }, function() {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };
    //delete 
    $scope.deleteopen = function(id) {
        //alert(928734)
        //alert(item.Status_Id)
        //$rootScope.id = item.Status_Id;
        _row = id;
        alert(_row)
        _n = 3;
        _pid = _projects[_row].pid;
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'myModalContentdelete.html',
            controller: 'deleteModalInstanceCtrl',
            size: id,
            resolve: {
                items: function() {
                    return $scope.items;
                }
            }
        });

        modalInstance.result.then(function(selectedItem) {
            $scope.selected = selectedItem;
        }, function() {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };
    $scope.toggleAnimation = function() {
        $scope.animationsEnabled = !$scope.animationsEnabled;
    };

    $scope.ststusMasterEdit = function(id) {
        //$("#xyz").text("checking")
        //$("#myModal").modal('show')
        //open('lg')
        $rootScope.tag = "Update Project Status";
        //$("#modaltitle").text("Update Status");
        //$rootScope.id = item.Status_Id;
        //alert(item.Status_Id)
        _n = 2;
        _row = id;
        _pid = $scope.projects[_row].pid;
        _psid = $scope.projects[_row].psid;
        _pcode = $scope.projects[_row].pcode;
        _pname = $scope.projects[_row].pname;
        _psdate = $scope.projects[_row].psdate;
        _pstatus = $scope.projects[_row].pstatus;



    };
    $scope.ststusMasterSubmit = function() {
        //alert($rootScope.id)

        $("#lbl_e_Status_Name,#lbl_e_Status_Category_Name").text("");
        if ($.trim($("#txt_Status_Name").val()) == "") {
            $("#lbl_e_Status_Name").text("Please enter status");
        }
        if ($.trim($("#txt_Status_Category_Name").val()) == "") {
            $("#lbl_e_Status_Category_Name").text("Please enter category");
        }
        //success
    };
    $scope.ststusMasterAdd = function(item) {

        $rootScope.tag = "Add Project";
        _n = 1;
        _pid = 0;

    };
});


angular.module('app').controller('ModalInstanceCtrl', function($scope, $uibModalInstance, $rootScope, $timeout) {

    // $scope.items = items;
    // $scope.selected = {
    //     item: $scope.items[0]
    // };

    $scope.projects = _projects;
    $scope.pstatuses = _pstatuses;

    // if(_psid==1) $scope.ipsid = 0;
    // else if(_psid==2) $scope.ipsid = 1;
    // else $scope.ipsid = 2;

    if (_n == 2) {
        $scope.pcode = _pcode;
        $scope.pname = _pname;
        $scope.psdate = _psdate;
        $scope.pstatus = _pstatus;
        $scope.psid = _psid;
        $timeout(function(){
             $("#txt_proj_status_id").val(_psid);
        },500)
    } else {
        $scope.pcode = $scope.pname = '';$scope.psdate = new Date();
    }

    
    $scope.change = function(){ alert($scope.psid) }

    alert(_n+' '+_psdate+' '+$scope.psdate)
    $scope.ok = function() {
        alert("{a:" + _n + ",pid:'" + _pid + "',p:'" + pcode + "',pd:'" + pname + "',d:'" + psd + "',s:"+ psid +"}")
        console.log(_row)
        var x = 1;

        var pcode = document.getElementById("txt_proj_code").value;
        var pname = document.getElementById("txt_proj_name").value;
        var psd = document.getElementById("txt_proj_sdate").value;
        var psid = document.getElementById("txt_proj_status_id").value;


        $("#lbl_e_Status_Name,#lbl_e_Status_Pwd").text("");

        if ($.trim($("#txt_proj_code").val()) == "") {
            x = 0;
            $("#lbl_e_Status_Code").text("Please Enter Project Code");
        } else if ($.trim($("#txt_proj_code").val().length) < 3) {
            x = 0;
            $("#lbl_e_Status_Code").text("Project Code should be more than 3 Chars");
        } 

        if ($.trim($("#txt_proj_name").val()) == "") {
            x = 0;
            $("#lbl_e_Status_Name").text("Please Enter Project Name");
        } else if ($.trim($("#txt_proj_name").val().length) < 3) {
            x = 0;
            $("#lbl_e_Status_Name").text("Project Name should be more than 3 Chars");
        } 

        if(x==1){
            $.ajax({
                type: "post",
                async: false,
                url: "https://medicoaid.azurewebsites.net/maa/ei.aspx/Projects",
                contentType: "application/json;charset:utf-8",
                dataType: "json",
                data: "{a:" + _n + ",pid:'" + _pid + "',p:'" + pcode + "',pd:'" + pname + "',d:'" + psd + "',s:"+ psid +"}",
                success: function(response) {
                    alert(response.d)
                    if (_n == 1) {
                        var _pid = $.parseJSON(response.d).Table.Project_Id;
                        //var pname =
                        _projects.push({ pid: _pid, pcode: pcode, pname: pname, psdate: psd, psid: psid });
                    } else {
                        _projects[_row].pname = pname;
                        _projects[_row].pcode = pcode;
                        _projects[_row].psdate = psd;
                        _projects[_row].psid = psid;
                        
                        if(psid==1) _projects[_row].pstatus = "Completed";
                        else if(psid==2) _projects[_row].pstatus = "OnGoing";
                        else _projects[_row].pstatus = "Pending";
                        //alert(_projects[_row])
                    }
                    alert("Success");


                },
                error: function(jqXHR, exception) {
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
            $uibModalInstance.dismiss('cancel');

        }

        
    };

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };
});



angular.module('app').controller('deleteModalInstanceCtrl', function($scope, $uibModalInstance, items, $rootScope) {

    $scope.items = items;
    $scope.selected = {
        item: $scope.items[0]
    };

    $scope.ok = function() {
        //alert($rootScope.id);
        //
        $.ajax({
            type: "post",
            async: false,
            url: "https://medicoaid.azurewebsites.net/maa/ei.aspx/Projects",
            contentType: "application/json;charset:utf-8",
            dataType: "json",
            data: "{a:" + _n + ",pid:" + _pid + ",p:'',pd:'',d:'',s:1}",
            success: function(response) {
                //alert(response.d)
                _projects.splice(_row, 1);
                alert("Success");


            },
            error: function(jqXHR, exception) {
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

        $uibModalInstance.close($scope.selected.item);
    };

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };
});

//Status Controller
angular.module("app").controller("StatusMasterController", function($scope, $http, $filter, $uibModal, $rootScope) {


    //$scope.test = "sample";
    init();

    function init() {
        _statuses = [];
        $scope.statuses = _statuses;


        $.ajax({
            type: "post",
            async: false,
            url: "https://medicoaid.azurewebsites.net/maa/ei.aspx/Get_Status",
            contentType: "application/json;charset:utf-8",
            dataType: "json",
            data: "",
            success: function(response) {
                alert(response.d)
                var s = ($.parseJSON(response.d)).Table;
                //alert(s.Table[0].User_Name)
                for (i in s) {
                    $scope.statuses.push({
                        sid: s[i].Status_Id,
                        sname: s[i].Status_Name,
                        scn: s[i].Status_Category_Name,
                        cnt: s[i].Count
                    });
                    console.log(i + ' ' + s[i].Status_Id + ' ' + s[i].Status_Name + ' ' + s[i].Status_Category_Name);
                }
            },
            error: function(jqXHR, exception) {
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

        , $scope.searchKeywords = "", $scope.filteredStores = [], $scope.row = "", $scope.select = function(page) {
            var end, start;
            return start = (page - 1) * $scope.numPerPage, end = start + $scope.numPerPage, $scope.currentPageStores = $scope.filteredStores.slice(start, end)
        }, $scope.onFilterChange = function() {
            //alert("2");
            return $scope.select(1), $scope.currentPage = 1, $scope.row = ""
        }, $scope.onNumPerPageChange = function() {
            // alert("1");
            return $scope.select(1), $scope.currentPage = 1
        }, $scope.onOrderChange = function() {
            //alert("3");
            return $scope.select(1), $scope.currentPage = 1
        }, $scope.search = function() {
            //alert("4");
            return $scope.filteredStores = $filter("filter")($scope.stores, $scope.searchKeywords), $scope.onFilterChange()
        }, $scope.order = function(rowName) {
            // alert("5");
            return $scope.row !== rowName ? ($scope.row = rowName, $scope.filteredStores = $filter("orderBy")($scope.stores, rowName), $scope.onOrderChange()) : void 0
        }, $scope.numPerPageOpt = [3, 5, 10, 20], $scope.numPerPage = $scope.numPerPageOpt[2], $scope.currentPage = 1, $scope.currentPageStores = [], (init = function() {
            // alert("6");
            return $scope.search(), $scope.select($scope.currentPage)
        });
    }


    $scope.items = ['item1', 'item2', 'item3'];

    $scope.animationsEnabled = true;
    //add update
    $scope.open = function(size) {

        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'SModalContent.html',
            controller: 'SModalInstanceCtrl',
            size: size,
            resolve: {
                items: function() {
                    return $scope.items;
                }
            }
        });

        modalInstance.result.then(function(selectedItem) {
            $scope.selected = selectedItem;
        }, function() {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };
    //delete 
    $scope.deleteopen = function(id) {
        //alert(928734)
        //alert(item.Status_Id)
        //$rootScope.id = item.Status_Id;
        _row = id;
        _n = 3;
        _sid = _statuses[_row].sid;alert(_row+' '+_sid)
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'SModalContentdelete.html',
            controller: 'SdeleteModalInstanceCtrl',
            size: id,
            resolve: {
                items: function() {
                    return $scope.items;
                }
            }
        });

        modalInstance.result.then(function(selectedItem) {
            $scope.selected = selectedItem;
        }, function() {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };
    $scope.toggleAnimation = function() {
        $scope.animationsEnabled = !$scope.animationsEnabled;
    };

    $scope.ststusMasterEdit = function(id) {
        //$("#xyz").text("checking")
        //$("#myModal").modal('show')
        //open('lg')
        $rootScope.tag = "Update Status";
        //$("#modaltitle").text("Update Status");
        //$rootScope.id = item.Status_Id;
        //alert(item.Status_Id)
        _n = 2;
        _row = id;
        _sid = $scope.statuses[_row].sid;
        _sname = $scope.statuses[_row].sname;
        _scn = $scope.statuses[_row].scn;
        //alert(_sname+' '+_scn)
    };
    $scope.ststusMasterSubmit = function() {
        //alert($rootScope.id)

        $("#lbl_e_Status_Name,#lbl_e_Status_Category_Name").text("");
        if ($.trim($("#txt_Status_Name").val()) == "") {
            $("#lbl_e_Status_Name").text("Please enter status");
        }
        if ($.trim($("#txt_Status_Category_Name").val()) == "") {
            $("#lbl_e_Status_Category_Name").text("Please enter category");
        }
        //success
    };
    $scope.ststusMasterAdd = function(item) {

        $rootScope.tag = "Add Project";
        _n = 1;
        _sid = 0;

    };
});

angular.module('app').controller('SModalInstanceCtrl', function($scope, $uibModalInstance, $rootScope) {

    // $scope.items = items;
    // $scope.selected = {
    //     item: $scope.items[0]
    // };

    if (_n == 2) {
        $scope.sid = _sid;
        $scope.sname = _sname;
        $scope.scn = _scn;
        console.log($scope.sname + ' ' + $scope.scn);
    } else if(_n == 1){
        $scope.sid = $scope.sname = $scope.scn = '';
    }
    $scope.ok = function() {

        var x = 1;
        
        
        // var sid = document.getElementById("txt_Status_Id").value;
        var sname = document.getElementById("txt_Status_Name").value;
        var scn = document.getElementById("txt_Status_Category_Name").value;



        $("#lbl_e_Status_Name,#lbl_e_Status_Pwd").text("");

        if ($.trim($("#txt_Status_Name").val()) == "") {
            x = 0;$("#lbl_e_Status_Name").text("Please Enter Status Name");
        } else if ($.trim($("#txt_Status_Name").val().length) < 3) {
            x = 0;$("#lbl_e_Status_Name").text("Status Name should be more than 2 Chars");
        } else if ($.trim($("#txt_Status_Name").val().length) > 20) {
            x = 0;$("#lbl_e_Status_Name").text("Status Name should not exceed 20 Chars");
        }

        if ($.trim($("#txt_Status_Category_Name").val()) == "") {
            x = 0;$("#lbl_e_Status_Category_Name").text("Please Enter Status Category");
        } else if ($.trim($("#txt_Status_Category_Name").val().length) < 3) {
            x = 0;$("#lbl_e_Status_Category_Name").text("Status Category should be more than 2 Chars");
        } else if ($.trim($("#txt_Status_Category_Name").val().length) > 30) {
            x = 0;$("#lbl_e_Status_Category_Name").text("Status Category should should not exceed 30 Chars");
        }

        if (x == 1) {

            $.ajax({
                type: "post",
                async: false,
                url: "https://medicoaid.azurewebsites.net/maa/ei.aspx/Status",
                contentType: "application/json;charset:utf-8",
                dataType: "json",
                data: "{a:" + _n + ",sid:"+_sid+",s:'" + sname + "',c:'" + scn + "'}",
                success: function(response) {
                    alert(response.d)
                    if (_n == 1) {
                        var _sid = $.parseJSON(response.d).Table[0].Status_Id;
                        alert(_sid);
                        _statuses.push({ sid: _sid, sname: sname, scn: scn });
                    } else {

                        _statuses[_row].sid = $scope.sid;
                        _statuses[_row].sname = $scope.sname;
                        _statuses[_row].scn = $scope.scn;
                        //alert(_projects[_row])
                    }
                    alert("Success");


                },
                error: function(jqXHR, exception) {
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
    }
    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };
});

//SdeleteModalInstanceCtrl
angular.module('app').controller('SdeleteModalInstanceCtrl', function($scope, $uibModalInstance, items, $rootScope) {

    // $scope.items = items;
    // $scope.selected = {
    //     item: $scope.items[0]
    // };

    $scope.ok = function() {
        console.log(_row);
        //alert("asfsf" + $rootScope.id);
        //
        $.ajax({
            type: "post",
            async: false,
            url: "https://medicoaid.azurewebsites.net/maa/ei.aspx/Status",
            contentType: "application/json;charset:utf-8",
            dataType: "json",
            data: "{a:" + _n + ",sid:" + _sid + ",s:'',c:''}",
            success: function(response) {
                _statuses.splice(_row, 1);
                alert("Success");

            },
            error: function(jqXHR, exception) {
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

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };
});

//pcmController
angular.module("app").controller("pcmController", function($scope, $http, $filter, $uibModal, $rootScope) {


    _components = [];
    $scope.components = _components;

    init();

    function init() {
        _statuses = [];
        $scope.statuses = _statuses;


        $.ajax({
            type: "post",
            async: false,
            url: "https://medicoaid.azurewebsites.net/maa/ei.aspx/Get_Component",
            contentType: "application/json;charset:utf-8",
            dataType: "json",
            data: "",
            success: function(response) {
                alert(response.d)
                var s = ($.parseJSON(response.d)).Table;
                //alert(s.Table[0].User_Name)
                for (i in s) {
                    $scope.components.push({
                        cid: s[i].Component_Id,
                        cname: s[i].Component_Name,
                        cgroup: s[i].Component_Group,
                        cnt: s[i].Count
                    });
                    console.log(i + ' ' + s[i].Component_Id + ' ' + s[i].Component_Name + ' ' + s[i].Component_Group);
                }
            },
            error: function(jqXHR, exception) {
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

        , $scope.searchKeywords = "", $scope.filteredStores = [], $scope.row = "", $scope.select = function(page) {
            var end, start;
            return start = (page - 1) * $scope.numPerPage, end = start + $scope.numPerPage, $scope.currentPageStores = $scope.filteredStores.slice(start, end)
        }, $scope.onFilterChange = function() {
            //alert("2");
            return $scope.select(1), $scope.currentPage = 1, $scope.row = ""
        }, $scope.onNumPerPageChange = function() {
            // alert("1");
            return $scope.select(1), $scope.currentPage = 1
        }, $scope.onOrderChange = function() {
            //alert("3");
            return $scope.select(1), $scope.currentPage = 1
        }, $scope.search = function() {
            //alert("4");
            return $scope.filteredStores = $filter("filter")($scope.stores, $scope.searchKeywords), $scope.onFilterChange()
        }, $scope.order = function(rowName) {
            // alert("5");
            return $scope.row !== rowName ? ($scope.row = rowName, $scope.filteredStores = $filter("orderBy")($scope.stores, rowName), $scope.onOrderChange()) : void 0
        }, $scope.numPerPageOpt = [3, 5, 10, 20], $scope.numPerPage = $scope.numPerPageOpt[2], $scope.currentPage = 1, $scope.currentPageStores = [], (init = function() {
            // alert("6");
            return $scope.search(), $scope.select($scope.currentPage)
        });
    }


    $scope.items = ['item1', 'item2', 'item3'];

    $scope.animationsEnabled = true;
    //add update
    $scope.open = function(size) {

        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'pcmModalContent.html',
            controller: 'pcmModalInstanceCtrl',
            size: size,
            resolve: {
                items: function() {
                    return $scope.items;
                }
            }
        });

        modalInstance.result.then(function(selectedItem) {
            $scope.selected = selectedItem;
        }, function() {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };
    //delete 
    $scope.deleteopen = function(id) {
        //alert(928734)
        //alert(item.Status_Id)
        //$rootScope.id = item.Status_Id;
        _row = id;
        _n = 3;
        _cid = _components[_row].cid;
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'pcmModalContentdelete.html',
            controller: 'pcmdeleteModalInstanceCtrl',
            size: id,
            resolve: {
                items: function() {
                    return $scope.items;
                }
            }
        });

        modalInstance.result.then(function(selectedItem) {
            $scope.selected = selectedItem;
        }, function() {
            $log.info('Modal dismissed at: ' + new Date());
        });

        alert(_row)
    };
    $scope.toggleAnimation = function() {
        $scope.animationsEnabled = !$scope.animationsEnabled;
    };

    $scope.ststusMasterEdit = function(id) {
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
    $scope.ststusMasterSubmit = function() {
        //alert($rootScope.id)

        $("#lbl_e_Status_Name,#lbl_e_Status_Category_Name").text("");
        if ($.trim($("#txt_Status_Name").val()) == "") {
            $("#lbl_e_Status_Name").text("Please enter status");
        }
        if ($.trim($("#txt_Status_Category_Name").val()) == "") {
            $("#lbl_e_Status_Category_Name").text("Please enter category");
        }
        //success
    };
    $scope.ststusMasterAdd = function(item) {

        //$rootScope.tag = "Add Project"; 
        _n = 1;
        _cid = 0;

    };
});


//pcmModalInstanceCtrl
angular.module('app').controller('pcmModalInstanceCtrl', function($scope, $uibModalInstance, $rootScope) {

    // $scope.items = items;
    // $scope.selected = {
    //     item: $scope.items[0]
    // };

    if (_n == 2) {
        $scope.cid = _cid;
        $scope.cname = _cname;
        $scope.cgroup = _cgroup;
        console.log($scope.cname + ' ' + _cname);
    } else {
        $scope.cid = $scope.cname = $scope.cgroup = '';
    }
    $scope.ok = function() {

        console.log(_row)
        var x = 1;

        // var sid = document.getElementById("txt_Status_Id").value;
        var cname = document.getElementById("txt_Component_Name").value;
        var cgroup = document.getElementById("txt_Component_Group_Name").value;


        $("#lbl_e_Status_Name,#lbl_e_Status_Category_Name").text("");
        if ($.trim($("#txt_Component_Name").val()) == "") {
            x = 0;
            $("#lbl_e_Status_Name").text("Please Enter Component Name");
        } else if ($.trim($("#txt_Component_Name").val().length) < 3) {
            x = 0;
            $("#lbl_e_Status_Name").text("Component Name should not be less than 3 Chars");
        } 

        if ($.trim($("#txt_Component_Group_Name").val()) == "") {
            x = 0;
            $("#lbl_e_Status_Category_Name").text("Please Enter Component Group Name");
        } else if ($.trim($("#txt_Component_Group_Name").val().length) < 3) {
            x = 0;
            $("#lbl_e_Status_Category_Name").text("Component Group Name should not be less than 3 Chars");
        } 

        if (x == 1) {
           $.ajax({
               type: "post",
               async: false,
               url: "https://medicoaid.azurewebsites.net/maa/ei.aspx/Project_Component",
               contentType: "application/json;charset:utf-8",
               dataType: "json",
               data: "{a:" + _n + ",cid:" + _cid + ",c:'" + cname + "',cg:'" + cgroup + "'}",
               success: function(response) {
                   alert(response.d)
                   var _cid = $.parseJSON(response.d).Table[0].Component_Id;
                   if (_n == 1) {

                       _components.push({ cid: _cid, cname: cname, cgroup: cgroup });
                   } else {

                       _components[_row].cid = _cid;
                       _components[_row].cname = cname;
                       _components[_row].cgroup = cgroup;
                       //alert(_projects[_row])
                   }
                   alert("Success");


               },
               error: function(jqXHR, exception) {
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
       }

    };

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };
});

//pcmdeleteModalInstanceCtrl
angular.module('app').controller('pcmdeleteModalInstanceCtrl', function($scope, $uibModalInstance, items, $rootScope) {

    // $scope.items = items;
    // $scope.selected = {
    //     item: $scope.items[0]
    // };

    $scope.ok = function() {
        console.log(_row);
        //alert("asfsf" + $rootScope.id);
        //
        $.ajax({
            type: "post",
            async: false,
            url: "https://medicoaid.azurewebsites.net/maa/ei.aspx/Project_Component",
            contentType: "application/json;charset:utf-8",
            dataType: "json",
            data: "{a:" + _n + ",cid:" + _cid + ",c:'',cg:''}",
            success: function(response) {
                _components.splice(_row, 1);
                alert("Success");

            },
            error: function(jqXHR, exception) {
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

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };
});

//userController
var users = [];
angular.module("app.master", []).controller("userController", function($scope, $http, $filter, $uibModal, $rootScope) {
    //$scope.test = "sample";
    // alert($scope.currentPage)
    console.log("hello")

    init();

    function init() {
        alert(143)
        users = [];
        $scope.users = users;
        $scope._uname = '';
        $scope._upwd = '';
        $.ajax({
            type: "post",
            async: false,
            url: "https://medicoaid.azurewebsites.net/maa/ei.aspx/Get_Users",
            contentType: "application/json;charset:utf-8",
            dataType: "json",
            data: "",
            success: function(response) {
                alert(response.d)
                var s = ($.parseJSON(response.d)).Table;
                //alert(s.Table[0].User_Name)
                for (i in s) {
                    $scope.users.push({ uid: s[i].User_Id, uname: s[i].User_Name, upwd: s[i].User_Password });
                    console.log(i + ' ' + s[i].User_Id + ' ' + s[i].User_Name);
                }
            },
            error: function(jqXHR, exception) {
                if (jqXHR.status === 0) {
                    art('Not connect.\n Verify Network.');
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

        , $scope.searchKeywords = "", $scope.filteredStores = [], $scope.row = "", $scope.select = function(page) {
            var end, start;
            return start = (page - 1) * $scope.numPerPage, end = start + $scope.numPerPage, $scope.currentPageStores = $scope.filteredStores.slice(start, end)
        }, $scope.onFilterChange = function() {
            //alert("2");
            return $scope.select(1), $scope.currentPage = 1, $scope.row = ""
        }, $scope.onNumPerPageChange = function() {
            // alert("1");
            return $scope.select(1), $scope.currentPage = 1
        }, $scope.onOrderChange = function() {
            //alert("3");
            return $scope.select(1), $scope.currentPage = 1
        }, $scope.search = function() {
            //alert("4");
            return $scope.filteredStores = $filter("filter")($scope.stores, $scope.searchKeywords), $scope.onFilterChange()
        }, $scope.order = function(rowName) {
            // alert("5");
            return $scope.row !== rowName ? ($scope.row = rowName, $scope.filteredStores = $filter("orderBy")($scope.stores, rowName), $scope.onOrderChange()) : void 0
        }, $scope.numPerPageOpt = [3, 5, 10, 20, 50], $scope.numPerPage = $scope.numPerPageOpt[2], $scope.currentPage = 1, $scope.currentPageStores = [], (init = function() {
            // alert("6");
            return $scope.search(), $scope.select($scope.currentPage)
        });

    }

    $scope.items = ['item1', 'item2', 'item3'];

    $scope.animationsEnabled = true;
    //add update
    $scope.open = function(size) {
        // alert(size)
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'userModalContent.html',
            controller: 'userModalInstanceCtrl',
            size: size,
            resolve: {
                items: function() {
                    return $scope.items;
                }
            }
        });

        modalInstance.result.then(function(selectedItem) {
            $scope.selected = selectedItem;
        }, function() {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };
    //delete 
    $scope.deleteopen = function(size, item, id) {

        $rootScope.id = item.Status_Id;
        _id = id;
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'userModalContentdelete.html',
            controller: 'userdeleteModalInstanceCtrl',
            size: size,
            resolve: {
                items: function() {
                    return $scope.items;
                }
            }
        });

        modalInstance.result.then(function(selectedItem) {
            $scope.selected = selectedItem;
        }, function() {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };
    $scope.toggleAnimation = function() {
        $scope.animationsEnabled = !$scope.animationsEnabled;
    };

    $scope.userMasterEdit = function(id) {
        _n = 2;
        _row = id;
        _id = (users[_row].uid);
        //alert(_row + ' ' + _id);
        _uname = (users[_row].uname);
        _upwd = (users[_row].upwd);
        //alert(_id)
        console.log(users[_row].uname + ' ' + users[_row].upwd)

        //alert(item)
        //$("#xyz").text("checking")
        //$("#myModal").modal('show')
        //open('lg')
        $rootScope.tag = "Update Status";
        //$("#modaltitle").text("Update Status");
        //$rootScope.id = item.Status_Id;
        //alert(item.Status_Id)

    };
    $scope.ststusMasterSubmit = function() {

        //alert($rootScope.id)
        $("#lbl_e_Status_Name,#lbl_e_Status_Category_Name").text("");
        if ($.trim($("#txt_Status_Name").val()) == "") {
            $("#lbl_e_Status_Name").text("Please enter status");
        }
        if ($.trim($("#txt_Status_Category_Name").val()) == "") {
            $("#lbl_e_Status_Category_Name").text("Please enter category");
        }
        //success
    };
    $scope.ststusMasterAdd = function() {
        //$rootScope.tag = "Add Status";

        _n = 1;
        _id = 0;
    };
});

angular.module('app.master').controller('userModalInstanceCtrl', function($scope, $uibModalInstance, items) {

    $scope.items = items;
    if (_n == 2) {
        $scope._uname = _uname;
        $scope._upwd = _upwd;
    } else {
        $scope._uname = '';
        $scope._upwd = '';
    }
    $scope.selected = {
        item: $scope.items[0]
    };

    $scope.ok = function() {
        var x = 1;
        var uname = document.getElementById("txt_user_Name").value;
        var pwd = document.getElementById("txt_userpassword").value;

        $("#lbl_e_Status_Name,#lbl_e_Status_Pwd").text("");

        if ($.trim($("#txt_user_Name").val()) == "") {
            x = 0;
            $("#lbl_e_Status_Name").text("Please Enter User Name");
        } else if ($.trim($("#txt_user_Name").val().length) < 6) {
            x = 0;
            $("#lbl_e_Status_Name").text("User Name should be more than 6 Chars");
        } 
        /*else if ($.trim($("#txt_user_Name").val().length) > 50) {
            x = 0;
            $("#lbl_e_Status_Name").text("User Name should not exceed 50 Chars");
        }*/

        if ($.trim($("#txt_userpassword").val()) == "") {
            x = 0;
            $("#lbl_e_Status_Pwd").text("Please Enter Password");
        } else if ($.trim($("#txt_userpassword").val().length) < 6) {
            x = 0;
            $("#lbl_e_Status_Pwd").text("Password should be more than 6 Chars");
        } 
        /*else if ($.trim($("#txt_userpassword").val().length) > 20) {
            x = 0;
            $("#lbl_e_Status_Pwd").text("Password should should not exceed 20 Chars");
        }*/


        if (x == 1) {


            $.ajax({
                type: "post",
                async: false,
                url: "https://medicoaid.azurewebsites.net/maa/ei.aspx/Users",
                contentType: "application/json;charset:utf-8",
                dataType: "json",
                data: "{'a':" + _n + ",'uid':" + _id + ",'u':'" + uname + "',p:'" + pwd + "','t':'1_1','s':1}",
                success: function(response) {
                    //alert(response.d)

                    if (_n == 1) {
                        var _uid = (($.parseJSON(response.d)).Table)[0].User_Id;
                        //alert(_uid)
                        users.push({ uid: _uid, uname: uname, upwd: pwd });
                    } else {
                        users[_row].uname = uname;
                        users[_row].upwd = pwd;
                    }
                    alert("Success");

                },
                error: function(jqXHR, exception) {
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
        }
    };

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };
});



angular.module('app.master').controller('userdeleteModalInstanceCtrl', function($scope, $uibModalInstance, items, $rootScope) {

    $scope.items = items;
    $scope.selected = {
        item: $scope.items[0]
    };

    $scope.ok = function() {
        console.log(_id);
        //alert("asfsf" + $rootScope.id);
        //
        $.ajax({
            type: "post",
            async: false,
            url: "https://medicoaid.azurewebsites.net/maa/ei.aspx/Users",
            contentType: "application/json;charset:utf-8",
            dataType: "json",
            data: "{'a':3,'uid':" + users[_id].uid + ",'u':'" + users[_id].uname + "',p:'" + users[_id].upwd + "','t':'1_1','s':1}",
            success: function(response) {
                users.splice(_id, 1);
                alert("Success");

            },
            error: function(jqXHR, exception) {
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

        $uibModalInstance.close($scope.selected.item);
    };

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };
});

var _pcs = []; var _tasks = [];
angular.module("app.master").controller("taskController", function($scope, $http, $filter, $uibModal, $rootScope, DateService) {
    //$scope.test = "sample";
    // alert($scope.currentPage)
    console.log("hello")
    //alert(DateService.convertDate(new Date()))
    init();

    function init() {
        _pcs = [];
        _tasks = [];
        _projects = [];
        _components = [];
        
        $scope.pcs = _pcs;
        $scope.tasks = _tasks;
        $scope.User = $.cookie("un");
        $scope.projects = _projects;
        $scope.components = _components;

        $.ajax({
            type: "post",
            async: false,
            url: "https://medicoaid.azurewebsites.net/maa/ei.aspx/Get_User_Task_Details",
            contentType: "application/json;charset:utf-8",
            dataType: "json",
            data: "{uid:0,pid:0,cid:0,fd:'"+ DateService.convertDate(new Date()) +"',td:'"+ DateService.convertDate(new Date()) +"'}",
            //data: "",
            success: function(response) {
                alert(response.d)
                var s = ($.parseJSON(response.d)).Table;
                var p = ($.parseJSON(response.d)).Table1;
                var c = ($.parseJSON(response.d)).Table2;
                //alert(s.Table[0].User_Name)
                for (i in s) {
                    $scope.pcs.push({ pid: s[i].Project_Id, ptid: s[i].Project_Task_Id, pname: s[i].Project_Details, pcode: s[i].Project_Code, uname:s[i].User_Name,
                                      cname: s[i].Component_Name, tdetails: s[i].Task_Details, tm: s[i].Minutes_Spent, adate: s[i].Activity_Date });
                    //console.log(i + ' ' + p[i].Project_Id + ' ' + p[i].Project_Details);
                }
                for (i in p) {
                    $scope.projects.push({ pid: p[i].Project_Id, pname: p[i].Project_Details, pcode: p[i].Project_Code });
                    console.log(i + ' ' + p[i].Project_Id + ' ' + p[i].Project_Details);
                }

                for (i in c) {
                    $scope.components.push({ cid: c[i].Component_Id, cname: c[i].Component_Name, cgroup: c[i].Component_Group });
                    console.log(i + ' ' + c[i].Component_Id + ' ' + c[i].Component_Name);
                }
            },
            error: function(jqXHR, exception) {
                if (jqXHR.status === 0) {
                    art('Not connect.\n Verify Network.');
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

        , $scope.searchKeywords = "", $scope.filteredStores = [], $scope.row = "", $scope.select = function(page) {
            var end, start;
            return start = (page - 1) * $scope.numPerPage, end = start + $scope.numPerPage, $scope.currentPageStores = $scope.filteredStores.slice(start, end)
        }, $scope.onFilterChange = function() {
            //alert("2");
            return $scope.select(1), $scope.currentPage = 1, $scope.row = ""
        }, $scope.onNumPerPageChange = function() {
            // alert("1");
            return $scope.select(1), $scope.currentPage = 1
        }, $scope.onOrderChange = function() {
            //alert("3");
            return $scope.select(1), $scope.currentPage = 1
        }, $scope.search = function() {
            //alert("4");
            return $scope.filteredStores = $filter("filter")($scope.stores, $scope.searchKeywords), $scope.onFilterChange()
        }, $scope.order = function(rowName) {
            // alert("5");
            return $scope.row !== rowName ? ($scope.row = rowName, $scope.filteredStores = $filter("orderBy")($scope.stores, rowName), $scope.onOrderChange()) : void 0
        }, $scope.numPerPageOpt = [3, 5, 10, 20, 50], $scope.numPerPage = $scope.numPerPageOpt[2], $scope.currentPage = 1, $scope.currentPageStores = [], (init = function() {
            // alert("6");
            return $scope.search(), $scope.select($scope.currentPage)
        });

    }

    $scope.items = ['item1', 'item2', 'item3'];

    $scope.animationsEnabled = true;
    //add update
    $scope.open = function(size) {
        // alert(size)
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'taskModalContent.html',
            controller: 'taskModalInstanceCtrl',
            size: size,
            resolve: {
                items: function() {
                    return $scope.items;
                }
            }
        });

        modalInstance.result.then(function(selectedItem) {
            $scope.selected = selectedItem;
        }, function() {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };
    //delete 
    $scope.deleteopen = function(id) {
        _n = 3;
        $rootScope.tag = "Delete Task"
        _id = id;_row = id;
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'taskModalContentdelete.html',
            controller: 'taskdeleteModalInstanceCtrl',
            resolve: {
                items: function() {
                    return $scope.items;
                }
            }
        });

        modalInstance.result.then(function(selectedItem) {
            $scope.selected = selectedItem;
        }, function() {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };
    $scope.toggleAnimation = function() {
        $scope.animationsEnabled = !$scope.animationsEnabled;
    };

    $scope.statusMasterEdit = function(id) {
        alert(id)
        _n = 2;
        _row = id;
        _tdetails = _pcs[_row].tdetails;
        _pname = _pcs[_row].pname;
        _pid = _pcs[_row].pid;
        _pcode = _pcs[_row].pcode;
        _tmspent = _pcs[_row].tm;
        alert(_tmspent+' '+_pcs[_row].tm+' '+_row)
        $rootScope.tag = "Update Status";
        

    };
    $scope.ststusMasterSubmit = function() {

        //alert($rootScope.id)
        $("#lbl_e_Status_Name,#lbl_e_Status_Category_Name").text("");
        if ($.trim($("#txt_Status_Name").val()) == "") {
            $("#lbl_e_Status_Name").text("Please enter status");
        }
        if ($.trim($("#txt_Status_Category_Name").val()) == "") {
            $("#lbl_e_Status_Category_Name").text("Please enter category");
        }
        //success
    };
    $scope.ststusMasterAdd = function() {
        //$rootScope.tag = "Add Status";

        _n = 1;
        _id = 0;
    };
});

angular.module('app.master').controller('taskModalInstanceCtrl', function($scope, $uibModalInstance, items, DateService, $timeout) {
    alert(_n)
    
        $scope.projects = _projects;
        $scope.components = _components;
        $scope.items = items;

        if (_n == 2) {
            
            $scope.tdetails = _tdetails;
            $scope.adate = new Date(_pcs[_row].adate);
            $scope.tmspent = _tmspent;
            alert($scope.tmspent+' '+_tmspent)
        } else{
            $scope.adate = new Date();
            $scope.tmspent = '';
            $scope.tdetails = '';
            
        }

    
    

    $scope.ok = function() {
        //alert($.cookie("u"))
        var x = 1;
        var ptid = 0;
        var pid = document.getElementById("project_name").value;
        var cid = document.getElementById("component_name").value;
        var tsd = document.getElementById("task_detail").value;
        var ad = document.getElementById("activity_date").value;
        var tsp = document.getElementById("time_spent").value;

        if(_n==2)  ptid = _pcs[_row].ptid;

        var pr;var cr;
       // alert(pid)
   
        for(var i in _pcs){
            if(_pcs[i].pid==pid) {
                
                 pr = i; break;
            }
        }
        //alert("pd:"+_pcs[pr].Project_Details+' '+pr)
        for(var i in _components){
            if(_components[i].cid==cid) {
                cr = i ;break;
            }
        }

        

        alert("pr:"+pr+' '+"cr:"+cr)
        
        //var pname = document.getElementById("project_name").value;
        
        ad = DateService.convertDate(ad);
       // var tm = document.getElementById("time_spent").value;

        $("#lbl_e_Status_Name,#lbl_e_Status_Category_Name,#lbl_e_aDate").text("");

        if ($.trim($("#task_detail").val()) == "") {
            x = 0;
            $("#lbl_e_Status_Name").text("Please Enter Task Details");
        } else if ($.trim($("#task_detail").val().length) < 6) {
            x = 0;
            $("#lbl_e_Status_Name").text("Task Details should be >=6 Chars");
        } 
        /*else if ($.trim($("#txt_user_Name").val().length) > 50) {
            x = 0;
            $("#lbl_e_Status_Name").text("User Name should not exceed 50 Chars");
        }*/

        if ($.trim($("#time_spent").val()) == "") {
            x = 0;
            $("#lbl_e_Status_Category_Name").text("Please Enter Time Spent in Minutes");
        } 
        /*else if ($.trim($("#txt_userpassword").val().length) < 6) {
            x = 0;
            $("#lbl_e_Status_Category_Name").text("Password should be more than 6 Chars");
        } 
        else if ($.trim($("#txt_userpassword").val().length) > 20) {
            x = 0;
            $("#lbl_e_Status_Pwd").text("Password should should not exceed 20 Chars");
        }*/
        if($("#activity_date").val() == "" || $("#activity_date").val() == null)
        {  x = 0; $("#lbl_e_aDate").text("Please Enter a Valid Date");
        }
        
        if (x == 1) {

            alert("{'a':" + _n + ",'ptid':0" + ",'pid':"+ pid +",'cid':"+ cid +",'td':"+ tsd +",'uid':"+ $.cookie("u") +",'ad':"+ ad +",'ms':"+ tsp +"}")

            $.ajax({
                type: "post",
                async: false,
                url: "https://medicoaid.azurewebsites.net/maa/ei.aspx/Project_Task_Details",
                contentType: "application/json;charset:utf-8",
                dataType: "json", //(int a, int ptid, int pid, int cid, string td, int uid, string ad, int ms)
                data: "{'a':" + _n + ",'ptid':" + ptid + ",'pid':"+ pid +",'cid':"+ cid +",'td':'"+ tsd +"','uid':"+ $.cookie("u") +",'ad':'"+ ad +"','ms':"+ tsp +"}",
                success: function(response) {
                    alert(response.d)

                    if (_n == 1) {
                         _pcs.push({ pid: pid, ptid:ptid, pname: _pcs[pr].pname, pcode: _pcs[pr].pcode, uname:_pcs[pr].uname,
                                      cname: _components[cr].cname, tdetails: tsd, tm: tsp, adate: ad });
                        
                    } else {
                        
                        _pcs[_row].pid = pid;
                        _pcs[_row].pname = _pcs[pr].pname;
                        _pcs[_row].pcode = _pcs[pr].pcode;
                        _pcs[_row].cname = _components[cr].cname;
                        _pcs[_row].tdetails = tsd;
                        _pcs[_row].tm = tsp;
                        _pcs[_row].adate = ad;

                        _components[_row].cid = cid;
                        _components[_row].cname = _components[cr].cname;


                    }
                    alert("Success");

                },
                error: function(jqXHR, exception) {
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
        }
    };

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };
});


angular.module('app.master').controller('taskdeleteModalInstanceCtrl', function($scope, $uibModalInstance, items, DateService, $timeout) {

    

    $scope.ok = function(){
        alert("{'a':" + _n + ",'ptid':" + _pcs[_row].ptid + ",'pid':"+ 0 +",'cid':"+ 0 +",'td':'"+ '' +"','uid':"+ $.cookie("u") +",'ad':'"+ '' +"','ms':"+ '' +"}")
        $.ajax({
                type: "post",
                async: false,
                url: "https://medicoaid.azurewebsites.net/maa/ei.aspx/Project_Task_Details",
                contentType: "application/json;charset:utf-8",
                dataType: "json", //(int a, int ptid, int pid, int cid, string td, int uid, string ad, int ms)
                data: "{'a':" + _n + ",'ptid':" + _pcs[_row].ptid + ",'pid':0,'cid':0,'td':'','uid':"+ $.cookie("u") +",'ad':'1-1-2016','ms':0}",
                success: function(response) {
                    alert(response.d)

                    _pcs.splice(_row,1);
                    alert("Success");

                },
                error: function(jqXHR, exception) {
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
    }
    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };
});

angular.module("app.master").service("DateService", function(){

    this.convertDate = function(dt){
        //if(dt=="" || dt==null) alert("invalid")
        var fdt = '';
        dt = new Date(dt);
        fdt += (dt.getMonth(dt)+1)+"-";
        fdt += dt.getDate(dt)+"-";
        fdt += dt.getFullYear(dt);
        //alert(fdt)
        return fdt;
    }
})