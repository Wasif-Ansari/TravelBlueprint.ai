import { db } from '@/service/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner';
import InfoSection from '../components/InfoSection';
import Hotels from '../components/Hotels';
import PlacestoVisit from '../components/PlacestoVisit';

const ViewTrip = () => {
    //fetch from url
    const {tripid} = useParams();
    const [Trip, setTrip] = useState();

    useEffect(()=>{
        tripid && GetTripFromDB();
    },[tripid])

    const GetTripFromDB = async() =>{
        const docRef = doc(db, 'AITrips', tripid);
        //getDocFromServer
        const docSnap = await getDoc(docRef);

        if(docSnap.exists()){
            console.log("Document: ", docSnap.data());
            setTrip(docSnap.data());
            // console.log("Trip: ", Trip);

        }
        else{
            console.log("No Such Document");
            toast("No such Trip Found")
        }
    }

  return (
    <div className='px-10 md:px-20 lg:px-44 xl:px-56 bg-slate-100 dark:bg-slate-800'>
        <InfoSection trip={Trip}/>
        <Hotels trip={Trip}/>
        <PlacestoVisit trip={Trip}/>
    </div>
  )
}

export default ViewTrip