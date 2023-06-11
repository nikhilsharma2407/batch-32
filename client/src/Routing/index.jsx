import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
function Routing() {

    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <>
            <h1>Routing</h1>
            <h2>search params - {searchParams.get('search')}</h2>
            <input placeholder='set params' onChange={e => setSearchParams({ search: e.target.value })} />
        </>
    )
}

export default Routing