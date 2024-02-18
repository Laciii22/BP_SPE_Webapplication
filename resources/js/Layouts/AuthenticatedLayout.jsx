import Navigation from '@/Components/Navigation';

export default function Authenticated({ children }) {
    return (
        <div className="min-h-screen bg-primary">
            <Navigation></Navigation>
            <main className='pt-5'>{children}</main>
        </div>
    );
}
