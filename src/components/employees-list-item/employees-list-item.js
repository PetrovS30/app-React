import './employees-list-item.css';
import { Component } from 'react';

class EmployeesListItem extends Component {
    
    render() {
        return (
            <li className='list-group-item d-flex justify-content-between'>
                <span  className='list-group-item-label'>{this.props.name}</span>
                <input className='list-group-item-input' defaultValue={this.props.salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type='button' className='btn-cookie btn-sm'><i className='fas fa-cookie'></i></button>
                    <button type='button' className='btn-trash btn-sm'><i className='fas fa-trash'></i></button>
                    <i className='fas fa-star'></i>
                </div>
            </li>
        )
    }
}

export default EmployeesListItem;