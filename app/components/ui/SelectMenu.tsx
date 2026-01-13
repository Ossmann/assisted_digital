import { FaHome, FaUser, FaCog, FaBell, FaEnvelope, FaStar } from "react-icons/fa";
import MenuButton from './MenuButton';

export default function SelectMenu() {
  return (
    <div className="grid grid-cols-3 gap-10">
      <MenuButton icon={<FaHome />} label="Messages" url="/messages" />
      <MenuButton icon={<FaUser />} label="Profile" url="/messages" />
      <MenuButton icon={<FaCog />} label="Settings" url="/messages" />
      <MenuButton icon={<FaBell />} label="Alerts" url="/messages" />
      <MenuButton icon={<FaEnvelope />} label="Messages" url="/messages" />
      <MenuButton icon={<FaStar />} label="Favorites" url="/messages" />
    </div>
  );
}
