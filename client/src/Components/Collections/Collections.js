import React from 'react'
import './Collections.css'
import p1 from '../../images/p1.jpeg'
import p2 from '../../images/p2.jpeg'
import p3 from '../../images/p3.jpeg'
import p4 from '../../images/p4.jpeg'
import p5 from '../../images/p5.jpeg'

const Collections = () => {
    return (
        <div className='collection-wrapper' >
            <div className="collection-heading">
                <h1>Our Collections</h1>
            </div>
            <div className="collection-content">
                <div style={{ display: 'flex', justifyContent: 'center', width: '100%',marginLeft:'20px',marginRight:'15px' }} >
                    <div className='battery-image'  >
                        <img style={{ width: '200px',height:'255px', padding: '20px', display: 'flex', alignItems: 'center' }} src={p2} alt="" />
                    </div>
                    <div className='battery-image'  >
                        <img style={{ width: '200px',height:'255px', padding: '20px', display: 'flex', alignItems: 'center' }} src={p3} alt="" />
                    </div>
                    
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', width: '100%',marginLeft:'20px',marginRight:'15px' }} >
                    <div className='battery-image'  >
                        <img style={{ width: '200px',height:'255px', padding: '20px', display: 'flex', alignItems: 'center' }} src={p4} alt="" />
                    </div>
                    <div className='battery-image'  >
                        <img style={{ width: '200px',height:'255px', padding: '20px', display: 'flex', alignItems: 'center' }} src={p5} alt="" />
                    </div>
                    
                </div>
            </div>
            <div className="collection-caption">
                <h5>All model displays are available. </h5>
            </div>
        </div>
    )
}

export default Collections