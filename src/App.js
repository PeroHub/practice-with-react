import React from 'react'
import shopping from './shopping'
import Jokes from './components/Jokes'
import Todoitems from './components/Todoitems'
import './index.css'
import jokesData from './jokesData'
import Product from './components/Product'
import codingProduct from './codingProduct'
import Conditional from './components/Conditional'
import Login from './components/Login'
import Logout from './components/Logout'
import Fetch from './components/Fetch'
import Form from './components/Form'
import Formtravel from './components/Formtravel'
import Headmeme from './components/Headmeme'




class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "peter",
            age: 50,
            isLoggedIn: true,
            count: 0,
            isLoading: true,
            todos: shopping
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleTouch = this.handleTouch.bind(this)
        
    }

    handleTouch() {
        this.setState((prevState) => {
           return {
            isLoggedIn: !prevState.isLoading
           }
        })
        
    }

    handleChange(id) {
        this.setState((prevState) => {
            const store = prevState.todos.map(todo => {
                if(todo.id === id){
                    todo.completed = !todo.completed  
                }
                return todo
            })
            return {
                todos: store
            }
        })
        console.log("working fine " + id)
    }

    handleClick() {
        this.setState((prev) => {
            return {
                count: prev.count += 2
            }
        })
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({isLoading: false})
        }, 1500);
    }
    
    
    
    

    render() {

        let final = codingProduct.map((coding) => {
            
            return (
                <Product key={coding.id} product={coding}/>
                
            )
            
        })

        let item = jokesData.map(jokeItem => {
            return ( <Jokes key={jokeItem.id} list={jokeItem}/>)
        })


        let shop = this.state.todos.map((todo) => {
            return (
                <Todoitems key={todo.id} details={todo} change={this.handleChange} />
            )
        })

        let currentState;

        if(this.state.isLoggedIn === true){
            currentState = "In"
        } else {
            currentState = "out"
        }

        let button = this.state.isLoading ? "Log In": "Log out"
        let buttonText = this.state.isLoading ? "Logged out": "Log here"

        return (
            <div className="">
                
                {/* {shop} */}
                
                {/* <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Click me</button> */}
                {/* {this.state.isLoading ? <h2>Loading.....</h2>:<Conditional /> } */}
                
                {/* <button onClick={this.handleTouch}>{button}</button>
                <p>{buttonText}</p> */}
                {/* <Fetch /> */}
                {/* <Form /> */}
                {/* <Formtravel /> */}
                <Headmeme />
            </div>
        )
    }
}

export default App