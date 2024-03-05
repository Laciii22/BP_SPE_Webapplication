import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };
    return (

        <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center pt-6 pt-sm-0 bg-primary">

            <div className="mx-auto mt-6 px-4 py-4 bg-white shadow-sm rounded-lg">
                <Head title="Log in" />
                <h3 className='mb-4'>Prihlásenie</h3>
                {status && <div className="mb-4 font-medium text-sm text-success">{status}</div>}
                <form onSubmit={submit}>
                    <div className="mb-3">
                        <InputLabel htmlFor="email" value="Email" />
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className={`form-control${errors.email ? ' is-invalid' : ''}`}
                            autoComplete="username"
                            autoFocus
                            onChange={(e) => setData('email', e.target.value)}
                        />
                        <InputError message={errors.email} />
                    </div>
                    <div className="mb-3">
                        <InputLabel htmlFor="password" value="Password" />
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className={`form-control${errors.password ? ' is-invalid' : ''}`}
                            autoComplete="current-password"
                            onChange={(e) => setData('password', e.target.value)}
                        />
                        <InputError message={errors.password} />
                    </div>
                    <div className="mb-3 ">
                        <Checkbox
                            id="remember"
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                    </div>
                    <div className="d-flex justify-item-center">
                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="mt-1 text-decoration-none text-muted me-4"
                            >
                                Zabudol si heslo?
                            </Link>
                        )}
                        <Link href="/">
                            <Button>Hlavná stránka</Button>
                        </Link>

                        <PrimaryButton disabled={processing}>Prihlásiť sa</PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
    );
}
