import React from 'react'
import useUser from '../../useUser'
import validateUser from '../../validateUser'

const ProfileSettings = ({ setUser, user, setIsOpen}) => {
    const changeUser = () => {
        setUser({...user, firstname: values.firstname, lastname: values.lastname, tel: values.tel, email: values.email})
        setIsOpen(false);
    }

    const { handleChange, handleSubmit, values, errors } = useUser(
        validateUser,
        user,
        changeUser
    );
    return (
        <>
            <div className='profile-settings'>
                <form onSubmit={handleSubmit}>
                    <div className='input-group'>
                        <label>Keresztnév</label>
                        <input type='text' name='firstname' value={values.firstname} onChange={handleChange} />
                        {errors.firstname && <p className='error-message'>{errors.firstname}</p>}
                    </div>
                    <div className='input-group'>
                        <label>Vezetéknév</label>
                        <input type='text' name='lastname' value={values.lastname} onChange={handleChange} />
                        {errors.lastname && <p className='error-message'>{errors.lastname}</p>}
                    </div>
                    <div className='input-group'>
                        <label>Telefonszám</label>
                        <input type='text' name='tel' value={values.tel} onChange={handleChange} />
                        {errors.tel && <p className='error-message'>{errors.tel}</p>}
                    </div>
                    <div className='input-group'>
                        <label>Email</label>
                        <input type='text' name='email' value={values.email} onChange={handleChange} />
                        {errors.email && <p className='error-message'>{errors.email}</p>}
                    </div>
                    <button className='btn' type="submit">Mentés</button>
                </form>
            </div>
        </>
    )
}

export default ProfileSettings
