(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-sites-sites-module"],{

/***/ "../../environments/environment.prod.ts":
/*!******************************************************************************************************************************!*\
  !*** D:/DecisionView/6.1Country/studyoptimizer/client/nworkspace/client-studyOptimizer-app/environments/environment.prod.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var common_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common-library */ "../../dist/common-library/fesm5/common-library.js");


// const mainUrl = 'http://10.44.29.23:8089'; // Shrikesh
// const mainUrl = 'http://10.44.75.5:7070'; // Vipin
// const mainUrl = '${ZUUL_SERVER_IP}';
// const mainUrl = 'http://10.44.234.27:8090';
// const mainUrl = 'http://10.44.74.20:8090';
var mainUrl = window.location.protocol + '//' +
    window.location.hostname + ':' +
    window.location.port;
var environment = {
    production: true,
    clientEncryptionKey: 'TEST1234',
    cacheAge: 30000,
    app_url: window.location.protocol + '//' +
        window.location.hostname + ':' +
        window.location.port + '/app1/index.html',
    login_url: window.location.protocol + '//' +
        window.location.hostname + ':' +
        window.location.port + '/dv/StudyOptimizer/so-main.html',
    cryptoJS: new common_library__WEBPACK_IMPORTED_MODULE_1__["CryptoJSEncryption"](),
    authUrl: mainUrl + "/api/",
    soApiUrl: mainUrl + "/studyoptimizer/api/",
    toSuppressContextMenu: false
};


/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************************************************************************************************!*\
  !*** D:/DecisionView/6.1Country/studyoptimizer/client/nworkspace/client-studyOptimizer-app/node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isDataAvailable\" class=\"plans-fixed-header-container\">\r\n  <ctos-so-header [userProfile]=\"userProfile\" [mainHeaderItems]=\"mainHeaderItems\" [appInfoUrl]=\"appInfoUrl\"\r\n    [logoUrl]=\"logoUrl\" [subHeaderItems]=\"subHeaderItems\" [alertConfirmUrl]=\"alertConfirmUrl\"\r\n    [studyRefreshDate]=\"studyRefreshDate\" [studyRefreshDateLabel]=\"studyRefreshDateLabel\"\r\n    [studyListInput]=\"studyListInput\" (itemSelect)=\"studySelected($event)\" [aboutResource]=\"aboutResource\"\r\n    [passwordResource]=\"passwordResource\" [searchListFormGroupName]=\"searchListFormGroupName\">\r\n  </ctos-so-header>\r\n</div>\r\n<ng-template #studyListOptionTemplate let-item>\r\n  <img src=\"assets/images/preScreening.png\" *ngIf=\"item.prescreenInd\" />\r\n  <span [matTooltip]=\"item.id\" [matTooltipClass]=\"'ctos-tooltip'\">&nbsp;{{item.id}}</span>\r\n</ng-template>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/context-menus/context-menus.component.html":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** D:/DecisionView/6.1Country/studyoptimizer/client/nworkspace/client-studyOptimizer-app/node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/context-menus/context-menus.component.html ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n  <mat-icon>more_vert</mat-icon>\r\n</button>\r\n<mat-menu #menu=\"matMenu\" class=\"context-menu\">\r\n  <button mat-menu-item (click)=\"menuClicked(item)\" class=\"mat-button-action\" *ngFor=\"let item of options\">\r\n    {{item.text}}\r\n  </button>\r\n</mat-menu>");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/menu-panel/menu-panel.component.html":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** D:/DecisionView/6.1Country/studyoptimizer/client/nworkspace/client-studyOptimizer-app/node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/menu-panel/menu-panel.component.html ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-menu #menu   >\r\n    <ng-container *ngFor=\"let item of items\">\r\n      <button *ngIf=\"!item.children; else branch\" (click)=\"menuClicked(item)\" mat-menu-item>{{item.viewValue}}</button>\r\n      <ng-template #branch>\r\n        <button  (click)=\"menuClicked(item)\" mat-menu-item [matMenuTriggerFor]=\"innerPanel.menu\">{{item.viewValue}}</button>\r\n        <ctos-menu-panel (emitMenuClick)=\"menuClicked($event)\" #innerPanel [items]=\"item.children\"></ctos-menu-panel>\r\n      </ng-template>\r\n    </ng-container>\r\n</mat-menu>");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/select-box/select-box.component.html":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** D:/DecisionView/6.1Country/studyoptimizer/client/nworkspace/client-studyOptimizer-app/node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/select-box/select-box.component.html ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<mat-form-field class=\"over-threshold-cohort-dropdown\">\r\n    <mat-select [disabled]=\"selectBoxOptions && selectBoxOptions.length < 2\" panelClass=\"filter-dropdown-panel ctos-cohort-list-panel\" disableOptionCentering [matTooltip]=\"getToolTipData()\" [(value)]=\"selectedOption\" (selectionChange)=\"selectionChanged($event)\">\r\n        <mat-option [matTooltip]=\"option.viewValue\"  *ngFor=\"let option of selectBoxOptions\" [value]=\"option.value\">\r\n            <span [innerHTML]=\"option.viewValue\"></span>\r\n        </mat-option>\r\n    </mat-select>\r\n</mat-form-field>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/sites/sites-filter/sites-filter.component.html":
/*!******************************************************************************************************************************************************************************************!*\
  !*** D:/DecisionView/6.1Country/studyoptimizer/client/nworkspace/client-studyOptimizer-app/node_modules/raw-loader/dist/cjs.js!./src/app/sites/sites-filter/sites-filter.component.html ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex filter-bar\">\r\n    <div class=\"geography-select  select-dropdown\">\r\n        <span>{{filterBar?.resources?.geography}}:</span>\r\n        <ctos-so-worldwide-dropdown [geoFilters]=\"filterBar?.geography\" [selectedOption]=\"defaultSelectedGeography\" (optionClick)=\"OnGeographyChange($event)\">\r\n        </ctos-so-worldwide-dropdown>    \r\n    </div>\r\n    <div class=\"cohort-select select-dropdown\" *ngIf=\"(isCohortStudy && !hideRandomizationFilter)\">\r\n        <span>{{filterBar?.resources?.cohort}}:</span> \r\n        <ctos-so-multi-level-dropdown [selectedOption]=\"defaultSelectedCohort\"  (emitMenuClick)=\"OnCohortChange($event)\" [multiOptionGroups]=\"filterBar.cohort\"></ctos-so-multi-level-dropdown>\r\n    </div> \r\n    <div class=\"monitor-select select-dropdown\">\r\n        <span>{{filterBar?.resources?.monitor}}:</span>\r\n        <ctos-select-box [selectedOption]=\"defaultSelectedMonitor\"  (emitMenuClick)=\"OnMonitorChange($event)\" [selectBoxOptions]=\"filterBar.monitor\"></ctos-select-box>\r\n    </div>\r\n    <div class=\"randomization-select select-dropdown\" *ngIf=\"!hideRandomizationFilter\">\r\n        <span>{{filterBar?.resources?.randomization}}:</span>\r\n        <ctos-select-box [selectedOption]=\"defaultSelectedRandomization\"  (emitMenuClick)=\"OnRandomizationChange($event)\" [selectBoxOptions]=\"filterBar.randomization\"></ctos-select-box>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/sites/sites.component.html":
/*!**********************************************************************************************************************************************************************!*\
  !*** D:/DecisionView/6.1Country/studyoptimizer/client/nworkspace/client-studyOptimizer-app/node_modules/raw-loader/dist/cjs.js!./src/app/sites/sites.component.html ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ctos-header (studyChanged)=\"onStudyChanged($event)\"></ctos-header>\r\n<div class=\"site-sub-tabs \">\r\n  <div class=\"fixed-site-sub-tabs-header\">\r\n    <div class=\"site-sub-tabs-row\">\r\n      \r\n        <div class=\"site-sub-tabs-header\">\r\n          <div class=\"ctos-tab-container d-flex justify-content-start top-padding\">\r\n            <ctos-tab [items]=\"siteSubTab.tabItems\"  [selectedTabItem]=\"selectedItem\"\r\n              (tabClicked)=\"onTabClicked($event)\" class=\"ctos-tab\">\r\n            </ctos-tab>\r\n            <div class=\"d-flex justify-content-end\">\r\n              <ctos-sites-filter [hideRandomizationFilter]=\"hideRandomizationFilter\" [isCohortStudy]='isCohortStudy' ></ctos-sites-filter>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        \r\n    \r\n    </div>\r\n  </div>\r\n  <div class=\"site-sub-tabs-content\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "../app1/src/app/app.constant.ts":
/*!***************************************!*\
  !*** ../app1/src/app/app.constant.ts ***!
  \***************************************/
