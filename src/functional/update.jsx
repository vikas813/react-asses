import React, {useState} from 'react';
import {useParams} from 'react-router-dom';

const UpdateEmployee=({updateValue})=>{
    const [name, setName] = useState(""),
     [department, setDepartment] = useState(""),
     [salary, setSalary] = useState();
    debugger;

    const empList = JSON.parse(localStorage.getItem('empList'));
    const {id} = useParams();
    const employee = empList.find((emp) => emp.id === +id);
    const index = empList.indexOf(employee);

    return (
        <div>
            Name : <input
                type = 'text' 
                name = 'name'
                placeholder = {employee.name}
                value = {name}
                onChange = {(e) => setName(e.target.value)}
            />
            Department : <input
                type = 'text' 
                name = 'department'
                placeholder = {employee.department}
                value = {department}
                onChange = {(e) => setDepartment(e.target.value)}
            />
            Salary : <input
                type = 'integer' 
                Salary = 'Salary'
                placeholder = {employee.salary}
                value = {salary}
                onChange = {(e) => setSalary(e.target.value)}
            />
            <button
                onClick = {() => {
                    const emp = {
                        id : +id, 
                        Name : name ? name : employee.name, 
                        Department : department ? department : employee.department,
                        Salary : salary ? salary : employee.salary
                    };
                    empList[index] = emp;
                    localStorage.setItem('empList', JSON.stringify(empList));
                    updateValue();
                   
                }}
            >Add Employee</button>
        </div>
    );
}
export default UpdateEmployee;