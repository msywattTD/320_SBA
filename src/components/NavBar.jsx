import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div className='nav'>
            <Link to='/bard'>
                <div>BARD</div>
            </Link>
            <Link to='/cleric'>
                <div>CLERIC</div>
            </Link>
            <Link to='/wizard'>
                <div>WIZARD</div>
            </Link>
        </div>
    )
}

export default NavBar