import React from 'react';

function Feauture() {
    return (
        <div className="pb-16" style={{ fontFamily: '"Lato", sans-serif' }}>
            {/* Code block starts */}
            <div className="mx-auto container pt-10">
                <div>
                    <div className="flex items-center sticky top-16 z-20 bg-gray-200 border border-cyan-400 rounded p-2 flex-col px-4">
                        <p className="focus:outline-none  uppercase text-sm text-center leading-4">in few easy steps</p>
                        <h1 className="focus:outline-none text-3xl font-bold text-center leading-10 text-gray-800 lg:w-5/12 md:w-9/12 pt-4">Create Beautiful Web Apps by REACT</h1>
                    </div>
                    <div aria-label="group of cards" className="focus:outline-none mt-20 flex flex-wrap justify-center gap-10 px-4">
                        <div aria-label="card 1" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                            <div className="w-20 h-20 relative mr-5">
                                <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                                <div className="absolute bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG1.svg" alt="drawer" />
                                </div>
                            </div>
                            <div className="w-10/12">
                                <h2 className="focus:outline-none text-lg font-bold leading-tight text-gray-800 dark:text-gray-100">Ready to Make your Own website</h2>
                                <p className="focus:outline-none text-base leading-normal pt-2 text-white">You get to control your personal brand 77% of employers say they google candidate’s names as part of the hiring process. For most of us, they won’t find anything meaningful – probably a few tweets, or articles you’ve written. ...</p>
                            </div>
                        </div>
                        <div aria-label="card 2" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                            <div className="w-20 h-20 relative mr-5">
                                <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                                <div className="absolute bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG2.svg" alt="check" />
                                </div>
                            </div>
                            <div className="w-10/12">
                                <h2 className="focus:outline-none text-lg font-semibold leading-tight text-gray-800 dark:text-gray-100">Do you want HIGH QUALITY website?</h2>
                                <p className="focus:outline-none text-base leading-normal pt-2 text-white">If you want high quality website just contact with me. I will bring for you high quality website</p>
                            </div>
                        </div>
                        <div aria-label="card 3" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                            <div className="w-20 h-20 relative mr-5">
                                <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                                <div className="absolute bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG3.svg" alt="html tag" />
                                </div>
                            </div>
                            <div className="w-10/12">
                                <h2 className="focus:outline-none text-lg font-semibold leading-tight text-gray-800 dark:text-gray-100">Coded by Developers for Developers</h2>
                                <p className="focus:outline-none text-base leading-normal pt-2 text-white">WebDevelopers build our platform, and developers build on our platform — so we'll always care deeply and understand intuitively what our audience values. We know we’re just one part of a bigger, massively important ecosystem of developer tooling.</p>
                            </div>
                        </div>
                        <div aria-label="card 4" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                            <div className="w-20 h-20 relative mr-5">
                                <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                                <div className="absolute bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG4.svg" alt="monitor" />
                                </div>
                            </div>
                            <div className="w-10/12">
                                <h2 className="focus:outline-none text-lg font-semibold leading-tight text-gray-100">Complete your Order...</h2>
                                <p className="focus:outline-none text-base leading-normal pt-2 text-white">Just pay me and wait some day. You will reacive your site soon.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Code block ends */}
        </div>
    );
}

export default Feauture;
