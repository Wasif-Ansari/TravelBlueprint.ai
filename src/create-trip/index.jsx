import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { AI_PROMPT, SelectBudgetOptions, SelectTravelList } from "../constants/options";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { chatSession } from "@/service/AImodel";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { doc, setDoc } from "firebase/firestore";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { db } from "@/service/firebaseConfig";
import { useNavigate } from "react-router-dom";



const CreateTrip = () => {
    const [place, setPlace] = useState();

    const [FormData, setFormData] = useState([]);
    const [OpenDialog, setOpenDialog] = useState(false);
    const [Loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const HandleInputChange = (name, value) => {
        setFormData({
            ...FormData,
            [name]: value
        })

    }

    useEffect(() => {
        console.log(FormData);
    }, [FormData])

    const login = useGoogleLogin({
        onSuccess: (codeResp) => GetUserProfile(codeResp),
        onError: (error) => console.log(error)
    })


    const OnGenerateTrip = async () => {

        const user = localStorage.getItem('user')

        if (!user) {
            setOpenDialog(true);
            return
        }


        if (!FormData?.noOfDays && !FormData?.location || !FormData?.budget || !FormData?.people) {
            toast("Please Fill All the details.");
            return;
        }
        else if(FormData?.noOfDays <1){
            toast("Number of Days can't be Negative.");
            return;

        }

        setLoading(true);

        const FINAL_PROMPT = AI_PROMPT
            .replace('{location}', FormData?.location?.label)
            .replace('{noOfDays}', FormData?.noOfDays)
            .replace('{people}', FormData?.people)
            .replace('{budget}', FormData?.budget)
            .replace('{noOfDays}', FormData?.noOfDays)

        console.log("Here Clicked: ", FINAL_PROMPT);

        const result = await chatSession.sendMessage(FINAL_PROMPT)
        console.log(result.response?.text())
        setLoading(false);
        saveAiTrip(result.response?.text())
    }

    const saveAiTrip = async (TripData) => {

        setLoading(true);

        const user = JSON.parse(localStorage.getItem('user'));
        const docId = Date.now().toString();

        await setDoc(doc(db, "AITrips", docId), {
            userSelection: FormData,
            tripData: JSON.parse(TripData),
            userEmail: user?.email,
            id: docId,
        });

        setLoading(false);
        navigate('/view-trip/'+docId);

    }

    const GetUserProfile = (TokenInfo) => {
        axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${TokenInfo?.access_token}`,
            {
                headers: {
                    Authorization: `Bearer ${TokenInfo?.access_token}`,
                    Accept: 'Application/json'
                }
            }
        ).then((resp) => {
            console.log(resp);
            localStorage.setItem('user', JSON.stringify(resp.data));
            setOpenDialog(false);
            OnGenerateTrip();
        })
    }


    return (
        // flex flex-col items-center
        <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 py-10 bg-slate-100 dark:text-white dark:bg-slate-800">
            <h2 className="font-bold text-3xl">
                Tell us About Your Travel preferences ...✈️🚇🌴
            </h2>
            <p className="mt-3 text-gray-500 text-xl">
                Just Provide some basic information, and trip planner will work
                accordingly
            </p>

            <div className="mt-10 flex flex-col gap-10">
                <div>
                    <h2 className="text-xl my-2 font-medium ">
                        Choose Your Destination?
                    </h2>
                    <GooglePlacesAutocomplete
                        apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
                        selectProps={{
                            styles: {
                                input: (provided) => ({
                                  ...provided,
                                  color: 'black',
                                }),
                                option: (provided) => ({
                                  ...provided,
                                  color: 'black',
                                }),
                                singleValue: (provided) => ({
                                  ...provided,
                                  color: 'black',
                                }),
                              },
                            place,
                            onChange: (value) => {
                                setPlace(value);
                                HandleInputChange('location', value);

                            },
                        }}
                        />
                        
                    
                </div>

                <div>
                    <h2 className="text-xl my-2 font-medium  ">How many days?</h2>
                    <Input className="border border-black dark:border-white" placeholder={"Ex.3"} type="number" onChange={(e) => HandleInputChange('noOfDays', e.target.value)} />
                </div>


                <div>
                    <h2 className="text-xl my-3 font-medium">What is your Budget?</h2>
                    <div className="grid grid-cols-3 gap-5 mt-5">
                        {SelectBudgetOptions.map((item, index) => (
                            <div key={index} onClick={() => HandleInputChange('budget', item.title)}
                                className={`p-4 border-2 border-black dark:border-white rounded-lg hover:shadow-lg cursor-pointer hover:transition-all ${FormData?.budget == item.title && 'shadow-4xl scale-105 transition-all duration-100 border-[3px] border-violet-950 bg-violet-200 dark:bg-violet-800'}`}>
                                <h2>{item.icon}</h2>
                                <h2 className="font-bold text-lg">{item.title}</h2>
                                <h2 className={`text-sm text-gray-500 ${FormData?.budget == item.title && 'text-black dark:text-white'}`}>{item.desc}</h2>
                            </div>
                        ))}
                    </div>
                </div>


                <div>
                    <h2 className="text-xl my-3 font-medium">Who are you travelling with?</h2>
                    <div className="grid grid-cols-3 gap-5 mt-5">
                        {SelectTravelList.map((item, index) => (
                            <div key={index} onClick={() => HandleInputChange('people', item.people)}
                                className={`p-4 border-2 border-black dark:border-white rounded-lg hover:shadow-lg cursor-pointer hover:transition-all  ${FormData?.people == item.people && 'shadow-4xl scale-105 transition-all duration-100 border-[3px] border-violet-950 bg-violet-200 dark:bg-violet-800'}`}>
                                <h2>{item.icon}</h2>
                                <h2 className="font-bold text-lg">{item.title}</h2>
                                <h2 className={`text-sm text-gray-500  ${FormData?.people == item.people && 'text-black dark:text-white'}`}>{item.desc}</h2>
                            </div>
                        ))}
                    </div>
                </div>  

            </div>

            <div className="my-10 justify-end flex">
                <Button disabled={Loading}
                    onClick={OnGenerateTrip}>
                    {Loading ?
                        <AiOutlineLoading3Quarters className="animate-spin" /> : 'Generate Trip'
                    }
                </Button>
            </div>

            <Dialog open={OpenDialog}>

                <DialogContent>
                    <DialogHeader>
                        <DialogDescription>
                            <img src="/logo.svg" />
                            <h2 className="mt-8 font-bold text-lg">Sign in with Google</h2>
                            <p>Sign in with Google Authentication securely</p>

                            <Button
                                className="w-full mt-6 flex items-center gap-2"
                                onClick={login}>
                                <FcGoogle />Sign in with Google</Button>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </div>
    );
};

export default CreateTrip;
