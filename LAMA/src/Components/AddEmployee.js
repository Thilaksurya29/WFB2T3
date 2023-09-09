import {useState} from 'react';
import './AddEmployee.css'
import { addEmployee } from './api';
 const AddEmployee = () => {
    const[name,setName] = useState("");
    const[gender,setGender] = useState("");
    const[age,setAge] = useState("");
    const[salary,setSalary] = useState("");
    const[email,setEmail] = useState("");
    const[doj,setDoj] = useState("");
    const[mobile,setMobile] = useState("");


 const onNameChange = (e) => {
    setName(e.target.value);
 }
 const onGenderChange = (e) => {
    setGender(e.target.value);
 }
 const onAgeChange = (e) => {
    setAge(e.target.value);
 }
 const onSalaryChange = (e) => {
    setSalary(e.target.value);
 }
 const onEmailChange = (e) => {
    setEmail(e.target.value);
 }
 const onDojChange =(e) => {
    setDoj(e.target.value);
 }
 const onMobileChange = (e) => {
    setMobile(e.target.value);
 }

const handleAddEmployee = async (e) => {
    e.preventDefault();
    const employee = {
        name, gender, age, salary, email, doj, mobile,
    };
    await addEmployee(employee)
}

 return (
    <div className="container">
        <h3 className="text-primary"> Add Employee</h3>
        <form className="col-4" onSubmit={handleAddEmployee}>
            <div className="form-group">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" onChange={onNameChange}></input>
            </div>
            <div className="form-group">
                <label className="form-label">Gender</label>
                &nbsp;&nbsp;
                <div className="form-check-inline">
                    <input type="radio" className="form-check-input" name="gender" value="Male" onChange={onGenderChange}></input>
                    <label className="form-check-label">Male</label>
                </div>
                <div className="form-check-inline">
                    <input type="radio" className="form-check-input" name="gender" value="Female" onChange={onGenderChange}></input>
                    <label className="form-check-label">Female</label>
                </div>
            </div>
            <div className="form-group">
                <label className="form-label">Age</label>
                <input type="text" className="form-control" onChange={onAgeChange}></input>
            </div>
            <div className="form-group">
                <label className="form-label">Salary</label>
                <input type="text" className='form-control' onChange={onSalaryChange}></input>
            </div>
            <div className="form-group">
                <label className="form-label">Email Id</label>
                <input type="email" className="form-control" onChange={onEmailChange}></input>
            </div>
            <div className='form-group'>
                <label className='form-label'>Date Of Joining</label>
                <input type="date" className="form-control" onChange={onDojChange}></input>
            </div>
            <div className='form-group'>
                <label className='form-label'>Mobile Number</label>
                <input type="text" className='form-control' onChange={onMobileChange}></input>
            </div>
         <br/>
        <button className='btn btn-primary'>Add Employee</button>
        </form>
    </div>
   );
 };

 export default AddEmployee;