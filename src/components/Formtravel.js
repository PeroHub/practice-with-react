import React from 'react'
import Formcon from './Formcon'

class Formtravel extends React.Component{
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: 0,
            gender: "",
            location: "",
            isVegeterian: true,
            isLactose: true,
            iskosher: true,
        }
        this.handChange = this.handChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handChange(events) {
        const { name, value, type} =  events.target
         this.setState({
            [name] : value
        })
    }

    handleSubmit () {
        
    }
    render() {
        return (
            <div>
                <Formcon handChange={this.handChange} data={this.state}/>
            </div>
        )
    }
}

export default Formtravel