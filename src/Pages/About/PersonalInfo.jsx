import React from 'react';

function PersonalInfo() {
    return (
        <div className="flex-1 bg-gray-100 dark:bg-black dark:text-white shadow-xl p-8">
            <h4 className="text-xl  font-bold">Personal Info</h4>
            <ul className="mt-2 ">
                <li className="flex border-y py-2">
                    <span className="font-bold w-24">Full name:</span>
                    <span className="">Md Tawheed Shimul</span>
                </li>
                <li className="flex border-b py-2">
                    <span className="font-bold w-24">Birthday:</span>
                    <span className="">20 January, 2000</span>
                </li>
                <li className="flex border-b py-2">
                    <span className="font-bold w-24">Mobile:</span>
                    <span className="">(+880) 9697141358</span>
                </li>
                <li className="flex border-b py-2">
                    <span className="font-bold w-24">Email:</span>
                    <span className="">tawheedshimul@gmail.com</span>
                </li>
                <li className="flex border-b py-2">
                    <span className="font-bold w-24">Location:</span>
                    <span className="">Kushtia, Khulna , Bangladesh</span>
                </li>
                <li className="flex border-b py-2">
                    <span className="font-bold w-24">Languages:</span>
                    <span className="">English, Bangla </span>
                </li>
            </ul>
        </div>
    );
}

export default PersonalInfo;
