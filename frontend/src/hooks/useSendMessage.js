import React, {useState} from 'react'
import useConversation from '../zustand/useConversation.js';
import toast from "react-hot-toast"
import useListenMessages from "./useListenMessages.js";

function useSendMessage() {
    const [loading, setLoading] = useState(false);
    const {messages, setMessages, selectedConversation} = useConversation();
//   from zustand
    useListenMessages()
    const sendMessage = async (message) => {
        setLoading(true);
        try {
            const res = await fetch(`/api/v1/messages/send/${selectedConversation._id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({message})
            })

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }

            // from zustand -> setMessages function
            if (Array.isArray(data) && data.length == 2) {
                setMessages([...messages, data[0], data[1]]);
            } else {
                setMessages([...messages, data[0]]);
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false)
        }
    }

    return {sendMessage, loading};
}

export default useSendMessage