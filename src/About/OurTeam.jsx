import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const teamMembers = [
    {
        name: 'Marvin Joner',
        role: 'Art Designer',
        image: '/images/imgi_156_handsome-smiling-man-looking-with-disbelief.jpg'
    },
    {
        name: 'Patricia Woodrum',
        role: 'Staff Worker',
        image: '/images/imgi_152_lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation.jpg'
    },
    {
        name: 'Hannaz Stone',
        role: 'Manager',
        image: '/images/imgi_173_arabian-handsome-man.jpg'
    }
];

function OurTeam() {
    return (
        <div className="container mx-auto md:px-[90px] my-12">
            <div className="text-center mb-10">
                <p className="text-sm uppercase text-[#FA714F]">our team</p>
                <h1 className="text-3xl font-bold">Team Behind Our Collections</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                    <div key={index} className="text-center space-y-4">
                        <img src={member.image} alt={member.name} className="h-[340px] object-cover rounded-full" />
                        <h2 className="text-xl font-semibold">{member.name}</h2>
                        <p className="text-gray-600">{member.role}</p>
                        <ul className="flex justify-center space-x-3">
                            <li className="p-2 rounded-full bg-[#FA7150] cursor-pointer text-white">
                                <FaFacebookF />
                            </li>
                            <li className="p-2 rounded-full bg-[#FA7150] cursor-pointer text-white">
                                <FaInstagram />
                            </li>
                            <li className="p-2 rounded-full bg-[#FA7150] cursor-pointer text-white">
                                <FaYoutube />
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OurTeam;
