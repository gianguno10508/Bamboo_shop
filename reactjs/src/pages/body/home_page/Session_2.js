import axios from 'axios';
import OAuth from 'oauth-1.0a';
import CryptoJS from 'crypto-js';
import jQuery from 'jquery';
import Slider from 'react-slick';
import { useEffect, useState } from 'react';
import image_session_2 from '../../../img/layout/layer-24.png'
function Session_2() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 3000,
    };
    const [product, setProducts] = useState([]);
    const ck = 'ck_43d8557c288c2923ddd9d9d62e3be79a63f14439'
    const cs = 'cs_cf3f7bacba118d528f167a6269bffd25fe9a606e'
    const url = 'http://reactjswordpress.com:828/wp-json/wc/v2/products'
    useEffect(() => {
        const fetchDataProduct = async () => {
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
                    setProducts(response.data);
                }, function (error) {
                    console.log(error)
                })
            } catch (error) {
                console.log(error);
            }
        };
        fetchDataProduct();
    }, []);
    return (
        <section className='session-home-2'>
            <div className='content-session'>
                <div className='img-session-bg'>
                    <img src={image_session_2} />
                </div>
                <div className='container'>
                    <div className='content'>
                        <h2 className='title-session-2'>New products</h2>
                        <div className='row'>
                            <Slider {...settings}>
                                {product.map((d, index) => (
                                    <div
                                        className='col-new-product'
                                        key={d.id}
                                    >
                                        <div className="img-new-product">
                                            <img src={d.images[0].src} />
                                        </div>
                                        <div className="content-new-product">
                                            <h4>{d.name}</h4>
                                            <h4>{d.price+ " đ"}</h4>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Session_2;