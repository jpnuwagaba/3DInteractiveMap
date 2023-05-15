import React, {useState} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCube, faBars, faCircleXmark, faMap } from '@fortawesome/free-solid-svg-icons'

import PlacesMenu from './PlacesMenu';



const TopBar = () => {  
  const [showMenu, setShowmenu] = useState(true);
  const [threeD, setThreeD] = useState(true);
  return (
    <div className="fixed top-0 left-0 w-full">
      <div className="flex flex-row justify-between w-full px-12 py-5">
        <div className='font-bold lg:text-lg'>Makerere Smart Campus</div>
        <div className="flex flex-row items-center gap-12">
          <div className='cursor-pointer' onClick={() => setThreeD(!threeD)}>
            {threeD ? <FontAwesomeIcon icon={faCube} size='xl' /> : <FontAwesomeIcon icon={faMap} size="xl" />}
          </div>
          <div className='cursor-pointer' onClick={() => setShowmenu(!showMenu)}>
            {showMenu ? <FontAwesomeIcon icon={faBars} size="xl" /> : <FontAwesomeIcon icon={faCircleXmark} size="xl" />}
          </div>
        </div>
      </div>
      <div style={{ display: showMenu ? 'none' : 'block' }} className=""><PlacesMenu /></div>
    </div>
  )
}

export default TopBar