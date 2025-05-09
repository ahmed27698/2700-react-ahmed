import { useState } from "react";
import GeneralAbout from "../components/pages/about/GeneralAbout";
import Mission from "../components/pages/about/Mission";
import Target from "../components/pages/about/Target";
import Vision from "../components/pages/about/Vision";
import { Button } from "../components/buttons/Button";



export default function About() {
    const [activeTab, setActiveTab] = useState('Mission');



    return (
        <div className="p-4">
            <h2 className="text-4xl my-4">About us</h2>

            {/* Nav */}
            <nav>
                <Button activeTab={activeTab} action={() => setActiveTab('Mission')} text='Mission' />
                <Button activeTab={activeTab} action={() => setActiveTab('Vision')} text='Vision' />
                <Button activeTab={activeTab} action={() => setActiveTab('Target')} text='Target' />
            </nav>


            <GeneralAbout />

            {activeTab === 'Mission' && <Mission />}
            {activeTab === 'Vision' && <Vision />}
            {activeTab === 'Target' && <Target />}

        </div>
    )
}