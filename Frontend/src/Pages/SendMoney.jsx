import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import axios from "axios";

const SendMoney = () => {
    const [searchParams] = useSearchParams()
    const id = searchParams.get('id')
    const fname = searchParams.get('FIRSTNAME')
    const lname = searchParams.get('LASTNAME')
    const [amount, setAmount] = useState(0) 

    return (
        <div className='bg-gradient-to-b from-[#29a699f6] via-[#83d4aef6] to-[#bcffe0f6] h-screen w-full flex flex-col justify-center items-center'>
            <div className="card flex flex-col bg-white py-2 px-7 rounded-xl shadow-lg shadow-[#2c635df6] w-[450px] h-max">
                <h1 className='text-4xl text-center font-bold pt-6'>
                    Send Money
                </h1>

                <div className="right flex space-x-4 items-center mt-16">
                    <div className="user rounded-full bg-green-900 text-white h-12 w-12">
                        <div className="flex justify-center mt-2 font-normal  text-xl">
                            {fname[0].toUpperCase()}
                        </div>
                    </div>

                    <div className="hello text-xl">
                        {fname} {lname}
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center bg-gray-100 p-6 rounded-xl shadow-md w-96 mt-6">
                    <label htmlFor="amount" className="text-xl font-semibold text-gray-700 mb-4">
                        Enter Amount
                    </label>
                    <div className="relative w-full">
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">
                            ₹
                        </span>
                        <input
                            type="number"
                            id="amount"
                            name="amount"
                            placeholder="0.00"
                            onChange={(event) => {
                                setAmount(event.target.value)
                            }}
                            className="text-5xl rounded-md font-semibold text-gray-800 pl-10 pr-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-green-500 w-full text-center"
                        />
                    </div>
                </div>

                <button className='py-2 bg-green-900 hover:bg-green-950 duration-300 font-medium text-center mt-10 mb-4 w-full text-white rounded-lg'
                    onClick={() => {
                        axios.post('http://localhost:3000/api/v1/account/transfer', {
                            to : id,
                            amount : amount
                        }, {
                            headers : {
                                Authorization: 'Bearer ' + localStorage.getItem('token')
                            }
                        })
                    }}>
                    Initate Transfer
                </button>
            </div>
        </div>
    )
}

export default SendMoney
