import './Row.css'

import Square from '../Square/Square'

export default function Row(props) {
  return (
    <div className="row-div">
        <Square num={props.startNum}/>
        <Square num={props.startNum+1}/>
        <Square num={props.startNum+2}/>
    </div>
  )
}
