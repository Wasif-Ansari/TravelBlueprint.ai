import React from "react";
import PlaceCard from "./PlaceCard";

const PlacestoVisit = ({ trip }) => {
    return (
        <div>
            <h2 className="font-bold text-[27px] mt-8">Places to Visit :</h2>

            <div className="pb-32" >
                {trip?.tripData?.itinerary.map((item, index) => (
                    <div>
                        {console.log("item", item)}
                        <h2 className="font-medium text-2xl mt-3">Day {item?.day}</h2>
                        <div className="flex flex-col gap-3">

                            {item?.plan.map((item2, index2) => (
                                <div className="my-3">
                                    <PlaceCard place={item2} />
                                    {console.log("item2", item2)}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default PlacestoVisit;
