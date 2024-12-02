// import React,{useState,useEffect} from 'react'
// import Employee from './Employee'
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { useNavigate } from 'react-router-dom';

// function Edit() {

//   const [id,setId]=useState('')
//   const [uname,setUname]=useState('')
//   const [age,setAge]=useState('')
//   const [desig,setDesig]=useState('')
//   const [salary,setSalary]=useState(0)

//     useEffect(()=>{
//         setId(localStorage.getItem('id'))
//         setUname(localStorage.getItem('uname'))
//         setAge(localStorage.getItem('age'))
//         setDesig(localStorage.getItem('desg'))
//         setSalary(JSON.parse(localStorage.getItem('salary')))
//     },[])
//     console.log(uname);
//     console.log(id);
//     console.log(desig);
//     console.log(salary);

//     var index=Employee.map(item=>item.id).indexOf(id)
//     console.log(index);

//     let history=useNavigate()

//     const handleUpdate=(e)=>{
//       e.preventDefault(); //remove refresh
//       console.log(e);
//       let emp=Employee[index]
//       emp.uname=uname;
//       emp.age=age;
//       emp.desig=desig;
//       emp.salary=salary
//       console.log(emp);
//       history('/')
//     }

//   return (
//     <>
//             <h1 className='text-primary text-center mt-5'>Update Employee Management</h1>
//         <p className='text-center'>An employee management system is designed to manage the business duties departmental wise, and streamlining the HR</p>
// <Row>
//     <Col>
//     <img width={'600px'} height={'600px'} src="https://th.bing.com/th/id/OIP.awAiMS1BCAQ2xS2lcdXGlwHaHH?pid=ImgDet&rs=1"/>
//     </Col>
//     <Col>
    
//     <Form className='border border-3 p-4'>
     
//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Username</Form.Label>
//         <Form.Control type="text" value={uname} onChange={(e)=>setUname(e.target.value)} />
//       </Form.Group>
      
//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Age</Form.Label>
//         <Form.Control type="text" value={age} onChange={(e)=>setAge(e.target.value)} />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Designation</Form.Label>
//         <Form.Control type="text" value={desig} onChange={(e)=>setDesig(e.target.value)} />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Salary</Form.Label>
//         <Form.Control type="text" value={salary} onChange={(e)=>setSalary(e.target.value)}/>
//       </Form.Group>
      
//       <Button onClick={(e)=>handleUpdate(e)} variant="primary" type="submit">
//         Update
//       </Button>
//     </Form>
//     </Col>
// </Row>
//     </>
//   )
// }

// export default Edit

import React, { useState, useEffect } from 'react';
import Employee from './Employee';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function Edit() {
  const [id, setId] = useState('');
  const [uname, setUname] = useState('');
  const [age, setAge] = useState('');
  const [desig, setDesig] = useState('');
  const [salary, setSalary] = useState(0);

  useEffect(() => {
    setId(localStorage.getItem('id'));
    setUname(localStorage.getItem('uname'));
    setAge(localStorage.getItem('age'));
    setDesig(localStorage.getItem('desg'));
    setSalary(JSON.parse(localStorage.getItem('salary')));
  }, []);

  const index = Employee.map((item) => item.id).indexOf(id);
  const history = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    let emp = Employee[index];
    emp.uname = uname;
    emp.age = age;
    emp.desig = desig;
    emp.salary = salary;
    history('/');
  };

  return (
    <>
      <h1 className="text-primary text-center mt-5">Update Employee Management</h1>
      <p className="text-center mx-3">
        An employee management system is designed to manage the business duties departmental-wise, and streamline HR processes.
      </p>
      <div className="container mt-4">
        <Row className="align-items-center">
          {/* Left Section: Image */}
          <Col xs={12} md={6} className="mb-4 d-flex justify-content-center">
            <img
              className="img-fluid rounded"
              src="https://th.bing.com/th/id/OIP.awAiMS1BCAQ2xS2lcdXGlwHaHH?pid=ImgDet&rs=1"
              alt="Employee Management"
              style={{ maxHeight: '400px' }}
            />
          </Col>

          {/* Right Section: Form */}
          <Col xs={12} md={6}>
            <Form className="border border-3 p-4 rounded shadow-sm">
              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  value={uname}
                  onChange={(e) => setUname(e.target.value)}
                  placeholder="Enter your username"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicAge">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="Enter your age"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicDesignation">
                <Form.Label>Designation</Form.Label>
                <Form.Control
                  type="text"
                  value={desig}
                  onChange={(e) => setDesig(e.target.value)}
                  placeholder="Enter your designation"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicSalary">
                <Form.Label>Salary</Form.Label>
                <Form.Control
                  type="number"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  placeholder="Enter your salary"
                />
              </Form.Group>

              <Button
                onClick={(e) => handleUpdate(e)}
                variant="primary"
                type="submit"
                className="w-100"
              >
                Update
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Edit;
