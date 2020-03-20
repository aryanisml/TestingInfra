(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["data-management-details-data-management-details-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/sites/data-management-details/data-management-details.component.html":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** D:/DecisionView/6.1Country/studyoptimizer/client/nworkspace/client-studyOptimizer-app/node_modules/raw-loader/dist/cjs.js!./src/app/sites/data-management-details/data-management-details.component.html ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ctos-data-management-grid></ctos-data-management-grid>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/sites/data-management-details/data-management-grid/data-management-grid.component.html":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** D:/DecisionView/6.1Country/studyoptimizer/client/nworkspace/client-studyOptimizer-app/node_modules/raw-loader/dist/cjs.js!./src/app/sites/data-management-details/data-management-grid/data-management-grid.component.html ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ag_container\">\r\n    <ag-grid-angular #agGrid \r\n        id=\"DMGrid\"\r\n        class=\"ag-theme-material\"\r\n        style=\"width: 100%; height: 490px;\"   \r\n        [autoGroupColumnDef]=\"autoGroupColumnDef\"\r\n        [getDataPath]=\"getDataPath\"\r\n        [treeData]=\"true\"       \r\n        [columnDefs]=\"columnDefs\" \r\n        [context]=\"getContext()\"\r\n        [defaultColDef]=\"defaultColDef\" \r\n        [frameworkComponents]=\"frameworkComponents\"\r\n        [gridOptions]=\"gridOptions\"\r\n        [groupDefaultExpanded]=\"groupDefaultExpanded\"\r\n        [rowClassRules]=\"rowClassRules\" \r\n        [rowData]=\"rowData\"\r\n        (gridReady)=\"gridReady($event)\"      \r\n        [isExternalFilterPresent]=\"isExternalFilterPresent\"\r\n        [doesExternalFilterPass]=\"doesExternalFilterPass\"\r\n        [groupRowAggNodes]=\"groupRowAggNodes\"\r\n        (columnVisible)=\"columnVisible($event)\"\r\n         (dragStopped)=\"dragStopped($event)\"\r\n         [enableColResize]=\"true\"\r\n         (rowDataChanged)=\"rowDataChanged($event)\"\r\n        >\r\n    </ag-grid-angular>\r\n    <!-- <ag-grid-angular #agGrid \r\n    id=\"DMGrid\"\r\n    class=\"ag-theme-material\"\r\n    style=\"width: 100%; height: 490px;\"   \r\n    [autoGroupColumnDef]=\"autoGroupColumnDef\"\r\n    [getDataPath]=\"getDataPath\"\r\n    [treeData]=\"true\"       \r\n    [columnDefs]=\"columnDefs\" \r\n    [context]=\"getContext()\"\r\n    [defaultColDef]=\"defaultColDef\" \r\n    [frameworkComponents]=\"frameworkComponents\"\r\n    [gridOptions]=\"gridOptions\"\r\n    [groupDefaultExpanded]=\"groupDefaultExpanded\"\r\n    [rowClassRules]=\"rowClassRules\" \r\n    [rowData]=\"rowData\"\r\n    (gridReady)=\"gridReady($event)\"\r\n    (dragStopped)=\"dragStopped($event)\"\r\n    (columnVisible)=\"columnVisible($event)\"\r\n    [isExternalFilterPresent]=\"isExternalFilterPresent\"\r\n    [doesExternalFilterPass]=\"doesExternalFilterPass\"\r\n    > -->\r\n");

/***/ }),

/***/ "./src/app/sites/data-management-details/data-management-center-list/data-management-center-list.service.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/sites/data-management-details/data-management-center-list/data-management-center-list.service.ts ***!
  \******************************************************************************************************************/
/*! exports provided: DataManagementCenterListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataManagementCenterListService", function() { return DataManagementCenterListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var so_common_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! so-common-library */ "../../dist/so-common-library/fesm5/so-common-library.js");
/* harmony import */ var common_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common-library */ "../../dist/common-library/fesm5/common-library.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../app.constant */ "./src/app/app.constant.ts");







var DataManagementCenterListService = /** @class */ (function () {
    function DataManagementCenterListService(userDataService, payloadCommandService, baseConnectionService) {
        this.userDataService = userDataService;
        this.payloadCommandService = payloadCommandService;
        this.baseConnectionService = baseConnectionService;
        this.dmSummarySubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
    }
    DataManagementCenterListService.prototype.getDataObservable = function () {
        return this.dmSummarySubject.asObservable();
    };
    DataManagementCenterListService.prototype.getDataManagementCenterList = function (studyKey, baseParam) {
        var _this = this;
        if (!common_library__WEBPACK_IMPORTED_MODULE_3__["AppUtil"].isDefined(studyKey, true)) {
            return;
        }
        studyKey = studyKey;
        if (studyKey) {
            var params = {
                studyKey: studyKey
            };
            var moduleInfo = so_common_library__WEBPACK_IMPORTED_MODULE_2__["CTOSUtil"].getModuleInfo(_app_constant__WEBPACK_IMPORTED_MODULE_6__["PAGES"].DATA_MANAGEMENT_DETAILS, studyKey, _app_constant__WEBPACK_IMPORTED_MODULE_6__["SITE_MODULE"]);
            var payload = this.payloadCommandService.getApiRequest(_app_constant__WEBPACK_IMPORTED_MODULE_6__["COMMAND"].DM_CENTER_LIST, params, null, moduleInfo);
            var actionParam = {};
            if (!baseParam) {
                baseParam = actionParam;
            }
            baseParam.url = _app_constant__WEBPACK_IMPORTED_MODULE_6__["API_ENDPOINT"].DM_CENTER_LIST;
            // const actionParam: Action = {};
            // return this.baseConnectionService.sendRequest(payload, actionParam).pipe(
            //   map((response: any) => {
            //     console.log('GET Get Center Summary : ', response);
            //     this.setDatamanagementCenterList(response);
            //     return response;
            //   }));
            return this.baseConnectionService
                .send(payload, baseParam)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
                _this.setDatamanagementCenterList(response);
                return response;
            }));
        }
    };
    DataManagementCenterListService.prototype.setDatamanagementCenterList = function (data) {
        this.data = data;
        this.dmSummarySubject.next(data);
    };
    DataManagementCenterListService.ctorParameters = function () { return [
        { type: so_common_library__WEBPACK_IMPORTED_MODULE_2__["UserDataService"] },
        { type: common_library__WEBPACK_IMPORTED_MODULE_3__["PayloadCommandService"] },
        { type: common_library__WEBPACK_IMPORTED_MODULE_3__["BaseConnectionService"] }
    ]; };
    DataManagementCenterListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [so_common_library__WEBPACK_IMPORTED_MODULE_2__["UserDataService"],
            common_library__WEBPACK_IMPORTED_MODULE_3__["PayloadCommandService"],
            common_library__WEBPACK_IMPORTED_MODULE_3__["BaseConnectionService"]])
    ], DataManagementCenterListService);
    return DataManagementCenterListService;
}());



