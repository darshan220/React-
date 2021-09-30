import { TextField,Button } from '@mui/material';
import React, { useContext } from 'react';
import {multiStepContext} from "../../Step/StepContext"

function FirstStep() {

    const {setCurrentStep,userData,setUserData} =useContext(multiStepContext)
    return (
        <div>
            <div>
            <TextField 
                value={userData['firstname']} 
                onChange={(e)=> setUserData({...userData,"firstname":e.target.value})} 
                label="First name" 
                margin="normal" 
                variant="outlined" 
                color="secondary"/>
            </div>

            <div>
            <TextField 
                value={userData['lastname']} 
                onChange={(e)=> setUserData({...userData,"lastname":e.target.value})} 
                label="Last name" 
                margin="normal" 
                variant="outlined" 
                color="secondary"/>
            </div>

            <div>
            <TextField 
                value={userData['phonenumber']} 
                onChange={(e)=> setUserData({...userData,"phonenumber":e.target.value})} 
                label="Phone Number" 
                margin="normal" 
                variant="outlined" 
                color="secondary"/>
            </div>

            <div>
            <Button 
                variant="contained" 
                onClick={()=>setCurrentStep(2)} 
                color="primary">Next</Button>
            </div>
        </div>
    );
}

export default FirstStep;