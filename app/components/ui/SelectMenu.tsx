import { FaHome, FaUser, FaCog, FaBell, FaEnvelope, FaStar } from "react-icons/fa";
import MenuButton from './MenuButton';

export default function SelectMenu() {
  return (
    <div className="grid grid-cols-4 gap-10">
      <MenuButton iconUrl="icons/Tickets.svg" label="Tickets" url="/messages" />
      <MenuButton iconUrl="icons/map.svg" label="Map" url="/messages" />
      <MenuButton iconUrl="icons/calendar.svg"  label="Events" url="/messages" />
      <MenuButton iconUrl="icons/information.svg"  label="Intranet" url="/messages" />
      <MenuButton iconUrl="icons/repair.svg"  label="Maintenance" url="/messages" />
      <MenuButton iconUrl="icons/security_shield.svg"  label="Security" url="/messages" />
      <MenuButton iconUrl="icons/bed.svg"  label="Hotel" url="/messages" />
      <MenuButton iconUrl="icons/academy.svg"  label="Residents" url="/messages" />
    </div>
  );
}