/*! exports provided: NUMBERS, LOGIN_PARAMS, ERROR_PARAMS, USER_PARAMS, MANAGE_COUNTRIES_PCE_HEADER_COL, HEADER_ITEMS, EB_HEADER_ITEM, LOGO, PROFILE_ITEMS, SUB_HEADER_ITEMS, NA_TOOLTIP, GSK_LOGO_URL, ALERT_CONFIRM_URL, ALERT, HELP_URL, PLAN_ACTION_LABELS, APPROVE, EDIT, VIEW, HASuperUser, ALL_PLAN_ACTIONS, COMMAND, STUDYSUMMARY_TARGET, STUDYSUMMARY_SOURCE, STUDYSUMMARY_PLANNED, STUDYSUMMARY_ACTUALS, UNIQUECOHORT, NOCOHORT, UNIQUE, WEEKS, DAYS, NOVALUE, DASH, SPACE, EMPTY, UNMAPPED, REPORTINGPERIOD, NOPLAN, PLAN_CARD_LABELS, SOLVE_FOR, ErrorMsg, CountryFieldValidationMsg, MODULE_ENROLLMENT, PLAN_STATUS, ICONS, IMAGES, INVALID_SITES_DIALOG, DIALOG_CONFIG, APP_DATE_FORMATS, DATE_FORMAT, DIALOG_ACIONS, MIN_MAX_RANGE, LOCALE_FORMAT, PAGE_IDS, INDICATOR, PLANNINGFORM, ZERO, Day, Week, Id, ERROR, ERROR_CAPS, ERRORSUFFIX_A, ERRORSUFFIX, MESSAGETYPE_POSITIVE, MESSAGETYPE_NEGATIVE, SNACKBAR_POSITIVE, SNACKBAR_NEGATIVE, ICON_POSITIVE, ICON_NEGATIVE, REPLACE_POSITION, PLANKEY, ADJUSTMENT, PLANS, NEWPLANSTAB, PLANPROPERTYPAGE, COUNTRY_DETAILS_PAGE, CTOS_TOOLTIP, WARN_CTOS_TOOLTIP, MNGCNTRY, DFNCNTPLN, DFNSOLVE, ALGORITHM_SITE_COMP, ERROR_CODES, VALID, CONTROL_STATUS, TOOLTIP_LABELS, PERCENTAGE, VALIDATION_PARAMS, SITE_INITIATION_METHOD, SITE_INITIATION_SUB_METHOD, SIOPTION, ALGORITHM_CODE, EP_ACTION_TYPE, EP_FORM, EP, EP_SCR_OPTIONS, GEOGRAPHY_LEVEL, DATE_DISPLAY_FORMAT, ISCOHORTYES, ISCOHORTNO, COHORTTYPE, COUNTRYPLANUPDATOR, ADJUSTCOUNTRYPLANUPDATOR, COHORTPLANUPDATOR, ADJUSTCOHORTPLANUPDATOR, ISCOHORTPLAN, ISNOTCOHORTPLAN, RESULT, OPERATIONTYPE, ERRORS_CODES_POPUP, ERROR_CODES_FOR_CUSTOM_MESSAGE, ERROR_CODES_POPUP_TITLE, ERRORCODE_REVERT, ERROR_FOR_SAVE_PLAN_ON_ALREADY_DELETED_PLAN, ERRORS_PLANS, DEBOUNCE_TIME, NOTPLANKEYCHANGED, SAVEDEFAULT_VAL, COHORT_EXCLUDED_STATE, COUNTRY_OPTIONS, ALGORITHM_ID_1, CHECKBOX_STATE, COHORT_TYPE, COHORT_TYPE_STRING, ALL_COHORTS, MAP_COHORT_LABELS, SOLVER_TYPES, SOLVER_TYPES_VALUES, CountryForms, REQUEST_MODULE_PAGENAME, COEFFICIENT, YES, NO, DOWNLOAD_TEMPLATE_FILE_NAME, DOWNLOADTEMPLATEURL, DOWNLOAD_TEMPLATE_RESPONSE_TYPE, DOWNLOAD_TEMPLATE_PARAMS, COPY_COUNTRY, MIN_SELECTED_COUNTRIES_FOR_BULK_EDIT, LOCKED_COUNTRY_ERROR, PCEOPTIONS, PCEEXPANDCOLLAPSECNT, COUNTRIESFILENAME, MANAGECOUNTRIESGRIDFILENAME, AGGRIDROWS, GRIDROWHEIGHT, DOMLAYOUT, DYNAMICGRIDCONTAINER, SI_SLOT_TYPE, MILESTONES, MCGOPT, MCG_CONSTANTS, UNITS, MEASUREMENT, DEFAULT_PREFERENCE_GRID_COLUMN, GRIDCONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMBERS", function() { return NUMBERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_PARAMS", function() { return LOGIN_PARAMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_PARAMS", function() { return ERROR_PARAMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_PARAMS", function() { return USER_PARAMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MANAGE_COUNTRIES_PCE_HEADER_COL", function() { return MANAGE_COUNTRIES_PCE_HEADER_COL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADER_ITEMS", function() { return HEADER_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EB_HEADER_ITEM", function() { return EB_HEADER_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGO", function() { return LOGO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROFILE_ITEMS", function() { return PROFILE_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUB_HEADER_ITEMS", function() { return SUB_HEADER_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NA_TOOLTIP", function() { return NA_TOOLTIP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSK_LOGO_URL", function() { return GSK_LOGO_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALERT_CONFIRM_URL", function() { return ALERT_CONFIRM_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALERT", function() { return ALERT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HELP_URL", function() { return HELP_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAN_ACTION_LABELS", function() { return PLAN_ACTION_LABELS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APPROVE", function() { return APPROVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT", function() { return EDIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEW", function() { return VIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HASuperUser", function() { return HASuperUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_PLAN_ACTIONS", function() { return ALL_PLAN_ACTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMAND", function() { return COMMAND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STUDYSUMMARY_TARGET", function() { return STUDYSUMMARY_TARGET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STUDYSUMMARY_SOURCE", function() { return STUDYSUMMARY_SOURCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STUDYSUMMARY_PLANNED", function() { return STUDYSUMMARY_PLANNED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STUDYSUMMARY_ACTUALS", function() { return STUDYSUMMARY_ACTUALS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNIQUECOHORT", function() { return UNIQUECOHORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOCOHORT", function() { return NOCOHORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNIQUE", function() { return UNIQUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEEKS", function() { return WEEKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DAYS", function() { return DAYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOVALUE", function() { return NOVALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DASH", function() { return DASH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPACE", function() { return SPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPTY", function() { return EMPTY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNMAPPED", function() { return UNMAPPED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REPORTINGPERIOD", function() { return REPORTINGPERIOD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOPLAN", function() { return NOPLAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAN_CARD_LABELS", function() { return PLAN_CARD_LABELS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOLVE_FOR", function() { return SOLVE_FOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMsg", function() { return ErrorMsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryFieldValidationMsg", function() { return CountryFieldValidationMsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODULE_ENROLLMENT", function() { return MODULE_ENROLLMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAN_STATUS", function() { return PLAN_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICONS", function() { return ICONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGES", function() { return IMAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVALID_SITES_DIALOG", function() { return INVALID_SITES_DIALOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIALOG_CONFIG", function() { return DIALOG_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_DATE_FORMATS", function() { return APP_DATE_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATE_FORMAT", function() { return DATE_FORMAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIALOG_ACIONS", function() { return DIALOG_ACIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_MAX_RANGE", function() { return MIN_MAX_RANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCALE_FORMAT", function() { return LOCALE_FORMAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_IDS", function() { return PAGE_IDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INDICATOR", function() { return INDICATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLANNINGFORM", function() { return PLANNINGFORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZERO", function() { return ZERO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Day", function() { return Day; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Week", function() { return Week; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Id", function() { return Id; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR", function() { return ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_CAPS", function() { return ERROR_CAPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERRORSUFFIX_A", function() { return ERRORSUFFIX_A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERRORSUFFIX", function() { return ERRORSUFFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGETYPE_POSITIVE", function() { return MESSAGETYPE_POSITIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGETYPE_NEGATIVE", function() { return MESSAGETYPE_NEGATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SNACKBAR_POSITIVE", function() { return SNACKBAR_POSITIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SNACKBAR_NEGATIVE", function() { return SNACKBAR_NEGATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_POSITIVE", function() { return ICON_POSITIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_NEGATIVE", function() { return ICON_NEGATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REPLACE_POSITION", function() { return REPLACE_POSITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLANKEY", function() { return PLANKEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADJUSTMENT", function() { return ADJUSTMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLANS", function() { return PLANS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEWPLANSTAB", function() { return NEWPLANSTAB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLANPROPERTYPAGE", function() { return PLANPROPERTYPAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNTRY_DETAILS_PAGE", function() { return COUNTRY_DETAILS_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CTOS_TOOLTIP", function() { return CTOS_TOOLTIP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WARN_CTOS_TOOLTIP", function() { return WARN_CTOS_TOOLTIP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MNGCNTRY", function() { return MNGCNTRY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DFNCNTPLN", function() { return DFNCNTPLN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DFNSOLVE", function() { return DFNSOLVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALGORITHM_SITE_COMP", function() { return ALGORITHM_SITE_COMP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_CODES", function() { return ERROR_CODES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALID", function() { return VALID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTROL_STATUS", function() { return CONTROL_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOLTIP_LABELS", function() { return TOOLTIP_LABELS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PERCENTAGE", function() { return PERCENTAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDATION_PARAMS", function() { return VALIDATION_PARAMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SITE_INITIATION_METHOD", function() { return SITE_INITIATION_METHOD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SITE_INITIATION_SUB_METHOD", function() { return SITE_INITIATION_SUB_METHOD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIOPTION", function() { return SIOPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALGORITHM_CODE", function() { return ALGORITHM_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EP_ACTION_TYPE", function() { return EP_ACTION_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EP_FORM", function() { return EP_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EP", function() { return EP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EP_SCR_OPTIONS", function() { return EP_SCR_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GEOGRAPHY_LEVEL", function() { return GEOGRAPHY_LEVEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATE_DISPLAY_FORMAT", function() { return DATE_DISPLAY_FORMAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ISCOHORTYES", function() { return ISCOHORTYES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ISCOHORTNO", function() { return ISCOHORTNO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COHORTTYPE", function() { return COHORTTYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNTRYPLANUPDATOR", function() { return COUNTRYPLANUPDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADJUSTCOUNTRYPLANUPDATOR", function() { return ADJUSTCOUNTRYPLANUPDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COHORTPLANUPDATOR", function() { return COHORTPLANUPDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADJUSTCOHORTPLANUPDATOR", function() { return ADJUSTCOHORTPLANUPDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ISCOHORTPLAN", function() { return ISCOHORTPLAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ISNOTCOHORTPLAN", function() { return ISNOTCOHORTPLAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESULT", function() { return RESULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPERATIONTYPE", function() { return OPERATIONTYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERRORS_CODES_POPUP", function() { return ERRORS_CODES_POPUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_CODES_FOR_CUSTOM_MESSAGE", function() { return ERROR_CODES_FOR_CUSTOM_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_CODES_POPUP_TITLE", function() { return ERROR_CODES_POPUP_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERRORCODE_REVERT", function() { return ERRORCODE_REVERT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_FOR_SAVE_PLAN_ON_ALREADY_DELETED_PLAN", function() { return ERROR_FOR_SAVE_PLAN_ON_ALREADY_DELETED_PLAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERRORS_PLANS", function() { return ERRORS_PLANS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEBOUNCE_TIME", function() { return DEBOUNCE_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTPLANKEYCHANGED", function() { return NOTPLANKEYCHANGED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVEDEFAULT_VAL", function() { return SAVEDEFAULT_VAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COHORT_EXCLUDED_STATE", function() { return COHORT_EXCLUDED_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNTRY_OPTIONS", function() { return COUNTRY_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALGORITHM_ID_1", function() { return ALGORITHM_ID_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECKBOX_STATE", function() { return CHECKBOX_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COHORT_TYPE", function() { return COHORT_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COHORT_TYPE_STRING", function() { return COHORT_TYPE_STRING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_COHORTS", function() { return ALL_COHORTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAP_COHORT_LABELS", function() { return MAP_COHORT_LABELS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOLVER_TYPES", function() { return SOLVER_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOLVER_TYPES_VALUES", function() { return SOLVER_TYPES_VALUES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryForms", function() { return CountryForms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_MODULE_PAGENAME", function() { return REQUEST_MODULE_PAGENAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COEFFICIENT", function() { return COEFFICIENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YES", function() { return YES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NO", function() { return NO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOWNLOAD_TEMPLATE_FILE_NAME", function() { return DOWNLOAD_TEMPLATE_FILE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOWNLOADTEMPLATEURL", function() { return DOWNLOADTEMPLATEURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOWNLOAD_TEMPLATE_RESPONSE_TYPE", function() { return DOWNLOAD_TEMPLATE_RESPONSE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOWNLOAD_TEMPLATE_PARAMS", function() { return DOWNLOAD_TEMPLATE_PARAMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COPY_COUNTRY", function() { return COPY_COUNTRY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_SELECTED_COUNTRIES_FOR_BULK_EDIT", function() { return MIN_SELECTED_COUNTRIES_FOR_BULK_EDIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCKED_COUNTRY_ERROR", function() { return LOCKED_COUNTRY_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PCEOPTIONS", function() { return PCEOPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PCEEXPANDCOLLAPSECNT", function() { return PCEEXPANDCOLLAPSECNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNTRIESFILENAME", function() { return COUNTRIESFILENAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MANAGECOUNTRIESGRIDFILENAME", function() { return MANAGECOUNTRIESGRIDFILENAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGGRIDROWS", function() { return AGGRIDROWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRIDROWHEIGHT", function() { return GRIDROWHEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMLAYOUT", function() { return DOMLAYOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DYNAMICGRIDCONTAINER", function() { return DYNAMICGRIDCONTAINER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SI_SLOT_TYPE", function() { return SI_SLOT_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MILESTONES", function() { return MILESTONES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MCGOPT", function() { return MCGOPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MCG_CONSTANTS", function() { return MCG_CONSTANTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNITS", function() { return UNITS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEASUREMENT", function() { return MEASUREMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PREFERENCE_GRID_COLUMN", function() { return DEFAULT_PREFERENCE_GRID_COLUMN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRIDCONFIG", function() { return GRIDCONFIG; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

// NUMBERS
var NUMBERS = {
    ZERO: 0,
    ONE: 1,
    FIFTY: 50,
    HUNDRED: 100,
    THREE_HUNDRED: 300
};
var LOGIN_PARAMS = {
    commandName: 'GetTerms',
    categoriesTerms: {
        category: 'terms'
    },
    categories: {
        category: 'login'
    }
};
var ERROR_PARAMS = {
    commandName: 'GetTerms',
    categoriesTerms: {
        category: 'terms'
    },
    categoriesError: {
        category: 'error'
    }
};
var USER_PARAMS = {
    commandName: 'getUserData',
    app: {
        appType: 'SOMAIN'
    }
};
var MANAGE_COUNTRIES_PCE_HEADER_COL = {
    COUNTRY_LOCKED: 'Country Locked',
    RA_APPLIED: 'RA Applied',
    NOTE_APPLIED: 'Notes Applied'
};
var HEADER_ITEMS = [
    {
        name: 'Study List',
        url: '/studylist',
        moduleName: 'MODULE_STUYD_LIST'
    },
    {
        name: 'Runway',
        url: '/runway',
        moduleName: 'MODULE_RUNWAY'
    },
    {
        name: 'Analysis & Templates',
        url: '/ant',
        moduleName: 'MODULE_HISTORICAL'
    }
];
var EB_HEADER_ITEM = {
    name: 'Enrollment Benchmarks',
    url: '/eb',
    moduleName: 'MODULE_ENROLLMENT'
};
var LOGO = {
    name: ''
};
var PROFILE_ITEMS = [
    //     {
    //     name: 'Home',
    //     url: '/home',
    //     moduleName: 'MODULE_HOME'
    // },
    {
        name: 'Help',
        url: '/help'
    },
    {
        name: 'Password',
        url: '/password'
    },
    {
        name: 'About',
        url: '/about'
    },
    {
        name: 'Logout',
        url: '/logout'
    }
];
var SUB_HEADER_ITEMS = [
    {
        name: 'Study',
        url: '/study',
        moduleName: 'MODULE_STUDY'
    },
    {
        name: 'Countries',
        url: '/countries',
        moduleName: 'MODULE_COUNTRY'
    },
    {
        name: 'Sites',
        url: '/sites',
        moduleName: 'MODULE_SITES'
    },
    {
        name: 'Plans',
        url: '/plan',
        moduleName: 'MODULE_PLANNING'
    },
    {
        name: 'Plans',
        url: '/newPlans'
    }
];
var NA_TOOLTIP = 'Previously approved plans and their adjustments do not contain projections';
var GSK_LOGO_URL = 'assets/images/';
var ALERT_CONFIRM_URL = 'assets/images/alertConfirm.png';
var ALERT = 'Alert';
var HELP_URL = 'assets/images/help.gif';
var PLAN_ACTION_LABELS = {
    EDIT_PLAN: 'Edit Plan',
    DUPLICATE_PLAN: 'Duplicate Plan',
    APPROVE_PLAN: 'Approve Plan',
    DELETE_PLAN: 'Delete Plan',
    CREATE_ADJUSTMENT: 'Create Adjustment',
    CREATE_TEMPLATE: 'Create Template',
    UPDATE_COST: 'Update Cost',
    PRINT_COPY_EXPORT: 'Print-Copy-Export'
};
var APPROVE = 'Approve';
var EDIT = 'Edit';
var VIEW = 'View';
var HASuperUser = 'HASuperUser';
var ALL_PLAN_ACTIONS = [
    {
        name: PLAN_ACTION_LABELS.EDIT_PLAN,
        isVisible: true,
        isEnabled: true
    },
    {
        name: PLAN_ACTION_LABELS.DUPLICATE_PLAN,
        isVisible: true,
        isEnabled: true
    },
    {
        name: PLAN_ACTION_LABELS.CREATE_ADJUSTMENT,
        isVisible: true,
        isEnabled: true
    },
    {
        name: PLAN_ACTION_LABELS.CREATE_TEMPLATE,
        isVisible: true,
        isEnabled: true
    },
    {
        name: PLAN_ACTION_LABELS.UPDATE_COST,
        isVisible: true,
        isEnabled: true
    },
    {
        name: PLAN_ACTION_LABELS.DELETE_PLAN,
        isVisible: true,
        isEnabled: true
    },
    {
        name: PLAN_ACTION_LABELS.APPROVE_PLAN,
        isVisible: true,
        isEnabled: true
    }
];
var COMMAND = {
    PLANLIST: 'GetPlanList',
    STUDYSUMMARY: 'GetStudySummary',
    SOURCESUMMARY: 'GetSourceSummary',
    DELTEPLAN: 'deleteStudyPlan',
    DELETEALLPLAN: 'deleteAllStudyPlans',
    SOURCECOHORTLIST: 'getSourceCohortList',
    ALLCOHORTLIST: 'getAllCohortList',
    COPYPLAN: 'copyStudyPlan',
    CREATE_PLAN_TEMPLATE: 'createPlanTemplate',
    GET_TEMPLATE_LIST: 'getTemplateList',
    UPDATE_COST: 'updatePlanCostValues',
    GET_BRIEF_PLAN_LIST: 'GetBriefPlanList',
    GET_PLAN_DETAILS: 'getPlanDetails',
    GET_FILTER_COUNTRY_DATA: 'GetFilterCountryData',
    CREATESTUDYPLAN: 'createStudyPlan',
    UPDATESTUDYPLAN: 'updateStudyPlan',
    CREATE_ADJUSTMENT_PLAN: 'createAdjustStudyPlan',
    UPDATE_ADJUSTMENT_PLAN: 'updateAdjustStudyPlan',
    GETSTUDYSOURCEDETAILS: 'getStudySourceDetails',
    GET_CURVE: 'GetAllCurves',
    GET_INTERIM_ANALYSIS_LIST: 'getInterimAnalysisList',
    SAVECOHORTS: 'saveCohorts',
    UPDATECOUNTRYLOCK: 'updateCountryLock',
    UPDATEADJUSTCOUNTRYLOCKED: 'updateAdjustCountryLock',
    DELETEADJUSTCOUNTRYLOCKED: 'deleteAdjustCountryPlan',
    DELETEBASECOUNTRYLOCKED: 'deleteCountryPlan',
    UPDATE_COUNTRY_PLAN: 'updateCountryPlan',
    UPDATE_ADJ_COUNTRY_PLAN: 'updateAdjustCountryPlan',
    UPDATE_COUNTRY_RATEADJUSTMENTS: 'updateCountryRateAdjustments',
    UPDATE_ADJ_COUNTRY_RATEADJUSTMENTS: 'updateAdjustCountryPlanRateAdj',
    ADD_COUNTRY: 'addCountry',
    ADD_ADJUST_COUNTRY_PLAN: 'addAdjustCountryPlan',
    UPDATE_COUNTRY_PLAN_NOTES: 'updateCountryPlanNotes',
    UPDATE_ADJUST_COUNTRY_PLAN_NOTES: 'updateAdjustCountryPlanNotes',
    SAVE_PLAN_DESIGN: 'savePlanDesign',
    GET_PLAN_DESIGN: 'getPlanDesign',
    GET_MILESTONES: 'getAllMileStones',
    CALC_DYNAMIC_PROJECTIONS: 'CalcDynamicProjsMilestones',
    READ_DYNAMIC_PROJECTIONS: 'ReadDynPlanProjValues',
    EVALUATE_MULTI_COUNTRY_PLAN: 'evaluateMultiCountryPlans',
    EVALUATE_ADJUST_MULTI_COUNTRY_PLAN: 'evaluateAdjustMultiCountryPlans',
    GET_COHORT_DETAILS: 'getCohortsDetails',
    EVALUATE_ADJUST_COUNTRY_PLAN: 'evaluateAdjustCountryPlan',
    EVALUATE_COUNTRY_PLAN: 'evaluateCountryPlan',
    EVALUATE_COUNTRTY_PLAN: 'evaluateCountryPlan',
    COPY_COUNTRY_PLAN: 'copyCountryPlan',
    COPY_ADJUST_COUNTRY_PLAN: 'copyAdjustCountryPlan',
    UPLOAD_PLAN: 'uploadPlan',
    GET_STUDY_DETAILS: 'getStudyDetails'
};
var STUDYSUMMARY_TARGET = 'target';
var STUDYSUMMARY_SOURCE = 'source';
var STUDYSUMMARY_PLANNED = 'planned';
var STUDYSUMMARY_ACTUALS = 'actual';
var UNIQUECOHORT = 1;
var NOCOHORT = 0;
var UNIQUE = 1;
var WEEKS = "Weeks";
var DAYS = "Days";
var NOVALUE = " ";
var DASH = '-'; // Use this instead of NOVALUE
var SPACE = ' ';
var EMPTY = '';
var UNMAPPED = 'Unmapped';
var REPORTINGPERIOD = {
    WEEK: { NAME: 'WEEK', VAL: 7, LABEL: 'Weekly' },
    MONTH: { NAME: 'MONTH', VAL: 30, LABEL: 'Monthly' },
    DAY: { NAME: 'DAY', VAL: 1, LABEL: 'Daily' },
    QUARTER: { NAME: 'QUARTER', VAL: 90, LABEL: 'Quarterly' }
};
var NOPLAN = 'NOPLAN';
// Plan-card component constants
var PLAN_CARD_LABELS = {
    RANDOMIZATION_RATE: 'RR',
    SCREEN_FAILURE: 'SF',
    TARGET_RANDOMIZATION: 'TR',
    PLANNED_RANDOMIZATION: 'PR',
    PLANNED_CYCLE: 'Planned cycle'
};
var SOLVE_FOR = {
    MINIMUM_MONTHLY_SCREEN_RATE: 'Minimum Screening Rate',
    NUMBER_OF_SUBJECTS: 'Optimum Randomization Target',
    LAST_SUBJECT_RANDOMIZED_DATE: 'Last Subject Randomized Date'
};
var ErrorMsg = {
    SOLVERERORFIRST: 'StudyOptimizer cannot calculate the minimum rate based on the parameters entered in the country ',
    SOLVERERORSECOND: ' plan. Consider making changes in the plan, such as increasing the number of sites or decreasing the Screen Failure %.'
};
var CountryFieldValidationMsg = {
    VALIDATIONMSG: 'Correct the following parameters and then save the plan: ',
};
// All app-enrollment component constants will go here
var MODULE_ENROLLMENT = {
    LABEL: {
        ACTUAL_VALUE: PLAN_CARD_LABELS.TARGET_RANDOMIZATION,
        EXPECTED_VALUE: PLAN_CARD_LABELS.PLANNED_RANDOMIZATION
    },
    TOOLTIP_LABELS: {
        TR: 'Target Randomization',
        PR: 'Planner Randomization'
    },
    LINEAR_GRADIENT_ID: 'linearGradient',
    ZERO: NUMBERS.ZERO,
    HUNDRED: NUMBERS.HUNDRED,
    VIEWBOX: '0 -2 44 125',
    X1: 0.5,
    X2: 0.5,
    Y1: 1,
    Y2: 0,
    PATH: {
        D: 'M17 117.9' +
            'C8.4 114.1 5.2 104.1 10 96' +
            'L12.1 92.4 9.6 90' +
            // tslint:disable-next-line:max-line-length
            'C8.2 88.7 6.3 86.3 5.5 84.7 4 81.7 0 58.3 0 52.3 0 49.1 3.3 44.7 5.7 44.7 8.1 44.7 8.8 41.4 9.8 25.1 10.4 15.7 11.4 6.8 12.1 5.4 14.8-0.5 24.9-1.8 29.9 3.1 32.1 5.3 32.4 6.8 33.2 16.9 35.3 43.4 35.2 43 38.3 44.5 39.8 45.2 41.8 46.9 42.7 48.3 44.2 50.6 44.2 51.7 42.6 63.5 40.1 81.1 39.2 84.5 35.3 88.8' +
            'L31.9 92.5 34 96.4C37.8 103.5 35.7 112 29.1 116.4 25.8 118.7 20.2 119.3 17 117.9Z'
    }
};
var PLAN_STATUS = {
    VALID: 'VALID',
    INVALID: 'INVALID',
    APPROVED: 'APPROVED',
    PREVIOUS_APPROVED: 'PREVAPPROVED'
};
var ICONS = {
    MATERIAL: {
        CHEVRON_UP: 'expand_less',
        CHEVRON_DOWN: 'expand_more'
    }
};
var IMAGES = {
    STATUS: {
        ADJUSTMENT: {
            VALID: 'assets/images/manageplans/status-adjustment-valid.png',
            INVALID: 'assets/images/manageplans/status-adjustment-invalid.png',
            PREVIOUSLY_APPROVED: 'assets/images/manageplans/status-adjustment-previously-approved.png'
        },
        VALID: 'assets/images/manageplans/status-valid.png',
        INVALID: 'assets/images/manageplans/status-invalid.png',
        APPROVED: 'assets/images/manageplans/status-approved.png',
        PREVIOUSLY_APPROVED: 'assets/images/manageplans/status-previously-approved.png'
    },
    ICON_ARROW_BACK: 'assets/images/icon-arrow-back.png',
    ICON_REFRESH: 'assets/images/icon-refresh.png',
    ICON_REVERT: 'assets/images/icon-revert.png',
    COHORT_IMG: 'assets/images/manageplans/icon-cohorts.png',
    COHORT_IMG_BLUE: 'assets/images/manageplans/cohort-icon-blue.png',
    COUNTRY_IMG: 'assets/images/manageplans/icon-country.png',
    SITES_IMG: 'assets/images/manageplans/icon-sites.png',
    ICON_ARROW_LEFT: 'assets/images/icon-arrow-left.png',
    ICON_ARROW: 'assets/images/icon-arrow.png',
    ICON_REFRESH_DISABLED: 'assets/images/refresh-disabled.png',
    ICON_ERROR_MESSAGES: 'assets/images/error-messages.png'
};
var INVALID_SITES_DIALOG = {
    WIDTH: '350px',
    PANEL_OK_CLASS: 'confirmation-ok-dialog'
};
var DIALOG_CONFIG = {
    DELETE_ALL_PLANS: {
        WIDTH: '310px',
        HEIGHT: '180px',
        PANEL_CLASS: 'delete-all-confirmation-dialog'
    },
    DELETE_PLAN: {
        WIDTH: '310px',
        HEIGHT: '180px',
        PANEL_CLASS: 'delete-plan-confirmation-dialog'
    },
    CREATE_TEMPLATE: {
        WIDTH: '450px',
        PANEL_CLASS: 'create-template-dialog'
    },
    COUNTRY_LOG: {
        WIDTH: '620px',
        PANEL_CLASS: 'country-log-dialog'
    },
    COUNTRY_NOTES: {
        WIDTH: '600px',
        PANEL_CLASS: 'country-notes-dialog'
    },
    CONFIRM_UNSAVED_DATA: {
        WIDTH: '310px',
        HEIGHT: '190',
        PANEL_CLASS: 'unsaved-data-confirmation-dialog'
    },
    CONFIRM_DIALOG: {
        WIDTH: '336px',
        HEIGHT: '200px',
        MAXHEIGHT: '235px',
        PANEL_CLASS: 'confirmation-dialog',
        PANEL_OK_CLASS: 'confirmation-ok-dialog',
        ID: 'confirmation-dialog'
    },
    CONFIRM_DIALOG_OVERRIDE: {
        WIDTH: '336px',
        HEIGHT: '240px',
        PANEL_CLASS: 'confirmation-dialog',
        ID: 'confirmation-dialog-override'
    },
    PLAN_OUTDATED: {
        WIDTH: '350px',
        HEIGHT: '200px',
        PANEL_CLASS: 'plan-outdated-dialog'
    },
    CONFIRM_DIALOG_IH: {
        WIDTH: '350px',
        HEIGHT: '220px',
        PANEL_CLASS: 'plan-outdated-dialog'
    },
    ENROLLMENT_PAUSE: {
        WIDTH: '400px',
        PANEL_CLASS: 'ep-dialog'
    },
    EP_WARNING: {
        WIDTH: '300px',
        HEIGHT: '180px',
        PANEL_CLASS: 'plan-outdated-dialog'
    },
    MANAGE_COHORT: {
        WIDTH: '336px',
        HEIGHT: '200px',
        PANEL_CLASS: 'manage-plan-dialog'
    },
    SELECT_COHORT: {
        WIDTH: '700px',
        HEIGHT: '450px',
        PANEL_CLASS: 'select-plan-dialog'
    },
    PASTE_DATES: {
        WIDTH: '450px',
        PANEL_CLASS: 'paste-dates-dialog',
        ID: 'paste-dates'
    },
    MAP_COHORTS: {
        WIDTH: '450px',
        PANEL_CLASS: 'map-cohorts-dialog',
        ID: 'map-cohorts'
    },
    CONFIRM_SI_METHOD_CHANGE: {
        WIDTH: '450px',
        PANEL_CLASS: 'confirm-simc-dialog',
        ID: 'confirm-simc'
    },
    COUNTRY_OPTIONS_DIALOG: {
        PANEL_CLASS: 'confirmation-dialog-with-scroll',
    },
    DELETE_COHORT_DIALOG: {
        WIDTH: '700px',
        PANEL_CLASS: 'delete-cohort-panel-class',
        ID: 'deleteCohortDialog'
    },
    SOLVERS_VALIDATION_WARNING: {
        WIDTH: '300px',
        PANEL_CLASS: 'solvers-warning',
        ID: 'solversvalidationwarning'
    },
    IMPORT_COUNTRIES: {
        WIDTH: '90%',
        HEIGHT: '80%',
        PANEL_CLASS: 'import-countries-dialog',
        ID: 'import-countries-dialog',
        AG_GRID_CONFIG: {
            ROW_HEIGHT: 36,
            COUNTRY_COL_WIDTH: 250,
            NUMBER_COL_WIDTH: 75,
            DATE_COL_WIDTH: 120,
            DEFAULT_ROW_COUNT: 100,
            NUMBER_RANGE: {
                MIN: 0,
                MAX: 150000
            }
        }
    },
    COPY_COUNTRY_DIALOG: {
        WIDTH: '500px',
        HEIGHT: '212px',
        MIN_HEIGHT: '212px'
    },
    BULK_EDIT_DIALOG: {
        WIDTH: '500px',
        HEIGHT: '400px',
        PANEL_CLASS: 'bulk-edit-dialog'
    },
    BULK_EDIT_WARNING_DIALOG: {
        WIDTH: '500px',
        HEIGHT: '200px',
        MIN_HEIGHT: '200px'
    },
    CUSTOM_SIV: {
        WIDTH: '765px',
        PANEL_CLASS: 'custom-siv-dialog'
    },
    NO_TLSR: {
        WIDTH: '350px',
        HEIGHT: '200px',
        PANEL_CLASS: 'no-tlsr-dialog'
    },
    CYCLE_TIME_ERROR: {
        WIDTH: '350px',
        HEIGHT: '200px',
        PANEL_CLASS: 'cycle-time-error-dialog',
        ID: 'cycle-time-error-dialog'
    }
};
var APP_DATE_FORMATS = {
    parse: {
        dateInput: [
            'MM-DD-YYYY',
            'MM/DD/YYYY',
            'YYYY-MM-DD',
            'YYYY/MM/DD',
            'DD-MMM-YYYY',
            'DD/MMM/YYYY',
            'DDMMMYYYY',
            'YYYY-MMM-DD',
            'YYYY/MMM/DD',
            'MMM-DD-YYYY',
            'MMM/DD/YYYY'
        ]
    },
    display: {
        dateInput: 'input',
        monthYearLabel: { year: 'numeric', month: 'medium' },
        dateA11yLabel: { year: 'numeric', month: 'medium', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'medium' },
    }
};
var DATE_FORMAT = {
    NOTE_API_DATE_FORMAT: 'MMM-DD-YYYY HH:MM:SS',
    NOTE_API_DATE_FORMAT_SMALL: 'MMM-DD-YYYY HH:mm:ss',
    SERVER_DATE_FORMAT: 'YYYY-MM-DD',
    MONTH_DATE_FORMAT: 'DD-MMM-YYYY'
};
var DIALOG_ACIONS = {
    OK: 'OK',
    CANCEL: 'CANCEL',
    CONTINUE: 'CONTINUE',
    APPLY: 'APPLY'
};
var MIN_MAX_RANGE = {
    MIN: 0,
    MIN_V1: 1,
    MAX: 150000,
    MAX_CHAR: 255,
    MAX_V1: 1000,
    EP_NAME_MAX: 30
};
var LOCALE_FORMAT = 'en-US';
var PAGE_IDS = {
    PLANS: '/plans',
    PLANDETAILS: 'plandetails',
    PLAN_PROPERTY: 'plan-properties',
    COUNTRIES: 'countries',
    RATE_ADJUSTMENT: 'rate-adjustments',
    REPORTS: 'reports',
    INVALID: 'invalid',
    PLAN_DESIGN: 'plan-design'
};
var INDICATOR = {
    INSERT: 'I',
    UPDATE: 'U',
    DELETE: 'D'
};
var PLANNINGFORM = {
    FPA: 'FPA',
    FSI: 'FSI',
    LSS: 'LSS',
    LSR: 'LSR',
    CYCLETIME: 'cycleTime',
    SCREENINGPERIOD: 'screeningPeriod',
    NAME: 'name',
    DESCRIPTION: 'description',
    PLANTYPEKEY: 'planTypeKey',
    FPATOFSI: 'FPAtoFSI',
    NEWFSI: 'newFSI',
    FPATOCHK: 'FPAtoChk',
    NEWTFSICHK: 'newTFSIChk',
    ENROLLEMENTTARGET: 'enrollmentTarget',
    SITES: 'sites'
};
var ZERO = 0;
var Day = 'd';
var Week = 'w';
var Id = 'id';
var ERROR = 'error';
var ERROR_CAPS = 'Error';
var ERRORSUFFIX_A = 'EA';
var ERRORSUFFIX = 'E';
var MESSAGETYPE_POSITIVE = 'positive';
var MESSAGETYPE_NEGATIVE = 'negative';
var SNACKBAR_POSITIVE = 'positive-snackbar';
var SNACKBAR_NEGATIVE = 'error-snackbar';
var ICON_POSITIVE = 'assets/images/manageplans/icon-positive.png';
var ICON_NEGATIVE = 'assets/images/manageplans/icon-error.png';
var REPLACE_POSITION = '{0}';
var PLANKEY = 'plankey';
var ADJUSTMENT = '- Adjustment';
var PLANS = 'PLANS';
var NEWPLANSTAB = 'NEWPLANTAB';
var PLANPROPERTYPAGE = 'PLANPROP';
var COUNTRY_DETAILS_PAGE = 'NCTRYDTL';
var CTOS_TOOLTIP = 'ctos-tooltip';
var WARN_CTOS_TOOLTIP = 'warn ctos-tooltip';
var MNGCNTRY = 'MNGCNTRY';
var DFNCNTPLN = 'DFNCNTPLN';
var DFNSOLVE = 'DFNSOLVE';
var ALGORITHM_SITE_COMP = {
    RANDOM: 'Random'
};
var ERROR_CODES = {
    PLAN_OUTDATED: '21037',
    PLAN_LOCKED_PLAN_DESIGN: '21057',
    PLAN_ALREADY_APPROVED: '21034',
    ADD_COUNTRY_TO_APPROVED_PLAN: '21035',
    PLAN_DELETED: '9013',
    PLAN_UPDATE_FAILED: '9007'
};
var VALID = 'valid';
var CONTROL_STATUS = {
    VALID: 'VALID',
    INVALID: 'INVALID'
};
var TOOLTIP_LABELS = {
    SRC_FSI_GREATER: 'NGSourceFSIGreater',
    SRC_LSR_LESSER: 'NGSourceLSRLesser',
    INVALID_DATE_FORMAT: 'DateFormatIncorrect',
    MAX_CHAR_EXCEED: 'maxCharExceedError',
    DATEPICKER_PARSE_ERROR: 'matDatepickerParse',
    REQUIRED: 'required'
};
var PERCENTAGE = '%';
var VALIDATION_PARAMS = {
    MIN_NUM_SITES: 1,
    MAX_NUM_SITES: 1000,
    MIN_ENROLLMENT_TARGET: 0,
    MAX_ENROLLMENT_TARGET: 150000,
    MIN_OVER_RECRUITMENT_PERCENT: 0,
    MAX_OVER_RECRUITMENT_PERCENT: 1000,
    MAX_SR: 1000,
    MIN_SFR: 0,
    MAX_SFR: 99,
    MAX_RR: 1000,
    MIN_ACTIVE_SITES: 1,
    MAX_ACTIVE_SITES: 1000,
    MIN_CALC_SAS: 0,
    MAX_CALC_SAS: 100,
    MIN_SITOFSSDAYS: 0,
    MAX_COHORT_NAME: 100,
    MAX_COHORT_DESCRIPTION: 200,
    MAX_PERIOD_25: 1000,
    MAX_PERIOD_50: 1000,
    MAX_PERIOD_90: 15000
};
var SITE_INITIATION_METHOD = {
    PERCENT: 'percent',
    GRANULAR: 'granular'
};
var SITE_INITIATION_SUB_METHOD = {
    SCHEDULER: 'scheduler',
    PLANNER: 'planner'
};
var SIOPTION = {
    RANDOM: 'Random',
    LINEAR: 'Linear'
};
var ALGORITHM_CODE = {
    SIMPLE_FRCST: 'simpleFrcst'
};
var EP_ACTION_TYPE = {
    CREATE: 'create',
    EDIT: 'edit',
    DELETE: 'delete',
    EDIT_ALL: 'editAll'
};
var EP_FORM = {
    COHORT: 'cohort',
    NAME: 'name',
    DESCRIPTION: 'description',
    EP_TARGET: 'interimTarget',
    TARGET_TYPE: 'Randomization',
    EP_DURATION: 'duration',
    SCREEN_OPTION: 'rstrtScrngType',
    EOF_EP: 'rstrtScrngBfrEPDays'
};
var EP = {
    DEFAULT_COHORT: 'All Cohorts',
    COHORT_PLAN: 'Y',
    ALL_COHORTS_KEY: -1
};
var EP_SCR_OPTIONS = {
    OPT_1_KEY: 'EndofEP',
    OPT_2_KEY: 'ScreeningPeriod',
    OPT_3_KEY: 'DaysBeforeEP'
};
var GEOGRAPHY_LEVEL = {
    COUNTRY: 'Country',
    WW: 'WW'
};
var DATE_DISPLAY_FORMAT = 'DD-MMM-YYYY';
var ISCOHORTYES = 'Y';
var ISCOHORTNO = 'N';
var COHORTTYPE = 'cp';
var COUNTRYPLANUPDATOR = 'countryPlanUpdator';
var ADJUSTCOUNTRYPLANUPDATOR = 'adjustCountryPlanUpdator';
var COHORTPLANUPDATOR = 'cohortPlanUpdator';
var ADJUSTCOHORTPLANUPDATOR = 'adjustCohortPlanUpdator';
var ISCOHORTPLAN = 'Y';
var ISNOTCOHORTPLAN = 'N';
var RESULT = {
    Okay: 'OK',
    Errors: 'error'
};
var OPERATIONTYPE = {
    E: 'E'
};
var ERRORS_CODES_POPUP = [21037, 9017, 9021, 20161, 21057, 9013, 21060, 21061, 21062];
var ERROR_CODES_FOR_CUSTOM_MESSAGE = {
    '21060': true, '21061': true, '21062': true
};
var ERROR_CODES_POPUP_TITLE = {
    '21063': 'Delete', '21064': 'Lock', '21065': 'Unlock'
};
var ERRORCODE_REVERT = [21063, 21064, 21065, 21037, 21066];
var ERROR_FOR_SAVE_PLAN_ON_ALREADY_DELETED_PLAN = 9013;
var ERRORS_PLANS = 'PLANUNSAVED';
var DEBOUNCE_TIME = 750;
var NOTPLANKEYCHANGED = 'planKeyChanged';
var SAVEDEFAULT_VAL = -1;
var COHORT_EXCLUDED_STATE = {
    EXCLUDED: 0,
    INCLUDED: 1,
    EXCLUDED_BUT_NOT_SAVED: 2
};
var COUNTRY_OPTIONS = {
    COPY_PARAMETERS: 'COPY_PARAMETERS',
    PASTE_PARAMETERS: 'PASTE_PARAMETERS'
};
var ALGORITHM_ID_1 = 1;
var CHECKBOX_STATE = {
    CHECKED: 'checked',
    INDETERMINATE: 'indeterminate',
    UNCHECKED: 'unchecked'
};
var COHORT_TYPE = {
    R: 'R',
    S: 'S'
};
var COHORT_TYPE_STRING = {
    R: 'R Type Cohort',
    S: 'S Type Cohort'
};
var ALL_COHORTS = 'ALL';
var MAP_COHORT_LABELS = {
    USED_COHORT_KEYS: 'usedCohortKeys'
};
var SOLVER_TYPES = {
    SDS: 'SDS',
    LSR: 'LSR',
    MRS: 'MRS',
    CRT: 'CRT'
};
var SOLVER_TYPES_VALUES = {
    SUBJECT_DISTRIBUTION: 'distribution',
    LAST_SUBJECT: 'last-subject',
    MIN_NUM_RATE: 'rate',
    SUBJECTS: 'subjects'
};
var CountryForms;
(function (CountryForms) {
    CountryForms["ActualNumSites"] = "ActualNumSites";
    CountryForms["TLSS"] = "TLSS";
    CountryForms["actEnrlWhnSFRMod"] = "actEnrlWhnSFRMod";
    CountryForms["actEnrlWhnSRMod"] = "actEnrlWhnSRMod";
    CountryForms["cohortEnrollmentParameters"] = "cohortEnrollmentParameters";
    CountryForms["cohortList"] = "cohortList";
    CountryForms["countryKey"] = "countryKey";
    CountryForms["countryName"] = "countryName";
    CountryForms["dateSFRMod"] = "dateSFRMod";
    CountryForms["dateSRMod"] = "dateSRMod";
    CountryForms["enrolmentParameters"] = "enrolmentParameters";
    CountryForms["isAdjustable"] = "isAdjustable";
    CountryForms["isAdjustment"] = "isAdjustment";
    CountryForms["siBody"] = "siBody";
    CountryForms["siHeader"] = "siHeader";
    CountryForms["studyFSI"] = "studyFSI";
    CountryForms["siField"] = "siField";
    CountryForms["siMethod"] = "siMethod";
    CountryForms["siCustomMethod"] = "siCustomMethod";
})(CountryForms || (CountryForms = {}));
var REQUEST_MODULE_PAGENAME = {
    updateCountryDCPView: 'DFNCNTPLN',
    updateCountryMCEView: 'DFNSOLVE'
};
var COEFFICIENT = 0.5;
var YES = 'Y';
var NO = 'N';
var DOWNLOAD_TEMPLATE_FILE_NAME = 'Import_Country_Worksheet.xlsx';
var DOWNLOADTEMPLATEURL = 'assets/' + DOWNLOAD_TEMPLATE_FILE_NAME;
var DOWNLOAD_TEMPLATE_RESPONSE_TYPE = 'blob';
var DOWNLOAD_TEMPLATE_PARAMS = {
    url: DOWNLOADTEMPLATEURL,
    headers: {
        responseType: DOWNLOAD_TEMPLATE_RESPONSE_TYPE
    }
};
var COPY_COUNTRY;
(function (COPY_COUNTRY) {
    COPY_COUNTRY["COPY_PLAN_MSG"] = "CopyPlanMsg";
    COPY_COUNTRY["COPY_PLAN_LOCKED_MSG"] = "CopyPlanLockedMsg";
    COPY_COUNTRY["COPY_COUNTRY_AFSI_ACHIEVED_MSG"] = "CopyCountryAFSIAchievedMsg";
    COPY_COUNTRY["COUNTRY_EXIST"] = "CountryExist";
    COPY_COUNTRY["COUNTRY_ALREADY_PRESENT"] = "CountryAlreadyPresent";
    COPY_COUNTRY["CONFIRM_COPY"] = "ConfirmDialogHeading";
    COPY_COUNTRY["CONFIRM_COPY_LABEL"] = "ConfirmCopy";
    COPY_COUNTRY["COPY_COUNTRY_PANEL_TITLE"] = "CopyCountryPanelTitle";
    COPY_COUNTRY["COPY_COUNTRY_HEADING"] = "CopyCountryHeading";
})(COPY_COUNTRY || (COPY_COUNTRY = {}));
var MIN_SELECTED_COUNTRIES_FOR_BULK_EDIT = 2;
var LOCKED_COUNTRY_ERROR = 'locked country';
var PCEOPTIONS;
(function (PCEOPTIONS) {
    PCEOPTIONS["PRINT"] = "print";
    PCEOPTIONS["EXPORT"] = "export";
    PCEOPTIONS["COPY"] = "copy";
    PCEOPTIONS["EXPAND"] = "expand";
    PCEOPTIONS["COLLAPSE"] = "collapse";
})(PCEOPTIONS || (PCEOPTIONS = {}));
var PCEEXPANDCOLLAPSECNT = 4;
var COUNTRIESFILENAME = 'CountriesTable.xlsx';
var MANAGECOUNTRIESGRIDFILENAME = 'ManageCountriesTable.xlsx';
var AGGRIDROWS = '.ag-row';
var GRIDROWHEIGHT = 48;
var DOMLAYOUT;
(function (DOMLAYOUT) {
    DOMLAYOUT["auto"] = "autoHeight";
    DOMLAYOUT["normal"] = "normal";
})(DOMLAYOUT || (DOMLAYOUT = {}));
var DYNAMICGRIDCONTAINER;
(function (DYNAMICGRIDCONTAINER) {
    DYNAMICGRIDCONTAINER["top"] = "-19px";
    DYNAMICGRIDCONTAINER["topnone"] = "0px";
})(DYNAMICGRIDCONTAINER || (DYNAMICGRIDCONTAINER = {}));
var SI_SLOT_TYPE;
(function (SI_SLOT_TYPE) {
    SI_SLOT_TYPE["ACTUAL"] = "actual";
    SI_SLOT_TYPE["PROJECTED"] = "projected";
    SI_SLOT_TYPE["REDISTRIBUTED"] = "redistributed";
    SI_SLOT_TYPE["NEW"] = "new";
})(SI_SLOT_TYPE || (SI_SLOT_TYPE = {}));
var MILESTONES;
(function (MILESTONES) {
    MILESTONES["ACTUALS"] = "Actuals";
    MILESTONES["PROJECTED"] = "Projected";
    MILESTONES["PARENT"] = "ParentPlan";
})(MILESTONES || (MILESTONES = {}));
var MCGOPT;
(function (MCGOPT) {
    MCGOPT["VALUE"] = "value";
    MCGOPT["OPTIONS"] = "options";
    MCGOPT["CONTROLS"] = "controls";
})(MCGOPT || (MCGOPT = {}));
var MCG_CONSTANTS;
(function (MCG_CONSTANTS) {
    MCG_CONSTANTS["MC_GRID_TOGGLE_LEFT_MESSAGE"] = "MC_GRID_TOGGLE_LEFT_MESSAGE";
    MCG_CONSTANTS["MC_GRID_TOGGLE_RIGHT_MESSAGE"] = "MC_GRID_TOGGLE_RIGHT_MESSAGE";
})(MCG_CONSTANTS || (MCG_CONSTANTS = {}));
var UNITS;
(function (UNITS) {
    UNITS["PX"] = "px";
    UNITS["RM"] = "rm";
})(UNITS || (UNITS = {}));
var MEASUREMENT;
(function (MEASUREMENT) {
    MEASUREMENT["HEIGHT"] = "height";
    MEASUREMENT["OFFSETHEIGHT"] = "offsetHeight";
    MEASUREMENT["OFFSETTOP"] = "offsetTop";
})(MEASUREMENT || (MEASUREMENT = {}));
var DEFAULT_PREFERENCE_GRID_COLUMN = {
    PreferenceGridColumns: {},
    appType: 'SOMAIN',
    category: 'PreferenceGridColumns'
};
var GRIDCONFIG = {
    rowHeight: 48,
    headerHeight: 73,
    minHeight: 150,
    margin: 50,
    bufferPixel: 18,
    fixedRowCount: 5,
    collpasedPinnedRowCount: 2
};


/***/ }),

