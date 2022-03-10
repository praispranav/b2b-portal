"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ListLocationComponent = void 0;
var core_1 = require("@angular/core");
var environment_1 = require("src/environments/environment");
var ListLocationComponent = /** @class */ (function () {
    function ListLocationComponent(route, locationService) {
        this.route = route;
        this.locationService = locationService;
        this.location = [];
        this.assetURL = environment_1.environment.apiUrl + '/location/';
    }
    ListLocationComponent.prototype.ngOnInit = function () {
        this.getLocation();
    };
    ListLocationComponent.prototype.navigateToEdit = function () {
        console.log("hello brother");
        this.route.navigate(['/admin/location/edit']);
    };
    ListLocationComponent.prototype.navigateToAdd = function () {
        this.route.navigate(['admin/location/manage']);
    };
    ListLocationComponent.prototype.getLocation = function () {
        var _this = this;
        this.locationService.getLocationList().subscribe(function (res) {
            console.log('location res', res);
            _this.location = res;
        }, function (err) {
            console.log(err);
        });
    };
    ListLocationComponent.prototype.deleteLocation = function (id) {
        var _this = this;
        console.log('Id to Delete', id);
        this.locationService.deleteLocation(id).subscribe(function (response) {
            alert('location deleted');
            _this.getLocation();
        });
    };
    ListLocationComponent = __decorate([
        core_1.Component({
            selector: 'app-list-location',
            templateUrl: './list-location.component.html',
            styleUrls: ['./list-location.component.scss']
        })
    ], ListLocationComponent);
    return ListLocationComponent;
}());
exports.ListLocationComponent = ListLocationComponent;
