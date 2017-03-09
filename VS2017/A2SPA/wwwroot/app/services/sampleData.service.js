"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var SampleDataService = (function () {
    function SampleDataService(http) {
        this.http = http;
        this.url = 'api/sampleData';
    }
    SampleDataService.prototype.getSampleData = function () {
        return this.http.get(this.url)
            .map(function (resp) { return resp.json(); })
            .catch(this.handleError);
    };
    SampleDataService.prototype.addSampleData = function (testData) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http
            .post(this.url, JSON.stringify(testData), { headers: headers })
            .map(function (resp) { return resp.json(); })
            .catch(this.handleError);
    };
    // from https://angular.io/docs/ts/latest/guide/server-communication.html
    SampleDataService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    return SampleDataService;
}());
SampleDataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SampleDataService);
exports.SampleDataService = SampleDataService;
//# sourceMappingURL=sampleData.service.js.map