/***/ "../app1/src/app/shared/model/menus-option.model.ts":
/*!**********************************************************!*\
  !*** ../app1/src/app/shared/model/menus-option.model.ts ***!
  \**********************************************************/
/*! exports provided: MenusOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenusOption", function() { return MenusOption; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

var MenusOption = /** @class */ (function () {
    function MenusOption(text, value) {
        this.text = text;
        this.value = value;
        this.text = text;
        this.value = value;
    }
    return MenusOption;
}());



/***/ }),

/***/ "../app1/src/app/shared/services/app-resource.service.ts":
/*!***************************************************************!*\
  !*** ../app1/src/app/shared/services/app-resource.service.ts ***!
  \***************************************************************/
/*! exports provided: AppResourceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppResourceService", function() { return AppResourceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var common_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common-library */ "../../dist/common-library/fesm5/common-library.js");



var AppResourceService = /** @class */ (function () {
    function AppResourceService(localAppResources, errorTermsStoreService) {
        this.localAppResources = localAppResources;
        this.errorTermsStoreService = errorTermsStoreService;
    }
    /**
     * To get local app resource from application.properties file
     * @param { string } key
     */
    AppResourceService.prototype.getResource = function (key) {
        return this.localAppResources.getResource(key);
    };
    /**
     * To get error message from errorterm properties file
     * @param { string } key
     */
    AppResourceService.prototype.getErrorMessage = function (key) {
        return this.errorTermsStoreService.getErrorMessage(key);
    };
    AppResourceService.ctorParameters = function () { return [
        { type: common_library__WEBPACK_IMPORTED_MODULE_2__["LocaleAppResourcesService"] },
        { type: common_library__WEBPACK_IMPORTED_MODULE_2__["ErrorTermsStoreService"] }
    ]; };
    AppResourceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [common_library__WEBPACK_IMPORTED_MODULE_2__["LocaleAppResourcesService"],
            common_library__WEBPACK_IMPORTED_MODULE_2__["ErrorTermsStoreService"]])
    ], AppResourceService);
    return AppResourceService;
}());



