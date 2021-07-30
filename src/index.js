import React from 'react'
import ReactDom from 'react-dom'
import App from './App'




ReactDom.render(
    <App />,
    document.getElementById("root")
)








// function BoilingVerdict(props) {
//     if(props.celsius >= 100){
//         return <h2>Water will surely boil under this temperature</h2>
//     }else if(props.celsius < 100) {
//         return <h2>Water cannot boil under this temperature</h2>
//     }else {
//         return <p>Enter a value</p>
//     }
// }

// class Calculator extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {temperature: ''}
//         this.handleChange = this.handleChange.bind(this)
//     }

//     handleChange(event) {
//         this.setState({temperature: event.target.value})
//     }

//     render(){
//         const temperature = this.state.temperature
//         return (
//             <fieldset>
//                 <legend>Enter water temperature</legend>
//                 <input onChange={this.handleChange}/>
//                 <BoilingVerdict celsius={parseFloat(temperature)}/>
//             </fieldset>
//         )
//     }
// }


// ReactDom.render(
//     <Calculator />,
//     document.getElementById('root')
// )