import { useSelector } from 'react-redux'
import './style.css'


function Right(){
    const name =useSelector((state)=>{
        return state.user.name
      })
      const color = useSelector((state)=>{
        return state.colors.color
      })
      const name1 =useSelector((state)=>{
        return state.user1.name
      })
      const color1 = useSelector((state)=>{
        return state.colors1.color
      })
      const color2 = useSelector((state)=>{
        return state.colors2.color
      })
      const radiu = useSelector((state)=>{
        return state.borders.border
      })

 

    return(

        <div className="contsiner-right">

            <div style={{backgroundColor:color2,borderRadius:radiu + '%'}} className="block">
                <div className="txtt">
                <h1 style={{color:color}} className="txt">{name}</h1>
                <h1 style={{color:color1}} className="txt">{name1}</h1>
                </div>
            </div>
            
        </div>
    )
}

export default Right