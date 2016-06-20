import * as React from "react";
import * as ReactDOM from "react-dom";
import { DangerAlert } from "./components/alert";
import { Well } from "./components/well";

ReactDOM.render(
    <div>
        <DangerAlert text="OMG, this is dangerous!"/>
        <Well text="Well well well..."/>
    </div>,
    document.getElementById("body")
);