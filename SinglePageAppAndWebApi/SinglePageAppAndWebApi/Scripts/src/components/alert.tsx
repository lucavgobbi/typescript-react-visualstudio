import * as React from "react";

export interface IAlertProp {
     text: string
}

export class DangerAlert extends React.Component<IAlertProp, {}> {
    render() {
        return <div className="alert alert-danger">{this.props.text}</div>;
    }
}

export class SuccessAlert extends React.Component<IAlertProp, {}> {
    render() {
        return <div className="alert alert-success">{this.props.text}</div>;
    }
}