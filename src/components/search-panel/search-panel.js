import './search-panel.css';
import { Component } from 'react';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateInput = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onSearch(term);
    }

    render() {
        return (
            //form-control отвечает за ширину input
            <input type="text" className='form-control search-input' placeholder='Найти сотрудника' 
                   onChange={this.onUpdateInput}/>
        )
    }
}

export default SearchPanel;