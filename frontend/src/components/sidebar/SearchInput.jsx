import {useEffect, useState} from "react";
import {IoSearchSharp} from "react-icons/io5";
import useGetConversations from "../../hooks/useGetConversations.js";
import useConversation from "../../zustand/useConversation.js"
import toast from "react-hot-toast"


const SearchInput = () => {
    const [toggled, setToggled] = useState(false);
    const [search, setSearch] = useState("");

    const {setSelectedConversation} = useConversation()

    useEffect(() => {
        const fetchStatus = async () => {
            const res = await fetch('/api/v1/users/get-status', {
                method: "GET",
            });
            const data = await res.json();
            if (data?.status?.status === 'available') {
                setToggled(true);
            } else {
                setToggled(false)
            }
        }
        fetchStatus();
    }, []);

    // from zustand global state mgmt
    function handleStatusChange() {
        const changeStatus = async () => {
            const status = toggled ? 'busy' : 'available';
            const res = await fetch('api/v1/users/update-status', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({status})
            });
            const data = await res.json();
            if (data?.code === '1001') {
                setToggled(!toggled)
            }
        }
        changeStatus();
    }

    const {conversations} = useGetConversations()


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) {
            return;
        }
        if (search.length < 3) {
            return toast.error("Search term must be of atleast 3 characters")
        }
        // search
        const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

        if (conversation) {
            setSelectedConversation(conversation)
            setSearch("");
        } else {
            toast.error("No such user found!")
        }

    }
    return (
        <>
            <div className="flex flex-row gap-2">
                <form className="flex items-center gap-2" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="input input-bordered rounded-full"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button type="submit" className="btn btn-circle bg-sky-500 text-white">
                        <IoSearchSharp className="w-6 h-6 outline-none"/>
                    </button>
                </form>

                {/* Toggle btn */}
                <div className=" flex items-center">
                    <button
                        className={`toggle-btn ${toggled ? "toggled" : ""}`}
                        onClick={handleStatusChange}
                    >
                        <div className="thumb">
                        </div>
                    </button>
                </div>


            </div>
        </>
    );

};

export default SearchInput;