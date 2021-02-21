// write your CatList component here
import React from 'react'

export default class CatList extends React.Component{

    renderCats = () =>{
        if(this.props.catPics.length > 0){
        return this.props.catPics.map(pic=>{
            return <img key={pic.id} src={pic.url}/>
        })
    }
    }
    render(){
        console.log('in catlist', this.props)
        return <div>
            {this.renderCats()}
        </div>
    }
}