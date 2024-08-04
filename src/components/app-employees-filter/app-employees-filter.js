import './app-employees-filter.css';
import { Component } from 'react';

class AppEmployeesFilter extends Component {
    render() {
        return (
            <div className='app-employees-filter'>
                <button type='button' className='btn btn-light'>Все сотрудники</button>
                <button type='button' className='btn btn-outline-light'>На повышение</button>
                <button type='button' className='btn btn-outline-light'>З/П больше 1000$</button>
            </div>
        )
    }
}

export default AppEmployeesFilter;