import React from 'react'
import { post } from 'axios';
import "./main.css"
import Stepper from "@material-ui/core/Stepper/Stepper";
import Step from "@material-ui/core/Step/Step";
import StepButton from "@material-ui/core/StepButton/StepButton";
import Button from "@material-ui/core/Button/Button";
import {makeStyles} from "@material-ui/core";
import SimpleReactFileUpload from "../components/simple-upload/simpleUpload";
import Chart from "../components/chart/Chart";
import Header from "../components/header/header";
import {Redirect} from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import TextField from "@material-ui/core/TextField/TextField";
import formula from "../resources/img/formula.png"

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%%',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    completed: {
        display: 'inline-block',
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Upload File', 'Getting results', 'Download results'];
}

export default function Main() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});
    const [currentFile, setCurrentFile] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const steps = getSteps();
    const me = this;

    function totalSteps() {
        return steps.length;
    }

    function getStepContent(step) {
        switch (step) {
            case 0:
                return <SimpleReactFileUpload
                    fileChange={setCurrentFile.bind(me)}
                />;
            case 1:
                return <Chart/>;
            case 2:
                return <div>
                    <TextField
                        required
                        id="standard-required"
                        label="Profit"
                        defaultValue="4000000"
                        margin="normal"
                    />
                </div>;
            default:
                return 'Unknown step';
        }
    }

    function completedSteps() {
        return Object.keys(completed).length;
    }

    function isLastStep() {
        return activeStep === totalSteps() - 1;
    }

    function allStepsCompleted() {
        return completedSteps() === totalSteps();
    }

    function handleNext() {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                  // find the first step that has been completed
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
        handleNextAction();
    }

    function handleNextAction() {
        if (activeStep === 0) {
            // setIsLoading(true);
            fileUpload();
        }
    }

    function fileUpload() {
        const url = 'http://localhost:5000/api/upload';
        const formData = new FormData();
        formData.append('file', currentFile);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        return post(url, formData,config)
    }

    function handleBack() {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    }

    const handleStep = step => () => {
        setActiveStep(step);
    };

    function handleComplete() {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    }

    function handleReset() {
        setActiveStep(0);
        setCompleted({});
    }

    let authRedirect = null;

    if (localStorage.getItem('isLogin') !== 'true') {
        authRedirect = <Redirect to="/login"/>;
    }

    let loading = null;
    if (isLoading) {
        loading = <CircularProgress disableShrink />
    }

    return (
        <div className={classes.root}>
            <Header/>
            <div className="wizard-wrapper">
                {getStepContent(activeStep)}
            </div>
            <Stepper nonLinear activeStep={activeStep}>
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepButton onClick={handleStep(index)} completed={completed[index]}>
                            {label}
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
            {allStepsCompleted() ? (
                <Button onClick={handleReset}>Reset</Button>
            ) : (
                <div className="wizard-wrapper-buttons">
                    <Button variant="contained" color="default" disabled={activeStep === 0} onClick={handleBack}
                            className={classes.button}>
                        Back
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                    >
                        Next
                    </Button>
                </div>
            )}
            {authRedirect}
            {loading}
        </div>
    );
}