import React, { useState, useEffect } from 'react';

const TypewriterEffect = () => {
    const words = ["Hey!", "How Are You?","I think You well","You visit Here","I am Really","Happy for that!","Thank You"];
    const [i, setI] = useState(0);
    const [j, setJ] = useState(0);
    const [currentWord, setCurrentWord] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const type = () => {
            setCurrentWord(words[i]);

            if (isDeleting) {
                setJ(prevJ => prevJ - 1);
                if (j === 0) {
                    setIsDeleting(false);
                    setI(prevI => (prevI + 1) % words.length);
                }
            } else {
                setJ(prevJ => prevJ + 1);
                if (j === currentWord.length) {
                    setIsDeleting(true);
                }
            }
        };

        const timeoutId = setTimeout(type, 100);

        return () => clearTimeout(timeoutId);
    }, [i, j, isDeleting, currentWord]);

    return (
        <div className="w-full h-full flex justify-center items-center">
            <h1 id="typewriter" className="text-4xl font-bold">{currentWord.substring(0, j)}</h1>
        </div>
    );
};

export default TypewriterEffect;
