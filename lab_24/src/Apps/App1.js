import { useState } from 'react';

function App1() {
    const [employees, setEmployees] = useState([
        { id: 1, firstName: 'John', lastName: 'Doe', daysWorked: 20, payRate: 10 },
        { id: 2, firstName: 'Jane', lastName: 'Smith', daysWorked: 15, payRate: 15 },
    ]);

    const handleDaysWorkedChange = (id, value) => {
        setEmployees(prevEmployees => {
            const updatedEmployees = [...prevEmployees];
            const index = updatedEmployees.findIndex(emp => emp.id === id);
            updatedEmployees[index].daysWorked = value;
            return updatedEmployees;
        });
    };

    const handlePayRateChange = (id, value) => {
        setEmployees(prevEmployees => {
            const updatedEmployees = [...prevEmployees];
            const index = updatedEmployees.findIndex(emp => emp.id === id);
            updatedEmployees[index].payRate = value;
            return updatedEmployees;
        });
    };

    const calculatePay = (daysWorked, payRate) => {
        return daysWorked * payRate;
    };

    const totalPay = employees.reduce((acc, emp) => acc + calculatePay(emp.daysWorked, emp.payRate), 0);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Days Worked</th>
                        <th>Pay Rate</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(emp => (
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.firstName}</td>
                            <td>{emp.lastName}</td>
                            <td>
                                <input type="number" value={emp.daysWorked} onChange={e => handleDaysWorkedChange(emp.id, e.target.value)} />
                            </td>
                            <td>
                                <input type="number" value={emp.payRate} onChange={e => handlePayRateChange(emp.id, e.target.value)} />
                            </td>
                            <td>{calculatePay(emp.daysWorked, emp.payRate)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>Total pay: {totalPay}</div>
        </div>
    );
}

export default App1;
