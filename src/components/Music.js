import React from 'react';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Carousel from 'react-elastic-carousel';

const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

export default function Music() {

    useEffect(() => {
        Aos.init({
          useClassNames: true,
          initClassName: false,
          animatedClassName: 'animated',
          duration: 800
        });
      }, [])
    return (
        <>
            <div className="container d-flex flex-column mytext" data-aos="fade-right" data-aos-offset="0" 
        data-aos-easing="ease-in-out" id='music'>
            
                <div className='welcome-text fs-2 text-center heading-text'>
                <div className='Title'>MUSIC</div>
                    <hr/>
                    FEATURED <strong >Music Videos</strong>
                </div>
                <div className='wrapper'>
                    <Carousel className="carousel" breakpoints={breakpoints} transitionMs={1000} enableAutoPlay={false} autoPlaySpeed={3000} >

                        <div className='carousel card'>
                        <iframe src="https://www.youtube.com/embed/UPECmnym2h8?si=eQniWZCZQhfWfJSY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>

                        <div className='carousel card'>
                            <iframe src="https://www.youtube-nocookie.com/embed/UoXiOYEONq8?si=GWox0K1tY0HLtczb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>

                        <div className='carousel card'>
                            <iframe src="https://www.youtube.com/embed/KnQECzLG8to?si=8Ids2cTxIyuYAKE4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div className='carousel card'>
                            <iframe src="https://www.youtube.com/embed/bdQ9t9jz8so?si=b0rRTgZ1_7PqbPd5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div className='carousel card'>
                        <iframe src="https://www.youtube.com/embed/r17IkgqPM8o?si=IzScObOwn_uE8C0F" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </Carousel>
                </div>
            </div>
        </>
    )
}