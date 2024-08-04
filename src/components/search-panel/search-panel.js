import './search-panel.css';
import { Component } from 'react';

class SearchPanel extends Component {
    render() {
        return (
            //form-control отвечает за ширину input
            <input type="text" className='form-control search-input' placeholder='Найти сотрудника'/>
        )
    }
}

export default SearchPanel;