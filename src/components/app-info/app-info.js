import './app-info.css';
import { Component } from 'react';

class AppInfo extends Component {
    render() {
        return (
            <div className='app-info'>
                <h2>Учёт сотрудников в компании : NELLA</h2>
                <h3>Общее количество сотрудников : </h3>
                <h3>Премию получат</h3>
            </div>
        )   
    }
}

export default AppInfo;