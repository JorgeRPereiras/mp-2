import styled from "styled-components";
import type {DisneyCharacter} from "../interfaces/DisneyCharacters.ts";

const StyleForAllCharDiv=styled.div`
    /*makes the element a flex container*/
    display: flex;
    /*row places the children left to right and wrap checks if there is not enough space on one line, and move the children to the next line*/
    flex-flow: row wrap;
    /*distributes the children evenly in the horizontal space*/
    justify-content: space-evenly;
    background-color: #BBE1FA;
`;

const StyleForEachCharDiv=styled.div`
    font: normal small-caps bold calc(2px + 1vw) verdana, arial, helvetica, sans-serif;
    /*makes the element a flex container*/
    display: flex;
    /*arranges the contents vertically*/
    flex-direction: column;
    /*centers the contents vertically*/
    justify-content: center;
    /*the box can be at most 22% of the parent's width*/
    max-width: 22%;
    padding: 1%;
    margin: 1%;
    background-color: #3282B8;
    color: white;
    border: 10px solid #0F4C75;
    /*centers the text horizontally*/
    text-align: center;
`;

const StyleForInfoDiv=styled.div`
    /*replaces font variant from small-caps to normal*/
    font-variant: normal;
`;

const StyleForNameDiv=styled.div`
    color: #1B262C;
    font-size: calc(2px + 1.5vw);
    /*replaces font variant from small-caps to normal*/
    font-variant: normal;
`;

const StyleForImageImg=styled.img`
    border: 10px solid #1B262C;
`;

const StyleForNoImageP=styled.p`
    color: darkred;
`;

export default function Disney(props : { data:DisneyCharacter[] }){
    return(
        //StyleForAllCharDiv is a container that holds all characters
        <StyleForAllCharDiv>
            {
                //props.data.map go through each Disney character in the data array
                props.data.map((char: DisneyCharacter) =>
                    <StyleForEachCharDiv key={char._id}>
                        {/*StyleForNameDiv is a container for the character's name*/}
                        <StyleForNameDiv>
                            <h3>{char.name}</h3>
                        </StyleForNameDiv>
                        {/*StyleForInfoDiv is a container for the character's info*/}
                        <StyleForInfoDiv>
                            <br/>
                            {/* show the image if there is one, otherwise a red message */}
                            {char.imageUrl ? <StyleForImageImg src={char.imageUrl} alt={char.name}/> : <StyleForNoImageP>{char.name} has no image</StyleForNoImageP>}
                            {/* list the films, or say there are none */}
                            <p><br/>FILMS: {(char.films).length === 0 ? `${char.name} has no films` : char.films.join(", ")} </p>
                            {/* list the TV shows, or say there are none */}
                            <p><br/>TV SHOWS: {(char.tvShows).length === 0 ? `${char.name} has no Tv Shows` : char.tvShows.join(", ")}</p>
                        </StyleForInfoDiv>
                    </StyleForEachCharDiv>
                )
            }
        </StyleForAllCharDiv>
    );
}