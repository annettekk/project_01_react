import './Grid.css'

import Row from '../Row/Row'

export default function Grid(){

    return(
        <div className="grid-div">
            <Row startNum={1}/>
            <Row startNum={4}/>
            <Row startNum={7}/>
        </div>
    )
}