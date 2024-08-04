import './employees-list.css';
import { Component } from 'react';
import EmployeesListItem from '../employees-list-item/employees-list-item';

class EmployeesList extends Component {
    render() {
        return (
            <ul className='app-list'>
                <EmployeesListItem name='Serg' salary={4200}/>
                <EmployeesListItem name='Galina' salary={5500} />
                <EmployeesListItem name='Hello' salary={200} />
            </ul>
        )
    }
}

export default EmployeesList;