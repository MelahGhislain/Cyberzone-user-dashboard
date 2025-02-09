import React from "react";
import HeaderSection from '../components/HeaderSection'
import SecondUnitFooter from '../components/SecondUnitFooter'
import ImageCard from "../components/ImageCard";
import CarouselCard from '../components/CarouselCard'
import '../../App.css'





function TechnologyContent (){
    return(
        <>
            <div className="">

                
                <div className="Unit-Dashboard-wrapper">
                     <HeaderSection  prev="/cyberspace" destination="Leçon 2 - Cyberspace" header_title="Une diversité d'équipements et de technologies" />
                </div>

                <div className="unites_divider_line"></div>

                <div className="">
                     <ImageCard image="./images/UGJzyDY0w-2RNZOS_FptiMt_OHRGvgl_e-_NOPROCESS_people_img_centered.png"/>
                </div>

               <div className="carousel-wrapper">
                    <CarouselCard image_one='./images/_OXSiOXk_OgmfZ1k_LYboH-pcNZMjEHeZ-_NOPROCESS_tabs_1.png' image_two='./images/qOe-UEkZaDdFdrNQ_pmRw0m6_podhMGkd-_NOPROCESS_tabs_2.png' image_three='./images/oa38xfBH5M3EZ4Q__CX3uoYrzgxKpGnb_-_NOPROCESS_tabs_3.png' carousel_text_one="Les systèmes d’information sont aujourd’hui présents partout, à la maison et au travail, sous des formes différentes.  
                        On pense naturellement aux ordinateurs et aux équipements réseaux (tels que le modem ADSL téléphonique, la fibre…), mais il faut également compter les ordiphones (smartphones en anglais), les imprimantes et photocopieurs, les télévisions et montres connectées, pour ne citer que des exemples classiques. 
                        Cette hyperconnectivité se manifeste au travers de réseaux, au premier rang desquels on trouve Internet, l’agrégation mondiale des réseaux d’opérateurs. 
                        On peut également citer les réseaux téléphoniques mobiles, aujourd’hui complètement interconnectés à Internet." carousel_text_two="Du point de vue local, d’autres technologies permettent de transférer des données sur de faibles distances telles que les technologies Wi-Fi et Bluetooth, qui sont beaucoup utilisées dans la domotique ou sur le marché des vêtements intelligents. 
                        Un bracelet connecté, par exemple, n'est jamais très loin du téléphone auquel il transfère ses données." carousel_text_three=" Cependant, ces technologies ne sont pas exemptes de risques puisque là encore ces réseaux rejoignent la toile mondiale, le plus souvent au travers du modem ADSL / boitier fibre qui joue le rôle de passerelle." />
               </div>

                <div className="mr-n3 ml-2">
                     <SecondUnitFooter direction='SUIVANT' />
                 </div>

            </div>
        </>
    )
}

export default TechnologyContent;