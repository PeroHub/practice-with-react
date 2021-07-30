import React from 'react'


class Fetch extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoading: false,
            character: {}
        }
    }

    componentDidMount() {
        this.setState({
            isLoading: true
        })
        fetch("https://swapi.co/api/people/1")
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    isLoading: false,
                    character: data
                })
            })
    }

    render() {
        return (
            <div>
                {this.state.isLoading ? <h2>Loading.....</h2>: this.state.character.name}
            </div>
        )
    }
}

export default Fetch