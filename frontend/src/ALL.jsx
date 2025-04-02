import React from "react";
import Card from "./card";
import LanguageApp from "./Language";
import Student from "./Student";
import CommentSection from "./comment/CommentSections";
import Register from "./courses/Register";


const ALL = () =>{
    return (<>
    <Card/>
    <Student/>
    <LanguageApp/>
    <CommentSection/>
    <Register/>
    </>)

}

export default ALL;