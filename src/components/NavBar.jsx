import { Link } from 'react-router-dom'

function NavBar() {
    const classes = [
            "bard",
            "cleric",
            "wizard"
    ]
    
    let classList = classes.map((charClass) => {
        return (
            <Link to={`/${charClass}`}>
                <h3>{charClass}</h3>
            </Link>
        )
    })

    return (



        <div className='nav'>

            {classList}
            {/* <Link to='/bard'>
                <div>BARD</div>
            </Link>
            <Link to='/cleric'>
                <div>CLERIC</div>
            </Link>
            <Link to='/wizard'>
                <div>WIZARD</div>
            </Link> */}
        </div>
    )
}

export default NavBar