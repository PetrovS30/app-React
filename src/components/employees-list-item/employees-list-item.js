import './employees-list-item.css';
import { Component } from 'react';

class EmployeesListItem extends Component {
    
    render() {
        let className = 'list-group-item d-flex justify-content-between'
        if(this.props.increase) {
            className += " like";
        }
        if(this.props.rise) {
            className += ' increase'
        }
        return (
            <li className={className}>
                <span  onClick={this.props.onUpdateIncrease} className='list-group-item-label'>{this.props.name}</span>
                <input className='list-group-item-input' defaultValue={this.props.salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type='button' onClick={this.props.onUpdateRise} className='btn-cookie btn-sm'><i className='fas fa-cookie'></i></button>
                    <button type='button' onClick={this.props.onDelete} className='btn-trash btn-sm'><i className='fas fa-trash'></i></button>
                    <i className='fas fa-star'></i>
                </div>
            </li>
        )
    }
}

export default EmployeesListItem;