import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
import { useSelector } from 'react-redux';
import './styles.css'


function Loader() {
    const { loading } = useSelector(state => state);
    console.log({ loading });
    return (
        loading ? <Spinner className='loader' animation="border" role="status" /> : null
    )
}

export default Loader