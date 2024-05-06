import { useRef, useState } from 'react';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function DeleteUserForm({ className = '' }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Vymazať účet</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Po vymazaní vášho účtu budú všetky jeho zdroje a dáta trvalo odstránené. Pred vymazaním účtu si prosím stiahnite všetky údaje alebo informácie, ktoré chcete zachovať.
                </p>
            </header>

            <DangerButton onClick={confirmUserDeletion} >Vymazať účet</DangerButton>

            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <form onSubmit={deleteUser} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900">
                        Si si istý, že chceš vymazať účet?
                    </h2>

                    <p className="mt-1 text-sm text-gray-600">
                        Pokiaľ je váš účet vymazaný, všetky dáta budú trvalo odstránené. Prosím, zadajte svoje heslo na potvrdenie, že chcete svoj účet trvalo vymazať.
                    </p>

                    <div className="mt-6">
                        <InputLabel htmlFor="password" value="Password" className="sr-only" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className="mt-1 block w-3/4"
                            isFocused
                            placeholder="Password"
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="mt-6 flex justify-end">
                        <Button onClick={closeModal} className='btn btn-primary'>Zrušiť</Button>

                        <DangerButton className="ms-3" disabled={processing}>
                            Vymazať účet
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </section>
    );
}
