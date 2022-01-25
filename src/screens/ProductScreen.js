import data from '../data'
import Rating from '../components/Rating'

export default function ProductScreen(props) {
    const product = data.products.find((x) => x._id === props.match.params.id)
    return (
        <div>
            <div className="row">
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
                        <li><h1>{product.brand}</h1></li>
                    </ul>
                </div>
                <div className="row">
                    <div className="col-1">
                        ADD TO CART
                    </div>
                </div>
            </div>
        </div>
    )
}