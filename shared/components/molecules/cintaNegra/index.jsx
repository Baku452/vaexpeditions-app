import React from 'react'
import styles from './index.module.scss';
const PUBLIC_API = process.env.NEXT_PUBLIC_API;



function CintaNegra ({price, offer, type, activity, specialist, showspecialist, packageTypeSvg, activityID}) {
    let iconActivity="";
    const searchIcon = (id) =>{
        switch(id){
            case 1:
                iconActivity='/icons/level 4.svg';
                return ;
            case 2:
                iconActivity='/icons/level 3.svg';
                return ;
            case 3:
                iconActivity='/icons/level 2.svg';
                return ;
            case 4:
                iconActivity='/icons/level 1.svg';
                return ;
            default:
                iconActivity='/icons/level 1.svg';
                return ;
        }
    }

    return(
    <div className={`${styles.cinta} row container mx-auto text-center px-3 py-4`}>
        {price && offer ?
        <div className="col-lg-3 col-sm-12">
            <div className="">
                <p className="line-through">After {price}</p>
                <p className="font-weight-bold">{offer} per person</p>
            </div>          
        </div>
            : null
        }
        <div className="col">
            <p>Package Type</p>
            <div className="d-flex flex-row align-items-center justify-content-center">
                {/* <img
                    className={`${styles.icons}`}
                    src={PUBLIC_API+packageTypeSvg}
                >
                </img> */}
                <p className="m-0">
                    {type}
                </p>
            </div>
        </div>
        {
            activityID ?
            searchIcon(activityID) :
            searchIcon(0)
        }
        <div className="col">
            <p>Activity Level</p>
            <div className="d-flex flex-row align-items-center justify-content-center">
                <img
                    className={`${styles.icons}`}
                    src={iconActivity}
                >
                </img>
                <p className="m-0">
                    {activity}
                </p>
            </div>
        </div>
        <div className={`${offer ? "col-lg-2":"col-lg-3"} col-md-12`}>
        
              <div className="row">
                <div className="col-12 col-xl-6 text-center">
                  <img
                    src={PUBLIC_API + specialist}
                    alt="Contact Us"
                    className={styles.circle}
                  />
                </div>
                <div className="col-12 col-xl-6 p-0 pr-2">
                    <p className="fs-18">
                    Travel specialist
                    </p>
                </div>
    
              </div>
        </div>
        <div className="col-lg-3 col-sm-12" >
            <a
            href="#contact-form-package"
            className="ml-2 py-3 btn btn-primary fs-16 w-100">Booking Now
            </a>
            <a className="text-white fs-13 pt-3 d-block" href="tel:1-(888) 803-8004" >Call Us  1-(888) 803-8004</a>
        </div>
    </div>
);
}
export {CintaNegra};