/***/ }),

/***/ "./src/app/sites/data-management-details/data-management-details-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/sites/data-management-details/data-management-details-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: DataManagementDetailsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataManagementDetailsRoutingModule", function() { return DataManagementDetailsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_management_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-management-details.component */ "./src/app/sites/data-management-details/data-management-details.component.ts");




var routes = [{ path: '', component: _data_management_details_component__WEBPACK_IMPORTED_MODULE_3__["DataManagementDetailsComponent"] }];
var DataManagementDetailsRoutingModule = /** @class */ (function () {
    function DataManagementDetailsRoutingModule() {
    }
    DataManagementDetailsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DataManagementDetailsRoutingModule);
    return DataManagementDetailsRoutingModule;
}());



/***/ }),

/***/ "./src/app/sites/data-management-details/data-management-details.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/sites/data-management-details/data-management-details.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hcHA0L3NyYy9hcHAvc2l0ZXMvZGF0YS1tYW5hZ2VtZW50LWRldGFpbHMvZGF0YS1tYW5hZ2VtZW50LWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/sites/data-management-details/data-management-details.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/sites/data-management-details/data-management-details.component.ts ***!
  \************************************************************************************/
/*! exports provided: DataManagementDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataManagementDetailsComponent", function() { return DataManagementDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var DataManagementDetailsComponent = /** @class */ (function () {
    function DataManagementDetailsComponent() {
    }
    DataManagementDetailsComponent.prototype.ngOnInit = function () {
    };
    DataManagementDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ctos-data-management-details',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./data-management-details.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/sites/data-management-details/data-management-details.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./data-management-details.component.scss */ "./src/app/sites/data-management-details/data-management-details.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataManagementDetailsComponent);
    return DataManagementDetailsComponent;
}());



/***/ }),

/***/ "./src/app/sites/data-management-details/data-management-details.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/sites/data-management-details/data-management-details.module.ts ***!
  \*********************************************************************************/
/*! exports provided: DataManagementDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataManagementDetailsModule", function() { return DataManagementDetailsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ag-grid-angular */ "../../node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_management_details_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data-management-details-routing.module */ "./src/app/sites/data-management-details/data-management-details-routing.module.ts");
/* harmony import */ var _data_management_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data-management-details.component */ "./src/app/sites/data-management-details/data-management-details.component.ts");
/* harmony import */ var _data_management_grid_data_management_grid_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data-management-grid/data-management-grid.component */ "./src/app/sites/data-management-details/data-management-grid/data-management-grid.component.ts");







var DataManagementDetailsModule = /** @class */ (function () {
    function DataManagementDetailsModule() {
    }
    DataManagementDetailsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_data_management_details_component__WEBPACK_IMPORTED_MODULE_5__["DataManagementDetailsComponent"], _data_management_grid_data_management_grid_component__WEBPACK_IMPORTED_MODULE_6__["DataManagementGridComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _data_management_details_routing_module__WEBPACK_IMPORTED_MODULE_4__["DataManagementDetailsRoutingModule"],
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__["AgGridModule"].withComponents([])
            ]
        })
    ], DataManagementDetailsModule);
    return DataManagementDetailsModule;
}());



/***/ }),

/***/ "./src/app/sites/data-management-details/data-management-grid/data-management-grid-column.service.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/sites/data-management-details/data-management-grid/data-management-grid-column.service.ts ***!
  \***********************************************************************************************************/
/*! exports provided: DataManagementGridColumnService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataManagementGridColumnService", function() { return DataManagementGridColumnService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var common_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common-library */ "../../dist/common-library/fesm5/common-library.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../app.constant */ "./src/app/app.constant.ts");





