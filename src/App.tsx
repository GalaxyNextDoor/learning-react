import Student from "./Student"
// import Like from "./Like"
import Formy from "./form/Formy"

export default function App(){
  let student = [
    {
      name:"Aadi",
      age : 20, 
      course:"HTML"
    },
    {
      name:"bharath",
      age: 30,
      course :"CSS"
    },
    {
      name:"santhosh",
      age: 900,
      course :"CSS"
    },
    {
      name:"pavan",
      age: 3000,
      course :"CSS"
    },
    {
      name:"koushik",
      age: 1,
      course :"CSS"
    }
  ]
  return(
    <div className="App">
      {/* <Like></Like> */}

      <h1 style={{
        color:"rgb(0,0,256)"

      }
      }>
        BLUE
      </h1><h1>FILM</h1>
      <p style={
        {
          color:"red"
        }
      }>by sandeep reddy vanga</p>
      <Formy/>
      
      
    </div>
  )
}