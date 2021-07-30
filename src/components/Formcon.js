import React from 'react'

function Formcon(props) {
    return(
        <form >
                    <input 
                        type="text" 
                        name="firstName"
                        onChange={props.handChange}/>
                    <br />
                    <input 
                        type="text" 
                        name="lastName"
                        onChange={props.handChange}/>
                    <br />
                    <input 
                        type="number" 
                        name="age"
                        checked
                        onChange={props.handChange}/>
                    <h3>{props.data.firstName} {props.data.lastName} {props.data.age}</h3>
                    <buttton onClick={this.handleSubmit}>Submit</buttton>
                    <br />
                    <label>
                        Gender:
                        <input 
                            type="radio"
                            name="gender"
                            value="male"
                            checked={props.data.gender === "male"}
                            onChange={props.handChange}/> Male
                        <input 
                            type="radio"
                            name="gender"
                            value="female"
                            checked={props.data.gender === "female"}
                            onChange={props.handChange}/> Female
                    </label>
                    <p>You are a female {props.data.gender}</p>

                    <label>
                        Location:
                        <select name="location" onChange={props.handChange}>
                            <option value="uyo">Uyo</option>
                            <option value="lagos">Lagos</option>
                            <option value="abuja">Abuja</option>
                        </select>
                    </label>
                    <p>{props.data.location}</p>

                    <label>
                        Dietary Restrictions:
                        <input 
                            name="isVegeterian" 
                            checked={props.data.isVegeterian} 
                            type="checkbox" 
                            onChange={props.handChange}/>Vegeterian
                        <br />
                        <input 
                            name="iskosher" 
                            checked={props.data.iskosher} 
                            type="checkbox" 
                            onChange={props.handChange}/>kosher
                        <br />
                        <input 
                            name="isLactose" 
                            checked={props.data.isLactose} 
                            type="checkbox" 
                            onChange={props.handChange}/>Lactose
                    </label>
                </form>
    )
}

export default Formcon