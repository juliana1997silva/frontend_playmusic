import React from "react";
import { IProps } from "../types";

const PrivateRoute: React.FC<IProps> = ({children}) => {
    return<>{children}</>
}

export default PrivateRoute;