import * as icons from "react-icons/bs";

export default function BsIcon({ icon }) {
    const Icon = icons[icon];

    return Icon ? <Icon /> : null;
}
