import React,{useState,useEffect} from 'react'
import Employee from './Employee'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function Edit() {

  const [id,setId]=useState('')
  const [uname,setUname]=useState('')
  const [age,setAge]=useState('')
  const [desig,setDesig]=useState('')
  const [salary,setSalary]=useState(0)

    useEffect(()=>{
        setId(localStorage.getItem('id'))
        setUname(localStorage.getItem('uname'))
        setAge(localStorage.getItem('age'))
        setDesig(localStorage.getItem('desg'))
        setSalary(JSON.parse(localStorage.getItem('salary')))
    },[])
    console.log(uname);
    console.log(id);
    console.log(desig);
    console.log(salary);

    var index=Employee.map(item=>item.id).indexOf(id)
    console.log(index);

    let history=useNavigate()

    const handleUpdate=(e)=>{
      e.preventDefault(); //remove refresh
      console.log(e);
      let emp=Employee[index]
      emp.uname=uname;
      emp.age=age;
      emp.desig=desig;
      emp.salary=salary
      console.log(emp);
      history('/')
    }

  return (
    <>
            <h1 className='text-primary text-center mt-5'>Update Employee Management</h1>
        <p className='text-center'>An employee management system is designed to manage the business duties departmental wise, and streamlining the HR</p>
<Row>
    <Col>
    <img width={'600px'} height={'600px'} src="https://th.bing.com/th/id/OIP.awAiMS1BCAQ2xS2lcdXGlwHaHH?pid=ImgDet&rs=1"/>
    </Col>
    <Col>
    
    <Form className='border border-3 p-4'>
     
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" value={uname} onChange={(e)=>setUname(e.target.value)} />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Age</Form.Label>
        <Form.Control type="text" value={age} onChange={(e)=>setAge(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Designation</Form.Label>
        <Form.Control type="text" value={desig} onChange={(e)=>setDesig(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Salary</Form.Label>
        <Form.Control type="text" value={salary} onChange={(e)=>setSalary(e.target.value)}/>
      </Form.Group>
      
      <Button onClick={(e)=>handleUpdate(e)} variant="primary" type="submit">
        Update
      </Button>
    </Form>
    </Col>
</Row>
    </>
  )
}

export default Edit