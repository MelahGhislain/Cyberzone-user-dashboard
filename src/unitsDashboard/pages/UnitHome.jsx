import React from 'react'
import UnitSidebar from '../components/Sidebar';
import UnitHomeContent from '../Units-body-contents/UnitHomeContent';
import ToggleButton from '../components/toggleButton';
import SidebarLinks from '../components/SidebarLinks';

function UnitHome(){
    function openNav() {
            document.getElementById("mySidebar").style.width = "15rem";
            document.getElementById("BodyContent").style.marginLeft = "15rem";
          }

          function closeNav() {
            document.getElementById("mySidebar").style.width = "0";
            document.getElementById("BodyContent").style.marginLeft= "0";
          }
    return(

        
        <>
          
            <div className="">
                <SidebarLinks/>  
                <div id="BodyContent" style={{marginLeft:'15rem'}}>
                    <div>
                        <ToggleButton/>
                    </div>
                    <div className="container-fluid px-0">
                    <UnitHomeContent />
                    </div>
                </div>
            </div>
        </>
    )
}

export default UnitHome;