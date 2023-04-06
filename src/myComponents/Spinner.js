import React  from 'react'
import loading from './loading.gif'

export default function Spinner() {

    return (
        <div className='text-center mb-4 flex justify-center'>
            <img src={loading} alt="loading" className='' />
        </div>
    )
}
