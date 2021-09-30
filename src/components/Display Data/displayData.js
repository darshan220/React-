import React, { useContext } from 'react';
import {TableContainer,TableHead,TableBody,TableCell,TableRow,Table} from '@mui/material'
import {multiStepContext} from "../../Step/StepContext"

function DisplayData(props) {

    const {finalData} = useContext(multiStepContext)

    return (
        <div>
            <TableContainer className="tableContainer">
                <Table>
                    <TableHead>
                        <TableRow >
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Phone Number</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>Country</TableCell>
                            <TableCell>City</TableCell>
                            <TableCell>LandMark</TableCell>
                            <TableCell>Postal Code</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            finalData.map((data) => {
                                <TableRow key={data.email} >
                                    <TableCell>{data.firstname}</TableCell>
                                    <TableCell>{data.lastname}</TableCell>
                                    <TableCell>{data.phonenumber}</TableCell>
                                    <TableCell>{data.email}</TableCell>
                                    <TableCell>{data.address}</TableCell>
                                    <TableCell>{data.country}</TableCell>
                                    <TableCell>{data.city}</TableCell>
                                    <TableCell>{data.landmark}</TableCell>
                                    <TableCell>{data.postalcode}</TableCell>
                                    
                                </TableRow>
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default DisplayData;