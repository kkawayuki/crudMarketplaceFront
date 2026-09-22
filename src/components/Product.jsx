import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { VITE_BACKEND_URL } from "../App";
//components are the the reusable modules that make up a page
//makes sense to have a product component, as they populate the home page

//read in "product" json converted object from parameter
const Product = ({ product, getProducts }) => {
    //delete method receives passed down function call for getProducts (loading on home screen)
    const deleteProduct = async (id) => {
        const result = await Swal.fire({
            title: "Do you really want to delete?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, go back",
        });
        if (result.isConfirmed) {
            try {
                await axios.delete(`${VITE_BACKEND_URL}/api/products/${id}`);
                toast.success(`Deleted Product`);
                getProducts();
            } catch (error) {
                toast(error.message);
            }
        }
    };

    return (
        <div className="bg-white rounded shadow-lg overflow-hidden">
            <img src={product.image} className="w-full h-28 object-cover" />
            <div className="px-4 pt-2 pb-4">
                <h2 className="text font semi-bold">{product.name}</h2>
                <div className="text-sm">Quantity: {product.quantity}</div>
                <div className="text-sm">Price: ${product.price}</div>
                <div className="mt-2 flex gap-4">
                    <Link
                        to={`/edit/${product._id}`}
                        className="inline-block w-full text-center shadow-md text-sm bg-gray-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-gray-600 hover:cursor-pointer"
                    >
                        Edit
                    </Link>
                    <button
                        onClick={() => deleteProduct(product._id)}
                        className="inline-block w-full text-center shadow-md text-sm bg-red-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-gray-600 hover:cursor-pointer"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
