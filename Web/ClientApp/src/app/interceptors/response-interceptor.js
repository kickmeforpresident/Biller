"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var ResponseInterceptor = /** @class */ (function () {
    function ResponseInterceptor(router) {
        this.router = router;
    }
    ResponseInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(operators_1.map(function (event) {
            if (event instanceof http_1.HttpResponse) {
                // optional work with the response
            }
            return event;
        }, function (err) {
            if (err instanceof http_1.HttpErrorResponse) {
                if (err.status === 401) {
                    _this.redirectToLoginPage();
                }
            }
            return event;
        }));
    };
    ResponseInterceptor.prototype.redirectToLoginPage = function () {
        this.router.navigate(["/login"]);
    };
    return ResponseInterceptor;
}());
exports.ResponseInterceptor = ResponseInterceptor;
//# sourceMappingURL=response-interceptor.js.map