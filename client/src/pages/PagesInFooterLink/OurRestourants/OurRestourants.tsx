import { useState } from "react";
import "./OurRestourants.css"
import RestouransItem from "./OurRestourantsUI/RestouransItem/RestouransItem";
import { useGetRestourantsQuery } from "../../../API";
const OurRestourants = () => {
    const [onMap,setOnMap]=useState(true)
    const {data:restourants,error:restourantsError,isLoading:restourantsLoading}=useGetRestourantsQuery()
    return (
        <div className="d-flex">
            <div className="container">
                <div className="our-restourans-title">
                    <h1>Sushi Master</h1>
                    <div className="switcher d-flex">
                        <div onClick={()=>{
                            setOnMap(true)
                        }} className={`switcher-item d-flex ${!onMap && "select" }`}>
                            <img src="https://kyiv.sushi-master.ua/img/our-restourants/map.svg" alt="" />
                            <h3>На мапі</h3>
                        </div>
                        <div onClick={()=>{
                            setOnMap(false)
                        }} className={`switcher-item d-flex ${onMap && "select" }`}>
                            <img src="https://kyiv.sushi-master.ua/img/our-restourants/list.svg" alt="" />
                            <h3>Список</h3>
                        </div>
                    </div>
                </div>

                {restourantsError?
                <div></div>:
                restourantsLoading?
                <div></div>:
                restourants?
                    onMap?
                    <div className="our-restourans-onmap">
                        <div className="map-view">
                                    11111111111111111111111111
                        </div>
                        <div className="restourans-list">
                            {restourants.map((r)=><RestouransItem restourant={r} key={r.id}/>)}
                        </div>
                    </div>:
                    <div className="our-restourans-list">
                        {restourants.map((r)=><RestouransItem restourant={r} key={r.id}/>)}
                    </div>
                    :
                null
            }
            </div>
        </div>
    );
};

export default OurRestourants;