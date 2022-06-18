import React from "react";
import HeaderSection from '../components/HeaderSection'
import AdminHeaderSection from '../components/AdminHeaderSection'
import SecondUnitFooter from '../components/SecondUnitFooter'
import '../../ClientsDashboard/App.css'

function StructureThreeContent(props){
    var head = props.show;
    return(
        <>
            <div className="">
                <div className="Unit-Dashboard-wrapper">
                {head == "admin" ?
                    <AdminHeaderSection edit="editstructurethree" prev="/cyberspace" destination="Leçon 2 - Cyberspace" header_title="Une diversité d'équipements et de technologies"/>
                    :
                    <HeaderSection prev="/cyberspace" destination="Leçon 2 - Cyberspace" header_title="Une diversité d'équipements et de technologies"/>
                }
                </div>
                <div className="bg-black" style={{height:'3px', marginTop:'-2.3%', marginLeft:'-2%'}}></div>
                <div className="text-container">
                    <div className="text-header">
                         <h4 className="fw-bold fs-5">Adoption de la directive Network and Information Security (NIS) : L'ANSSI, pilote de la transposition en France</h4>
                    </div>
                    <div className="text-body">
                         <p>rytfuyguhijo bouwqohqwn qjwqouw qwuhoqiuw uaouhwd kwuw AHSIOPjh jndoiahsd wqjiwhws ihsdoiHS WDOIWHDSW WIIJNI  iheookq qwoiawj qwlihndowqi    wihiwjdw qdjwqjj   qiwjdwpqjdqw/ow  widwiw qinqipwj leknfepfjp efnei qpqojqojdw eejjqw egiuohopjp uyiuhioj uyio oilkn u6fyj ijw uilo;jp uohin owhe oiwje iwjeh yftyugih tuyuin iyfj ytuyiuln uiuib </p>
                    </div>
                </div>
                <div className="mr-n3 ml-2">
                     <SecondUnitFooter direction='SUIVANT' />
                 </div>
            </div>
        </>
    )
}

export default StructureThreeContent;