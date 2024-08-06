import './employees-list.css';
import { Component } from 'react';
import EmployeesListItem from '../employees-list-item/employees-list-item';

class EmployeesList extends Component {
    render() {
        const element = this.props.data.map(item => {
            const {id, ...itemProps} = item;
            return <EmployeesListItem  key={id} onDelete={() => this.props.onDelete(id)} rise={this.props.rise} onUpdateRise={() => this.props.onUpdateRise(id)} increase={this.props.increase} onUpdateIncrease={() => this.props.onUpdateIncrease(id)} {...itemProps} />
        })
        return (
            <ul className='app-list'>
                {element}
            </ul>
        ) 
    }
}

export default EmployeesList;