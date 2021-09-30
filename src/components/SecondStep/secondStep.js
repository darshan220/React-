import React,{useContext} from 'react';
import { TextField,Button } from '@mui/material';
import {multiStepContext} from "../../Step/StepContext"

function SecondStep() {

    const {setCurrentStep,userData,setUserData} =useContext(multiStepContext)

    return (
    <div>
        <div>
            <TextField 
                value={userData['email']} 
                onChange={(e)=> setUserData({...userData,"email":e.target.value})} 
                label="Email" 
                margin="normal" 
                variant="outlined" 
                color="secondary"/>
        </div>

        <div>
            <TextField 
                value={userData['address']} 
                onChange={(e)=> setUserData({...userData,"address":e.target.value})} 
                label="Address" 
                margin="normal" 
                variant="outlined" 
                color="secondary"/>
        </div>

        <div>
            <TextField 
                value={userData['country']} 
                onChange={(e)=> setUserData({...userData,"country":e.target.value})} 
                label="Country" 
                margin="normal" 
                variant="outlined" 
                color="secondary"/>
        </div>

        <div>
            <Button variant="contained" onClick={()=> setCurrentStep(1)} color="secondary" >Back</Button>
            <Button variant="contained" onClick={()=> setCurrentStep(3)} color="primary" style={{marginLeft: '12px'}}>Next</Button>
        </div>
    </div>
    );
}

export default SecondStep;