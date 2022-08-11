import React, {useState,useEffect}from 'react'
import axios from 'axios'
import { Button } from 'reactstrap';
import { Table } from 'reactstrap';

function Users() {

   const [data,setData] = useState(null);
   const handleUser = async (e)=>{
    e.preventDefault();
    const {data} = await axios.get('/users')
    setData(data);
    
   }
   

  return (
    <>
    <Button onClick={handleUser}> Click to begin</Button>
  
  <div className='table'>
  <Table>
        <thead>
          <tr>
          <th>First Name</th>
            <th>Last Name</th>
            <th>Department</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Designation</th>
            <th>Reporting Manager</th>
          </tr>
        </thead>
        <tbody>
        
    {data && data.map(e=>{
        return(
            
                <tr>
           <td> {e.FirstName}</td>
            <td>{e.LastName}</td>
            <td> {e.Department}</td>
            <td> {e.Email}</td>
            <td> {e.Gender}</td>
            <td> {e.Designation}</td>
            <td> {e.ReportingManager}</td>
            </tr>
            
        )


    })}
       
    </tbody>
    </Table>

</div>



      </>
  )

}

export default Users;