/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var so_common_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! so-common-library */ "../../dist/so-common-library/fesm5/so-common-library.js");
/* harmony import */ var _header_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.service */ "./src/app/header/header.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _sites_center_summary_center_summary_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sites/center-summary/center-summary.service */ "./src/app/sites/center-summary/center-summary.service.ts");







var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(headerService, studyListService, commonHeaderService, centerSummaryService) {
        this.headerService = headerService;
        this.studyListService = studyListService;
        this.commonHeaderService = commonHeaderService;
        this.centerSummaryService = centerSummaryService;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.studyChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var self = this;
        // self.subscriptions = [];
        self.studyListInput = new so_common_library__WEBPACK_IMPORTED_MODULE_2__["StudyListInput"]();
        self.searchListFormGroupName = self.headerService.searchListFormGroupName;
        self.menu = this.commonHeaderService.menu;
        self.setMainHeaderItems();
        // self.setSubHeaderItems(self.menu.subHeaderMenu);
        this.commonHeaderService.getSubHeaderItems(self.menu.subHeaderMenu);
        self.subHeaderItems = this.commonHeaderService.subHeaderItems;
        self.logoUrl = self.commonHeaderService.logoUrl;
        self.appInfoUrl = self.commonHeaderService.appInfoUrl;
        self.alertConfirmUrl = self.commonHeaderService.alertConfirmUrl;
        self.studyRefreshDateLabel = self.commonHeaderService.studyRefreshDateLabel;
        var actionParam = {};
        actionParam.endPoint = true;
        self.studyListInput = self.commonHeaderService.getStudyInputResource(self.studyListOptionTemplate, actionParam);
        self.isDataAvailable = false;
        self.setData();
        self.passwordResource = self.commonHeaderService.passwordResource;
        self.aboutResource = self.commonHeaderService.aboutResource;
        self.checkIfAllDataAvailable();
        self.getStudyDetails();
        self.centerSummaryService.getCenterSummary(this.headerService.getLastVisitedStudyKey());
    };
    HeaderComponent.prototype.setMainHeaderItems = function () {
        var _this = this;
        var self = this;
        this.commonHeaderService.getAppData()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.subscriptions))
            .subscribe(function (data) {
            _this.commonHeaderService.setHeaderItems(data);
            self.mainHeaderItems = _this.commonHeaderService.mainHeaderItems;
            self.checkIfAllDataAvailable();
        });
    };
    HeaderComponent.prototype.checkIfAllDataAvailable = function () {
        this.isDataAvailable = this.commonHeaderService.checkIfAllDataAvailable(this.studyRefreshDate);
    };
    HeaderComponent.prototype.studySelected = function (event) {
        var _this = this;
        var self = this;
        var selectedStudy = event.option.value;
        self.studyListService.shareStudyKey(event.option.value);
        self.headerService.setSelectedStudyKey(event.option.value);
        this.headerService.updateSelectedStudyPreferences(selectedStudy)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.subscriptions))
            .subscribe(function (successResponse) {
            self.setData();
            _this.studyChanged.emit(event);
        });
    };
    /**
     * This function sets
     * 1. Data required for User Profile Menu in Header Component.
     * 2. Updates preference for study refresh date in back end.
     */
    HeaderComponent.prototype.setData = function () {
        var _this = this;
        var self = this;
        var actionParam = {};
        actionParam.endPoint = true;
        self.commonHeaderService.getUserData(actionParam)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.subscriptions))
            .subscribe(function (data) {
            self.commonHeaderService.setUserProfile(data, self.menu.profileItem);
            self.userProfile = _this.commonHeaderService.userProfile;
            self.checkIfAllDataAvailable();
        });
        self.setStudyRefreshDate();
    };
    /**
     * This function updates preference for study refresh date in back end.
     * Based on response function sets header data. Sets property isDataAvailable property of header component.
     */
    HeaderComponent.prototype.setStudyRefreshDate = function () {
        var _this = this;
        var self = this;
        self.headerService.getStudyRefreshDate()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.subscriptions))
            .subscribe(function (studyRefreshDate) {
            self.studyRefreshDate = studyRefreshDate;
            _this.headerService.studyRefreshDate = studyRefreshDate;
            self.checkIfAllDataAvailable();
        });
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.next();
        this.subscriptions.complete();
    };
    HeaderComponent.prototype.getStudyDetails = function (selectedStudy) {
        var studyKey;
        if (!selectedStudy) {
            studyKey = this.headerService.getLastVisitedStudyKey();
        }
        else {
            studyKey = selectedStudy.key;
        }
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _header_service__WEBPACK_IMPORTED_MODULE_3__["HeaderService"] },
        { type: so_common_library__WEBPACK_IMPORTED_MODULE_2__["StudyListService"] },
        { type: so_common_library__WEBPACK_IMPORTED_MODULE_2__["CommonHeaderService"] },
        { type: _sites_center_summary_center_summary_service__WEBPACK_IMPORTED_MODULE_6__["CenterSummaryService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('studyListOptionTemplate', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], HeaderComponent.prototype, "studyListOptionTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], HeaderComponent.prototype, "studyChanged", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ctos-header',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
            providers: [],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_header_service__WEBPACK_IMPORTED_MODULE_3__["HeaderService"],
            so_common_library__WEBPACK_IMPORTED_MODULE_2__["StudyListService"],
            so_common_library__WEBPACK_IMPORTED_MODULE_2__["CommonHeaderService"],
            _sites_center_summary_center_summary_service__WEBPACK_IMPORTED_MODULE_6__["CenterSummaryService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/context-menus/context-menus.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/context-menus/context-menus.component.ts ***!
  \****************************************************************************/
/*! exports provided: ContextMenusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenusComponent", function() { return ContextMenusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var ContextMenusComponent = /** @class */ (function () {
    function ContextMenusComponent() {
        this.emitMenuClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.options = [];
    }
    ContextMenusComponent.prototype.ngOnInit = function () {
    };
    ContextMenusComponent.prototype.ngOnDestroy = function () {
    };
    ContextMenusComponent.prototype.ngOnChanges = function (changes) {
        if (changes && changes.menuOption && changes.menuOption.currentValue) {
            this.options = changes.menuOption.currentValue;
        }
    };
    ContextMenusComponent.prototype.menuClicked = function (item) {
        this.emitMenuClick.emit(item);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ContextMenusComponent.prototype, "menuOption", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ContextMenusComponent.prototype, "emitMenuClick", void 0);
    ContextMenusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ctos-context-menus',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./context-menus.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/context-menus/context-menus.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContextMenusComponent);
    return ContextMenusComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/menu-panel/menu-panel.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/menu-panel/menu-panel.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ctos-menu-panel geography-select {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 2px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2FwcDQvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9tZW51LXBhbmVsL0Q6XFxEZWNpc2lvblZpZXdcXDYuMUNvdW50cnlcXHN0dWR5b3B0aW1pemVyXFxjbGllbnRcXG53b3Jrc3BhY2VcXGNsaWVudC1zdHVkeU9wdGltaXplci1hcHAvcHJvamVjdHNcXGFwcDRcXHNyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXG1lbnUtcGFuZWxcXG1lbnUtcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxvQkFBYTtFQUFiLGFBQWE7RUFDVCx5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBIiwiZmlsZSI6InByb2plY3RzL2FwcDQvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9tZW51LXBhbmVsL21lbnUtcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjdG9zLW1lbnUtcGFuZWwge1xyXG4gICAgZ2VvZ3JhcGh5LXNlbGVjdCAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgICAgICB9XHJcbiAgICB9Il19 */");

/***/ }),

/***/ "./src/app/shared/components/menu-panel/menu-panel.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/menu-panel/menu-panel.component.ts ***!
  \**********************************************************************/
/*! exports provided: MenuPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPanelComponent", function() { return MenuPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");



var MenuPanelComponent = /** @class */ (function () {
    function MenuPanelComponent() {
        this.emitMenuClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    MenuPanelComponent.prototype.ngOnInit = function () { };
    MenuPanelComponent.prototype.menuClicked = function (event) {
        console.log(event);
        this.emitMenuClick.emit(event);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('menu', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenu"])
    ], MenuPanelComponent.prototype, "menu", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MenuPanelComponent.prototype, "items", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], MenuPanelComponent.prototype, "emitMenuClick", void 0);
    MenuPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ctos-menu-panel',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu-panel.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/menu-panel/menu-panel.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu-panel.component.scss */ "./src/app/shared/components/menu-panel/menu-panel.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuPanelComponent);
    return MenuPanelComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/select-box/select-box.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/select-box/select-box.component.ts ***!
  \**********************************************************************/
/*! exports provided: SelectBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectBoxComponent", function() { return SelectBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var SelectBoxComponent = /** @class */ (function () {
    function SelectBoxComponent() {
        this.selectBoxOptions = [];
        this.emitMenuClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SelectBoxComponent.prototype.ngOnInit = function () {
    };
    SelectBoxComponent.prototype.ngOnDestroy = function () {
    };
    SelectBoxComponent.prototype.selectionChanged = function (event) {
        this.emitMenuClick.emit(event);
    };
    SelectBoxComponent.prototype.getToolTipData = function () {
        var _this = this;
        if (this.selectBoxOptions && this.selectBoxOptions.length > 0) {
            var selectedItemToolTip = this.selectBoxOptions.filter(function (item) { return item.value === _this.selectedOption; });
            return selectedItemToolTip && selectedItemToolTip.length > 0 ? selectedItemToolTip[0].viewValue : '';
        }
        return '';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], SelectBoxComponent.prototype, "selectBoxOptions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SelectBoxComponent.prototype, "emitMenuClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SelectBoxComponent.prototype, "selectedOption", void 0);
    SelectBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ctos-select-box',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./select-box.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/select-box/select-box.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SelectBoxComponent);
    return SelectBoxComponent;
}());



/***/ }),

/***/ "./src/app/shared/model/site-sub-tab.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/model/site-sub-tab.ts ***!
  \**********************************************/
/*! exports provided: SiteSubTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteSubTab", function() { return SiteSubTab; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

var SiteSubTab = /** @class */ (function () {
    function SiteSubTab() {
    }
    return SiteSubTab;
}());



/***/ }),

/***/ "./src/app/shared/service/app-resource.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/service/app-resource.service.ts ***!
  \********************************************************/
/*! exports provided: AppResourceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppResourceService", function() { return AppResourceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var common_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common-library */ "../../dist/common-library/fesm5/common-library.js");



var AppResourceService = /** @class */ (function () {
    function AppResourceService(localAppResources, errorTermsStoreService) {
        this.localAppResources = localAppResources;
        this.errorTermsStoreService = errorTermsStoreService;
    }
    /**
     * To get local app resource from application.properties file
     * @param { string } key
     */
    AppResourceService.prototype.getResource = function (key) {
        return this.localAppResources.getResource(key);
    };
    /**
     * To get error message from errorterm properties file
     * @param { string } key
     */
    AppResourceService.prototype.getErrorMessage = function (key) {
        return this.errorTermsStoreService.getErrorMessage(key);
    };
    AppResourceService.ctorParameters = function () { return [
        { type: common_library__WEBPACK_IMPORTED_MODULE_2__["LocaleAppResourcesService"] },
        { type: common_library__WEBPACK_IMPORTED_MODULE_2__["ErrorTermsStoreService"] }
    ]; };
    AppResourceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [common_library__WEBPACK_IMPORTED_MODULE_2__["LocaleAppResourcesService"],
            common_library__WEBPACK_IMPORTED_MODULE_2__["ErrorTermsStoreService"]])
    ], AppResourceService);
    return AppResourceService;
}());



/***/ }),

/***/ "./src/app/shared/service/site-filter-preference.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/service/site-filter-preference.service.ts ***!
  \******************************************************************/
/*! exports provided: SiteFilterPreferenceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteFilterPreferenceService", function() { return SiteFilterPreferenceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.constant */ "./src/app/app.constant.ts");



