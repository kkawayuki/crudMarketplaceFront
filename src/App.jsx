import { Outlet, Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

export const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const App = () => {
    return (
        <div>
            <nav className="bg-gray-800">
                <div className="container mx-auto p-2">
                    <Link to="/">
                        <h2 className="text-white text-2xl font-bold">
                            React Crud
                        </h2>
                    </Link>
                </div>
            </nav>

            <div className="container mx-auto p-2 h-full">
                <Outlet />
            </div>

            <ToastContainer/>
        </div>
    );
};

export default App;
