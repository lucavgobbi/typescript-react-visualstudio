"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Well = (function (_super) {
    __extends(Well, _super);
    function Well() {
        _super.apply(this, arguments);
    }
    Well.prototype.render = function () {
        return React.createElement("div", {className: "well"}, this.props.text);
    };
    return Well;
}(React.Component));
exports.Well = Well;
//# sourceMappingURL=well.js.map