var DataManagementGridColumnService = /** @class */ (function () {
    function DataManagementGridColumnService(appResource) {
        this.appResource = appResource;
        this.oneDecimalFormatter = function (params) {
            var numberPipe = new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"]('en_US');
            if (isNaN(params.value)) {
                return '';
            }
            return numberPipe.transform(params.value, '1.0-1');
        };
        this.oneDecimalPercFormatter = function (params) {
            var numberPipe = new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"]('en_US');
            if (isNaN(params.value)) {
                return '0.0%';
            }
            return numberPipe.transform(params.value, '1.0-1') + '%';
        };
        this.dateFormatter = function (params) {
            var datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]('en_US');
            var date = null;
            if (params.value instanceof Date) {
                date = params.value;
            }
            else {
                date = new Date((params.value || '').replace(/-/g, '/'));
            }
            if (!params.value || isNaN(date.getTime())) {
                return '';
            }
            return datePipe.transform(date, 'dd-MMM-yyyy');
        };
    }
    Object.defineProperty(DataManagementGridColumnService.prototype, "columnResource", {
        get: function () {
            return {
                SITE_ID: this.appResource.getResource('DMTColSiteID'),
                COHORT: this.appResource.getResource('DMCOHORT'),
                REGION: this.appResource.getResource('DMREGION'),
                SITE_NAME: this.appResource.getResource('DMTColSiteName'),
                COUNTRY: this.appResource.getResource('DMCOUNTRY'),
                INVESTIGATOR_NAME: this.appResource.getResource('DMTColInvestigator'),
                MONITOR: this.appResource.getResource('DMTColMonitors'),
                SOURCE_FSI: this.appResource.getResource('DMTColSiteInitDt'),
                DATA_ENTRY_PERFORMANCE: this.appResource.getResource('DMTColGroupDEP'),
                DATA_QUERY_PERFORMANCE: this.appResource.getResource('DMTColGroupDQP'),
                DATA_CLOSURE_PERFORMANCE: this.appResource.getResource('DMTColGroupDCP'),
                INITIATION_DATE: this.appResource.getResource('DMTColSiteInitDt'),
                CASEBOOKS: this.appResource.getResource('DMTColTotCaseBook'),
                VISITS: this.appResource.getResource('DMTColTotVisitsEntered'),
                VISITS_LESS_7: this.appResource.getResource('DMTColPercentVisitsEntered'),
                ENTEREDVSEXPECTED: this.appResource.getResource('DMTColVisitsEnteredVsExpected'),
                MEAN_LAG: this.appResource.getResource('DMTColMeanDataEntryLag'),
                OPEN: this.appResource.getResource('DMTColTotOpenQueries'),
                OPEN_GREATER_21: this.appResource.getResource('DMTColPercentQueriesOpen'),
                MEAN_QUERIES: this.appResource.getResource('DMTColMeanQueriesPerSub'),
                RESOLUTION_TIME: this.appResource.getResource('DMTColMeanTimeQueryResolution'),
                COMPLETE: this.appResource.getResource('DMTColTotCaseBookComplete'),
                FROZENVSEXPECTED: this.appResource.getResource('DMTColCaseBookFrozenVsExpected'),
                FROZENVSSTARTED: this.appResource.getResource('DMTColCaseBookFrozenVsStarted'),
                SITE_ID_SHORT: this.appResource.getResource('DMTColShortSiteID'),
                SITE_NAME_SHORT: this.appResource.getResource('DMTColShortSiteName'),
                MONITOR_SHORT: this.appResource.getResource('DMTColShortMonitors'),
                INITIATION_DATE_SHORT: this.appResource.getResource('DMTColShortSiteInitDt'),
                INVESTIGATOR_NAME_SHORT: this.appResource.getResource('DMTColShortInvestigator'),
                CASEBOOKS_SHORT: this.appResource.getResource('DMTColShortTotCaseBook'),
                VISITS_SHORT: this.appResource.getResource('DMTColShortTotVisitsEntered'),
                VISITS_LESS_7_SHORT: this.appResource.getResource('DMTColShortPercentVisitsEntered'),
                ENTEREDVSEXPECTED_SHORT: this.appResource.getResource('DMTColShortVisitsEnteredVsExpected'),
                MEAN_LAG_SHORT: this.appResource.getResource('DMTColShortMeanDataEntryLag'),
                OPEN_SHORT: this.appResource.getResource('DMTColShortTotOpenQueries'),
                OPEN_GREATER_21_SHORT: this.appResource.getResource('DMTColShortPercentQueriesOpen'),
                MEAN_QUERIES_SHORT: this.appResource.getResource('DMTColShortMeanQueriesPerSub'),
                RESOLUTION_TIME_SHORT: this.appResource.getResource('DMTColShortMeanTimeQueryResolution'),
                COMPLETE_SHORT: this.appResource.getResource('DMTColShortTotCaseBookComplete'),
                FROZENVSEXPECTED_SHORT: this.appResource.getResource('DMTColShortCaseBookFrozenVsExpected'),
                FROZENVSSTARTED_SHORT: this.appResource.getResource('DMTColShortCaseBookFrozenVsStarted')
            };
        },
        enumerable: true,
        configurable: true
    });
    DataManagementGridColumnService.prototype.getColumnDef = function () {
        var columnResources = this.columnResource;
        var colDefs = [];
        // #siteName
        colDefs.push(this.getColDefWithResourceData({
            field: 'name',
        }, columnResources.SITE_NAME_SHORT, columnResources.SITE_NAME));
        // #regionName
        // colDefs.push(this.getColDefWithResourceData({
        //   field: 'regionName',
        // }, columnResources.REGION));
        // #countryName
        // colDefs.push(this.getColDefWithResourceData({
        //   field: 'countryName',
        // }, columnResources.COUNTRY));
        // #investigatorName
        colDefs.push(this.getColDefWithResourceData({
            field: 'investigatorName',
        }, columnResources.INVESTIGATOR_NAME_SHORT, columnResources.INVESTIGATOR_NAME));
        // #monitor
        colDefs.push(this.getColDefWithResourceData({
            field: 'monitors',
        }, columnResources.MONITOR_SHORT, columnResources.MONITOR));
        // #initiationDate
        colDefs.push(this.getColDefWithResourceData({
            field: 'siteInitiatedDt',
            valueFormatter: this.dateFormatter
        }, columnResources.INITIATION_DATE_SHORT, columnResources.INITIATION_DATE));
        // #Data Entry Performance
        var dataEntryPerformance = [
            this.getColDefWithResourceData({
                field: 'totalCBStarted',
            }, columnResources.CASEBOOKS_SHORT, columnResources.CASEBOOKS),
            this.getColDefWithResourceData({
                field: 'totalVisitsEntered',
            }, columnResources.VISITS_SHORT, columnResources.VISITS),
            this.getColDefWithResourceData({
                field: 'percentVisitsValue',
                cellClass: function (params) {
                    if (params.data.geographyLevel === _app_constant__WEBPACK_IMPORTED_MODULE_4__["GEOGRAPHY_LEVEL"].SITE) {
                        if (params.value >= 80) {
                            return 'null';
                        }
                        else if (params.value > 50 && params.value < 80) {
                            return 'red_medium-text';
                        }
                        else {
                            return 'red-text';
                        }
                    }
                    else {
                        return 'null';
                    }
                },
                valueFormatter: this.oneDecimalPercFormatter,
            }, columnResources.VISITS_LESS_7_SHORT, columnResources.VISITS_LESS_7),
            this.getColDefWithResourceData({
                field: 'percentVisitsEnteredVsExpected',
                valueFormatter: this.oneDecimalPercFormatter,
            }, columnResources.ENTEREDVSEXPECTED_SHORT, columnResources.ENTEREDVSEXPECTED),
            this.getColDefWithResourceData({
                field: 'meanDataEntryLag',
                valueFormatter: this.oneDecimalFormatter,
            }, columnResources.MEAN_LAG_SHORT, columnResources.MEAN_LAG)
        ];
        colDefs.push(this.getColDefWithResourceData({
            field: '',
            children: dataEntryPerformance
        }, columnResources.DATA_ENTRY_PERFORMANCE, columnResources.DATA_ENTRY_PERFORMANCE));
        // #Data Query Performance
        var dataQueryPerformance = [
            this.getColDefWithResourceData({
                field: 'totalOpenQueries',
            }, columnResources.OPEN_SHORT, columnResources.OPEN),
            this.getColDefWithResourceData({
                field: 'percentOpenQueriesValue',
                cellClass: function (params) {
                    if (params.data.geographyLevel === _app_constant__WEBPACK_IMPORTED_MODULE_4__["GEOGRAPHY_LEVEL"].SITE) {
                        if (params.value < 6) {
                            return 'null';
                        }
                        else if (params.value > 6 && params.value < 15) {
                            return 'red_medium-text';
                        }
                        else {
                            return 'red-text';
                        }
                    }
                    else {
                        return 'null';
                    }
                },
                valueFormatter: this.oneDecimalPercFormatter,
            }, columnResources.OPEN_GREATER_21_SHORT, columnResources.OPEN_GREATER_21),
            this.getColDefWithResourceData({
                field: 'meanQueriesPerSubject',
            }, columnResources.MEAN_QUERIES_SHORT, columnResources.MEAN_QUERIES),
            this.getColDefWithResourceData({
                field: 'meanQueryResolutionLag',
                valueFormatter: this.oneDecimalFormatter,
            }, columnResources.RESOLUTION_TIME_SHORT, columnResources.RESOLUTION_TIME)
        ];
        colDefs.push(this.getColDefWithResourceData({
            field: '',
            children: dataQueryPerformance
        }, columnResources.DATA_QUERY_PERFORMANCE, columnResources.DATA_QUERY_PERFORMANCE));
        // #Data Closure Performance
        var dataClosurePerformance = [
            this.getColDefWithResourceData({
                field: 'totalCBComplete',
            }, columnResources.COMPLETE_SHORT, columnResources.COMPLETE),
            this.getColDefWithResourceData({
                field: 'percentCBFrozenVsExpectedValue',
                cellClass: function (params) {
                    if (params.data.geographyLevel === _app_constant__WEBPACK_IMPORTED_MODULE_4__["GEOGRAPHY_LEVEL"].SITE) {
                        if (params.value >= 80) {
                            return 'null';
                        }
                        else if (params.value > 60 && params.value < 80) {
                            return 'red_medium-text';
                        }
                        else {
                            return 'red-text';
                        }
                    }
                    else {
                        return 'null';
                    }
                },
                valueFormatter: this.oneDecimalPercFormatter,
            }, columnResources.FROZENVSEXPECTED_SHORT, columnResources.FROZENVSEXPECTED),
            this.getColDefWithResourceData({
                field: 'percentCBFrozenVsStarted',
                valueFormatter: this.oneDecimalPercFormatter,
            }, columnResources.FROZENVSSTARTED_SHORT, columnResources.FROZENVSSTARTED)
        ];
        colDefs.push({
            field: '',
            headerName: columnResources.DATA_CLOSURE_PERFORMANCE,
            children: dataClosurePerformance
        });
        return colDefs;
    };
    DataManagementGridColumnService.prototype.getColDefWithResourceData = function (colDef, shortName, resourceValue) {
        return Object.assign(colDef, {
            headerName: shortName,
            headerTooltip: resourceValue,
            colName: resourceValue,
            colValueToMap: resourceValue,
            width: 60,
            marryChildren: true,
            tooltip: function (params) {
                return (params.valueFormatted ? params.valueFormatted : params.value);
            }
        });
    };
    DataManagementGridColumnService.prototype.getDefaultColumnDef = function () {
        return {
            width: 60,
            editable: false,
            menuTabs: ['columnsMenuTab'],
            filterParams: { suppressMiniFilter: true },
            cellStyle: { 'text-align': 'center' },
            lockPinned: true
        };
    };
    DataManagementGridColumnService.ctorParameters = function () { return [
        { type: common_library__WEBPACK_IMPORTED_MODULE_2__["LocaleAppResourcesService"] }
    ]; };
    DataManagementGridColumnService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [common_library__WEBPACK_IMPORTED_MODULE_2__["LocaleAppResourcesService"]])
    ], DataManagementGridColumnService);
    return DataManagementGridColumnService;
}());



