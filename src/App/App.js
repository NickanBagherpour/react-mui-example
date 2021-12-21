import React from "react";

import SideMenu from "../components/side-menu";

import {createMuiTheme, CssBaseline, makeStyles, MuiThemeProvider} from "@material-ui/core";

import Header from "../components/header";
import PageHeader from "../components/page-header";

import {PeopleOutlineTwoTone as PeopleOutlineTwoToneIcon} from "@material-ui/icons";

import './App.css';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#333996",
            light: '#3c44b126'
        },
        secondary: {
            main: "#f83245",
            light: '#f8324526'
        },
        background: {
            default: "#f4f5fd"
        },
    },
    overrides:{
        MuiAppBar:{
            root:{
                transform:'translateZ(0)'
            }
        }
    },
    props:{
        MuiIconButton:{
            disableRipple:true
        }
    }
})

const useStyles = makeStyles({
    appMain: {
        paddingLeft: '320px',
        width: '100%',
    },

});

const App = () => {

    const classes = useStyles();

    return (
        <MuiThemeProvider theme={theme}>
            <SideMenu/>
            <div className={classes.appMain}>
                <Header/>
                <PageHeader
                title = "Page Header"
                subtitle = "Page description"
                icon = {<PeopleOutlineTwoToneIcon fontSize="large"/>}
                />
            </div>
            <CssBaseline />
        </MuiThemeProvider>
    );
};

export default App;
