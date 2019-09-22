import React from 'react'
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

function getStepContent(step) {
    switch (step) {
        case 0:
            return <SimpleReactFileUpload/>;
        case 1:
            return <Chart></Chart>;
        case 2:
            return <div>Download results</div>;
        default:
            return 'Unknown step';
    }
}

export default function Main() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});
    const steps = getSteps();

    function totalSteps() {
        return steps.length;
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
        </div>
    );
}