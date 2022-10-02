import React from "react";
import { Outlet, Router, Routes } from "react-router-dom";
import Child from "./child";

class Parent extends React.Component {
    render() {
        return (
            <div>
                <h2>Parent</h2>
                <Outlet></Outlet>
            </div>
        )
    }
}

export default Parent;