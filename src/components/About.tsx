"use client";
import { useEffect, useRef } from "react";
import { Signal, Battery } from "lucide-react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin"; // Import the TextPlugin
import Image from "next/image";

// Register the plugin
gsap.registerPlugin(TextPlugin);

export default function About() {
    const textRef = useRef(null);
    const parentRef = useRef(null);

    useEffect(() => {
        // Blinking animation for "ONLINE"
        gsap.to(".blink", {
            opacity: 0,
            duration: 0.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });

        // Typing and scrolling effect
        const text = `
            Passion for coding, problem solving, building webapps, and universes around what listen to and always curious to learn more when it comes to new technologies and creative coding.
            
        `;

        const tl = gsap.timeline({ repeat: -1 }); // Infinite loop

        // Typing effect
        tl.to(textRef.current, {
            text: text,
            duration: 10,
            ease: "none",
        });

        // Scroll up animation when it reaches the bottom
        tl.to(parentRef.current, {
            scrollTop: parentRef.current.scrollHeight,
            duration: 2,
            ease: "power2.inOut",
        });

        // Erase effect
        tl.to(textRef.current, {
            text: "",
            duration: 2,
            ease: "power2.inOut",
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

            <div className="border-b-4 border-r-4 border-[color:var(--primary-color)] row-span-3 p-2 relative overflow-hidden">
                <span className="relative z-10 text-[#111]">IDENTITY</span>
                <Image
                    src="/images/profile.jpg"
                    width={100}
                    height={100}
                    className="absolute inset-0 w-full h-full object-cover z-0 pixelated"
                    alt="Picture of the author"
                />
                {/* Color overlay */}
                <div className="absolute inset-0 bg-[#ffd52c] mix-blend-multiply z-5"></div>
            </div>

            <div className="border-b-4 border-[color:var(--primary-color)] row-span-3 p-2 overflow-auto" ref={parentRef}>
                <span>PROFILE DATA:</span> <br />
                <span
                    className="text-sm w-full block"
                    ref={textRef}
                ></span>
            </div>

            <div className="col-span-2 border-b-4 border-[color:var(--primary-color)] row-span-4 p-2">
                LOCATION: BELGIUM - DENDERLEEUW
            </div>

            <div className="col-span-2 p-2">CONNECTION STATUS: SECURE</div>
        </div>
    );
}
