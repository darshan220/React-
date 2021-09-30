
import React,{useContext} from 'react';
import { TextField,Button } from '@mui/material';
import {multiStepContext} from "../../Step/StepContext"

function ThirdStep(props) {

    const {setCurrentStep,userData,setUserData,submitData} =useContext(multiStepContext)

    return (
        <div>
            <div>
            <TextField
                value={userData['city']} 
                onChange={(e)=> setUserData({...userData,"city":e.target.value})}  
                label="City" 
                margin="normal" 
                variant="outlined" 
                color="secondary"/>
            </div>

            <div>
            <TextField 
                value={userData['landmark']} 
                onChange={(e)=> setUserData({...userData,"landmark":e.target.value})} 
                label="Landmark" 
                margin="normal" 
                variant="outlined" 
                color="secondary"/>
            </div>

            <div>
            <TextField 
                value={userData['postalcode']} 
                onChange={(e)=> setUserData({...userData,"postalcode":e.target.value})} 
                label="Postal Code" 
                margin="normal" 
                variant="outlined" 
                color="secondary"/>
            </div>

            <div>
                <Button variant="contained" onClick={()=> setCurrentStep(2)} color="secondary" >Back</Button>
                <Button variant="contained" onClick={submitData} color="primary" style={{marginLeft: '12px'}}>Submit</Button>
            </div>
        </div>
    );
}

export default ThirdStep;