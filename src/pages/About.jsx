import { useState } from "react";
import GeneralAbout from "../components/pages/about/GeneralAbout";
import Mission from "../components/pages/about/Mission";
import Target from "../components/pages/about/Target";
import Vision from "../components/pages/about/Vision";



export default function About() {
    const [activeTab, setActiveTab] = useState('Mission');

    const Button = ({ action, text }) => {
        return (
            <button onClick={action} className={`cursor-pointer hover:bg-amber-300 px-4 py-2 ${activeTab === text && 'border-b border-b-amber-500'} `}>{text}</button>
        )
    }

    return (
        <div className="p-4">
            <h2 className="text-4xl my-4">About us</h2>

            {/* Nav */}
            <nav>
                <Button action={() => setActiveTab('Mission')} text='Mission' />
                <Button action={() => setActiveTab('Vision')} text='Vision' />
                <Button action={() => setActiveTab('Target')} text='Target' />
            </nav>


            <GeneralAbout />

            {activeTab === 'Mission' && <Mission />}
            {activeTab === 'Vision' && <Vision />}
            {activeTab === 'Target' && <Target />}

        </div>
    )
}