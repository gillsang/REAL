import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SbRotation = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000
    }

    return(
        <div className='showboard'>
            <Slider {...settings}>
                <div>
                    <img id="temporary" src='temporary.png'/>
                </div>
                <div>
                    <img id="temporary" src='temporary-002.png'/>
                </div>
                <div>
                    <img id="temporary" src='temporary-003.png'/>
                </div>
            </Slider>
      </div>
    )
}

export default SbRotation;