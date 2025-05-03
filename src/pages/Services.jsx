import { Outlet } from "react-router";
import { ButtonLink } from "../components/buttons/Button";
import GeneralServices from "../components/pages/services/GeneralServices";
import { servicesLinks } from "../lib/servicesLinks";

const Services = () => {

    const links = [];
    return (
        <div className="p-4">
            <h2 className="text-4xl my-4">Services</h2>

            {/* Nav */}
            <nav>
                {servicesLinks.map(link => <ButtonLink key={link.text} href={link.href} text={link.text} />)}
            </nav>

            <GeneralServices />

            <Outlet />


        </div>
    )
}

export default Services;