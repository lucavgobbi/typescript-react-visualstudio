"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var DangerAlert = (function (_super) {
    __extends(DangerAlert, _super);
    function DangerAlert() {
        _super.apply(this, arguments);
    }
    DangerAlert.prototype.render = function () {
        return React.createElement("div", {className: "alert alert-danger"}, this.props.text);
    };
    return DangerAlert;
}(React.Component));
exports.DangerAlert = DangerAlert;
var SuccessAlert = (function (_super) {
    __extends(SuccessAlert, _super);
    function SuccessAlert() {
        _super.apply(this, arguments);
    }
    SuccessAlert.prototype.render = function () {
        return React.createElement("div", {className: "alert alert-success"}, this.props.text);
    };
    return SuccessAlert;
}(React.Component));
exports.SuccessAlert = SuccessAlert;
//# sourceMappingURL=alert.js.map