import React from "react";

import PageHeader from "../../components/page-header";
import EmployeeForm from "./employee-form";

import {PeopleOutlineTwoTone as PeopleOutlineTwoToneIcon} from "@material-ui/icons";
import {makeStyles, Paper} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
    },
}));

const Employees = () => {

    const classes = useStyles();

    return (
        <>
            <PageHeader
                title="New Employee"
                subtitle="Form design with validation"
                icon={<PeopleOutlineTwoToneIcon fontSize="large"/>}
            />

            <Paper className={classes.pageContent}>
                <EmployeeForm/>
            </Paper>

        </>
    );

}

export default Employees;