import BsIcon from "../icons/BsIcon";

export default function MainTitle({ title, icon }) {
    return (
        <div className="flex gap-2 items-center mb-6">
            <BsIcon icon={icon}  />

            <h2 className="text-2xl font-semibold uppercase text-sky-800">{title}</h2>
        </div>
    )
}