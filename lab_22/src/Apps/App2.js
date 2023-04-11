import React, { Component } from 'react';

class App2 extends React.Component {
    state = {
        employees: [
            { firstName: 'Person', lastName: 'One', salary: 5000, gender: 'Female' },
            { firstName: 'Person', lastName: 'Two', salary: 10000, gender: 'Male' },
        ],
        employee: {
            firstName: '',
            lastName: '',
            salary: null,
            gender: '',
        },
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState((prevState) => ({
            employee: {
                ...prevState.employee,
                [name]: value,
            },
        }));
    };

    handleSelectChange = (event) => {
        const { name, value } = event.target;
        this.setState((prevState) => ({
            employee: {
                ...prevState.employee,
                [name]: value === 'male' ? 'Male' : 'Female',
            },
        }));
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState((prevState) => ({
            employees: [...prevState.employees, prevState.employee],
            employee: {
                firstName: '',
                lastName: '',
                salary: null,
                gender: '',
            },
        }));
    };

    render() {
        const list = this.state.employees.map((employee, index) => (
            <tr border={1} color={"black"} key={index}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.salary}</td>
                <td>{employee.gender}</td>
            </tr>
        ))

        return (
            <div>
                <table border={1} color={"black"}> {list} </table>

                <form onSubmit={this.handleSubmit}>
                    <label>
                        First Name:
                        <input type="text" name="firstName" value={this.state.employee.firstName} onChange={this.handleInputChange} />
                    </label>
                    <br />

                    <label>
                        Last Name:
                        <input type="text" name="lastName" value={this.state.employee.lastName} onChange={this.handleInputChange}
                        />
                    </label>
                    <br />

                    <label>
                        Salary:
                        <input type="number" name="salary" value={this.state.employee.salary} onChange={this.handleInputChange} />
                    </label>
                    <br />

                    <label>
                        Gender:
                        <select name="gender" value={this.state.employee.gender} onChange={this.handleSelectChange}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </label>
                    <br />

                    <button type="submit">Add Employee</button>
                </form>
            </div>
        );
    }
}
export default App2;