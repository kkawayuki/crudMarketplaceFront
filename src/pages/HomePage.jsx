import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../components/Product";
import { Link } from "react-router-dom";
import { VITE_BACKEND_URL } from "../App";

const HomePage = () => {
    const [products, setProducts] = useState([]); //state variable for storage
    const [isLoading, setIsLoading] = useState(false); //vars that change over runtime need useState handler

    //backend has to be running genius
    const getProducts = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(
                `${VITE_BACKEND_URL}/api/products`,
            ); //used by browsers/nodejs to make requests to API's
            console.log(response.data);
            setProducts(response.data); //read response into products array from axios
            setIsLoading(false); //successfully fetched data, no longer loading
        } catch (error) {}
    };

    //on application first load + side effects
    useEffect(() => {
        getProducts();
    }, []);

    //for more information on tailwind see documentation/tutorial
    return (
        <div>
            <div>
                <Link
                    to="/create"
                    className="inline-block mt-4 shadow-md bg-blue-700 text-white rounded-sm px-4 py-2 font-bold hover:bg-blue-600 hover:cursor"
                >
                    Create a Product
                </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-5">
                {isLoading ? (
                    "loading"
                ) : (
                    <>
                        {products.length > 0 ? (
                            <>
                                {products.map((product, index) => {
                                    return (
                                        <Product
                                            key={index}
                                            product={product}
                                            getProducts={getProducts}
                                        />
                                    );
                                })}
                            </>
                        ) : (
                            <div>There is no product</div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default HomePage;
