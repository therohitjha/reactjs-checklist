import React from 'react'
import './main.css'

function CheckList(props){
const CheckListStyle={
    fontStyle:'italic',
    color:'red',
    textDecoration:'line-through'
}


    return(<div className='style'>
<input type='checkbox' onChange={()=>props.Destination(props.item.id)}/>
<p style={props.item.done?CheckListStyle:null}>{props.item.destination}</p>
    </div>)
}

export default CheckList