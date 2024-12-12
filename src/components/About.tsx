"use client";
import { useEffect } from "react";
import { Signal, Battery } from "lucide-react";
import { gsap } from "gsap";
import Image from "next/image";


export default function About() {
    useEffect(() => {
        // Create the blinking animation
        gsap.to(".blink", {
            opacity: 0,
            duration: 0.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });
    }, []);

    return (
        <div className="grid grid-cols-2 grid-rows-[auto_auto_1fr_1fr_1fr] gap-0 h-full">
            <div className="col-span-2 border-b-4 border-[color:var(--primary-color)] flex items-center justify-between">
                <span className="text-xl text-[#111] bg-[#ffd52c] p-2">概要ABOUT</span>
                <span className="flex items-center gap-2">
                    <Signal className="w-6 h-6" />
                    <Battery className="w-6 h-6" />
                </span>
            </div>

            <div className="col-span-2 border-b-4 border-[color:var(--primary-color)] p-2">
                SYSTEM STATUS: <span className="blink text-[#c72d04]">ONLINE</span>
            </div>

            <div className="border-b-4 border-r-4 border-[color:var(--primary-color)] row-span-3 p-2">
                IDENTITY
                <Image
                    src="images/profile.png"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    />
            </div>
            <div className="border-b-4 border-[color:var(--primary-color)] row-span-3 p-2">
                LOCATION
            </div>

            <div className="col-span-2 border-b-4 border-[color:var(--primary-color)] row-span-4 p-2">
                PROFILE DATA:
            </div>

            <div className="col-span-2 p-2">CONNECTION STATUS: SECURE</div>
        </div>
    );
}
