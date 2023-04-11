import React, { Component } from 'react';

class App3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [
                { firstName: 'John', lastName: 'Doe', salary: 5000 },
                { firstName: 'Jane', lastName: 'Smith', salary: 6000 },
                { firstName: 'Bob', lastName: 'Johnson', salary: 7000 },
                { firstName: 'Mary', lastName: 'Brown', salary: 5500 },
                { firstName: 'Іван', lastName: 'Іванов', salary: 1000 },
                { firstName: 'Петро', lastName: 'Петров', salary: 1200 },
                { firstName: 'Сергій', lastName: 'Сергієнко', salary: 800 },
                { firstName: 'Олексій', lastName: 'Олексієнко', salary: 1500 },
                { firstName: 'Микола', lastName: 'Миколенко', salary: 1100 },
                { firstName: 'Андрій', lastName: 'Андрієнко', salary: 900 },
                { firstName: 'Юлія', lastName: 'Юлієнко', salary: 2000 },
                { firstName: 'Ірина', lastName: 'Іриненко', salary: 1700 },
                { firstName: 'Ольга', lastName: 'Ольгієнко', salary: 1300 },
                { firstName: 'Вікторія', lastName: 'Вікторенко', salary: 1400 },
                { firstName: 'Євген', lastName: 'Євгененко', salary: 1800 },
                { firstName: 'Тарас', lastName: 'Тарасенко', salary: 950 },
                { firstName: 'Марія', lastName: 'Марієнко', salary: 1050 },
                { firstName: 'Аліна', lastName: 'Алієнко', salary: 1600 },
                { firstName: 'Ганна', lastName: 'Ганненко', salary: 1750 },
                { firstName: 'Олег', lastName: 'Олегенко', salary: 1300 },
                { firstName: 'Наталія', lastName: 'Наталенко', salary: 1850 },
                { firstName: 'Дмитро', lastName: 'Дмитренко', salary: 1400 },
                { firstName: 'Роман', lastName: 'Романенко', salary: 1200 },
                { firstName: 'Катерина', lastName: 'Катериненко', salary: 1700 },
                { firstName: 'Андрій', lastName: 'Іваненко', salary: 15000 },
                { firstName: 'Олександр', lastName: 'Ковальчук', salary: 20000 },
                { firstName: 'Сергій', lastName: 'Петренко', salary: 18000 },
                { firstName: 'Марина', lastName: 'Даниленко', salary: 17000 },
                { firstName: 'Юлія', lastName: 'Мельник', salary: 16000 },
                { firstName: 'Тарас', lastName: 'Гуменюк', salary: 22000 },
                { firstName: 'Ігор', lastName: 'Кравченко', salary: 21000 },
                { firstName: 'Олена', lastName: 'Савченко', salary: 19000 },
                { firstName: 'Артем', lastName: 'Сидоренко', salary: 17500 },
                { firstName: 'Наталія', lastName: 'Кравчук', salary: 16500 },
                { firstName: 'Оксана', lastName: 'Максименко', salary: 18500 },
                { firstName: 'Іван', lastName: 'Григоренко', salary: 19500 },
                { firstName: 'Дмитро', lastName: 'Матвієнко', salary: 23000 },
                { firstName: 'Марія', lastName: 'Мазур', salary: 24000 },
                { firstName: 'Євгенія', lastName: 'Полякова', salary: 17000 },
                { firstName: 'Роман', lastName: 'Куліков', salary: 20000 },
                { firstName: 'Анна', lastName: 'Романенко', salary: 22000 },
                { firstName: 'Віталій', lastName: 'Шевченко', salary: 21000 },
                { firstName: 'Віктор', lastName: 'Ткачук', salary: 18500 },
                { firstName: 'Тетяна', lastName: 'Дорошенко', salary: 19000 }
            ],

            currentPage: 1,
            employeesPerPage: 10
        };
    }

    handleClick = (event) => {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    render() {
        const { employees, currentPage, employeesPerPage } = this.state;
        const indexOfLastEmployee = currentPage * employeesPerPage;
        const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
        const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee);

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(employees.length / employeesPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </li>
            );
        });

        const renderEmployees = currentEmployees.map((employee, index) => {
            return (
                <tr border={1} color={"black"} key={index}>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.salary}</td>
                </tr>
            );
        });

        return (
            <div>
                <table border={1} color={"black"}>
                    {renderEmployees}
                </table>
                <ul id="page-numbers">
                    {renderPageNumbers}
                </ul>
            </div>
        );
    }
}

export default App3;
