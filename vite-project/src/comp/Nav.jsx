
import '../comp/Nav.css'
// eslint-disable-next-line react/prop-types
function Nav({name,age}) {
  return (
    <div>
        <h1>
        Your name is {name}  and you are {age} years old!
        </h1>
       
    </div>
  )
}

export default Nav