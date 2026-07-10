import { Link } from 'react-router-dom'

function Nav(prop) {
  return (
    <div>
      <Link to='/nav'><h1>{prop.name}</h1></Link>
    </div>
  )
}

export default Nav