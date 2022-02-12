import Rating from '../components/Rating';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { detailsProduct } from '../actions/productActions';
import { useEffect } from 'react';

export default function ProductScreen(props) {
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;
    useEffect(() => {
        dispatch(detailsProduct(productId));
    }, [dispatch, productId])
    // const product = data.products.find((x) => x._id === props.match.params.id)
    return (

        <div>
            {loading ? (<LoadingBox></LoadingBox>) :
                error ? (<MessageBox variant="danger">{error}</MessageBox>)
                    : (<div>
                        <Link to="/">Back to result</Link>
                        <div className="row top">
                            <div className="col-2">
                                <img
                                    className="large"
                                    src={product.image}
                                    alt={product.name}
                                ></img>
                            </div>
                            <div className="col-1">
                                <ul>
                                    <li><h1>{product.name}</h1></li>
                                    <li><Rating rating={product.rating} numReview={product.numReview}></Rating></li>
                                    <li>Price: {product.price}</li>
                                    <li>Description: {product.description}</li>
                                    <li><h1>{product.brand}</h1></li>
                                </ul>
                            </div>
                            <div className="row">
                                <div className="card card-body">
                                    <ul>

                                        <li>
                                            <div className="row">
                                                <div>Price: </div>
                                                <div className="price">
                                                    ${product.price}
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="row">
                                                <div>Status: </div>
                                                <div>
                                                    {product.countInStock > 0 ? (<span className="success"> In Stock</span>) : (<span className="error"> Unavailable</span>)}
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <button className="primary block">Add to Cart</button>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>)
            }

        </div>
    )
}