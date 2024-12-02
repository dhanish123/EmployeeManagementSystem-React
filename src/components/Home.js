import React from 'react';
import Table from 'react-bootstrap/Table';
import Employee from './Employee';
import Button from 'react-bootstrap/Button';
import { FaUserPlus, FaUserEdit, FaRegTrashAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const history = useNavigate();

  const handleDelete = (id) => {
    alert('Deleted');
    let index = Employee.map((item) => item.id).indexOf(id);
    Employee.splice(index, 1);
    history('/');
  };

  const handleEdit = (id, uname, age, desig, salary) => {
    localStorage.setItem('id', id);
    localStorage.setItem('uname', uname);
    localStorage.setItem('age', age);
    localStorage.setItem('desg', desig);
    localStorage.setItem('salary', JSON.stringify(salary));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-primary text-center">Employee Management</h1>
      <p className="text-center mx-3">
        An employee management system is designed to manage the business duties departmental-wise and streamline HR processes.
      </p>

      {/* Add Button */}
      <div className="text-center my-4">
        <Link to="/add">
          <Button variant="success" className="btn btn-success">
            Add <FaUserPlus />
          </Button>
        </Link>
      </div>

      {/* Employee List */}
      <h3 className="text-center mt-4">List of Employees</h3>
      <div className="table-responsive mt-4">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Age</th>
              <th>Designation</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Employee && Employee.length > 0 ? (
              Employee.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.uname}</td>
                  <td>{item.age}</td>
                  <td>{item.desig}</td>
                  <td>{item.salary}</td>
                  <td>
  <div className="d-flex gap-2 gap-md-3">
    <Link to="/edit">
      <Button
        variant="primary"
        onClick={() =>
          handleEdit(item.id, item.uname, item.age, item.desig, item.salary)
        }
      >
        <FaUserEdit />
      </Button>
    </Link>
    <Button variant="danger" onClick={() => handleDelete(item.id)}>
      <FaRegTrashAlt />
    </Button>
  </div>
</td>

                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No Employees Found
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Home;


