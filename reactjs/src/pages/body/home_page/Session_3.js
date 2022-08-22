import axios from 'axios';
import OAuth from 'oauth-1.0a';
import CryptoJS from 'crypto-js';
import jQuery from 'jquery';
import Slider from 'react-slick';
import { useEffect, useState } from 'react';

function Session_3() {
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
    const ck = 'ck_43d8557c288c2923ddd9d9d62e3be79a63f14439'
    const cs = 'cs_cf3f7bacba118d528f167a6269bffd25fe9a606e'
    const url = 'http://reactjswordpress.com:828/wp-json/wc/v3/products/categories'
    useEffect(() => {
        const fetchDataCategories = async () => {
            try {
                const oauth = OAuth({
                    consumer: {
                        key: ck,
                        secret: cs
                    },
                    signature_method: 'HMAC-SHA1',
                    hash_function: function (base_string, key) {
                        return CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA1(base_string, key));
                    }
                });

                const requestData = {
                    url: url,
                    method: 'GET'
                };

                axios.get(
                    requestData.url + '?' + jQuery.param(oauth.authorize(requestData))
                ).then(function (response) {
                    console.log(response.data)
                    setCategories(response.data);
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
        <section className='session-home-3'>
            <div className='content-session'>
                <div className='row'>
                    <Slider {...settings}>
                        {categories.map((d, index) => (
                            <div
                                className='col-categories'
                                key={d.id}
                            >
                                <div className="img-categories">
                                    <img src={d.image.src} />
                                    <div className="count-categories-product">
                                        <div className='count'>
                                            <p>{d.count}</p>
                                            <span>products</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-categories">
                                    <h4>{d.name}</h4>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}
export default Session_3;