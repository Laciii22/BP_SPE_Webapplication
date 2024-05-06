import Navigation from '@/Components/Navigation';
import Footer from '@/Components/Footer';

export default function Authenticated({ children }) {
    return (
        <div className="min-h-screen bg-primary">
            <Navigation/>
            <main className='pt-5'>{children}</main>
            <Footer/>

        </div>
    );
}
