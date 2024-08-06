import './app.css';
import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppEmployeesFilter from '../app-employees-filter/app-employees-filter';
import EmployeesList from '../employees-list/employees-list';
import AddForm from '../employees-add-form/employees-add-form';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {name: 'Serg', salary : 2500, increase : true , rise: false, id : 1},
                {name: 'Galina', salary : 4500, increase : false , rise: true, id : 2},
                {name: 'Alex', salary : 920, increase : false , rise: false, id : 3}
            ],
            term : '',
            filter: ''
        }
        this.maxId = 4
    }

    onUpdateIncrease = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(item => item.id === id);
            const old = data[index];
            const before = data.slice(0, index);
            const after = data.slice(index + 1 );
            const newItem = {...old, increase : !old.increase};
            const newArr = [...before, newItem, ...after];
            return {
                data: newArr
            }
        })
    }

    onUpdateRise = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(item => item.id === id);
            const old = data[index];
            const before = data.slice(0, index);
            const after = data.slice(index +1);
            const newItem = {...old, rise : !old.rise};
            const newArr = [...before, newItem, ...after];
            return {
                data : newArr
            }
        })
    }

    onDelete = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(item => item.id === id);
            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            const newArr = [...before, ...after];
            return {
                data : newArr
            }
        })
    }

    onAddForm = (name,salary) => {
        const newObj = {
            name,
            salary,
            increase : false ,
            rise: true,
            id : this.maxId++
        };
        this.setState(({data}) => {
            const newArr = [...data, newObj];
            return {
                data : newArr
            }
        })
    }

    onUpdateSearch = (items, term) => {
        if(term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    }

    onSearch = (term) => {
        this.setState({term});
    }

    onUpdateFilter = (items, filter) => {
        switch(filter) {
            case 'rise' : 
                return items.filter(item => item.rise);
            case 'moreThan1000' : 
                return items.filter(item => item.salary > 1000);
            default :
                return items;
        }
    }

    onFilter = (filter) => {
        this.setState({filter});
    }

    render () {
        const emp =this.state.data.length;
        const rise = this.state.data.filter(item => item.rise).length;
        const filter = this.onUpdateFilter(this.state.data, this.state.filter);
        const veariableDate = this.onUpdateSearch(filter, this.state.term);
        return (
            <div className='app'>
                <AppInfo emp={emp} rise={rise}/>

                <div className='search-panel'>
                    <SearchPanel onSearch={this.onSearch}/>
                    <AppEmployeesFilter onFilter={this.onFilter} />
                </div>
                <EmployeesList onDelete={this.onDelete} 
                               onUpdateRise={this.onUpdateRise}  rise={this.state.data.rise} 
                               onUpdateIncrease={this.onUpdateIncrease} increase={this.state.data.increase}
                               data={veariableDate}/>
                <AddForm onAddForm={this.onAddForm}/>
            </div>
        )
    }
}

export default App;