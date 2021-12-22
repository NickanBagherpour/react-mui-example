import React from 'react'
import {MuiPickersUtilsProvider, KeyboardDatePicker} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

export default function DatePicker(props) {

    const {name, label, value, onChange} = props

    const convertToDefEventPara = (name, value) => ({
        target: {
            name, value
        }
    })

    const convertToDefEventParam = date => {
        const eventLight = {
            target: {
                name,
                value : date,
            }
        };
        onChange(eventLight);
    }

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker disableToolbar variant="inline" inputVariant="outlined"
                                label={label}
                                format="MMM/dd/yyyy"
                                name={name}
                                value={value}
                // onChange={date => onChange(convertToDefEventPara(name, date))}
                                onChange={convertToDefEventParam}

            />
        </MuiPickersUtilsProvider>
    )
}