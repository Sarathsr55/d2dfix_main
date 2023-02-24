import React, { useState } from 'react'
import bg1 from '../../images/poster4.jpg'
import bg2 from '../../images/poster2.jpg'
import bg3 from '../../images/poster3.jpg'
import Carousel from 'react-bootstrap/Carousel';
import './Slider.css'

const Slider = () => {

    const poster = [
        { pic: bg3, title:'Free Home Service' , subtitle:'ഒരു രൂപ പോലും സർവീസ് ചാർജ് ഈടാക്കാതെ നിങ്ങളുടെ സമയത്ത് വന്നു സർവീസ് ചെയ്തുതരും.'  },
        { pic: bg1, title:'At No Extra Cost' , subtitle:'ഒറിജിനലും വാറന്റിയും ഉള്ള ഡിസ്പ്ലേ ലഭ്യമാണ് ' },
        { pic: bg2, title:'Spot Display Replacement' , subtitle:'വീട്ടിൽ വന്ന് ലൈവായി ഡിസ്‌പ്ലേ മാറിക്കൊടുക്കും '  }
    ]


    return (
        <div className='slider-container' >
            <Carousel style={{maxHeight:'700px'}} >
            {poster.map((obj,index)=>
                <Carousel.Item interval={5000} key={index}>
                <div className='slider-title' >
                    <h1>{obj.title}</h1>
                </div>
                <div className='slider-subtitle' >
                    <h3 style={{fontWeight:'bold'}} >{obj.subtitle}</h3>
                </div>
                <img    
                    className="d-block w-100 slider-image"
                    src={obj.pic}
                    alt="First slide"
                />

                </Carousel.Item>
            )}
            

        </Carousel>
        </div>



    )
}

export default Slider