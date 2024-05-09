import boatimage from './assets/boat.png'
import logo from './assets/logo.svg'
import PropTypes from "prop-types"

const Head = (props) => {
    return (
        <>
            <div style={{ backgroundColor: 'black', height: '100px' }}>
                <nav>
                    <h1 style={{ float: 'left', marginRight: '20px' }}>{'Start Bootstrap'}</h1>
                    <ul>
                        <li className="navbar"><a href="#home">{'Home'}</a></li>
                        <li className="navbar"><a href="#home">{'About'}</a></li>
                        <li className="navbar"><a href="#home">{'Shop'}</a></li>
                    </ul>
                    <button style={{ float: 'right', fontSize: '15px', padding: '8px', borderRadius: '5px' }}>
                        <i style={{padding:'2px'}} class="fa-solid fa-cart-shopping"></i>{' Cart '}{props.size}
                    </button>
                </nav>
            </div>
            <div className="contain" >
                <div style={{ margin: '10px 50px 10px 100px', padding: '10px' }}>
                    <img style={{ height: '150px', width: '300px' }} src={logo}></img>
                    <h2 style={{ color: '#eb3434' }}>{"' Connect a Device - Listen a Music - Enjoy a Lot '"}</h2>
                </div>
                <div>
                    <img style={{ height: '400px', width: '600px', paddingLeft: '100px' }} src={boatimage}></img>
                </div>
            </div>
            </>
    )
};

Head.PropTypes = {
    addcart : PropTypes.number
  
  }
export default Head