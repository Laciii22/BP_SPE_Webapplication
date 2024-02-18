import { Link } from '@inertiajs/react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Guest({ children }) {
    return (
        <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center pt-6 pt-sm-0 bg-primary">
            <div>
                <Link href="/">
                    Hmmmm
                </Link>
            </div>

            <div className="mx-auto mt-6 px-4 py-4 bg-white shadow-sm rounded-lg">
                {children}
            </div>
        </div>
    );
}