var SiteFilterPreferenceService = /** @class */ (function () {
    function SiteFilterPreferenceService() {
    }
    /**
     * To get prefrences value based on key- geography key, monitorKey, cohort Key, randomization Key
     * and lastvisitedStudyKey from sites_filter_preference session storage
     * @param { string } storageKey
     */
    SiteFilterPreferenceService.prototype.getSitesFilterPreference = function (storageKey) {
        if (this.getSitesFilterSessionStorage()) {
            var retrievedObject = this.getSitesFilterSessionStorage();
            var sites_filter_preference = JSON.parse(retrievedObject);
            if (sites_filter_preference[storageKey]) {
                if (storageKey === _app_constant__WEBPACK_IMPORTED_MODULE_2__["FILTER_PREFERENCES"].GEOGRAPHY) {
                    return JSON.parse(sites_filter_preference[storageKey]);
                }
                else {
                    return sites_filter_preference[storageKey];
                }
            }
            else {
                return null;
            }
        }
        else {
            return null;
        }
    };
    /**
     * This method used to storage filter preferences (geography key, monitorKey, cohort Key and randomization Key) into
     * the sites_filter_preference session storage.
     * @param { string } storageKey
     */
    SiteFilterPreferenceService.prototype.setSitesFilterPreference = function (storageKey, value) {
        if (this.getSitesFilterSessionStorage()) {
            var retrievedObject = this.getSitesFilterSessionStorage();
            var sites_filter_preference = JSON.parse(retrievedObject);
            sites_filter_preference[storageKey] = value;
            this.setSitesFilterSessionStorage(JSON.stringify(sites_filter_preference));
        }
        else {
            var sites_filter_preference = {};
            sites_filter_preference[storageKey] = value;
            this.setSitesFilterSessionStorage(JSON.stringify(sites_filter_preference));
        }
    };
    /**
     * This method used to clear filter preferences(geogrpahy,monitor, cohort and randomization)
     * from session storage when study change.
     */
    SiteFilterPreferenceService.prototype.clearGridFilterPreferences = function () {
        if (this.getSitesFilterSessionStorage()) {
            var retrievedObject = this.getSitesFilterSessionStorage();
            var sites_filter_preference = JSON.parse(retrievedObject);
            var LASTVISITED_STUDYKEY = _app_constant__WEBPACK_IMPORTED_MODULE_2__["FILTER_PREFERENCES"].LASTVISITED_STUDYKEY;
            var sites_filter_preference_new = {
                LASTVISITED_STUDYKEY: sites_filter_preference.sites_lastvisitedstudyID
            };
            this.removeSitesFilterSessionStorage();
            this.setSitesFilterSessionStorage(JSON.stringify(sites_filter_preference_new));
        }
    };
    /**
     * This method used to get sites_filter_preference key from session storage
     */
    SiteFilterPreferenceService.prototype.getSitesFilterSessionStorage = function () {
        return sessionStorage.getItem(_app_constant__WEBPACK_IMPORTED_MODULE_2__["FILTER_PREFERENCES"].SITE_FILTER_PREFERENCE);
    };
    /**
     * This method used to set sites_filter_preference key to session storage
     * @param { string } value
     */
    SiteFilterPreferenceService.prototype.setSitesFilterSessionStorage = function (value) {
        return sessionStorage.setItem(_app_constant__WEBPACK_IMPORTED_MODULE_2__["FILTER_PREFERENCES"].SITE_FILTER_PREFERENCE, value);
    };
    /**
     * This method used to remove sites_filter_preference key from session storage
     */
    SiteFilterPreferenceService.prototype.removeSitesFilterSessionStorage = function () {
        sessionStorage.removeItem(_app_constant__WEBPACK_IMPORTED_MODULE_2__["FILTER_PREFERENCES"].SITE_FILTER_PREFERENCE);
    };
    SiteFilterPreferenceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SiteFilterPreferenceService);
    return SiteFilterPreferenceService;
}());



/***/ }),

/***/ "./src/app/shared/service/site-resource.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/service/site-resource.service.ts ***!
  \*********************************************************/
/*! exports provided: SiteResourceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteResourceService", function() { return SiteResourceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var so_common_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! so-common-library */ "../../dist/so-common-library/fesm5/so-common-library.js");
/* harmony import */ var _app_shared_services_app_resource_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/services/app-resource.service */ "../app1/src/app/shared/services/app-resource.service.ts");
/* harmony import */ var _app_app_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/app.constant */ "../app1/src/app/app.constant.ts");
/* harmony import */ var _header_header_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../header/header.service */ "./src/app/header/header.service.ts");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app.constant */ "./src/app/app.constant.ts");







var SiteResourceService = /** @class */ (function () {
    function SiteResourceService(appResource, headerService, resourceService) {
        this.appResource = appResource;
        this.headerService = headerService;
        this.resourceService = resourceService;
    }
    Object.defineProperty(SiteResourceService.prototype, "errorResource", {
        get: function () {
            return {
                SOLVERS_VALIDATION_ERROR_MSG: this.appResource.getErrorMessage('SolversValidationErrorMessage'),
                SOLVERS_CALCULATION_ERROR_MSG: this.appResource.getErrorMessage('SolversCalculationErrorMsg')
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SiteResourceService.prototype, "siteSubTabResource", {
        get: function () {
            return {
                ENROLLMENT_DETAILS: this.appResource.getResource('ENROLLMENT_DETAILS'),
                ENROLLMENT_SCORECARD: this.appResource.getResource('ENROLLMENT_SCORECARD'),
                DATA_MANAGEMENT_DETAILS: this.appResource.getResource('DATA_MANAGEMENT_DETAILS')
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SiteResourceService.prototype, "actionResource", {
        get: function () {
            return {
                EXPANDGRID: this.appResource.getResource('Expand'),
                COLLAPSEGRID: this.appResource.getResource('Collapse'),
                OK: this.appResource.getResource('OK'),
                Cancel: this.appResource.getResource('Cancel'),
                PRINT: this.appResource.getResource('Print'),
                COPY: this.appResource.getResource('Copy'),
                EXPORT: this.appResource.getResource('Export'),
                CLICK_TO_CALCULATE: this.appResource.getResource('ClickToCalculate'),
                CLICK_TO_APPLY: this.appResource.getResource('ClickToApply'),
                SELECT_COUNTRIES: this.appResource.getResource('SELECT_COUNTRIES'),
                SELECT_COUNTRIES_MSG: this.appResource.getResource('SelectCountryMsg'),
                SUBJECTS_SOLVER_TAB: this.appResource.getResource('SubjectsSolverTab'),
                UNEDITABLE_PLAN_MSG: this.appResource.getResource('PECDisableApprovedMsg'),
                ADD_COUNTRIES: this.appResource.getResource('ADD_COUNTRIES'),
                SELECT_ALL: this.appResource.getResource('SELECT_ALL'),
                ENABLE_UPDATED_PROJECTIONS: this.appResource.getResource('ENABLE_UPDATED_PROJECTIONS'),
                SELECT_COHORTS_TO_EDIT: this.appResource.getResource('SELECT_COHORTS_TO_EDIT'),
                MANGECOUNTRYGRID: this.appResource.getResource('MANGECOUNTRYGRID'),
                MANAGECOUNTRYGRIDEDIT: this.appResource.getResource('MCG_CONSTANTS'),
                MC_ACTUALS_CHECKBOX_LABEL: this.appResource.getResource('MC_ACTUALS_CHECKBOX_LABEL'),
                MC_PROJECTED_CHECKBOX_LABEL: this.appResource.getResource('MC_PROJECTED_CHECKBOX_LABEL'),
                MC_PARENTPLAN_CHECKBOX_LABEL: this.appResource.getResource('MC_PARENTPLAN_CHECKBOX_LABEL'),
                MC_GRID_TOGGLE_LEFT_MESSAGE: this.appResource.getResource(_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["MCG_CONSTANTS"].MC_GRID_TOGGLE_LEFT_MESSAGE),
                MC_GRID_TOGGLE_RIGHT_MESSAGE: this.appResource.getResource(_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["MCG_CONSTANTS"].MC_GRID_TOGGLE_RIGHT_MESSAGE)
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SiteResourceService.prototype, "sitesFilterControlResources", {
        get: function () {
            return {
                geography: this.appResource.getResource('GEOGRAPHY_FILTER_LABEL'),
                cohort: this.appResource.getResource('COHORT_FILTER_LABEL'),
                monitor: this.appResource.getResource('MONITOR_FILTER_LABEL'),
                randomization: this.appResource.getResource('RANDOMIZATION_FILTER_LABEL'),
                sites_monitor_selectAll: this.appResource.getResource('SITES_MONITOR_SELECTALL')
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SiteResourceService.prototype, "sitesRandomizationOptionResources", {
        get: function () {
            return [
                {
                    value: _app_constant__WEBPACK_IMPORTED_MODULE_6__["DEFAULT_SELECTED"],
                    viewValue: this.appResource.getResource('RANDOMIZATION_SUB_ALL'),
                    disabled: false
                },
                {
                    value: '0',
                    viewValue: this.appResource.getResource('RANDOMIZATION_SUB_0'),
                    disabled: false
                },
                {
                    value: '1',
                    viewValue: this.appResource.getResource('RANDOMIZATION_SUB_1'),
                    disabled: false
                }
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SiteResourceService.prototype, "getCohortCategories", {
        get: function () {
            return this.resourceService.getCohortDropDownOptions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SiteResourceService.prototype, "getCohortDropDownResource", {
        get: function () {
            return this.resourceService.getCohortDropDownResource();
        },
        enumerable: true,
        configurable: true
    });
    SiteResourceService.ctorParameters = function () { return [
        { type: _app_shared_services_app_resource_service__WEBPACK_IMPORTED_MODULE_3__["AppResourceService"] },
        { type: _header_header_service__WEBPACK_IMPORTED_MODULE_5__["HeaderService"] },
        { type: so_common_library__WEBPACK_IMPORTED_MODULE_2__["ResourceService"] }
    ]; };
    SiteResourceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_shared_services_app_resource_service__WEBPACK_IMPORTED_MODULE_3__["AppResourceService"],
            _header_header_service__WEBPACK_IMPORTED_MODULE_5__["HeaderService"],
            so_common_library__WEBPACK_IMPORTED_MODULE_2__["ResourceService"]])
    ], SiteResourceService);
    return SiteResourceService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var common_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common-library */ "../../dist/common-library/fesm5/common-library.js");
/* harmony import */ var so_common_library__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! so-common-library */ "../../dist/so-common-library/fesm5/so-common-library.js");
/* harmony import */ var _shared_service_site_resource_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/service/site-resource.service */ "./src/app/shared/service/site-resource.service.ts");
/* harmony import */ var _shared_service_app_resource_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/service/app-resource.service */ "./src/app/shared/service/app-resource.service.ts");
/* harmony import */ var _components_context_menus_context_menus_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/context-menus/context-menus.component */ "./src/app/shared/components/context-menus/context-menus.component.ts");
/* harmony import */ var _shared_components_select_box_select_box_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/components/select-box/select-box.component */ "./src/app/shared/components/select-box/select-box.component.ts");
/* harmony import */ var _components_menu_panel_menu_panel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/menu-panel/menu-panel.component */ "./src/app/shared/components/menu-panel/menu-panel.component.ts");










var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], common_library__WEBPACK_IMPORTED_MODULE_3__["CommonAngularMaterialModule"], common_library__WEBPACK_IMPORTED_MODULE_3__["CommonLibraryModule"], so_common_library__WEBPACK_IMPORTED_MODULE_4__["SoCommonLibraryModule"]],
            declarations: [_components_context_menus_context_menus_component__WEBPACK_IMPORTED_MODULE_7__["ContextMenusComponent"], _shared_components_select_box_select_box_component__WEBPACK_IMPORTED_MODULE_8__["SelectBoxComponent"], _components_menu_panel_menu_panel_component__WEBPACK_IMPORTED_MODULE_9__["MenuPanelComponent"]],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _shared_service_site_resource_service__WEBPACK_IMPORTED_MODULE_5__["SiteResourceService"], _shared_service_app_resource_service__WEBPACK_IMPORTED_MODULE_6__["AppResourceService"]],
            entryComponents: [_components_context_menus_context_menus_component__WEBPACK_IMPORTED_MODULE_7__["ContextMenusComponent"]],
            exports: [_components_context_menus_context_menus_component__WEBPACK_IMPORTED_MODULE_7__["ContextMenusComponent"], _shared_components_select_box_select_box_component__WEBPACK_IMPORTED_MODULE_8__["SelectBoxComponent"], _components_menu_panel_menu_panel_component__WEBPACK_IMPORTED_MODULE_9__["MenuPanelComponent"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/sites/center-summary/center-summary.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/sites/center-summary/center-summary.service.ts ***!
  \****************************************************************/
/*! exports provided: CenterSummaryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CenterSummaryService", function() { return CenterSummaryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var so_common_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! so-common-library */ "../../dist/so-common-library/fesm5/so-common-library.js");
/* harmony import */ var common_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common-library */ "../../dist/common-library/fesm5/common-library.js");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");







var CenterSummaryService = /** @class */ (function () {
    function CenterSummaryService(userDataService, payloadCommandService, baseConnectionService) {
        this.userDataService = userDataService;
        this.payloadCommandService = payloadCommandService;
        this.baseConnectionService = baseConnectionService;
        this.centerSummarySubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
    }
    CenterSummaryService.prototype.getDataObservable = function () {
        return this.centerSummarySubject.asObservable();
    };
    CenterSummaryService.prototype.setCenterSummaryData = function (data) {
        this.data = data;
        this.centerSummarySubject.next(data);
    };
    CenterSummaryService.prototype.getCenterSummary = function (studyKey, baseParam) {
        var _this = this;
        if (!common_library__WEBPACK_IMPORTED_MODULE_3__["AppUtil"].isDefined(studyKey, true)) {
            console.log('Error : Can not get Center Summary without Study key');
            return;
        }
        studyKey = studyKey;
        if (studyKey) {
            var params = {
                studyKey: studyKey
            };
            var moduleInfo = so_common_library__WEBPACK_IMPORTED_MODULE_2__["CTOSUtil"].getModuleInfo(_app_constant__WEBPACK_IMPORTED_MODULE_4__["PAGES"].ENROLLMENT_DETAILS, studyKey, _app_constant__WEBPACK_IMPORTED_MODULE_4__["SITE_MODULE"]);
            var payload = this.payloadCommandService.getApiRequest(_app_constant__WEBPACK_IMPORTED_MODULE_4__["COMMAND"].CENTER_SUMMARY, params, null, moduleInfo);
            var actionParam = {};
            if (!baseParam) {
                baseParam = actionParam;
            }
            baseParam.url = _app_constant__WEBPACK_IMPORTED_MODULE_4__["API_ENDPOINT"].CENTER_SUMMARY; // rest api end point
            return this.baseConnectionService
                .send(payload, baseParam)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (response) {
                if (response.result === common_library__WEBPACK_IMPORTED_MODULE_3__["COMMON"].RESULT_OK) {
                    _this.setCenterSummaryData(response);
                    return response;
                }
                else {
                    throw new common_library__WEBPACK_IMPORTED_MODULE_3__["ApplicationError"](response.error.message, response.error.errorCode);
                }
            }));
        }
    };
    CenterSummaryService.ctorParameters = function () { return [
        { type: so_common_library__WEBPACK_IMPORTED_MODULE_2__["UserDataService"] },
        { type: common_library__WEBPACK_IMPORTED_MODULE_3__["PayloadCommandService"] },
        { type: common_library__WEBPACK_IMPORTED_MODULE_3__["BaseConnectionService"] }
    ]; };
    CenterSummaryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [so_common_library__WEBPACK_IMPORTED_MODULE_2__["UserDataService"],
            common_library__WEBPACK_IMPORTED_MODULE_3__["PayloadCommandService"],
            common_library__WEBPACK_IMPORTED_MODULE_3__["BaseConnectionService"]])
    ], CenterSummaryService);
    return CenterSummaryService;
}());



/***/ }),

/***/ "./src/app/sites/grid-filter.service.ts":
/*!**********************************************!*\
  !*** ./src/app/sites/grid-filter.service.ts ***!
  \**********************************************/
/*! exports provided: GridFilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridFilterService", function() { return GridFilterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sites_filter_sites_filter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sites-filter/sites-filter.service */ "./src/app/sites/sites-filter/sites-filter.service.ts");
/* harmony import */ var _header_header_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header.service */ "./src/app/header/header.service.ts");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.constant */ "./src/app/app.constant.ts");





