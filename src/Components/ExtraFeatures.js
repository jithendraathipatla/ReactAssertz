import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Ventilation from '../Imagesa/Images/latestHall.jpg';
import SmartHome from '../Imagesa/Images/smart.jpg';
import CarbonHealing from '../Imagesa/Images/CarbonHealing.jpg';
import PoolView from '../Imagesa/Images/sliderthree.jpg';
import PoolViewTwo from '../Imagesa/Images/sliderfour.jpg';
import Title from '../Components/Title';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'SmartHomes Technology',
    imgPath:SmartHome
  },
  {
    label: 'Carbon Healing Technology',
    imgPath:CarbonHealing
  },
  {
    label: 'Pure Air',
    imgPath: Ventilation
  },
  {
    label: 'Ground Water Recharge',
    imgPath:PoolView
  },
  {
    label: 'Rain water Harvesting',
    imgPath:PoolViewTwo
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 800,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 500,
    display: 'block',
    maxWidth: 900,
    overflow: 'hidden',
    width: '100%',
  },
}));

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = step => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            <Title title={step.label}/>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
            
          </div>
        ))}
      </AutoPlaySwipeableViews>
    
    </div>
  );
}

export default SwipeableTextMobileStepper;
