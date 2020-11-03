import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import teamData from '../data/teamData';
import TeamOutline from './TeamOutline';
import { ThemeContext } from "../contexts/ThemeContext";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['2019', '2020', '2021','2022'];
}

// function getStepContent(stepIndex) {
//   teamData.map((team, index)=>{
//       if(index === stepIndex)
//          <TeamOutline team={team}/>
//   });
// }

export default function HorizontalLabelPositionBelowStepper({ setPage }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(1);
  const steps = getSteps();
  const themeContext = useContext(ThemeContext);

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} style={{background: 'rgba(0.0, 0.0, 0.0, 0.0)'}} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel><Button onClick={()=>setPage(label)} className={classes.backButton} style={{color: themeContext.theme === 'dark' ? 'white' : 'black' }}>{label}</Button></StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
