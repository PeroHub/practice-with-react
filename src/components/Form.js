import React from 'react'

class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            isFriendly: true,
            favColor: "blue",
            gender: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(events) {
        // destructuring the events object
        const {name, value, type, checked } = events.target
        type === "checkbox" ? this.setState({ [name]: checked}) : this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <form>
                <input 
                    type="text"
                    placeholder="First name" 
                    onChange={this.handleChange}/>
                <br />
                <input 
                    type="text" 
                    placeholder="Last name" onChange={this.handleChange}/>
                <p>{this.state.firstName} {this.state.lastName}</p>
                <br></br>
                <textarea value={"some values in here"}/>
                <br></br>
                <input 
                    type="checkbox" 
                    name="isFriendly"
                    checked={this.state.isFriendly}
                    onChange={this.handleChange}/>
                
                <input 
                    type="radio" 
                    name="gender"
                    value="male"
                    checked={this.state.gender === "male"}
                    onChange={this.handleChange}/>

                <input 
                    type="radio" 
                    name="gender"
                    value="female"
                    checked={this.state.gender === "female"}
                    onChange={this.handleChange}/>

                <h2>You are a {this.state.gender}</h2>

                <select 
                    value={this.state.favColor}
                    onChange={this.handleChange}
                    name="favColor">

                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                </select>
                <h2>Your favourite color is {this.state.favColor}</h2>
            </form>
        )
    }
}

export default Form