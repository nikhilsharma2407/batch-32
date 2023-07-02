import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Toast() {

    const { message, success } = useSelector(state => state)

    useEffect(() => {
        if (message) {
            success ? toast.success(message) : toast.error(message)
        }
    }, [message, success])

    return (
        <ToastContainer />
    );
}

export default Toast