import React from 'react';
import axios from 'axios';


class Series extends React.Component {
    constructor() {
        super();

        this.state={
            series: "",
            imdbResults: [],
            isRetrieved: false
        }
    
    }
    handleInputChange = event => {
        this.setState({series: event.target.value})

    }

    handleSubmit = event => {
        event.preventDefault();

        axios.get(`http://localhost:3000/titles/${this.state.series}`).then(series => {this.setState({imdbResults: [series.data.imbd], isRetrieved: true})}).catch(error => {console.log(error)});
    }
    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleInputChange} value={this.state.series}/>
                    <button>Search</button>
                </form>
            </div>
        )
    }

}
export default Series;

