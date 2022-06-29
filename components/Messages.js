import {ByMoralis, useMoralis, useMoralisQuery} from "react-moralis";
import SendMessage from "./SendMessage"
import {useRef} from "react";
import Message from "./Message" ;

//Only show messages from last 15 minutes
const MINS_DURATION =15;

function Messages() {
    const {user}= useMoralis();
    const endOfMessagesRef = useRef(null);
    const {data, loading, error} = useMoralisQuery(
        'Messages',
        (query) => 
        query
        .ascending('createdAt')
        .greaterThan(
            "createdAt",
            new Date(Date.now() - 1000 * 60 * MINS_DURATION)
        ),
        [],
        {
            live:true,
        }
    );

  return (
    <div className="pb-56">
        <div className="my-5">
            <ByMoralis 
            variant="dark"
            style={{marginLeft:'auto' ,marginRight:'auto'}}
            />
        </div>

        <div classname="space-y-10 p-4">
            {data.map(message => (
                <Message key={message.id} message={message} />
            ))}
        </div>

        <div className="flex justify-center">
            <SendMessage  endOfMessagesRef={endOfMessagesRef} />
        </div>

        <div ref={endOfMessagesRef} className="text-center text-gray-400 mt-5">
            <p>You're up to date {user.getUsername()}! 🎉</p>
        </div>

        <h1>Messages</h1>
    </div>
  );
}

export default Messages