import {useState} from "react"

const EventComponent_03 = ()=>{
    const [state,setState] = useState("")

    const handleKeyUp = (e)=>{console.log('KeyUp...',e.target.value); setState(e.target.value);}
    const handleKeyDown = (e)=>{console.log('KeyDown...',e.target.value); setState(e.target.value);}

    return (
        <div>
            <div>
                STATE : {state}
            </div>
            KET
        </div>
    )
}

export default EventComponent_03;