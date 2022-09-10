import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from "axios";
import '../../styles/details_cart.css';
function DetailsCart(props) {
    const url = 'http://reactjswordpress.com:828/wp-json/wp/v2/cart/show/';
    const [cartInfo, setCartInfo] = useState([]);
        useEffect(() => {
            try {
                axios.get(url,{
                    params:{
                        id_user: props.account.ID,
                    }}).then(function (response) {
                        setCartInfo(response.data);
                        console.log(response.data);
                }, function (error) {
                    console.log(error);
                })
            } catch (error) {
                console.log(error);
            }
    }, [props.account.ID]);
    return (
        (cartInfo) && cartInfo.id_user != null ? 
            <div className='details-cart'>
                <div className='name-product'>
                    <p>Tên sản phẩm</p>
                    <p>{cartInfo.name}</p>
                </div>
                <div className='name-product'>
                    <p>Số lượng</p>
                    <p>{cartInfo.quantity}</p>
                </div>
                <div className='name-product'>
                    <p>Giá</p>
                    <p>{cartInfo.price}đ</p>
                </div>
            </div>
        : <p>Nothing here</p>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        // chooseDishCate: (data) => {
        //     dispatch(actSelectCategory(data));
        // }
    };
};
const mapStateToProps = (state, ownProps) => {
    return {
        account: state.account
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(DetailsCart);  