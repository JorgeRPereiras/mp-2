import {useState , useEffect} from "react";
import styled from "styled-components";
import Disney from "./components/Disney.tsx";
import type {DisneyCharacter} from "./interfaces/DisneyCharacters.ts";

const PageWrapper=styled.div`
    width: 90%;
    /*centers the PageWrapper horizontally*/
    margin: auto;
    border: 10px solid #1B262C;
`;

export default function App(){
    const [data, setData] = useState<DisneyCharacter[]>([]);

    useEffect(()=>{
        async function fetchData(): Promise<void>{
            const rawData= await fetch("https://api.disneyapi.dev/character")
            //no { results } because the API has no "results" property
            const results = await rawData.json();
            //the API gives an object containing the array and results.data gets just the array so I can use .map() on it
            setData(results.data)
        }
        fetchData()
            .then(()=>console.log("Worked"))
            .catch((e)=>console.log("This error occurred: "+e))
    },[data.length]);

    return(
        <PageWrapper>
            <Disney data={data}/>
        </PageWrapper>
    );
}