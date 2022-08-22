import axios from 'axios';
import OAuth from 'oauth-1.0a';
import CryptoJS from 'crypto-js';
import jQuery from 'jquery';
import Slider from 'react-slick';
import { useEffect, useState } from 'react';
function Session_5() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 3000,
    };
    const [categories, setCategories] = useState([]);
    const url = 'http://reactjswordpress.com:828/wp-json/wp/v2/posts';
    useEffect(() => {
        const fetchDataCategories = async () => {
            try {
                axios.get(url).then(function (response) {
                    console.log(response.data)
                }, function (error) {
                    console.log(error)
                })
            } catch (error) {
                console.log(error);
            }
        };
        fetchDataCategories();
    }, []);
    return (
        <section className='session-home-5'>
            <div className='content-session'>
                <div className="posts">
                    <h2>BLOG</h2>
                </div>
            </div>
        </section>
    );
}
export default Session_5;