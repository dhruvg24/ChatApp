// this is for real time messages using socket io
import {useEffect} from 'react'
import {useSocketContext} from '../context/SocketContext.jsx'
import useConversation from "../zustand/useConversation.js"
import notificationSound from "../assets/sounds/notification.mp3"

const useListenMessages = () => {
    const {socket} = useSocketContext();

    const {messages, setMessages} = useConversation();

    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            newMessage.shouldShake = true;
            const sound = new Audio(notificationSound)
            sound.play();
            console.log("newMessage logged", typeof newMessage, newMessage);
            setMessages([...messages, newMessage]);
        })
        // listen for newMessage event
        // console.log(messages);
        // cleanup
        return () => socket?.off("newMessage")
        // so that this event is listened only once.
    }, [socket, setMessages, messages])
}

export default useListenMessages