var GridFilterService = /** @class */ (function () {
    function GridFilterService(siteFilterService, headerService) {
        this.siteFilterService = siteFilterService;
        this.headerService = headerService;
    }
    /***
     *  @FilterEnrollmentDetailGrid
     *  This method is used to applied all geography,cohort, monitor and randomization filter on
     *  Enrollment details grid data.
     */
    GridFilterService.prototype.filterEnrollmentGridData = function (node) {
        if (this.worldWideFilter(node)) {
            // console.log(node.data);
            if (this.cohortFilter(node)) {
                if (this.monitorFilter(node)) {
                    return this.randomizationFilter(node);
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    };
    /***
    *  @FilterDataManagmenttDetailGrid
    *  This method is used to applied all geography,cohort, monitor and randomization filter on
    *  Enrollment details grid data.
    */
    GridFilterService.prototype.filterDataManagmenttDetailGrid = function (node) {
        if (this.worldWideFilter(node)) {
            // console.log(node.data);
            return this.monitorFilter(node);
        }
        else {
            return false;
        }
    };
    /***
     *  @WorldWideFilter
     *  This method is used to filter grid data based on world wide and region and country.
     */
    GridFilterService.prototype.worldWideFilter = function (node) {
        var selectedGeography = this.siteFilterService.selectedGeography;
        if (!selectedGeography) {
            return true;
        }
        else if (selectedGeography.code === _app_constant__WEBPACK_IMPORTED_MODULE_4__["GEOGRAPHY_LEVEL"].WORLDWIDE) {
            return true;
        }
        else if (selectedGeography.level === _app_constant__WEBPACK_IMPORTED_MODULE_4__["GEOGRAPHY_LEVEL"].REGION && node.data.geographyLevel === selectedGeography.level) {
            return node.data.regionName.toString() === selectedGeography.name.toString();
        }
        else {
            if (node.data.geographyLevel !== _app_constant__WEBPACK_IMPORTED_MODULE_4__["GEOGRAPHY_LEVEL"].WORLDWIDE) {
                return node.data.geoHierarchy.findIndex(function (geo) { return geo === selectedGeography.name; }) !== -1;
            }
            else {
                return true;
            }
        }
        // Old function code do not remove
        // const selectedGeography = this.siteFilterService.selectedGeography;
        // if (selectedGeography && node.data && (selectedGeography.code && selectedGeography.code !== 'WW')) {
        //   if (selectedGeography.code !== 'WW' && selectedGeography.children) {
        //     return node.data.regionName && node.data.regionName.toString() === selectedGeography.name.toString();
        //   } else {
        //     return node.data.countryName && node.data.countryName.toString() === selectedGeography.name.toString();
        //   }
        // } else {
        //   return true;
        // }
    };
    /***
     *  @MonitorListFilter
     *  This method is used to filter grid data based on center monitor list.
     */
    GridFilterService.prototype.monitorFilter = function (node) {
        var selectedMonitor = this.siteFilterService.selectedMonitor;
        if (selectedMonitor && selectedMonitor !== _app_constant__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_SELECTED"]) {
            if (node.data.geographyLevel !== _app_constant__WEBPACK_IMPORTED_MODULE_4__["GEOGRAPHY_LEVEL"].WORLDWIDE) {
                var monitorList = node.data.centerMonitorList && node.data.centerMonitorList.centerMonitor
                    ? [].concat(node.data.centerMonitorList.centerMonitor) : [];
                if (node.data && monitorList.length > 0) {
                    return monitorList.find(function (item) { return item.monitorKey === (+selectedMonitor); });
                }
                else {
                    return false;
                }
            }
            else {
                return true;
            }
        }
        else {
            return true;
        }
    };
    /***
     *  @RandomizationFilter
     *  This method is used to filter grid data based on world wide and region and country.
     */
    GridFilterService.prototype.randomizationFilter = function (node) {
        // const selectedRandomizationKey = this.siteFilterService.selectedRandomizationKey;
        // if (selectedRandomizationKey && selectedRandomizationKey !== DEFAULT_SELECTED && node.data ) {
        //   if (node.data.geographyLevel === GEOGRAPHY_LEVEL.SITE) {
        //     if (selectedRandomizationKey === '0') {
        //       const actualEnrolled = node.data.actualEnrolled ? node.data.actualEnrolled : 0;
        //       return actualEnrolled === 0;
        //     } else if (selectedRandomizationKey === '1') {
        //       return node.data.actualEnrolled > 0;
        //     } else {
        //       return false;
        //     }
        //   } else if (selectedRandomizationKey === '1'
        //   && node.data.geographyLevel === GEOGRAPHY_LEVEL.COHORT && node.data.siteActualEnrolled === 0 ) {
        //     return false;
        //   } else {
        //     return true;
        //   }
        // } else {
        //   return true;
        // }
        var selectedRandomizationKey = this.siteFilterService.selectedRandomizationKey;
        if (selectedRandomizationKey && selectedRandomizationKey !== _app_constant__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_SELECTED"] && node.data) {
            if (selectedRandomizationKey === '0') {
                if (node.data.geographyLevel === _app_constant__WEBPACK_IMPORTED_MODULE_4__["GEOGRAPHY_LEVEL"].REGION || node.data.geographyLevel === _app_constant__WEBPACK_IMPORTED_MODULE_4__["GEOGRAPHY_LEVEL"].COUNTRY
                    || node.data.geographyLevel === _app_constant__WEBPACK_IMPORTED_MODULE_4__["GEOGRAPHY_LEVEL"].SITE) {
                    var actualEnrolled = node.data.actualEnrolled ? node.data.actualEnrolled : 0;
                    return actualEnrolled === 0;
                }
                else if (node.data.geographyLevel === _app_constant__WEBPACK_IMPORTED_MODULE_4__["GEOGRAPHY_LEVEL"].COHORT && node.data.siteActualEnrolled > 0) {
                    return false;
                }
                else {
                    return true;
                }
            }
            else {
                if (node.data.geographyLevel === _app_constant__WEBPACK_IMPORTED_MODULE_4__["GEOGRAPHY_LEVEL"].REGION || node.data.geographyLevel === _app_constant__WEBPACK_IMPORTED_MODULE_4__["GEOGRAPHY_LEVEL"].COUNTRY
                    || node.data.geographyLevel === _app_constant__WEBPACK_IMPORTED_MODULE_4__["GEOGRAPHY_LEVEL"].SITE) {
                    return node.data.actualEnrolled > 0;
                }
                else if (node.data.geographyLevel === _app_constant__WEBPACK_IMPORTED_MODULE_4__["GEOGRAPHY_LEVEL"].COHORT && node.data.siteActualEnrolled === 0) {
                    return false;
                }
                else {
                    return true;
                }
            }
        }
        else {
            return true;
        }
        //   if (node.data.geographyLevel === GEOGRAPHY_LEVEL.SITE) {
        //       const actualEnrolled = node.data.actualEnrolled ? node.data.actualEnrolled : 0;
        //       return actualEnrolled === 0;
        //     } else if (selectedRandomizationKey === '1') {
        //       return node.data.actualEnrolled > 0;
        //     } else {
        //       return false;
        //     }
        //   } else if (selectedRandomizationKey === '1'
        //   && node.data.geographyLevel === GEOGRAPHY_LEVEL.COHORT && node.data.siteActualEnrolled === 0 ) {
        //     return false;
        //   } else {
        //     return true;
        //   }
        // } else {
        //   return true;
        // }
    };
    /***
     *  @WorldWideFilter
     *  This method is used to filter grid data based on world wide and region and country.
     */
    GridFilterService.prototype.cohortFilter = function (node) {
        var selectedCohort = this.siteFilterService.selectedCohort;
        var studyID = this.headerService.getLastVisitedStudyKey();
        if (this.headerService.isCohortStudy(studyID) && node.data) {
            if (selectedCohort && selectedCohort !== _app_constant__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_SELECTED"] && node.data.cohortName) {
                return node.data.cohortKey.toString() === selectedCohort.toString();
            }
            else {
                if (selectedCohort && selectedCohort !== _app_constant__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_SELECTED"] && node.data.cohortID) {
                    return node.data.studyCohortKey.toString() === selectedCohort.toString();
                }
                return true;
            }
        }
        else {
            return true;
        }
    };
    GridFilterService.ctorParameters = function () { return [
        { type: _sites_filter_sites_filter_service__WEBPACK_IMPORTED_MODULE_2__["SiteFilterService"] },
        { type: _header_header_service__WEBPACK_IMPORTED_MODULE_3__["HeaderService"] }
    ]; };
    GridFilterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sites_filter_sites_filter_service__WEBPACK_IMPORTED_MODULE_2__["SiteFilterService"],
            _header_header_service__WEBPACK_IMPORTED_MODULE_3__["HeaderService"]])
    ], GridFilterService);
    return GridFilterService;
}());



/***/ }),

/***/ "./src/app/sites/recruitment-center-list/recruitment-center-list.service.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/sites/recruitment-center-list/recruitment-center-list.service.ts ***!
  \**********************************************************************************/
/*! exports provided: RecruitmentCenterListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecruitmentCenterListService", function() { return RecruitmentCenterListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var so_common_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! so-common-library */ "../../dist/so-common-library/fesm5/so-common-library.js");
/* harmony import */ var common_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common-library */ "../../dist/common-library/fesm5/common-library.js");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");







var RecruitmentCenterListService = /** @class */ (function () {
    function RecruitmentCenterListService(userDataService, payloadCommandService, baseConnectionService) {
        this.userDataService = userDataService;
        this.payloadCommandService = payloadCommandService;
        this.baseConnectionService = baseConnectionService;
        this.recruitmentCenterListSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
    }
    RecruitmentCenterListService.prototype.getDataObservable = function () {
        return this.recruitmentCenterListSubject.asObservable();
    };
    RecruitmentCenterListService.prototype.setRecruitmentCenterListData = function (data) {
        this.data = data;
        this.recruitmentCenterListSubject.next(data);
    };
    RecruitmentCenterListService.prototype.getRecruitmentCenterList = function (studyKey, baseParam) {
        var _this = this;
        if (!common_library__WEBPACK_IMPORTED_MODULE_3__["AppUtil"].isDefined(studyKey, true)) {
            console.log('Error : Can not get Center Summary without Study key');
            return;
        }
        studyKey = studyKey;
        if (studyKey) {
            var params = {
                studyKey: studyKey
            };
            var moduleInfo = so_common_library__WEBPACK_IMPORTED_MODULE_2__["CTOSUtil"].getModuleInfo(_app_constant__WEBPACK_IMPORTED_MODULE_4__["PAGES"].ENROLLMENT_DETAILS, studyKey, _app_constant__WEBPACK_IMPORTED_MODULE_4__["SITE_MODULE"]);
            var payload = this.payloadCommandService.getApiRequest(_app_constant__WEBPACK_IMPORTED_MODULE_4__["COMMAND"].RECRUITMENT_CENTER_LIST, params, null, moduleInfo);
            var actionParam = {};
            if (!baseParam) {
                baseParam = actionParam;
            }
            baseParam.url = _app_constant__WEBPACK_IMPORTED_MODULE_4__["API_ENDPOINT"].RECRUITMENT_CENTER_LIST;
            return this.baseConnectionService
                .send(payload, baseParam)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (response) {
                if (response.result === common_library__WEBPACK_IMPORTED_MODULE_3__["COMMON"].RESULT_OK) {
                    _this.setRecruitmentCenterListData(response);
                    return response;
                }
                else {
                    return new common_library__WEBPACK_IMPORTED_MODULE_3__["ApplicationError"](response.error.message, response.error.errorCode);
                }
            }));
        }
    };
    RecruitmentCenterListService.ctorParameters = function () { return [
        { type: so_common_library__WEBPACK_IMPORTED_MODULE_2__["UserDataService"] },
        { type: common_library__WEBPACK_IMPORTED_MODULE_3__["PayloadCommandService"] },
        { type: common_library__WEBPACK_IMPORTED_MODULE_3__["BaseConnectionService"] }
    ]; };
    RecruitmentCenterListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [so_common_library__WEBPACK_IMPORTED_MODULE_2__["UserDataService"],
            common_library__WEBPACK_IMPORTED_MODULE_3__["PayloadCommandService"],
            common_library__WEBPACK_IMPORTED_MODULE_3__["BaseConnectionService"]])
    ], RecruitmentCenterListService);
    return RecruitmentCenterListService;
}());



/***/ }),

/***/ "./src/app/sites/sites-filter/sites-filter.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/sites/sites-filter/sites-filter.component.ts ***!
  \**************************************************************/
/*! exports provided: SitesFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitesFilterComponent", function() { return SitesFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _sites_filter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sites-filter.service */ "./src/app/sites/sites-filter/sites-filter.service.ts");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app.constant */ "./src/app/app.constant.ts");






var SitesFilterComponent = /** @class */ (function () {
    function SitesFilterComponent(siteFilterService) {
        this.siteFilterService = siteFilterService;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    SitesFilterComponent.prototype.ngOnInit = function () {
        this.filterBar = {
            resources: this.getResources(),
            randomization: this.siteFilterService.getRandomizationData(),
            geography: []
        };
        this.setDefaultSelection();
        this.defaultSelectedRandomization = this.siteFilterService.selectedRandomizationKey ?
            this.siteFilterService.selectedRandomizationKey : _app_constant__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_SELECTED"];
        this.setGeographyData();
        this.setCohortData();
        this.setMonitorList();
        this.resetFilter();
    };
    SitesFilterComponent.prototype.ngOnChanges = function (changes) {
    };
    /**
     * @resetFilter
     * This method is used to reset all filters to default value when grid data has been changed by
     * And clear the filter selection values from session storage.
     */
    SitesFilterComponent.prototype.resetFilter = function () {
        var _this = this;
        this.siteFilterService.gridDataHasBeenChanged()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.subscriptions))
            .subscribe(function (item) {
            _this.siteFilterService.clearGridFilters();
            _this.filterBar.randomization = _this.siteFilterService.getRandomizationData();
            _this.setDefaultSelection();
        });
    };
    /**
    * This method is used to set geography dropdown modal data.
    */
    SitesFilterComponent.prototype.setGeographyData = function () {
        var _this = this;
        this.siteFilterService.setGeographyData()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.subscriptions))
            .subscribe(function (result) {
            if (result && result.recruitmentCenterList && result.recruitmentCenterList.recGeoList
                && result.recruitmentCenterList.recGeoList.geography && result.recruitmentCenterList.recGeoList.geography.length > 0) {
                _this.filterBar.geography = _this.siteFilterService.transformGeographyData(result.recruitmentCenterList.recGeoList.geography);
                _this.defaultSelectedGeography = _this.siteFilterService.selectedGeography ?
                    _this.siteFilterService.selectedGeography : { name: _app_constant__WEBPACK_IMPORTED_MODULE_5__["SELECT_WORLD_WIDE"] };
            }
            else {
                _this.filterBar.geography = [];
                _this.defaultSelectedGeography = { name: _app_constant__WEBPACK_IMPORTED_MODULE_5__["SELECT_WORLD_WIDE"] };
            }
        });
    };
    /**
    * This method is used to set cohort dropdown modal data.
    */
    SitesFilterComponent.prototype.setCohortData = function () {
        var _this = this;
        this.siteFilterService.setCohortData()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.subscriptions))
            .subscribe(function (result) {
            if (result.studySummary && result.studySummary.geoList && result.studySummary.geoList.geography) {
                _this.filterBar.cohort = _this.siteFilterService.transformCohortData(result.studySummary);
                _this.defaultSelectedCohort = _this.siteFilterService.selectedCohort ? _this.siteFilterService.selectedCohort : _app_constant__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_SELECTED"];
            }
        });
    };
    /**
    * This method is used to set monitor dropdown modal data.
    */
    SitesFilterComponent.prototype.setMonitorData = function () {
        this.filterBar.monitor = this.siteFilterService.getMonitorData(this.siteFilterService.selectedGeography);
        this.defaultSelectedMonitor = this.siteFilterService.selectedMonitor ? this.siteFilterService.selectedMonitor : _app_constant__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_SELECTED"];
    };
    /**
    * This method is used to set default selection of all filter controls
    */
    SitesFilterComponent.prototype.setDefaultSelection = function () {
        this.defaultSelectedMonitor = _app_constant__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_SELECTED"];
        this.defaultSelectedCohort = _app_constant__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_SELECTED"];
        this.defaultSelectedRandomization = _app_constant__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_SELECTED"];
        this.defaultSelectedGeography = { name: _app_constant__WEBPACK_IMPORTED_MODULE_5__["SELECT_WORLD_WIDE"] };
    };
    /**
     * get Filter controls label
     */
    SitesFilterComponent.prototype.setMonitorList = function () {
        var _this = this;
        this.siteFilterService.getCenterSummaryService()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.subscriptions))
            .subscribe(function (response) {
            if (response && response.centerSummary) {
                _this.siteFilterService.setCenterMonitorList(response.centerSummary);
            }
            else {
                _this.siteFilterService._centerMonitorList = [];
            }
            _this.setMonitorData();
        });
    };
    /**
     * get Filter controls label
     */
    SitesFilterComponent.prototype.getResources = function () {
        return this.siteFilterService.sitesFilterControlResources();
    };
    /**
     * on change of geography select box change
     */
    SitesFilterComponent.prototype.OnGeographyChange = function (event) {
        this.siteFilterService.selectedGeography = event;
        console.log(event);
        this.filterBar.monitor = this.siteFilterService.getMonitorData(event);
        this.defaultSelectedMonitor = _app_constant__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_SELECTED"];
        this.defaultSelectedGeography = event;
        this.siteFilterService.selectedMonitor = this.defaultSelectedMonitor;
        this.siteFilterService.filterHasBeenChanged.next(true);
    };
    /**
     * on change of cohort select box change
     */
    SitesFilterComponent.prototype.OnCohortChange = function (event) {
        console.log(event);
        this.defaultSelectedCohort = event.value;
        this.siteFilterService.selectedCohort = event.value;
        this.siteFilterService.filterHasBeenChanged.next(true);
    };
    /**
     * on change of monitor select box change
     */
    SitesFilterComponent.prototype.OnMonitorChange = function (event) {
        this.siteFilterService.selectedMonitor = event.value;
        this.defaultSelectedMonitor = event.value;
        this.siteFilterService.filterHasBeenChanged.next(true);
    };
    /**
     * on change of randomization select box change
     */
    SitesFilterComponent.prototype.OnRandomizationChange = function (event) {
        this.defaultSelectedRandomization = event.value;
        this.siteFilterService.selectedRandomizationKey = event.value;
        this.siteFilterService.filterHasBeenChanged.next(true);
    };
    SitesFilterComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.next();
        this.subscriptions.complete();
    };
    SitesFilterComponent.ctorParameters = function () { return [
        { type: _sites_filter_service__WEBPACK_IMPORTED_MODULE_4__["SiteFilterService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SitesFilterComponent.prototype, "hideRandomizationFilter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SitesFilterComponent.prototype, "isCohortStudy", void 0);
    SitesFilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ctos-sites-filter',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sites-filter.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/sites/sites-filter/sites-filter.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sites_filter_service__WEBPACK_IMPORTED_MODULE_4__["SiteFilterService"]])
    ], SitesFilterComponent);
    return SitesFilterComponent;
}());



/***/ }),

/***/ "./src/app/sites/sites-filter/sites-filter.service.ts":
/*!************************************************************!*\
  !*** ./src/app/sites/sites-filter/sites-filter.service.ts ***!
  \************************************************************/
/*! exports provided: SiteFilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteFilterService", function() { return SiteFilterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var _header_header_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../header/header.service */ "./src/app/header/header.service.ts");
/* harmony import */ var _shared_service_site_resource_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/service/site-resource.service */ "./src/app/shared/service/site-resource.service.ts");
/* harmony import */ var _center_summary_center_summary_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../center-summary/center-summary.service */ "./src/app/sites/center-summary/center-summary.service.ts");
/* harmony import */ var _recruitment_center_list_recruitment_center_list_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../recruitment-center-list/recruitment-center-list.service */ "./src/app/sites/recruitment-center-list/recruitment-center-list.service.ts");
/* harmony import */ var _shared_service_site_filter_preference_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/service/site-filter-preference.service */ "./src/app/shared/service/site-filter-preference.service.ts");
/* harmony import */ var _sites_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sites.service */ "./src/app/sites/sites.service.ts");










