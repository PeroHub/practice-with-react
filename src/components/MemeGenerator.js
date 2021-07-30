import React from 'react'

class MemeGenerator extends React.Component{ 
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(events) {
        const {name, value} = events.target
        this.setState({
            [name]: value
        })
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data
            this.setState({
                allMemeImgs: memes
            })
        })
    }

    handleClick(e) {
        e.preventDefault()
        const randomNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randomImg2 = this.state.allMemeImgs[randomNum].url
        this.setState({
            randomImg: randomImg2
        })
        
        
    }
    render() {
      
        
        // const loop = me.map((final) => {
        //     empty = final.name
        // })
        return (
            <div>
                <form className="meme-form"  >
                    <input 
                        type="text" 
                        placeholder="toptext"
                        value={this.state.topText}
                        onChange={this.handleChange}
                        name="topText" />
                    <input 
                        type="text" 
                        placeholder="bottomtext"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                        name="bottomText"/>
                    
                    <button onClick={this.handleClick}>Gen</button>
                    
                </form>

                <div className="meme">
                    <img src={this.state.randomImg}  alt=""/>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
            )
    }
    
    
}

export default MemeGenerator