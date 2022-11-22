import React, {useState} from 'react';
import './App.css';

import {Input} from "./components/Input";
import {Button} from "./components/Button";

function App() {
    let [message, setMessage] = useState([
        {message: "message1"},
        {message: "message2"},
        {message: "message3"},
    ])

    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])

    }

    let [title, setTitle] = useState("")

    const callButtonHandler = () => {
        addMessage(title)
        setTitle("")
    }

    return (
        <div className={"App"}>
            <Input setTitle={setTitle} title={title}/>
            <Button callBack={callButtonHandler} name={"+"}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;
