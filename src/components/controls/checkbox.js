import React from 'react'
import {FormControl, FormControlLabel, Checkbox as MuiCheckbox} from '@material-ui/core';

export default function Checkbox(props) {

    const {name, label, value, onChange} = props;

    const convertToDefEventPara = (name, value) => ({
        target: {
            name, value
        }
    })

    const convertToDefEventParam = (e) => {
        const eventLight = {
            target: {
                name,
                value : e.target.checked,
            }
        };
        onChange(eventLight);
    }

    return (
        <FormControl>
            <FormControlLabel
                control={<MuiCheckbox
                    name={name}
                    color="primary"
                    checked={value}
                    // onChange={e => onChange(convertToDefEventPara(name, e.target.checked))}
                    onChange={convertToDefEventParam}
                />}
                label={label}
            />
        </FormControl>
    )
}