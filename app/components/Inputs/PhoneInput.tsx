'use client'
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2'


interface InputPhoneProps {
    value: string;
}

const InputPhone = () => {
    const [phone, setPhone] = useState('');
    return <PhoneInput
        country={'bd'}
        value={phone}
        onChange={phone => setPhone( phone )}
    />
}

export default InputPhone