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
import axios from 'axios';
import {useForm,FormProvider,Controller, get} from 'react-hook-form';


const useStyles = styled((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "",
    "",
    "",
  ];
}

const BasicInfo =({category,handleChange,control})=>{
  return (
        <>
          <Controller 
            control={control}
            name="mo_sc_heliodistance"
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                id="mo_sc_heliodistance"
                label="mo_sc_heliodistance"
                required
                variant="outlined"
                placeholder="Heliocentric distance of the spacecraft at"
                fullWidth
                margin="normal"
              />
            )}
          />
          <Controller 
            control={control}
            name="mo_sc_long_heeq"
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                id="mo_sc_long_heeq"
                label="mo_sc_long_heeq"
                variant="outlined"
                required
                placeholder="Heliospheric longitude of the spacecraft at, range [-180,180]. unit: degree (HEEQ)."
                fullWidth
                margin="normal"
              />
            )}
          />
          <Controller 
            control={control}
            name="mo_sc_lat_heeq"
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                id="mo_sc_lat_heeq"
                label="mo_sc_lat_heeq"
                variant="outlined"
                required
                placeholder="Heliospheric latitude of the spacecraft at mo_start_time, range [-90,90]. unit: degree (HEEQ)."
                fullWidth
                margin="normal"
              />
            )}
          />
          <Controller 
            control={control}
            name="icme_duration"
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                id="icme_duration"
                label="icme_duration"
                variant="outlined"
                required
                placeholder="Duration of the interval between icme_start_time and mo_endtime. unit: hours."
                fullWidth
                margin="normal"
              />
            )}
          />
        </>
      );
}
const Details =({control})=>{
  return (
    <>
        <Controller 
            control={control}
            name="icme_bmax"
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                id="icme_bmax"
                label="icme_bmax"
                variant="outlined"
                required
                placeholder="Maximum total magnetic field in the full icme interval (icme_start_time to mo_end_time). unit: nT."
                fullWidth
                margin="normal"
              />
            )}
          />
          <Controller 
            control={control}
            name="icme_speed_mean"
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                id="icme_speed_mean"
                label="icme_speed_mean"
                variant="outlined"
                required
                placeholder="Mean proton speed from icme_start_time to mo_end_time. unit: km/s."
                fullWidth
                margin="normal"
              />
            )}
          />
          <Controller 
            control={control}
            name="icme_speed_std"
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                id="icme_speed_std"
                label="icme_speed_std"
                variant="outlined"
                required
                placeholder="tandard deviation of proton speed from icme_start_time to mo_end_time. unit: km/s."
                fullWidth
                margin="normal"
              />
            )}
          />
          <Controller 
            control={control}
            name="mo_expansion_speed"
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                id="mo_expansion_speed"
                label="mo_expansion_speed"
                variant="outlined"
                required
                placeholder="Difference between proton speed at mo_start_time to proton speed at mo_end_time. unit: km/s."
                fullWidth
                margin="normal"
              />
            )}
          />
      </>    
      );
}
const Keywords =({control})=>{
  return (
    <>
      <Controller 
            control={control}
            name="mo_density_mean"
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                id="mo_density_mean"
                label="mo_density_mean"
                variant="outlined"
                required
                placeholder="Mean proton density from mo_start_time to mo_start_time. unit: cm^-3."
                fullWidth
                margin="normal"
              />
            )}
          />
          <Controller 
            control={control}
            name="mo_temperature_mean"
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                id="mo_temperature_mean"
                label="mo_temperature_mean"
                variant="outlined"
                required
                placeholder="Mean proton temperature from mo_start_time to mo_start_time. unit: K."
                fullWidth
                margin="normal"
              />
            )}
          />
          <Controller 
            control={control}
            name="sheath_speed_mean"
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                id="sheath_speed_mean"
                label="sheath_speed_mean"
                variant="outlined"
                required
                placeholder="Mean proton speed from icme_start_time to mo_start_time, NaN if these times are similar. unit: km/s."
                fullWidth
                margin="normal"
              />
            )}
          />
          <Controller 
            control={control}
            name="sheath_speed_std"
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                id="sheath_speed_std"
                label="sheath_speed_std"
                variant="outlined"
                required
                placeholder="Standard deviation of proton speed from icme_start_time to mo_start_time, NaN if these times are similar. unit: km/s."
                fullWidth
                margin="normal"
              />
            )}
          />
          <Controller 
            control={control}
            name="sheath_density_mean"
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                id="sheath_density_mean"
                label="sheath_density_mean"
                variant="outlined"
                required
                placeholder="Mean proton density from icme_start_time to mo_start_time, NaN if these times are similar. unit: cm^-3."
                fullWidth
                margin="normal"
              />
            )}
          />
    </>
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
  const [viewC, setViewC] = useState(true);
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const [formData,setFormData] = useState([]);
  const [dataValues, setDataValues] = useState([]);
  const steps = getSteps();
  const methods = useForm();



  const handleChange = (event) => {
    methods.setValue('category', event.target.value);
  };

  const closeForm = () => {
    setviewComponent(false);
    console.log("closing",formData)
    console.log(dataValues);
    setViewC(false);
    
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

  const onSubmit = async (data) => {
    console.log('call');
  setFormData(data); // Update formData state
  console.log("Data being sent:", data); // Log data before the state update

  if (activeStep === steps.length - 1) {
    console.log("Final submission", data); // Use the data directly instead of formData

    try {
      console.log('fl1');
      const response = await axios.post('http://localhost:5000/run-code', data, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      console.log('Response from server:', response.data);
      const Resultdata = response.data
      console.log(Resultdata.processed_data['message']);
      
      const parsedData = JSON.parse(response.data.processed_data);
      const dataArray = parsedData.data[0];
      console.log("data",dataArray);
      setDataValues(dataArray);
    } catch (error) {
      console.error('Error:', error);
    }
    
    setActiveStep(activeStep + 1);  
  } else {
    handleNext(data);
  }
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
            Working on your Inputs
          </Typography>
          <>
            {!viewC && dataValues.length > 0 && (
        <div>
          <h3>Submitted Data Values:</h3>
          <ul>
            {dataValues.map((value, index) => (
              <li key={index}>Value {index + 1}: {value}</li>
            ))}
          </ul>
          hellooooooo
          <ul>
            {dataValues?.map((values)=>{return(
              <li>{values}</li>
            )})}
          </ul>
        </div>
      )}
          </>
          <Button
            className={classes.button}
            onClick={closeForm}
          >
            Show Result
          </Button>
        </>
      ) : (
        <>
          <FormProvider {...methods}>
            <form id="data_form" onSubmit={methods.handleSubmit(onSubmit)}>
              {getStepContent(activeStep, methods.watch('category'), handleChange, methods.control)}
            </form>
            {/* {activeStep === 0 && <Button
              className={classes.button}
              onClick={closeForm}
            >
              close
            </Button>} */}
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
      <div style={{color:'white'}}> 
        hello
      </div>
      {/* {!viewC && dataValues.length > 0 && (
        <div>
          <h3>Submitted Data Values:</h3>
          <ul>
            {dataValues.map((value, index) => (
              <li key={index}>Value {index + 1}: {value}</li>
            ))}
          </ul>
        </div>
      )}

      {!viewC && dataValues.length === 0 && (
        <div>
          <h3>No Data Available</h3>
        </div>
      )} */}
    </div>
  );
};