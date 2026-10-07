import { Outlet, Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

export const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const App = () => {
    return (
        <div>
            <nav className="bg-dark">
                <div className="container mx-auto p-2">
                    <Link to="/">
                        <h2 className="text-cream text-2xl font-bold font-helvetica">
                            CRUD demo
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
