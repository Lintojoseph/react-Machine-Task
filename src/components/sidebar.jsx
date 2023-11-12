
import 
{ BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import { FcFlashOn} from "react-icons/fc";
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside
    id="sidebar"
    className={`${
      openSidebarToggle ? "sidebar-responsive" : ""
    }`}
    style={{ backgroundColor: '#b22222' }}
  >
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
            <FontAwesomeIcon icon={faMotorcycle} spin />

            Bikes-World
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/>Home
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillArchiveFill className='icon'/> Slider
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGrid3X3GapFill className='icon'/> Chart
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon'/> Customers
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsListCheck className='icon'/> Inventory
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsMenuButtonWideFill className='icon'/> Reports
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Setting
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar;