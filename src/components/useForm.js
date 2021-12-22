import {useState} from "react";
import {makeStyles} from "@material-ui/core";

export const useForm = initialValues => {

    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleInputChange = e => {
        const {name, value} = e.target;

        // console.log(e.target);

        setValues({
            ...values,
            [name]: value,
        });
    }

    const resetForm = () => {
        setValues(initialValues);
        setErrors({})
    }

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm,
    };

}

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1),
        }
    },
}));

export const Form = props => {

    const classes = useStyles();
    const {children, ...other} = props;


    return (
        <form className={classes.root} autoComplete="off" {...other}>
            {props.children}
        </form>
    );
}