var SiteFilterService = /** @class */ (function () {
    function SiteFilterService(siteResourceService, headerService, centerSummaryService, recruitmentCenterListService, siteFilterPreferenceService, sitesService) {
        this.siteResourceService = siteResourceService;
        this.headerService = headerService;
        this.centerSummaryService = centerSummaryService;
        this.recruitmentCenterListService = recruitmentCenterListService;
        this.siteFilterPreferenceService = siteFilterPreferenceService;
        this.sitesService = sitesService;
        this._centerMonitorList = [];
        this._regionMonitorList = {};
        this._countryMonitorList = {};
        this.filterHasBeenChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.filterHasBeenChanged$ = this.filterHasBeenChanged.asObservable();
    }
    Object.defineProperty(SiteFilterService.prototype, "selectedGeography", {
        get: function () {
            // return this.getGeographyKey();
            return this.siteFilterPreferenceService.getSitesFilterPreference(_app_constant__WEBPACK_IMPORTED_MODULE_3__["FILTER_PREFERENCES"].GEOGRAPHY);
        },
        /*
         * getter and setter of last selected value of filter control.
         * These methods are used to get last preference value from session storage and
         * also it is used to set lasted preference value into session storage
         */
        set: function (geography) {
            // this.setGeographyKey(geography);
            this.siteFilterPreferenceService.setSitesFilterPreference(_app_constant__WEBPACK_IMPORTED_MODULE_3__["FILTER_PREFERENCES"].GEOGRAPHY, JSON.stringify(geography));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SiteFilterService.prototype, "selectedCohort", {
        get: function () {
            // return this.getCohortKey();
            return this.siteFilterPreferenceService.getSitesFilterPreference(_app_constant__WEBPACK_IMPORTED_MODULE_3__["FILTER_PREFERENCES"].COHORT);
        },
        set: function (cohortKey) {
            // this.setCohortKey(cohortKey);
            this.siteFilterPreferenceService.setSitesFilterPreference(_app_constant__WEBPACK_IMPORTED_MODULE_3__["FILTER_PREFERENCES"].COHORT, cohortKey);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SiteFilterService.prototype, "selectedMonitor", {
        get: function () {
            // return this.getMonitorKey();
            return this.siteFilterPreferenceService.getSitesFilterPreference(_app_constant__WEBPACK_IMPORTED_MODULE_3__["FILTER_PREFERENCES"].MONITOR);
        },
        set: function (monitorKey) {
            // this.setMonitorKey(monitorKey);
            this.siteFilterPreferenceService.setSitesFilterPreference(_app_constant__WEBPACK_IMPORTED_MODULE_3__["FILTER_PREFERENCES"].MONITOR, monitorKey);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SiteFilterService.prototype, "selectedRandomizationKey", {
        get: function () {
            // return this.getRandomizationKey();
            return this.siteFilterPreferenceService.getSitesFilterPreference(_app_constant__WEBPACK_IMPORTED_MODULE_3__["FILTER_PREFERENCES"].RANDOMIZATION);
        },
        set: function (randomization_key) {
            // this.setRandomizationKey(randomization_key);
            this.siteFilterPreferenceService.setSitesFilterPreference(_app_constant__WEBPACK_IMPORTED_MODULE_3__["FILTER_PREFERENCES"].RANDOMIZATION, randomization_key);
        },
        enumerable: true,
        configurable: true
    });
    SiteFilterService.prototype.clearGridFilters = function () {
        this.siteFilterPreferenceService.clearGridFilterPreferences();
    };
    /********************* Finish *********************/
    SiteFilterService.prototype.setGeographyData = function () {
        return this.recruitmentCenterListService.getDataObservable();
    };
    SiteFilterService.prototype.setCohortData = function () {
        return this.headerService.studySummary;
    };
    /**
     *  This is method is used to transform and return geography dropdown data
     */
    SiteFilterService.prototype.transformGeographyData = function (geoListDetails) {
        var geoList = [];
        geoList = geoListDetails.map(function (geo) {
            return {
                key: geo.geographyKey,
                level: geo.geographyLevel
            };
        });
        return geoList;
    };
    /**
     *  This method is called when grid data has been changed.
     */
    SiteFilterService.prototype.gridDataHasBeenChanged = function () {
        return this.sitesService.gridDataHasBeenChanged$;
    };
    /**
     *  This is method is used to transform and return cohort dropdown data
     */
    SiteFilterService.prototype.transformCohortData = function (geoListDetails) {
        var cohorList = [];
        var geoList = geoListDetails.geoList && geoListDetails.geoList.geography ? [].concat(geoListDetails.geoList.geography) : [];
        var geoListWithcohort = geoList.filter(function (geo) { return geo.geographyLevel === _app_constant__WEBPACK_IMPORTED_MODULE_3__["GEOGRAPHY_LEVEL"].WORLDWIDE; });
        var cohortData = geoListWithcohort.length > 0 ? geoListWithcohort[0] : [];
        cohorList = this.getCohortList(cohortData);
        return cohorList;
    };
    SiteFilterService.prototype.getCohortList = function (cohortData) {
        var cohortOptionsList = [];
        var cohortCategories = this.siteResourceService.getCohortCategories;
        var groupingDropDownResource = this.siteResourceService.getCohortDropDownResource;
        if (cohortData.cohortList && cohortData.cohortList.cohort) {
            var cohortDataList = cohortData.cohortList && cohortData.cohortList.cohort ? [].concat(cohortData.cohortList.cohort) : [];
            if (cohortDataList.length > 0) {
                cohortDataList.map(function (data) {
                    var tooltip = '';
                    if (data.isInPlan === _app_constant__WEBPACK_IMPORTED_MODULE_3__["NO"] && !data.cohortName && data.cohortId !== _app_constant__WEBPACK_IMPORTED_MODULE_3__["UNMAPPED_COHORT"] && data.isInSource === _app_constant__WEBPACK_IMPORTED_MODULE_3__["YES"]) {
                        var cohortObj = cohortCategories.find(function (index) { return index.name === groupingDropDownResource.unmapped_actual_cohort; });
                        if (!data.cohortName) {
                            data.cohortName = data.cohortId;
                            data.cohortKey = data.studyCohortKey;
                        }
                        tooltip = data.cohortName;
                        cohortObj.options.push({ value: data.cohortKey, viewValue: data.cohortName, tooltip: tooltip });
                    }
                    else if (data.isInPlan === _app_constant__WEBPACK_IMPORTED_MODULE_3__["YES"] && data.cohortId !== _app_constant__WEBPACK_IMPORTED_MODULE_3__["UNMAPPED_COHORT"]) {
                        var cohortObj = cohortCategories.find(function (index) { return index.name === groupingDropDownResource.mapped_planned_cohort; });
                        tooltip = data.cohortName;
                        cohortObj.options.push({ value: data.cohortKey, viewValue: data.cohortName, tooltip: tooltip });
                    }
                    else if (data.isInPlan === _app_constant__WEBPACK_IMPORTED_MODULE_3__["YES"] && data.cohortId === _app_constant__WEBPACK_IMPORTED_MODULE_3__["UNMAPPED_COHORT"]) {
                        var cohortObj = cohortCategories.find(function (index) { return index.name === groupingDropDownResource.unmapped_planned_cohort; });
                        tooltip = data.cohortName;
                        cohortObj.options.push({ value: data.cohortKey, viewValue: data.cohortName, tooltip: tooltip });
                    }
                    else if (data.isInPlan === _app_constant__WEBPACK_IMPORTED_MODULE_3__["NO"] && data.cohortId !== _app_constant__WEBPACK_IMPORTED_MODULE_3__["UNMAPPED_COHORT"]) {
                        var cohortObj = cohortCategories.find(function (index) { return index.name === groupingDropDownResource.mapped_unplanned_cohort; });
                        tooltip = data.cohortName;
                        cohortObj.options.push({ value: data.cohortKey, viewValue: data.cohortName, tooltip: tooltip });
                    }
                    else { }
                });
            }
        }
        cohortOptionsList = cohortCategories.filter(function (items) {
            return items.options.length > 0;
        });
        return cohortOptionsList;
    };
    /**
     *  This is method is used to set country and region vice monitor list from center summary.
     *  @example
     *  @centerSummaryData center summary data
     */
    SiteFilterService.prototype.setCenterMonitorList = function (centerSummaryData) {
        var countryMonitorList = {};
        var regionMonitorList = {};
        var allMonitorList = [];
        if (centerSummaryData && centerSummaryData.centerThumbnail) {
            var centerMonitorList = centerSummaryData.centerThumbnail;
            centerMonitorList.forEach(function (item) {
                var cohortMonitorList = item.centerMonitorList && item.centerMonitorList.centerMonitor
                    ? [].concat(item.centerMonitorList.centerMonitor) : [];
                if (cohortMonitorList
                    && cohortMonitorList.length > 0) {
                    if (countryMonitorList[item.country]) {
                        countryMonitorList[item.country] = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](countryMonitorList[item.country], cohortMonitorList);
                    }
                    else {
                        countryMonitorList[item.country] = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](cohortMonitorList);
                    }
                    if (regionMonitorList[item.region]) {
                        regionMonitorList[item.region] = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](regionMonitorList[item.region], cohortMonitorList);
                    }
                    else {
                        regionMonitorList[item.region] = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](cohortMonitorList);
                    }
                    if (allMonitorList.length > 0) {
                        allMonitorList = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](allMonitorList, cohortMonitorList);
                    }
                    else {
                        allMonitorList = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](cohortMonitorList);
                    }
                }
            });
            this._countryMonitorList = countryMonitorList; // country vice monitor list
            this._regionMonitorList = regionMonitorList; // region vice monitor list
            this._centerMonitorList = allMonitorList; // region and country vice monitor list
        }
    };
    /**
     * This method is used to set monitor data.
     * It works for default WW selection and Onchange of geography dropdown.
     */
    SiteFilterService.prototype.getMonitorData = function (selectedGeographyObj) {
        var monitorList = [];
        if (this._centerMonitorList && this._centerMonitorList.length > 0) {
            var filteredCenterList = this.filterMonitorList(selectedGeographyObj);
            if (filteredCenterList.length > 0) {
                monitorList = filteredCenterList.sort(function (a, b) { return a.viewValue.localeCompare(b.viewValue); });
            }
        }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"]([this.getDefaultValue(this.sitesFilterControlResources().sites_monitor_selectAll)], monitorList);
    };
    SiteFilterService.prototype.filterMonitorList = function (selectedGeographyObj) {
        var filterList = [];
        if (this._centerMonitorList && this._centerMonitorList.length > 0) {
            if (!selectedGeographyObj) {
                filterList = this.transformMonitorData(this._centerMonitorList);
            }
            else {
                var selectedMonitorList = [];
                if (selectedGeographyObj.code !== _app_constant__WEBPACK_IMPORTED_MODULE_3__["GEOGRAPHY_LEVEL"].WORLDWIDE && !selectedGeographyObj.children) {
                    selectedMonitorList = this._countryMonitorList[selectedGeographyObj.name] ?
                        this._countryMonitorList[selectedGeographyObj.name] : '';
                }
                else if (selectedGeographyObj.code !== _app_constant__WEBPACK_IMPORTED_MODULE_3__["GEOGRAPHY_LEVEL"].WORLDWIDE && selectedGeographyObj.children) {
                    selectedMonitorList = this._regionMonitorList[selectedGeographyObj.name] ?
                        this._regionMonitorList[selectedGeographyObj.name] : '';
                }
                else {
                    selectedMonitorList = this._centerMonitorList;
                }
                if (selectedMonitorList.length > 0) {
                    filterList = this.transformMonitorData(selectedMonitorList);
                }
            }
        }
        return filterList;
    };
    SiteFilterService.prototype.transformMonitorData = function (monitorList) {
        var MList = [];
        var checkDupMonitorList = [];
        for (var key in monitorList) {
            if (monitorList.hasOwnProperty(key)) {
                var monitor = monitorList[key];
                /***check for duplication of monitor ***/
                if (checkDupMonitorList.indexOf(monitor.monitorKey) === -1) {
                    MList.push(this.getMonitor(monitor));
                    checkDupMonitorList.push(monitor.monitorKey);
                }
            }
        }
        return MList;
    };
    /**
     * This method is used to return modal data of monitor dropdown
     */
    SiteFilterService.prototype.getMonitor = function (monitor) {
        return {
            value: monitor.monitorKey.toString(),
            viewValue: monitor.monitorName,
            disabled: false
        };
    };
    SiteFilterService.prototype.getCenterSummaryService = function () {
        return this.centerSummaryService.getDataObservable();
    };
    /**
     * This method is used to set select All resource of filter controls.
     */
    SiteFilterService.prototype.getDefaultValue = function (defaultValueResource) {
        return { value: _app_constant__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_SELECTED"], viewValue: defaultValueResource, disabled: false };
    };
    /**
     * This method is used to return modal data of randomization dropdown.
     */
    SiteFilterService.prototype.getRandomizationData = function () {
        return this.siteResourceService.sitesRandomizationOptionResources;
    };
    /**
     * This method is used to return all sites filter component resources.
     * @returns
     * {geography: geography,
     * monitor: monitor,
     * cohort: cohort,
     * randomization:randomization};
     */
    SiteFilterService.prototype.sitesFilterControlResources = function () {
        return this.siteResourceService.sitesFilterControlResources;
    };
    SiteFilterService.ctorParameters = function () { return [
        { type: _shared_service_site_resource_service__WEBPACK_IMPORTED_MODULE_5__["SiteResourceService"] },
        { type: _header_header_service__WEBPACK_IMPORTED_MODULE_4__["HeaderService"] },
        { type: _center_summary_center_summary_service__WEBPACK_IMPORTED_MODULE_6__["CenterSummaryService"] },
        { type: _recruitment_center_list_recruitment_center_list_service__WEBPACK_IMPORTED_MODULE_7__["RecruitmentCenterListService"] },
        { type: _shared_service_site_filter_preference_service__WEBPACK_IMPORTED_MODULE_8__["SiteFilterPreferenceService"] },
        { type: _sites_service__WEBPACK_IMPORTED_MODULE_9__["SitesService"] }
    ]; };
    SiteFilterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_site_resource_service__WEBPACK_IMPORTED_MODULE_5__["SiteResourceService"],
            _header_header_service__WEBPACK_IMPORTED_MODULE_4__["HeaderService"],
            _center_summary_center_summary_service__WEBPACK_IMPORTED_MODULE_6__["CenterSummaryService"],
            _recruitment_center_list_recruitment_center_list_service__WEBPACK_IMPORTED_MODULE_7__["RecruitmentCenterListService"],
            _shared_service_site_filter_preference_service__WEBPACK_IMPORTED_MODULE_8__["SiteFilterPreferenceService"],
            _sites_service__WEBPACK_IMPORTED_MODULE_9__["SitesService"]])
    ], SiteFilterService);
    return SiteFilterService;
}());



/***/ }),

/***/ "./src/app/sites/sites-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/sites/sites-routing.module.ts ***!
  \***********************************************/
/*! exports provided: SitesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitesRoutingModule", function() { return SitesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sites_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sites.component */ "./src/app/sites/sites.component.ts");
/* harmony import */ var so_common_library__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! so-common-library */ "../../dist/so-common-library/fesm5/so-common-library.js");
/* harmony import */ var environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! environments/environment.prod */ "../../environments/environment.prod.ts");
/* harmony import */ var common_library__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common-library */ "../../dist/common-library/fesm5/common-library.js");







var routes = [
    {
        path: '',
        component: _sites_component__WEBPACK_IMPORTED_MODULE_3__["SitesComponent"],
        canActivate: [so_common_library__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        data: { 'loginUrl': environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["environment"].login_url, 'moduleId': 5 },
        children: [
            {
                path: 'enrollment-details',
                loadChildren: function () { return Promise.all(/*! import() | enrollment-details-enrollment-details-module */[__webpack_require__.e("default~data-management-details-data-management-details-module~enrollment-details-enrollment-details-module"), __webpack_require__.e("enrollment-details-enrollment-details-module")]).then(__webpack_require__.bind(null, /*! ./enrollment-details/enrollment-details.module */ "./src/app/sites/enrollment-details/enrollment-details.module.ts")).then(function (m) { return m.EnrollmentDetailsModule; }); },
                //  data: { preload: true }
                data: { preload: true }
            },
            {
                path: 'enrollment-scorecard',
                loadChildren: function () { return __webpack_require__.e(/*! import() | enrollment-scorecard-enrollment-scorecard-module */ "enrollment-scorecard-enrollment-scorecard-module").then(__webpack_require__.bind(null, /*! ./enrollment-scorecard/enrollment-scorecard.module */ "./src/app/sites/enrollment-scorecard/enrollment-scorecard.module.ts")).then(function (m) { return m.EnrollmentScorecardModule; }); },
                data: { preload: true, helpId: common_library__WEBPACK_IMPORTED_MODULE_6__["HELP_ID_CONSTANTS"].SITE_SCORECARD }
            },
            {
                path: 'data-management-details',
                loadChildren: function () { return Promise.all(/*! import() | data-management-details-data-management-details-module */[__webpack_require__.e("default~data-management-details-data-management-details-module~enrollment-details-enrollment-details-module"), __webpack_require__.e("data-management-details-data-management-details-module")]).then(__webpack_require__.bind(null, /*! ./data-management-details/data-management-details.module */ "./src/app/sites/data-management-details/data-management-details.module.ts"))
                    .then(function (m) { return m.DataManagementDetailsModule; }); },
                data: { preload: true, helpId: common_library__WEBPACK_IMPORTED_MODULE_6__["HELP_ID_CONSTANTS"].SITE_DATA_MANAGMENT }
            }
        ]
    }
];
var SitesRoutingModule = /** @class */ (function () {
    function SitesRoutingModule() {
    }
    SitesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SitesRoutingModule);
    return SitesRoutingModule;
}());



/***/ }),

/***/ "./src/app/sites/sites.component.scss":
/*!********************************************!*\
  !*** ./src/app/sites/sites.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hcHA0L3NyYy9hcHAvc2l0ZXMvc2l0ZXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/sites/sites.component.ts":
/*!******************************************!*\
  !*** ./src/app/sites/sites.component.ts ***!
  \******************************************/
