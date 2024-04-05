import React from 'react';

function Compatibility() {
    
    return ( 
        <>
        <div className="container">
            <h2 className="mt-4 mb-3 text-center " style={{backgroundColor:'#ff0000'}}>Blood Type Compatibility</h2>
            <table className="table table-bordered "  style={{border: '2px solid red ',backgroundColor:"white" , opacity:"20"}}>
                <thead>
                    <tr className='h5'>
                        <th>Blood Type</th>
                        <th>Donate Blood To</th>
                        <th>Receive Blood From</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='text-danger fw-bold'>A+</td>
                        <td>A+, AB+</td>
                        <td>A+, A-, O+, O-</td>
                    </tr>
                    <tr>
                        <td className='text-danger fw-bold'>O+</td>
                        <td>O+, A+, B+, AB+</td>
                        <td>O+, O-</td>
                    </tr>
                    <tr>
                        <td className='text-danger fw-bold'>B+</td>
                        <td>B+, AB+</td>
                        <td>B+, B-, O+, O-</td>
                    </tr>
                    <tr>
                        <td className='text-danger fw-bold'>AB+</td>
                        <td>AB+</td>
                        <td>Everyone</td>
                    </tr>
                    <tr>
                        <td className='text-danger fw-bold'>A-</td>
                        <td>A+, A-, AB+, AB-</td>
                        <td>A-, O-</td>
                    </tr>
                    <tr>
                        <td className='text-danger fw-bold'>O-</td>
                        <td>Everyone</td>
                        <td>O-</td>
                    </tr>
                    <tr>
                        <td className='text-danger fw-bold'>B-</td>
                        <td>B+, B-, AB+, AB-</td>
                        <td>B-, O-</td>
                    </tr>
                    <tr>
                        <td className='text-danger fw-bold'>AB-</td>
                        <td>AB+, AB-</td>
                        <td>AB-, A-, B-, O-</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        </>
     );
}

export default Compatibility;
