// import React, { useState } from 'react';
// import axios from 'axios';
// import styles from './styles/DataForm.module.css';

// const DataForm: React.FC = () => {
//     const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [error, setError] = useState('');
//     const [success, setSuccess] = useState('');

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         setIsSubmitting(true);
//         setError('');
//         setSuccess('');

//         try {
//             const response = await axios.post('http://localhost:5051/Form', formData);

//             if (response.status !== 200 && response.status !== 201) {
//                 throw new Error('Failed to save data');
//             }

//             setFormData({ name: '', email: '', message: '' });
//             setSuccess('Your data has been saved successfully!');
//         } catch (err) {
//             if (axios.isAxiosError(err) && err.response) {
//                 setError(`Error: ${err.response.status} ${err.response.statusText}`);
//             } else if (err instanceof Error) {
//                 setError(err.message);
//             } else {
//                 setError('An unknown error occurred');
//             }
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     return (
//         <>
//             <div className={styles.mainBackground}></div>
//             <div className={styles.formContainer}>
//                 <img
//                     src="https://www.shutterstock.com/image-photo/portrait-attractive-trendy-cheerful-girl-600nw-2161154411.jpg"
//                     alt="Profile"
//                     className={styles.formImage}
//                 />
//                 <div className={styles.formTitle}>Join Our Community</div>
//                 <div className={styles.formSubtitle}>Fill in your details below</div>
//                 <form onSubmit={handleSubmit} style={{ width: '100%' }}>
//                     <div className={styles.inputGroup}>
//                         <label className={styles.inputLabel} htmlFor="name">
//                             Name
//                         </label>
//                         <input
//                             className={styles.inputField}
//                             type="text"
//                             name="name"
//                             id="name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             required
//                             placeholder="Enter your name"
//                         />
//                     </div>
//                     <div className={styles.inputGroup}>
//                         <label className={styles.inputLabel} htmlFor="email">
//                             Email
//                         </label>
//                         <input
//                             className={styles.inputField}
//                             type="email"
//                             name="email"
//                             id="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             required
//                             placeholder="Enter your email"
//                         />
//                     </div>
//                     <div className={styles.inputGroup}>
//                         <label className={styles.inputLabel} htmlFor="message">
//                             Message
//                         </label>
//                         <textarea
//                             className={styles.inputField}
//                             name="message"
//                             id="message"
//                             value={formData.message}
//                             onChange={handleChange}
//                             required
//                             placeholder="Enter your message"
//                             rows={5}
//                         />
//                     </div>
//                     {error && <div className={styles.errorMsg}>{error}</div>}
//                     {success && <div className={styles.successMsg}>{success}</div>}
//                     <button className={styles.submitBtn} type="submit" disabled={isSubmitting}>
//                         {isSubmitting ? 'Submitting...' : 'Submit'}
//                     </button>
//                 </form>
//             </div>
//         </>
//     );
// };

// export default DataForm;


import React, { useState } from 'react';
import axios from 'axios';
import styles from '../styles/DataForm.module.css';

const DataForm: React.FC = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');
        setSuccess('');

        try {
            const response = await axios.post('http://localhost:5051/Form', formData);

            if (response.status !== 200 && response.status !== 201) {
                throw new Error('Failed to save data');
            }

            setFormData({ username: '', password: '' });
            setSuccess('Your data has been saved successfully!');
        } catch (err) {
            if (axios.isAxiosError(err) && err.response) {
                setError(`Error: ${err.response.status} ${err.response.statusText}`);
            } else if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An unknown error occurred');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <div className={styles.mainBackground}></div>
            <div className={styles.formContainer}>
                <img
                    src="https://www.shutterstock.com/image-photo/portrait-attractive-trendy-cheerful-girl-600nw-2161154411.jpg"
                    alt="Profile"
                    className={styles.formImage}
                />
                <div className={styles.formTitle}>Join Our Community</div>
                <div className={styles.formSubtitle}>Fill in your details below</div>
                <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                    <div className={styles.inputGroup}>
                        <label className={styles.inputLabel} htmlFor="username">
                            Username
                        </label>
                        <input
                            className={styles.inputField}
                            type="text"
                            name="username"
                            id="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                            placeholder="Enter your username"
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label className={styles.inputLabel} htmlFor="password">
                            Password
                        </label>
                        <input
                            className={styles.inputField}
                            type="password"
                            name="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            placeholder="Enter your password"
                        />
                    </div>
                    {error && <div className={styles.errorMsg}>{error}</div>}
                    {success && <div className={styles.successMsg}>{success}</div>}
                    <button className={styles.submitBtn} type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            </div>
        </>
    );
};

export default DataForm;

