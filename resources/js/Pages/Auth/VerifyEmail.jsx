import GuestLayout from '@/Layouts/GuestLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, Link, useForm } from '@inertiajs/react';

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();

        post(route('verification.send'));
    };

    return (
        <GuestLayout>
            <Head title="Overenie E-mailu" />

            <div className="mb-4 text-sm text-gray-600">
                Ďakujeme, že ste sa zaregistrovali! Pred začatím môžete overiť svoju emailovú adresu kliknutím na odkaz,
                ktorý sme vám práve poslali emailom. Ak ste nedostali e-mail, radi vám pošleme ďalší.
            </div>

            {status === 'verification-link-sent' && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    Nový overovací odkaz bol odoslaný na emailovú adresu, ktorú ste poskytli počas registrácie.
                </div>
            )}

            <form onSubmit={submit}>
                <div className="mt-4 flex items-center justify-between">
                    <PrimaryButton disabled={processing}>Zaslať Overovací E-mail</PrimaryButton>

                    <Link
                        href={route('logout')}
                        method="post"
                        as="button"
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Odhlásiť sa
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}