/***/ }),

/***/ "./src/app/sites/data-management-details/data-management-grid/data-management-grid.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/sites/data-management-details/data-management-grid/data-management-grid.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: DataManagementGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataManagementGridComponent", function() { return DataManagementGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var so_common_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! so-common-library */ "../../dist/so-common-library/fesm5/so-common-library.js");
/* harmony import */ var _data_management_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../data-management.service */ "./src/app/sites/data-management-details/data-management.service.ts");
/* harmony import */ var _data_management_grid_column_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data-management-grid-column.service */ "./src/app/sites/data-management-details/data-management-grid/data-management-grid-column.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _grid_filter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../grid-filter.service */ "./src/app/sites/grid-filter.service.ts");
/* harmony import */ var _app4_app_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app4/app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var _sites_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../sites.service */ "./src/app/sites/sites.service.ts");
/* harmony import */ var _enrollment_details_grid_ed_grid_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../enrollment-details/grid/ed-grid.service */ "./src/app/sites/enrollment-details/grid/ed-grid.service.ts");











var DataManagementGridComponent = /** @class */ (function () {
    function DataManagementGridComponent(userDataService, dataManagementService, columnPreferencesService, dataManagementGridColumnService, gridFilterService, gridService, renderer, siteService) {
        var _this = this;
        this.userDataService = userDataService;
        this.dataManagementService = dataManagementService;
        this.columnPreferencesService = columnPreferencesService;
        this.dataManagementGridColumnService = dataManagementGridColumnService;
        this.gridFilterService = gridFilterService;
        this.gridService = gridService;
        this.renderer = renderer;
        this.siteService = siteService;
        this.rowData = [];
        this.groupDefaultExpanded = -1;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.rowClassRules = {
            'ag-row-focus': function (params) {
                return params.data.rowSelected;
            }
        };
        this.doesExternalFilterPass = function (node) {
            return _this.gridFilterService.filterDataManagmenttDetailGrid(node);
        };
    }
    DataManagementGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.autoGroupColumnDef = {
            headerName: 'Site Id',
            cellRendererParams: {
                suppressCount: true
            },
            // cellStyle: function (params) {
            //   return { 'text-align': 'left' };
            // },
            cellStyle: function (params) {
                if (params.data.isLeafNode) {
                    return { 'padding-left': '30px', 'text-align': 'left' };
                }
                else {
                    return null;
                }
            },
            pinned: true,
            width: 25
        };
        this.getDataPath = function (data) {
            return data.geoHierarchy;
        };
        this.setGridOptions();
        this.setDefaultColumnDef();
        this.setColumnDef();
        this.externalFilterChanged();
        this.siteService.getStudyChangeObservable().subscribe(function (studyKey) {
            _this.getDatamanagementData(studyKey);
            // this.rowData = this.getDatamanagementData(studyKey);
        });
    };
    DataManagementGridComponent.prototype.getStudyKey = function () {
        return this.userDataService.getLastVisitedStudyKey();
    };
    DataManagementGridComponent.prototype.getContext = function () {
        return {
            componentParent: this
        };
    };
    DataManagementGridComponent.prototype.setDefaultColumnDef = function () {
        this.defaultColDef = this.dataManagementGridColumnService.getDefaultColumnDef();
    };
    DataManagementGridComponent.prototype.setColumnDef = function () {
        this.columnDefs = this.dataManagementGridColumnService.getColumnDef();
    };
    DataManagementGridComponent.prototype.setGridPrefences = function () {
        var self = this;
        if (self.
            columnPreferencesService.getPrefForGridColumns().
            PreferenceGridColumns[so_common_library__WEBPACK_IMPORTED_MODULE_2__["PrefGridColumnsKeys"].SITE_DATA_MANAGEMENT_GRID] !== '' &&
            self.
                columnPreferencesService.getPrefForGridColumns().
                PreferenceGridColumns[so_common_library__WEBPACK_IMPORTED_MODULE_2__["PrefGridColumnsKeys"].SITE_DATA_MANAGEMENT_GRID] !== undefined) {
            self.columnApi.setColumnState(self.
                columnPreferencesService.getPrefForGridColumns().PreferenceGridColumns[so_common_library__WEBPACK_IMPORTED_MODULE_2__["PrefGridColumnsKeys"].SITE_DATA_MANAGEMENT_GRID]);
        }
        self.columnPreferencesService.getGridPreference().subscribe(function (data) {
            if (data) {
                if (self.
                    columnPreferencesService.getPrefForGridColumns().
                    PreferenceGridColumns[so_common_library__WEBPACK_IMPORTED_MODULE_2__["PrefGridColumnsKeys"].SITE_DATA_MANAGEMENT_GRID] !== '' &&
                    self.
                        columnPreferencesService.getPrefForGridColumns().
                        PreferenceGridColumns[so_common_library__WEBPACK_IMPORTED_MODULE_2__["PrefGridColumnsKeys"].SITE_DATA_MANAGEMENT_GRID] !== undefined) {
                    self.columnApi.setColumnState(self.
                        columnPreferencesService.getPrefForGridColumns().PreferenceGridColumns[so_common_library__WEBPACK_IMPORTED_MODULE_2__["PrefGridColumnsKeys"].SITE_DATA_MANAGEMENT_GRID]);
                }
            }
        });
    };
    DataManagementGridComponent.prototype.columnVisible = function (event) {
        if (!event.column) {
            return;
        }
        this.columnPreferencesService.sendUpdateColumnPrefRequest(this.gridColumnApi.getColumnState(), so_common_library__WEBPACK_IMPORTED_MODULE_2__["PrefGridColumnsKeys"].SITE_DATA_MANAGEMENT_GRID);
        sessionStorage.setItem(so_common_library__WEBPACK_IMPORTED_MODULE_2__["PrefGridColumnsKeys"].SITE_DATA_MANAGEMENT_GRID, this.gridColumnApi.getColumnState());
    };
    DataManagementGridComponent.prototype.dragStopped = function (event) {
        this.columnPreferencesService.sendUpdateColumnPrefRequest(this.gridColumnApi.getColumnState(), so_common_library__WEBPACK_IMPORTED_MODULE_2__["PrefGridColumnsKeys"].SITE_DATA_MANAGEMENT_GRID);
    };
    DataManagementGridComponent.prototype.disableArrowKeys = function (params) {
        var KEY_LEFT = 37;
        var KEY_UP = 38;
        var KEY_RIGHT = 39;
        var KEY_DOWN = 40;
        // return true (to suppress) if editing and user hit up/down keys
        var keyCode = params.event.keyCode;
        var gridShouldDoNothing = params.editing &&
            (keyCode === KEY_UP ||
                keyCode === KEY_DOWN ||
                keyCode === KEY_LEFT ||
                keyCode === KEY_RIGHT);
        return gridShouldDoNothing;
    };
    DataManagementGridComponent.prototype.setGridOptions = function () {
        this.gridOptions = {
            domLayout: so_common_library__WEBPACK_IMPORTED_MODULE_2__["DOMLAYOUT"].normal,
            suppressMovableColumns: false,
            suppressNoRowsOverlay: true,
            enableFilter: true,
            enableSorting: true,
            rowSelection: 'single',
            rowMultiSelectWithClick: false,
            singleClickEdit: true,
            suppressContextMenu: true,
            suppressDragLeaveHidesColumns: true,
            suppressRowClickSelection: false,
            excludeChildrenWhenTreeDataFiltering: true,
            getRowClass: function (params) {
                return '';
            },
        };
    };
    DataManagementGridComponent.prototype.gridReady = function (params) {
        this.gridApi = params.api;
        this.columnApi = params.columnApi;
        this.gridColumnApi = params.columnApi;
        // this.dataManagementService.getDataManagementData(this.getStudyKey()).pipe(takeUntil(this.subscriptions)).subscribe( data => {
        //   console.log('Data Management Details Data : ', data);
        //   this.rowData = data;
        //   this.gridApi.onFilterChanged();
        // });
        this.getDatamanagementData(this.getStudyKey());
        // this.rowData = this.getDatamanagementData(this.getStudyKey());
        this.gridApi.onFilterChanged();
        this.setGridPrefences();
    };
    DataManagementGridComponent.prototype.getDatamanagementData = function (studyKey) {
        var _this = this;
        // let gridData: any;
        this.dataManagementService.getDataManagementData(this.getStudyKey()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.subscriptions)).subscribe(function (data) {
            console.log('Data Management Details Data : ', data);
            _this.rowData = data;
            // return data;
        });
    };
    DataManagementGridComponent.prototype.groupRowAggNodes = function (nodes) {
        var result = {
            totalCBStarted: 0,
            totalVisitsEntered: 0,
            percentVisitsValue: 0,
            percentVisitsEnteredVsExpected: 0,
            meanDataEntryLag: 0,
            totalOpenQueries: 0,
            percentOpenQueriesValue: 0,
            meanQueriesPerSubject: 0,
            meanQueryResolutionLag: 0,
            totalCBComplete: 0,
            percentCBFrozenVsExpectedValue: 0,
            percentCBFrozenVsStarted: 0,
            actualFSSVCountForRegionForRR: 0,
            actualFSSVCountForWWForRR: 0,
            totalRRForRegion: 0,
            totalRRForWW: 0,
            totalVisitsEnteredLes7Day: 0,
            totalVisitsEntExclUnex: 0,
            totalOpenQueriesMor21Day: 0,
            totalLagDay: 0,
            totalNumPages: 0,
            totalQueries: 0,
            totalSubjQuerying: 0,
            totalDaysToResolve: 0,
            totalRslvdQueries: 0,
            totalCBEntered: 0,
            totalCBFrozen: 0,
            totalCBExpected: 0,
            percentVisitsIndicator: 0,
            percentOpenQueriesIndicator: 0,
            percentCBFrozenVsExpectedIndicator: 0,
            totalVisitsExpected: 0,
        };
        nodes.forEach(function (node) {
            // const resources = (this && this.edColDefService && this.edColDefService.getResourceForMapping()) || { ALL: 'ALL', OF: 'of' };
            var data = null;
            if (node.data) {
                if (node.data.isLeafNode) {
                    data = node.data;
                }
                else {
                    data = node.aggData;
                }
                if (data && data.totalCBStarted && typeof data.totalCBStarted === 'number') {
                    result.totalCBStarted += data.totalCBStarted;
                }
                if (data && data.totalVisitsEntered && typeof data.totalVisitsEntered === 'number') {
                    result.totalVisitsEntered += data.totalVisitsEntered;
                }
                if (data && data.totalCBComplete && typeof data.totalCBComplete === 'number') {
                    result.totalCBComplete += data.totalCBComplete;
                } // test
                if (data && data.percentCBFrozenVsExpectedIndicator && typeof data.percentCBFrozenVsExpectedIndicator === 'number') {
                    result.percentCBFrozenVsExpectedIndicator += data.percentCBFrozenVsExpectedIndicator;
                }
                if (data && data.percentOpenQueriesIndicator && typeof data.percentOpenQueriesIndicator === 'number') {
                    result.percentOpenQueriesIndicator += data.percentOpenQueriesIndicator;
                }
                if (data && data.percentVisitsIndicator && typeof data.percentVisitsIndicator === 'number') {
                    result.percentVisitsIndicator += data.percentVisitsIndicator;
                }
                if (data && data.totalCBExpected && typeof data.totalCBExpected === 'number') {
                    result.totalCBExpected += data.totalCBExpected;
                }
                if (data && data.totalCBFrozen && typeof data.totalCBFrozen === 'number') {
                    result.totalCBFrozen += data.totalCBFrozen;
                }
                if (data && data.totalCBEntered && typeof data.totalCBEntered === 'number') {
                    result.totalCBEntered += data.totalCBEntered;
                }
                if (data && data.totalRslvdQueries && typeof data.totalRslvdQueries === 'number') {
                    result.totalRslvdQueries += data.totalRslvdQueries;
                }
                if (data && data.totalDaysToResolve && typeof data.totalDaysToResolve === 'number') {
                    result.totalDaysToResolve += data.totalDaysToResolve;
                }
                if (data && data.totalSubjQuerying && typeof data.totalSubjQuerying === 'number') {
                    result.totalSubjQuerying += data.totalSubjQuerying;
                }
                if (data && data.totalQueries && typeof data.totalQueries === 'number') {
                    result.totalQueries += data.totalQueries;
                }
                if (data && data.totalNumPages && typeof data.totalNumPages === 'number') {
                    result.totalNumPages += data.totalNumPages;
                }
                if (data && data.totalLagDay && typeof data.totalLagDay === 'number') {
                    result.totalLagDay += data.totalLagDay;
                }
                if (data && data.totalOpenQueriesMor21Day && typeof data.totalOpenQueriesMor21Day === 'number') {
                    result.totalOpenQueriesMor21Day += data.totalOpenQueriesMor21Day;
                }
                if (data && data.totalVisitsEntExclUnex && typeof data.totalVisitsEntExclUnex === 'number') {
                    result.totalVisitsEntExclUnex += data.totalVisitsEntExclUnex;
                }
                if (data && data.totalVisitsEnteredLes7Day && typeof data.totalVisitsEnteredLes7Day === 'number') {
                    result.totalVisitsEnteredLes7Day += data.totalVisitsEnteredLes7Day;
                }
                if (data && data.totalVisitsExpected && typeof data.totalVisitsExpected === 'number') {
                    result.totalVisitsExpected += data.totalVisitsExpected;
                }
                if (data && data.totalOpenQueries && typeof data.totalOpenQueries === 'number') {
                    result.totalOpenQueries += data.totalOpenQueries;
                }
                if (data && data.totalVisitsEnteredLes7Day && typeof data.totalVisitsEnteredLes7Day === 'number') {
                    if (node.data.geographyLevel === _app4_app_constant__WEBPACK_IMPORTED_MODULE_8__["GEOGRAPHY_LEVEL"].COUNTRY ||
                        node.data.geographyLevel === _app4_app_constant__WEBPACK_IMPORTED_MODULE_8__["GEOGRAPHY_LEVEL"].REGION || node.data.geographyLevel === _app4_app_constant__WEBPACK_IMPORTED_MODULE_8__["GEOGRAPHY_LEVEL"].SITE) {
                        result.percentVisitsValue =
                            (result.totalVisitsEnteredLes7Day / result.totalVisitsEntExclUnex) * 100;
                    }
                }
                if (data && data.totalVisitsExpected && typeof data.totalVisitsExpected === 'number') {
                    if (node.data.geographyLevel === _app4_app_constant__WEBPACK_IMPORTED_MODULE_8__["GEOGRAPHY_LEVEL"].COUNTRY ||
                        node.data.geographyLevel === _app4_app_constant__WEBPACK_IMPORTED_MODULE_8__["GEOGRAPHY_LEVEL"].REGION || node.data.geographyLevel === _app4_app_constant__WEBPACK_IMPORTED_MODULE_8__["GEOGRAPHY_LEVEL"].SITE) {
                        result.percentVisitsEnteredVsExpected =
                            (result.totalVisitsEntered / result.totalVisitsExpected) * 100;
                    }
                }
                if (data && data.totalNumPages && typeof data.totalNumPages === 'number') {
                    if (node.data.geographyLevel === _app4_app_constant__WEBPACK_IMPORTED_MODULE_8__["GEOGRAPHY_LEVEL"].COUNTRY ||
                        node.data.geographyLevel === _app4_app_constant__WEBPACK_IMPORTED_MODULE_8__["GEOGRAPHY_LEVEL"].REGION || node.data.geographyLevel === _app4_app_constant__WEBPACK_IMPORTED_MODULE_8__["GEOGRAPHY_LEVEL"].SITE) {
                        result.meanDataEntryLag = (result.totalLagDay / result.totalNumPages);
                    }
                }
                if (data && data.totalNumPages && typeof data.totalNumPages === 'number') {
                    if (node.data.geographyLevel === _app4_app_constant__WEBPACK_IMPORTED_MODULE_8__["GEOGRAPHY_LEVEL"].COUNTRY ||
                        node.data.geographyLevel === _app4_app_constant__WEBPACK_IMPORTED_MODULE_8__["GEOGRAPHY_LEVEL"].REGION || node.data.geographyLevel === _app4_app_constant__WEBPACK_IMPORTED_MODULE_8__["GEOGRAPHY_LEVEL"].SITE) {
                        result.meanDataEntryLag = (result.totalLagDay / result.totalNumPages);
                    }
                }
                if (data && data.totalOpenQueries && typeof data.totalOpenQueries === 'number') {
                    if (node.data.geographyLevel === _app4_app_constant__WEBPACK_IMPORTED_MODULE_8__["GEOGRAPHY_LEVEL"].COUNTRY ||
                        node.data.geographyLevel === _app4_app_constant__WEBPACK_IMPORTED_MODULE_8__["GEOGRAPHY_LEVEL"].REGION || node.data.geographyLevel === _app4_app_constant__WEBPACK_IMPORTED_MODULE_8__["GEOGRAPHY_LEVEL"].SITE) {
                        result.percentOpenQueriesValue = (result.totalOpenQueriesMor21Day / result.totalOpenQueries) * 100;
                    }
                }
                if (data && data.totalSubjQuerying && typeof data.totalSubjQuerying === 'number') {
                    if (node.data.geographyLevel === _app4_app_constant__WEBPACK_IMPORTED_MODULE_8__["GEOGRAPHY_LEVEL"].COUNTRY ||
                        node.data.geographyLevel === _app4_app_constant__WEBPACK_IMPORTED_MODULE_8__["GEOGRAPHY_LEVEL"].REGION || node.data.geographyLevel === _app4_app_constant__WEBPACK_IMPORTED_MODULE_8__["GEOGRAPHY_LEVEL"].SITE) {
                        result.meanQueriesPerSubject = (result.totalQueries / result.totalSubjQuerying);
                    }
                }
                if (data && data.totalRslvdQueries && typeof data.totalRslvdQueries === 'number') {
                    if (node.data.geographyLevel === _app4_app_constant__WEBPACK_IMPORTED_MODULE_8__["GEOGRAPHY_LEVEL"].COUNTRY ||
                        node.data.geographyLevel === _app4_app_constant__WEBPACK_IMPORTED_MODULE_8__["GEOGRAPHY_LEVEL"].REGION || node.data.geographyLevel === _app4_app_constant__WEBPACK_IMPORTED_MODULE_8__["GEOGRAPHY_LEVEL"].SITE) {
                        result.meanQueryResolutionLag = (result.totalDaysToResolve / result.totalRslvdQueries);
                    }
                }
                if (data && data.totalCBExpected && typeof data.totalCBExpected === 'number') {
                    if (node.data.geographyLevel === _app4_app_constant__WEBPACK_IMPORTED_MODULE_8__["GEOGRAPHY_LEVEL"].COUNTRY ||
                        node.data.geographyLevel === _app4_app_constant__WEBPACK_IMPORTED_MODULE_8__["GEOGRAPHY_LEVEL"].REGION || node.data.geographyLevel === _app4_app_constant__WEBPACK_IMPORTED_MODULE_8__["GEOGRAPHY_LEVEL"].SITE) {
                        result.percentCBFrozenVsExpectedValue =
                            (result.totalCBFrozen / result.totalCBExpected) * 100;
                    }
                }
                if (data && data.totalCBEntered && typeof data.totalCBEntered === 'number') {
                    if (node.data.geographyLevel === _app4_app_constant__WEBPACK_IMPORTED_MODULE_8__["GEOGRAPHY_LEVEL"].COUNTRY ||
                        node.data.geographyLevel === _app4_app_constant__WEBPACK_IMPORTED_MODULE_8__["GEOGRAPHY_LEVEL"].REGION || node.data.geographyLevel === _app4_app_constant__WEBPACK_IMPORTED_MODULE_8__["GEOGRAPHY_LEVEL"].SITE) {
                        result.percentCBFrozenVsStarted =
                            (result.totalCBFrozen / result.totalCBEntered) * 100;
                    }
                }
            }
        });
        return result;
    };
    // firstDataRendered(event) {
    //   event.api.refreshClientSideRowModel('filter');
    // }
    DataManagementGridComponent.prototype.externalFilterChanged = function () {
        var _this = this;
        this.dataManagementService.externalFilterChanged().
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.subscriptions))
            .subscribe(function (data) {
            if (data) {
                _this.gridApi.onFilterChanged();
            }
        });
    };
    DataManagementGridComponent.prototype.isExternalFilterPresent = function () {
        return true;
    };
    DataManagementGridComponent.prototype.rowDataChanged = function (event) {
        console.log('gridheight : rowDataChanged');
        this.setCountryGridHeight(event, so_common_library__WEBPACK_IMPORTED_MODULE_2__["GROUP_ACTIONS"].EXPAND);
    };
    DataManagementGridComponent.prototype.onrowGroupOpened = function (event) {
        console.log('gridheight : onrowGroupOpened');
        this.setCountryGridHeight(event, so_common_library__WEBPACK_IMPORTED_MODULE_2__["GROUP_ACTIONS"].EXPAND);
    };
    DataManagementGridComponent.prototype.setCountryGridHeight = function (event, action) {
        if (action === void 0) { action = so_common_library__WEBPACK_IMPORTED_MODULE_2__["GROUP_ACTIONS"].EXPAND; }
        var parentDiv = this.dmGrid.nativeElement;
        var gridHeight = this.gridService.setGridHeight(action, event.api, 0);
        this.renderer.setStyle(parentDiv, 'height', gridHeight + 'px');
        event.api.refreshView();
    };
    DataManagementGridComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.next();
        this.subscriptions.complete();
    };
    DataManagementGridComponent.ctorParameters = function () { return [
        { type: so_common_library__WEBPACK_IMPORTED_MODULE_2__["UserDataService"] },
        { type: _data_management_service__WEBPACK_IMPORTED_MODULE_3__["DataManagementService"] },
        { type: so_common_library__WEBPACK_IMPORTED_MODULE_2__["ColumnPreferenceService"] },
        { type: _data_management_grid_column_service__WEBPACK_IMPORTED_MODULE_4__["DataManagementGridColumnService"] },
        { type: _grid_filter_service__WEBPACK_IMPORTED_MODULE_7__["GridFilterService"] },
        { type: _enrollment_details_grid_ed_grid_service__WEBPACK_IMPORTED_MODULE_10__["EdGridService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _sites_service__WEBPACK_IMPORTED_MODULE_9__["SitesService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('agGrid', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DataManagementGridComponent.prototype, "dmGrid", void 0);
    DataManagementGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ctos-data-management-grid',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./data-management-grid.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/sites/data-management-details/data-management-grid/data-management-grid.component.html")).default,
            providers: [_data_management_service__WEBPACK_IMPORTED_MODULE_3__["DataManagementService"]],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            // styleUrls: ['./data-management-grid.component.scss']
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [so_common_library__WEBPACK_IMPORTED_MODULE_2__["UserDataService"],
            _data_management_service__WEBPACK_IMPORTED_MODULE_3__["DataManagementService"],
            so_common_library__WEBPACK_IMPORTED_MODULE_2__["ColumnPreferenceService"],
            _data_management_grid_column_service__WEBPACK_IMPORTED_MODULE_4__["DataManagementGridColumnService"],
            _grid_filter_service__WEBPACK_IMPORTED_MODULE_7__["GridFilterService"],
            _enrollment_details_grid_ed_grid_service__WEBPACK_IMPORTED_MODULE_10__["EdGridService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _sites_service__WEBPACK_IMPORTED_MODULE_9__["SitesService"]])
    ], DataManagementGridComponent);
    return DataManagementGridComponent;
}());



/***/ }),

