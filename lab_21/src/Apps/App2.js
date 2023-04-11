import React, { Component } from "react";


class App2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employees: [
                { id: 1, firstName: 'John', lastName: 'Doe', salary: 5000 },
                { id: 2, firstName: 'Jane', lastName: 'Smith', salary: 6000 },
                { id: 3, firstName: 'Bob', lastName: 'Johnson', salary: 7000 },
                { id: 4, firstName: 'Mary', lastName: 'Lee', salary: 8000 },
                { id: 5, firstName: 'David', lastName: 'Brown', salary: 9000 },
            ],
            selectedEmployees: [],
        };

        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.calculateTotalSalary = this.calculateTotalSalary.bind(this);
    }

    handleCheckboxChange = (event) => {
        const { selectedEmployees } = this.state;
        const employeeId = parseInt(event.target.value, 10);
        if (event.target.checked) {
            this.setState({
                selectedEmployees: [...selectedEmployees, employeeId],
            });
        } else {
            this.setState({
                selectedEmployees: selectedEmployees.filter((id) => id !== employeeId),
            });
        }
    };

    calculateTotalSalary = () => {
        const { employees, selectedEmployees } = this.state;
        let totalSalary = 0;
        selectedEmployees.forEach((id) => {
            const employee = employees.find((emp) => emp.id === id);
            if (employee) {
                totalSalary += employee.salary;
            }
        });
        return totalSalary;
    };

    render() {
        const list = this.state.employees.map((item, index) => {
            return <tr key={index}>
                <td border={1} color={"black"}>
                    name: {item.firstName}
                </td>
                <td border={1} color={"black"}>
                    age: {item.lastName}
                </td>
                <td border={1} color={"black"}>
                    salary: {item.salary}
                </td>
                <td>
                    <input type="checkbox" value={item.id} onChange={this.handleCheckboxChange} />
                </td>
            </tr>;
        });

        return (
            <div>
                <table border={1} color={"black"}>
                    {list}
                </table>
                <p>Total Salary: ${this.calculateTotalSalary()}</p>
            </div>
        )
    }
}
export default App2; 
