import React, {useState} from "react";

import {Grid} from "@material-ui/core";

import Controls from "../../components/controls/controls";
import {useForm, Form} from "../../components/useForm";

import * as employeeService from "../../services/employeeService";

const genderItems = [
    {id: 'male', title: 'Male'},
    {id: 'female', title: 'Female'},
    {id: 'other', title: 'Other'},
];

const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false,
}

const EmployeeForm = () => {

    const {values, setValues, handleInputChange} = useForm(initialFValues);

    return (
        <Form>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        label="Full Name"
                        name="fullName"
                        onChange={handleInputChange}
                        value={values.fullName}/>

                    <Controls.Input
                        label="Email"
                        name="email"
                        onChange={handleInputChange}
                        value={values.email}/>

                    <Controls.Input
                        label="Mobile"
                        name="mobile"
                        onChange={handleInputChange}
                        value={values.mobile}/>

                    <Controls.Input
                        label="City"
                        name="city"
                        onChange={handleInputChange}
                        value={values.city}/>


                </Grid>

                <Grid item xs={6}>
                    <Controls.RadioGroup
                        name="gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        label="Gender"
                        items={genderItems}
                    />

                    <Controls.Select
                        name="departmentId"
                        label="Department"
                        value={values.departmentId}
                        onChange={handleInputChange}
                        options={employeeService.getDepartmentCollection()}
                    />

                    <Controls.DatePicker
                        name="hireDate"
                        label="Hire Date"
                        value={values.hireDate}
                        onChange={handleInputChange}
                    />

                    <Controls.Checkbox
                        name="isPermanent"
                        label="Permanent Employee"
                        value={values.isPermanent}
                        onChange={handleInputChange}
                    />

                    <div>
                        <Controls.Button
                            type="submit"
                            text="Submit"/>
                        <Controls.Button
                            text="Reset"
                            color="default"
                        />
                    </div>

                </Grid>


            </Grid>
        </Form>
    );
}

export default EmployeeForm;