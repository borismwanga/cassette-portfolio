"use client"
import { useState, useEffect } from 'react'
import { Square, Circle, Triangle } from 'lucide-react'
import moment from 'moment'

export default function Header() {
    const [date, setDate] = useState(moment().format("MMMM Do YYYY, h:mm:ss a"));

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(moment().format("ll - h:mm a"));
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);


    return (
        <div className="bg-[#ffd52c] text-[#111] w-full h-16 text-[25px] flex items-center p-4 justify-between	">
            <span className='flex items-center'>
                <Square />
                <Circle />
                <Triangle />
                
                <span >Boris Mwanga OS </span>
            </span>

            <span className='flex items-center'>
                {date}
            </span>

            

        </div>
    )
}

