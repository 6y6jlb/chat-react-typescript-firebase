// @flow
import * as React from 'react';
import {AppBar, Button, Grid, Toolbar} from "@material-ui/core";
import {NavLink} from 'react-router-dom';
import {LOGIN_ROUTE} from "../../utils/routes";

type Props = {};
export const NavBar: React.FC<Props> = () => {
    const user = true
    return (
        <AppBar color={"secondary"} position="static">
            <Toolbar>
                <Grid container justify={"flex-end"}>
                    {user
                        ?
                        <NavLink to={LOGIN_ROUTE}>< Button variant={'outlined'}>Login</Button></NavLink>
                        :
                        <Button variant={'outlined'}>Logout</Button>
                    }


                </Grid>

            </Toolbar>
        </AppBar>
    );
};