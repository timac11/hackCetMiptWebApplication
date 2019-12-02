import React from "react";
import {Route, Switch, useParams} from "react-router-dom";
import {firstLevelRouterWithoutId, firstLevelRoutes} from "./RoutesAndComponents";
import Box from "@material-ui/core/Box";
import MainPage from "../../pages/main-page/MainPage";

const getParamsId = () => {
    const params = useParams();
    return params.id
}

export const TreeRootRouter = ({children}) => {

    return <Box>
        <Switch>
            {
                <Route exact path={"/"} component={MainPage}/>
            }
            {
                firstLevelRoutes.map((route, index) => <Route key={index} path={`/${route.name}/:id`}
                                                              component={() => React.createElement(route.component, {id: getParamsId()})}/>)
            }
            {
                firstLevelRouterWithoutId.map((route, index) => (<Route key={index} exact path={`/${route.name}`}
                                                                        component={() => React.createElement(route.component)}/>))
            }
        </Switch>
        {children}
    </Box>;
};
