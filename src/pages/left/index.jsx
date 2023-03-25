import { useDispatch } from 'react-redux'
import './style.css'


function Left() {

    const dispatch = useDispatch()


    return (

        <div className="contsiner-left">

            <div className="center">

            <div className="text">
                <input onChange={(e) => {
                    dispatch({
                        type: 'changeName',
                        payload: {
                            name: e.target.value
                        }
                    })
                }} type="text" />
                <input onChange={(e) => {
                    dispatch({
                        type: 'add',
                        payload: {
                            name: e.target.value
                        }
                    })
                }} type="text" />
            </div>

            <div className="input-col">
                <input onChange={(e) => {
                    dispatch({
                        type: 'changeColor',
                        payload: {
                            color:e.target.value
                        }
                    })
                }} type="color" name="" id="" />
                <input onChange={(e) => {
                    dispatch({
                        type: 'changeColor1',
                        payload: {
                            color:e.target.value
                        }
                    })
                }} type="color" name="" id="" />
                <input onChange={(e) => {
                    dispatch({
                        type: 'changeColor2',
                        payload: {
                            color:e.target.value
                        }
                    })
                }} type="color" name="" id="" />
            </div>

            <input onChange={(e) => {
                    dispatch({
                        type: 'changeBorder',
                        payload: {
                            border:e.target.value
                        }
                    })
                }} type="range" name="" id="" />
                    
                    </div>
        </div>
    )
}

export default Left