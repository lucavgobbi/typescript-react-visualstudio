"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var alert_1 = require("./components/alert");
var well_1 = require("./components/well");
ReactDOM.render(React.createElement("div", null, React.createElement(alert_1.DangerAlert, {text: "OMG, this is dangerous!"}), React.createElement(well_1.Well, {text: "Well well well..."})), document.getElementById("body"));
//# sourceMappingURL=index.js.map