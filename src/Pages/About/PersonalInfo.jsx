import React from 'react';

function PersonalInfo() {
    return (
        <div className="flex-1 bg-gray-100 dark:bg-black dark:text-white rounded-lg shadow-xl p-8">
            <h4 className="text-xl  font-bold">Personal Info</h4>
            <ul className="mt-2 ">
                <li className="flex border-y py-2">
                    <span className="font-bold w-24">Full name:</span>
                    <span className="">Amanda S. Ross</span>
                </li>
                <li className="flex border-b py-2">
                    <span className="font-bold w-24">Birthday:</span>
                    <span className="">24 Jul, 1991</span>
                </li>
                <li className="flex border-b py-2">
                    <span className="font-bold w-24">Joined:</span>
                    <span className="">10 Jan 2022 (25 days ago)</span>
                </li>
                <li className="flex border-b py-2">
                    <span className="font-bold w-24">Mobile:</span>
                    <span className="">(123) 123-1234</span>
                </li>
                <li className="flex border-b py-2">
                    <span className="font-bold w-24">Email:</span>
                    <span className="">amandaross@example.com</span>
                </li>
                <li className="flex border-b py-2">
                    <span className="font-bold w-24">Location:</span>
                    <span className="">New York, US</span>
                </li>
                <li className="flex border-b py-2">
                    <span className="font-bold w-24">Languages:</span>
                    <span className="">English, Spanish</span>
                </li>
            </ul>
        </div>
    );
}

export default PersonalInfo;
