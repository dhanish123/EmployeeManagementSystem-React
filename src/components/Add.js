import React,{useState,useEffect} from 'react'
import Employee from './Employee'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';


function Add() {
  const [id,setId]=useState('')
  const [uname,setUname]=useState('')
  const [age,setAge]=useState('')
  const [desig,setDesig]=useState('')
  const [salary,setSalary]=useState(0)


  let history=useNavigate()
  const handleAdd=(e)=>{
    e.preventDefault()
    let ids=uuid()
    console.log(ids);
    let uniqueId=ids.slice(0,8)
    console.log(uniqueId);
    Employee.push({
      id:uniqueId,
      uname:uname,
      age:age,
      desig:desig,
      salary:salary
    })
   
    history('/')
  }
  return (
    <>
    <h1 className='text-primary text-center mt-5'>Add Employee Management</h1>
<p className='text-center'>An employee management system is designed to manage the business duties departmental wise, and streamlining the HR</p>
<Row>
<Col>
<img width={'600px'} height={'600px'} src="https://th.bing.com/th/id/OIP.awAiMS1BCAQ2xS2lcdXGlwHaHH?pid=ImgDet&rs=1"/>
</Col>
<Col>

<Form className='border border-3 p-4'>

<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label>Username</Form.Label>
<Form.Control type="text" 
onChange={(e)=>setUname(e.target.value)} 
/>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label>Age</Form.Label>
<Form.Control type="text" 
 onChange={(e)=>setAge(e.target.value)}
 />
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label>Designation</Form.Label>
<Form.Control type="text" 
 onChange={(e)=>setDesig(e.target.value)}
 />
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label>Salary</Form.Label>
<Form.Control type="text" 
 onChange={(e)=>setSalary(e.target.value)}
/>
</Form.Group>

<Button 
 onClick={(e)=>handleAdd(e)}
 variant="primary" type="submit">
ADD
</Button>
</Form>
</Col>
</Row>
</>
  )
}

export default Add

