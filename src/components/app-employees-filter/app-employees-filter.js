import './app-employees-filter.css';
import { Component } from 'react';

class AppEmployeesFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term : 'all'
        }
        
    }



    onButtonClick = (e) => {
        const filter = e.target.id;
        this.props.onFilter(filter);
        this.setState({
            term : e.target.id
        });
    }



    render() {
        const {term} = this.state;
        let active = term;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        
        return (
            <div className='app-employees-filter'>
                <button onClick={this.onButtonClick}  id='all'  type='button' className={`btn ${clazz}`}>Все сотрудники</button>
                <button onClick={this.onButtonClick}  id='rise' type='button' className={`btn ${clazz}`}>На повышение</button>
                <button onClick={this.onButtonClick}  id='moreThan1000' type='button' className={`btn ${clazz}`}>З/П больше 1000$</button>
            </div>
        )
    }
}

export default AppEmployeesFilter;