/***/ "./src/app/sites/data-management-details/data-management.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/sites/data-management-details/data-management.service.ts ***!
  \**************************************************************************/
/*! exports provided: DataManagementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataManagementService", function() { return DataManagementService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _center_summary_center_summary_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../center-summary/center-summary.service */ "./src/app/sites/center-summary/center-summary.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _sites_filter_sites_filter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sites-filter/sites-filter.service */ "./src/app/sites/sites-filter/sites-filter.service.ts");
/* harmony import */ var _data_management_center_list_data_management_center_list_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data-management-center-list/data-management-center-list.service */ "./src/app/sites/data-management-details/data-management-center-list/data-management-center-list.service.ts");
/* harmony import */ var _app4_app_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app4/app.constant */ "./src/app/app.constant.ts");








var DataManagementService = /** @class */ (function () {
    function DataManagementService(centerSummaryService, dataManagementCenterListSerVice, siteFilterService) {
        this.centerSummaryService = centerSummaryService;
        this.dataManagementCenterListSerVice = dataManagementCenterListSerVice;
        this.siteFilterService = siteFilterService;
    }
    DataManagementService.prototype.getDataManagementData = function (studyKey) {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(this.centerSummaryService.getCenterSummary(studyKey), this.dataManagementCenterListSerVice.getDataManagementCenterList(studyKey)).pipe(
        // catchError(error => of(error)),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            console.log('response data : ', response);
            var data = _this.getRowData(response[0], response[1]);
            return data;
        }));
    };
    DataManagementService.prototype.getRowData = function (centerSummaryData, dmCenterList) {
        var centerSummaryModel = this.convertCenterSummaryModel(centerSummaryData.centerSummary.centerThumbnail);
        return this.getDMCenterListModel(dmCenterList.dMCenterList.dMGeoList.geography, centerSummaryModel);
    };
    DataManagementService.prototype.getDMCenterListModel = function (geographies, centerSummaryModel) {
        var rowData = [];
        var currentRegion = null;
        if (!geographies) {
            return;
        }
        for (var index = 0; index < geographies.length; index++) {
            var element = geographies[index];
            if (element.geographyLevel === _app4_app_constant__WEBPACK_IMPORTED_MODULE_7__["GEOGRAPHY_LEVEL"].COUNTRY) {
                element.regionKey = currentRegion.geographyKey;
                element.regionName = currentRegion.geographyName;
                element.geoHierarchy = [_app4_app_constant__WEBPACK_IMPORTED_MODULE_7__["SELECT_WORLD_WIDE"], element.regionName, element.geographyName];
                rowData.push(element);
                var centerRowData = this.getCenterDataFromCountry(element, element.centerList.dMCenterThumbnail, centerSummaryModel);
                rowData.push.apply(rowData, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](centerRowData));
            }
            else if (element.geographyLevel === _app4_app_constant__WEBPACK_IMPORTED_MODULE_7__["GEOGRAPHY_LEVEL"].REGION) {
                element.regionName = element.geographyName;
                element.geoHierarchy = [_app4_app_constant__WEBPACK_IMPORTED_MODULE_7__["SELECT_WORLD_WIDE"], element.geographyName];
                rowData.push(element);
                currentRegion = element;
            }
            else if (element.geographyLevel === _app4_app_constant__WEBPACK_IMPORTED_MODULE_7__["GEOGRAPHY_LEVEL"].WORLDWIDE) {
                element.geoHierarchy = [_app4_app_constant__WEBPACK_IMPORTED_MODULE_7__["SELECT_WORLD_WIDE"]];
                rowData.push(element);
            }
        }
        return rowData;
    };
    DataManagementService.prototype.convertCenterSummaryModel = function (centerThumbnail) {
        var model = {};
        if (!centerThumbnail) {
            return;
        }
        for (var index = 0; index < centerThumbnail.length; index++) {
            var element = centerThumbnail[index];
            model[element.studyCenterKey] = element;
        }
        return model;
    };
    DataManagementService.prototype.getCenterDataFromCountry = function (country, centers, centerSummaryModel) {
        var rowData = [];
        if (!centers) {
            return;
        }
        for (var index = 0; index < centers.length; index++) {
            var element = centers[index];
            element.geographyLevel = _app4_app_constant__WEBPACK_IMPORTED_MODULE_7__["GEOGRAPHY_LEVEL"].SITE;
            element.countryName = country.geographyName;
            element.countryKey = country.geographyKey;
            element.regionKey = country.regionKey;
            element.regionName = country.regionName;
            element.isLeafNode = true;
            Object.assign(element, centerSummaryModel[element.key]);
            element.geoHierarchy = [_app4_app_constant__WEBPACK_IMPORTED_MODULE_7__["SELECT_WORLD_WIDE"], element.regionName, element.countryName, element.name];
            rowData.push(element);
        }
        return rowData;
    };
    DataManagementService.prototype.externalFilterChanged = function () {
        return this.siteFilterService.filterHasBeenChanged$;
    };
    DataManagementService.ctorParameters = function () { return [
        { type: _center_summary_center_summary_service__WEBPACK_IMPORTED_MODULE_2__["CenterSummaryService"] },
        { type: _data_management_center_list_data_management_center_list_service__WEBPACK_IMPORTED_MODULE_6__["DataManagementCenterListService"] },
        { type: _sites_filter_sites_filter_service__WEBPACK_IMPORTED_MODULE_5__["SiteFilterService"] }
    ]; };
    DataManagementService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_center_summary_center_summary_service__WEBPACK_IMPORTED_MODULE_2__["CenterSummaryService"],
            _data_management_center_list_data_management_center_list_service__WEBPACK_IMPORTED_MODULE_6__["DataManagementCenterListService"],
            _sites_filter_sites_filter_service__WEBPACK_IMPORTED_MODULE_5__["SiteFilterService"]])
    ], DataManagementService);
    return DataManagementService;
}());



/***/ })

}]);
//# sourceMappingURL=data-management-details-data-management-details-module.js.map