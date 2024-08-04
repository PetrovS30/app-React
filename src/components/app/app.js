import './app.css';
import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppEmployeesFilter from '../app-employees-filter/app-employees-filter';
import EmployeesList from '../employees-list/employees-list';
import AddForm from '../employees-add-form/employees-add-form';

class App extends Component {
    render () {
        return (
            <div className='app'>
                <AppInfo/>
                <div className='search-panel'>
                    <SearchPanel/>
                    <AppEmployeesFilter/>
                </div>
                <EmployeesList/>
                <AddForm/>
            </div>
        )
    }
}

export default App;