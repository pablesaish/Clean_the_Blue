import React, { useState, useContext } from 'react'; // 'useState' is now needed
import { useForm } from 'react-hook-form';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const Input = ({ label, register, name, required, type = 'text', error }) => {
    // This component is correct and does not need changes.
    const [showPassword, setShowPassword] = React.useState(false);
    const isPassword = type === 'password';

    return (
        <div className="w-full">
            <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
                {label}
            </label>
            <div className="relative">
                <input
                    id={name}
                    type={isPassword ? (showPassword ? 'text' : 'password') : type}
                    {...register(name, { required: required })}
                    className="w-full px-4 py-2 pr-10 bg-gray-100 border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {isPassword && (
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700 cursor-pointer" aria-label={showPassword ? "Hide password" : "Show password"}>
                        {showPassword ? ( <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}> <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a9.97 9.97 0 01-1.563 3.029m0 0l-2.122 2.122" /> </svg> ) : ( <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}> <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /> <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.478 0-8.268-2.943-9.542-7z" /> </svg> )}
                    </button>
                )}
            </div>
            {error && <p className="text-red-500 text-xs mt-1">{error.message || 'This field is required'}</p>}
        </div>
    );
};

const RegistrationForm = ({ onSwitchToLogin }) => {
    // This component connects to the backend and is correct.
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [message, setMessage] = useState('');

    const onSubmit = async (data) => {
        setMessage('');
        try {
            const response = await fetch('http://localhost:5000/api/users/register', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data), });
            const responseData = await response.json();
            if (!response.ok) { throw new Error(responseData.msg || 'Failed to register'); }
            setMessage('Registration successful! Please switch to login.');
            reset();
        } catch (error) {
            setMessage(`Error: ${error.message}`);
        }
    };

    return (
        <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Get Started</h2>
            <p className="text-gray-600 mb-6">Create an account to continue.</p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <Input label="Full Name" name="name" register={register} required error={errors.name} />
                <Input label="Email Address" name="email" type="email" register={register} required error={errors.email} />
                <Input label="Password" name="password" type="password" register={register} required error={errors.password} />
                <button type="submit" className="w-full bg-cyan-600 hover:bg-blue-700 text-white font-bold p-4 cursor-pointer transition duration-300">Register</button>
            </form>
            {message && <p className={`mt-4 text-center ${message.startsWith('Error:') ? 'text-red-500' : 'text-blue-600'}`}>{message}</p>}
            <p className="mt-6 text-center text-gray-600 text-sm">Already have an account? <button onClick={onSwitchToLogin} className="text-blue-600 hover:underline font-semibold cursor-pointer">Login here</button></p>
        </div>
    );
};

const LoginForm = ({ onSwitchToRegister }) => {
    // --- THIS IS THE LINE THAT WAS FIXED ---
    const { register, handleSubmit, formState: { errors } } = useForm(); 
    const [message, setMessage] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        setMessage('');
        try {
            const response = await fetch('http://localhost:5000/api/users/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data), });
            const responseData = await response.json();
            if (!response.ok) { throw new Error(responseData.msg || 'Failed to login'); }
            login(responseData.user);
            navigate('/');
        } catch (error) {
            setMessage(`Error: ${error.message}`);
        }
    };

    return (
        <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back!</h2>
            <p className="text-gray-600 mb-6">Please login to your account.</p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <Input label="Email Address" name="email" type="email" register={register} required error={errors.email} />
                <Input label="Password" name="password" type="password" register={register} required error={errors.password} />
                <button type="submit" className="w-full bg-cyan-600 hover:bg-blue-700 text-white font-bold p-4 cursor-pointer transition duration-300">Login</button>
            </form>
            {message && <p className={`mt-4 text-center ${message.startsWith('Error:') ? 'text-red-500' : 'text-blue-600'}`}>{message}</p>}
            <p className="mt-6 text-center text-gray-600 text-sm">Don't have an account? <button onClick={onSwitchToRegister} className="text-blue-600 hover:underline font-semibold cursor-pointer">Register here</button></p>
        </div>
    );
};

function Login() {
    // This component is correct and does not need changes.
    const [isLoginView, setIsLoginView] = useState(true);
    return (
        <div className="w-full min-h-[100vh] bg-[linear-gradient(rgba(168,210,255,0.8),rgba(41,177,204,0.6),rgba(110,251,220,0.5)),url('/images/Beach_cleanup.jpg')] bg-cover bg-no-repeat bg-center flex items-center justify-center p-4">
            <div className="relative w-full max-w-md bg-white/70 p-8 md:p-12 rounded-xl overflow-hidden border-1 border-sky-300">
                <div>{isLoginView ? <LoginForm onSwitchToRegister={() => setIsLoginView(false)} /> : <RegistrationForm onSwitchToLogin={() => setIsLoginView(true)} />}</div>
            </div>
        </div>
    );
}

export default Login;
