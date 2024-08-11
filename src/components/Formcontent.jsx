import {LinaerStepper} from "./Form";
import { CssBaseline, Container, Paper, Box } from "@mui/material";
import '../css/form.css'

export const Form = ({setviewComponent})=>{
  return (
    <div className="start_form w-5/12 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-white rounded-lg shadow-lg z-10" style={{top:"55%"}}>
      <CssBaseline />
      <Container component={Box} p={4}>
        <Paper component={Box} p={3}>
          <LinaerStepper setviewComponent={setviewComponent}/>
        </Paper>
      </Container>
    </div>
  );
}
