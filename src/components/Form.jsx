import React, { useState,useEffect } from "react";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {useForm,useFormContext,FormProvider,Controller, get} from 'react-hook-form';


const useStyles = styled((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Basic information",
    "Web Details",
    "Keywords",
  ];
}

const BasicInfo =({category,handleChange,control})=>{
  return (
        <>
          <Controller 
            control={control}
            name="websiteName"
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                id="website-name"
                label="Website Name"
                variant="outlined"
                placeholder="Enter Your Website Name"
                fullWidth
                margin="normal"
              />
            )}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel id="select-label">Website Category</InputLabel>
            <Controller
              control={control}
              name="category"
              defaultValue=""
              render={({ field }) => (
                <Select
                  {...field}
                  labelId="select-label"
                  id="select"
                  label="Website Category"
                  placeholder="Select Your Website category"
                  onChange={(event) => field.onChange(event.target.value)}
                >
                  <MenuItem value="business">Business</MenuItem>
                  <MenuItem value="company">Company</MenuItem>
                  <MenuItem value="startup">Startup</MenuItem>
                  <MenuItem value="school">School</MenuItem>
                  <MenuItem value="Category5">Category 5</MenuItem>
                </Select>
              )}
            />
          </FormControl>
        </>
      );
}
const Details =({control})=>{
  return (
        <Controller
          name="description"
          control={control} 
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              id="description"
              label="Website Description"
              variant="outlined"
              placeholder="Describe your Website"
              fullWidth
              margin="normal"
              multiline
              rows={5}
            />
          )}
        />
      );
}
const Keywords =({control})=>{
  return (
    <Controller
      name="keywords" 
      control={control} 
      defaultValue=""
      render={({ field }) => (
        <TextField
          {...field}
          id="keywords"
          label="Website Keywords"
          variant="outlined"
          placeholder="Write few keywords e.g. (Branding,E-commerce,SEO,Social Media, Business etc.)"
          fullWidth
          margin="normal"
          multiline
          rows={5}
        />
      )}
    />
  );
}
function getStepContent(step,category,handleChange,control) {
  switch (step) {
    case 0:
      return <BasicInfo category={category} handleChange={handleChange} control={control}/>
    case 1:
      return <Details control={control}/>
    case 2:
      return <Keywords control={control}/>
    default:
      return "unknown step";
  }
}

export const LinaerStepper = ({ setviewComponent }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const [formData,setFormData] = useState([]);
  const steps = getSteps();
  const methods = useForm();



  
  const handleChange = (event) => {
    methods.setValue('category', event.target.value);
  };

  const closeForm = () => {
    setviewComponent(false);
    console.log("closing",formData)
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = (data) => {
    setActiveStep(activeStep + 1);
    setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const onSubmit = (data) => {
    console.log('call');
    setFormData(data);
    if (activeStep === steps.length - 1) {
      console.log("Final submission", formData);
      setActiveStep(activeStep + 1);  
    } else {
      handleNext(data);
    }
    console.log("Final submission", formData);
    console.log(data)
    // fetchPageData();
  };
  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <>
          <Typography variant="h3" align="center" sx={{ marginTop: '5rem' }}>
            Generating your Website
          </Typography>
          <Button
            className={classes.button}
            onClick={closeForm}
          >
            close
          </Button>
        </>
      ) : (
        <>
          <FormProvider {...methods}>
            <form id="data_form" onSubmit={methods.handleSubmit(onSubmit)}>
              {getStepContent(activeStep, methods.watch('category'), handleChange, methods.control)}
            </form>
            {activeStep === 0 && <Button
              className={classes.button}
              onClick={closeForm}
            >
              close
            </Button>}
            {(activeStep === 1 || activeStep === 2) && <Button
              className={classes.button}
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              back
            </Button>}
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              form="data_form"
              type="submit"
            >
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </FormProvider>
        </>
      )}
    </div>
  );
};