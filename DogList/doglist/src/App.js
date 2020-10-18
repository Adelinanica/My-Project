import React, { Component } from 'react'
//import Breeds from './Breeds'
import DogList from './DogList'
import {list} from'./List'
import Search from './Search'



class App extends Component{
    constructor() {
        super()
        this.state={
            list: list,
            searchfield:" ",
        }
    }
    onSearchChange=(event) => {
        this.setState({searchfield:event.target.value });
    }

    render() {
        const filteredList= this.state.list.filter((list)=>{
            return list.name
            .toLowerCase()
            .includes(this.state.searchfield.toLowerCase())
        });


        return (
            <div className=" app">
                <h1 id="title">Dog Breeds</h1>
                <Search searchChange = {this.onSearchChange} />
                <DogList  list={filteredList}/>
            </div>
        )
    }
}
export default App