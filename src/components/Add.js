import React, { useState } from 'react';
import Employee from './Employee';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';

function Add() {
  const [id, setId] = useState('');
  const [uname, setUname] = useState('');
  const [age, setAge] = useState('');
  const [desig, setDesig] = useState('');
  const [salary, setSalary] = useState(0);

  let history = useNavigate();
  const handleAdd = (e) => {
    e.preventDefault();
    let ids = uuid();
    console.log(ids);
    let uniqueId = ids.slice(0, 8);
    console.log(uniqueId);
    Employee.push({
      id: uniqueId,
      uname: uname,
      age: age,
      desig: desig,
      salary: salary,
    });

    history('/');
  };

  return (
    <>
      <h1 className="text-primary text-center mt-5">Add Employee Management</h1>
      <p className="text-center">
        An employee management system is designed to manage the business duties
        departmental-wise, and streamline HR processes.
      </p>
      <div className="container mt-4">
        <Row className="align-items-center">
          <Col xs={12} md={6} className="mb-4">
            <img
              className="img-fluid"
              src="https://th.bing.com/th/id/OIP.awAiMS1BCAQ2xS2lcdXGlwHaHH?pid=ImgDet&rs=1"
              alt="Employee Management"
            />
          </Col>
          <Col xs={12} md={6}>
            <Form className="border border-3 p-4 rounded">
              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setUname(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicAge">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setAge(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicDesignation">
                <Form.Label>Designation</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setDesig(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicSalary">
                <Form.Label>Salary</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setSalary(e.target.value)}
                />
              </Form.Group>

              <Button
                onClick={(e) => handleAdd(e)}
                variant="primary"
                type="submit"
              >
                ADD
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Add;
