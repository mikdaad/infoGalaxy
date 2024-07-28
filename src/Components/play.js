import React, { useEffect } from 'react';
import home from "./home.mp3";

function Playss({musc}) {
    return (


        useEffect(() => {
    const audio = new Audio(home); 
    audio.play(home);},[])
)};


export default Playss;