/*! exports provided: SitesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitesComponent", function() { return SitesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var _shared_model_site_sub_tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/model/site-sub-tab */ "./src/app/shared/model/site-sub-tab.ts");
/* harmony import */ var _sites_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sites.service */ "./src/app/sites/sites.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");








// import { CenterSummaryService } from './center-summary/center-summary.service';
// import { RecruitmentCenterListService  } from './recruitment-center-list/recruitment-center-list.service';
var SitesComponent = /** @class */ (function () {
    function SitesComponent(sitesService, route) {
        this.sitesService = sitesService;
        this.route = route;
        this.menuOption = [];
        this.hideRandomizationFilter = false;
        this.isCohortStudy = false;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
    }
    SitesComponent.prototype.ngOnInit = function () {
        var studyID = this.sitesService.getLastVisitedStudyKey();
        this.loadSiteData(studyID);
        this.siteSubTab = new _shared_model_site_sub_tab__WEBPACK_IMPORTED_MODULE_4__["SiteSubTab"]();
        this.siteSubTab.tabItems = this.sitesService.getTabItems();
        this.selectedItem = this.sitesService.getTabItem();
        this.getMenuOptions();
        this.redirectToTab();
        this.checkIscohortStudy();
    };
    /**
      * This method is used to redirect to default enrollment details if last selected tab is not set
      * If last selected tab is set then it should be redirect to it.
      */
    SitesComponent.prototype.redirectToTab = function () {
        var _this = this;
        if (this.selectedItem) {
            var routePath_1 = this.sitesService.lastSelectedTabKey ? this.sitesService.lastSelectedTabKey : this.selectedItem.routePath;
            this.route.navigate([
                '/sites',
                routePath_1
            ]).then(function (data) {
                _this.sitesService.lastSelectedTabKey = routePath_1;
                _this.selectedItem = _this.siteSubTab.tabItems.find(function (item) { return item.routePath === routePath_1; });
                _this.hideRandomizationFilter = routePath_1 === _app_constant__WEBPACK_IMPORTED_MODULE_3__["PAGE_IDS"].DATA_MANAGEMENT_DETAILS;
            });
        }
    };
    /**
      * Action After clicked on sites subtab
      * then it will load respective modules
      */
    SitesComponent.prototype.onTabClicked = function (event) {
        var _this = this;
        if (event !== undefined && event !== null && event.routePath !== undefined && event.routePath !== null) {
            this.route.navigate([
                '/sites',
                event.routePath
            ]).then(function (data) {
                _this.sitesService.lastSelectedTabKey = event.routePath;
                _this.hideRandomizationFilter = event.routePath === _app_constant__WEBPACK_IMPORTED_MODULE_3__["PAGE_IDS"].DATA_MANAGEMENT_DETAILS;
                // this.checkIscohortStudy();
            });
        }
    };
    /**
    * Gets menu options
    */
    SitesComponent.prototype.getMenuOptions = function () {
        this.sitesService.setMenuOption();
        this.menuOption = this.sitesService.options;
    };
    SitesComponent.prototype.checkIscohortStudy = function () {
        var _this = this;
        var actionParam = {
            endPoint: true
        };
        this.sitesService.getStudytags(actionParam).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.subscriptions)).subscribe(function (items) {
            var studyID = _this.sitesService.getLastVisitedStudyKey();
            _this.isCohortStudy = _this.sitesService.isCohortStudy(studyID) && !_this.hideRandomizationFilter;
        });
    };
    /**
      * onStudyChanged is called when change study from study dropdown.
      * @param event
      */
    SitesComponent.prototype.onStudyChanged = function (event) {
        console.log('Event: Study changed : ', event);
        if (event && event.option && event.option.value) {
            this.isCohortStudy = this.sitesService.isCohortStudy(event.option.value.key);
            this.loadSiteData(event.option.value.key);
            this.sitesService.setStudyChangeData(event.option.value.key);
        }
        else {
            throw Error('Study event data is missing');
        }
    };
    /**
      * This method used to call center cummary and recruiterList Api.
      * @param studyID
      */
    SitesComponent.prototype.loadSiteData = function (studyID) {
        this.sitesService.getSiteData(studyID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.subscriptions)).subscribe(function (item) {
        });
    };
    SitesComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.next();
        this.subscriptions.complete();
    };
    SitesComponent.ctorParameters = function () { return [
        { type: _sites_service__WEBPACK_IMPORTED_MODULE_5__["SitesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    SitesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ctos-sites',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sites.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/sites/sites.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sites.component.scss */ "./src/app/sites/sites.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sites_service__WEBPACK_IMPORTED_MODULE_5__["SitesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SitesComponent);
    return SitesComponent;
}());



/***/ }),

/***/ "./src/app/sites/sites.module.ts":
/*!***************************************!*\
  !*** ./src/app/sites/sites.module.ts ***!
  \***************************************/
/*! exports provided: SitesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitesModule", function() { return SitesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _sites_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sites-routing.module */ "./src/app/sites/sites-routing.module.ts");
/* harmony import */ var _sites_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sites.component */ "./src/app/sites/sites.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var common_library__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common-library */ "../../dist/common-library/fesm5/common-library.js");
/* harmony import */ var so_common_library__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! so-common-library */ "../../dist/so-common-library/fesm5/so-common-library.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _sites_filter_sites_filter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sites-filter/sites-filter.component */ "./src/app/sites/sites-filter/sites-filter.component.ts");
/* harmony import */ var _sites_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sites.service */ "./src/app/sites/sites.service.ts");
/* harmony import */ var _sites_filter_sites_filter_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sites-filter/sites-filter.service */ "./src/app/sites/sites-filter/sites-filter.service.ts");
/* harmony import */ var _grid_filter_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./grid-filter.service */ "./src/app/sites/grid-filter.service.ts");














var SitesModule = /** @class */ (function () {
    function SitesModule() {
    }
    SitesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_sites_component__WEBPACK_IMPORTED_MODULE_4__["SitesComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _sites_filter_sites_filter_component__WEBPACK_IMPORTED_MODULE_10__["SitesFilterComponent"]],
            providers: [_sites_service__WEBPACK_IMPORTED_MODULE_11__["SitesService"], _sites_filter_sites_filter_service__WEBPACK_IMPORTED_MODULE_12__["SiteFilterService"], _grid_filter_service__WEBPACK_IMPORTED_MODULE_13__["GridFilterService"], so_common_library__WEBPACK_IMPORTED_MODULE_7__["StudySummaryService"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _sites_routing_module__WEBPACK_IMPORTED_MODULE_3__["SitesRoutingModule"],
                so_common_library__WEBPACK_IMPORTED_MODULE_7__["SoCommonLibraryModule"],
                common_library__WEBPACK_IMPORTED_MODULE_6__["CommonLibraryModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                common_library__WEBPACK_IMPORTED_MODULE_6__["CommonAngularMaterialModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
            ],
            exports: [_sites_component__WEBPACK_IMPORTED_MODULE_4__["SitesComponent"]]
        })
    ], SitesModule);
    return SitesModule;
}());



/***/ }),

/***/ "./src/app/sites/sites.service.ts":
/*!****************************************!*\
  !*** ./src/app/sites/sites.service.ts ***!
  \****************************************/
/*! exports provided: SitesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitesService", function() { return SitesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var common_library__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! common-library */ "../../dist/common-library/fesm5/common-library.js");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var _app_shared_model_menus_option_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/model/menus-option.model */ "../app1/src/app/shared/model/menus-option.model.ts");
/* harmony import */ var _shared_service_site_resource_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/service/site-resource.service */ "./src/app/shared/service/site-resource.service.ts");
/* harmony import */ var _header_header_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../header/header.service */ "./src/app/header/header.service.ts");
/* harmony import */ var _center_summary_center_summary_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./center-summary/center-summary.service */ "./src/app/sites/center-summary/center-summary.service.ts");
/* harmony import */ var so_common_library__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! so-common-library */ "../../dist/so-common-library/fesm5/so-common-library.js");
/* harmony import */ var _recruitment_center_list_recruitment_center_list_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./recruitment-center-list/recruitment-center-list.service */ "./src/app/sites/recruitment-center-list/recruitment-center-list.service.ts");
/* harmony import */ var _shared_service_site_filter_preference_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/service/site-filter-preference.service */ "./src/app/shared/service/site-filter-preference.service.ts");













var SitesService = /** @class */ (function () {
    function SitesService(localeAppResourcesService, siteResourceService, headerService, centerSummaryService, recruitmentCenterListService, studySummaryService, studyListService, appDataService, siteFilterPreferenceService) {
        this.localeAppResourcesService = localeAppResourcesService;
        this.siteResourceService = siteResourceService;
        this.headerService = headerService;
        this.centerSummaryService = centerSummaryService;
        this.recruitmentCenterListService = recruitmentCenterListService;
        this.studySummaryService = studySummaryService;
        this.studyListService = studyListService;
        this.appDataService = appDataService;
        this.siteFilterPreferenceService = siteFilterPreferenceService;
        this.studySummaryData = {};
        this.setResources();
        this.siteSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.studyChangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.gridDataHasBeenChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.gridDataHasBeenChanged$ = this.gridDataHasBeenChanged.asObservable();
    }
    Object.defineProperty(SitesService.prototype, "options", {
        get: function () {
            return this._options;
        },
        set: function (v) {
            this._options = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SitesService.prototype, "resources", {
        get: function () {
            return this._resources;
        },
        set: function (v) {
            this._resources = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SitesService.prototype, "lastSelectedTabKey", {
        get: function () {
            return this.getLastSelectedTabKey();
        },
        set: function (tabKey) {
            this.setLastSelectedTabKey(tabKey);
        },
        enumerable: true,
        configurable: true
    });
    SitesService.prototype.getResource = function (resource) {
        return this.localeAppResourcesService.getResource(resource);
    };
    /**
    * @returns [{tabLabels.ENROLLMENT_DETAILS},
    * {tabLabels.ENROLLMENT_SCORECARD},
    * {tabLabels.DATA_MANAGEMENT_DETAILS}
    */
    SitesService.prototype.getTabItems = function () {
        // tslint:disable-next-line:prefer-const
        var tabItems = new Array();
        var tabLabels = this.getTabLabels();
        var item = {
            label: tabLabels.ENROLLMENT_DETAILS,
            routePath: _app_constant__WEBPACK_IMPORTED_MODULE_5__["PAGE_IDS"].ENROLLMENT_DETAILS,
            enable: true
        };
        tabItems.push(item);
        item = {
            label: tabLabels.ENROLLMENT_SCORECARD,
            routePath: _app_constant__WEBPACK_IMPORTED_MODULE_5__["PAGE_IDS"].ENROLLMENT_SCORECARD,
            enable: true
        };
        tabItems.push(item);
        if (this.appDataService.appDataResponse.appMetadata.isDMAvailable) {
            console.log('appDataService', this.appDataService.appDataResponse.appMetadata.isDMAvailable);
            item = {
                label: tabLabels.DATA_MANAGEMENT_DETAILS,
                routePath: _app_constant__WEBPACK_IMPORTED_MODULE_5__["PAGE_IDS"].DATA_MANAGEMENT_DETAILS,
                enable: true
            };
            tabItems.push(item);
        }
        return tabItems;
    };
    SitesService.prototype.getTabItem = function () {
        var tabLabels = this.getTabLabels();
        return {
            enable: true,
            label: tabLabels.ENROLLMENT_DETAILS,
            routePath: _app_constant__WEBPACK_IMPORTED_MODULE_5__["PAGE_IDS"].ENROLLMENT_DETAILS
        };
    };
    /**
     * @returns
     * {PLAN_PROPERTIES: ENROLLMENT_DETAILS,
     * COUNTRIES: ENROLLMENT_SCORECARD,
     * RATE_ADJUSTMENTS: DATA_MANAGEMENT_DETAILS};
     */
    SitesService.prototype.getTabLabels = function () {
        return this.siteResourceService.siteSubTabResource;
    };
    SitesService.prototype.setOptions = function () {
        this.options = [];
        this.options.push(new _app_shared_model_menus_option_model__WEBPACK_IMPORTED_MODULE_6__["MenusOption"](this.resources.EXPANDGRID, 'Refresh'));
    };
    SitesService.prototype.setMenuOption = function () {
        this.setOptions();
    };
    SitesService.prototype.getStudytags = function (actionParam) {
        return this.headerService.getStudytags(actionParam);
    };
    SitesService.prototype.isCohortStudy = function (studyID) {
        return this.headerService.isCohortStudy(studyID);
    };
    SitesService.prototype.getLastVisitedStudyKey = function () {
        return this.headerService.getLastVisitedStudyKey();
    };
    SitesService.prototype.setResources = function () {
        var actionResource = this.siteResourceService.actionResource;
        this.resources = {
            EXPANDGRID: actionResource.EXPANDGRID,
            COLLAPSEGRID: actionResource.COLLAPSEGRID,
            PRINT: actionResource.PRINT,
            COPY: actionResource.COPY,
            EXPORT: actionResource.EXPORT,
            MANGECOUNTRYGRID: actionResource.MANGECOUNTRYGRID,
            MANAGECOUNTRYGRIDEDIT: actionResource.MANAGECOUNTRYGRIDEDIT
        };
    };
    /**** Setter and Getter of last selected tab in session storage *****/
    SitesService.prototype.setLastSelectedTabKey = function (value) {
        sessionStorage.setItem('last_selected_site_sub_key', value);
    };
    SitesService.prototype.getLastSelectedTabKey = function () {
        return sessionStorage.getItem('last_selected_site_sub_key');
    };
    /**
     * This method used to call to center Summary list and recruitement list and study Summary data
     * After getting data, its set behaviour subject and it is going access in Enrollment details grid service
     * and filter Service.
     * Also it reset previous filter preferences
     * @param { Number } StudyKey
     */
    SitesService.prototype.getSiteData = function (studyKey) {
        var _this = this;
        if (!common_library__WEBPACK_IMPORTED_MODULE_4__["AppUtil"].isDefined(studyKey)) {
            throw Error('Study Key missing : Can not get site data without study key');
            return;
        }
        this.resetFilters(studyKey);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(this.centerSummaryService.getCenterSummary(studyKey), this.recruitmentCenterListService.getRecruitmentCenterList(studyKey), this.studySummaryService.getStudySummary(studyKey)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            _this.setSiteData(response);
            return response;
        }));
    };
    /**
     * This method used to reset previous filter preferences.
     * @param { number } studyKey
     */
    SitesService.prototype.resetFilters = function (studyKey) {
        var lastVisitedStudyID = parseInt(this.siteFilterPreferenceService.getSitesFilterPreference(_app_constant__WEBPACK_IMPORTED_MODULE_5__["FILTER_PREFERENCES"].LASTVISITED_STUDYKEY), 10);
        if (lastVisitedStudyID && lastVisitedStudyID !== studyKey) {
            this.gridDataHasBeenChanged.next(true);
            this.siteFilterPreferenceService.setSitesFilterPreference(_app_constant__WEBPACK_IMPORTED_MODULE_5__["FILTER_PREFERENCES"].LASTVISITED_STUDYKEY, studyKey.toString());
        }
        else {
            this.siteFilterPreferenceService.setSitesFilterPreference(_app_constant__WEBPACK_IMPORTED_MODULE_5__["FILTER_PREFERENCES"].LASTVISITED_STUDYKEY, studyKey.toString());
        }
    };
    SitesService.prototype.getDataObservable = function () {
        return this.siteSubject.asObservable();
    };
    SitesService.prototype.getStudyChangeObservable = function () {
        return this.studyChangeSubject.asObservable();
    };
    SitesService.prototype.setSiteData = function (data) {
        this.data = data;
        this.siteSubject.next(data);
    };
    SitesService.prototype.setStudyChangeData = function (data) {
        this.studyChangeSubject.next(data);
    };
    SitesService.prototype.getReportingPeriod = function (studyKey) {
        var reportingPriodFreq = this.studyListService.getStudyInfoByKey(studyKey);
        var reportingFreq = {};
        if (reportingPriodFreq) {
            reportingFreq = this.appDataService.getReportingFreqDefByName(reportingPriodFreq.reportingPeriod);
        }
        return { reportingFreq: reportingFreq.Value, reportingFreqLabel: reportingPriodFreq.reportingPeriod };
    };
    SitesService.ctorParameters = function () { return [
        { type: common_library__WEBPACK_IMPORTED_MODULE_4__["LocaleAppResourcesService"] },
        { type: _shared_service_site_resource_service__WEBPACK_IMPORTED_MODULE_7__["SiteResourceService"] },
        { type: _header_header_service__WEBPACK_IMPORTED_MODULE_8__["HeaderService"] },
        { type: _center_summary_center_summary_service__WEBPACK_IMPORTED_MODULE_9__["CenterSummaryService"] },
        { type: _recruitment_center_list_recruitment_center_list_service__WEBPACK_IMPORTED_MODULE_11__["RecruitmentCenterListService"] },
        { type: so_common_library__WEBPACK_IMPORTED_MODULE_10__["StudySummaryService"] },
        { type: so_common_library__WEBPACK_IMPORTED_MODULE_10__["StudyListService"] },
        { type: so_common_library__WEBPACK_IMPORTED_MODULE_10__["AppDataService"] },
        { type: _shared_service_site_filter_preference_service__WEBPACK_IMPORTED_MODULE_12__["SiteFilterPreferenceService"] }
    ]; };
    SitesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [common_library__WEBPACK_IMPORTED_MODULE_4__["LocaleAppResourcesService"],
            _shared_service_site_resource_service__WEBPACK_IMPORTED_MODULE_7__["SiteResourceService"],
            _header_header_service__WEBPACK_IMPORTED_MODULE_8__["HeaderService"],
            _center_summary_center_summary_service__WEBPACK_IMPORTED_MODULE_9__["CenterSummaryService"],
            _recruitment_center_list_recruitment_center_list_service__WEBPACK_IMPORTED_MODULE_11__["RecruitmentCenterListService"],
            so_common_library__WEBPACK_IMPORTED_MODULE_10__["StudySummaryService"],
            so_common_library__WEBPACK_IMPORTED_MODULE_10__["StudyListService"],
            so_common_library__WEBPACK_IMPORTED_MODULE_10__["AppDataService"],
            _shared_service_site_filter_preference_service__WEBPACK_IMPORTED_MODULE_12__["SiteFilterPreferenceService"]])
    ], SitesService);
    return SitesService;
}());



/***/ })

}]);
//# sourceMappingURL=app-sites-sites-module.js.map