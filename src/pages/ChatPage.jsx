import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
  where,
} from "firebase/firestore";
import { auth, db } from "./../firebase/config";
import { useEffect } from "react";
import { useState } from "react";
import Message from "../components/Message";

const ChatPage = ({ room, setRoom }) => {
  const [messages, setMessages] = useState([]);
  // when message is sent
  const handleSubmit = async e => {
    e.preventDefault();

    // get reference of the collection
    const messagesCol = collection(db, "messages");

    //add new document to collection
    await addDoc(messagesCol, {
      text: e.target[0].value,
      room,
      author: {
        name: auth.currentUser?.displayName,
        id: auth.currentUser?.uid,
        photo: auth.currentUser.photoURL,
      },
      createdAt: serverTimestamp(),
    });

    //reset form
    e.target.reset();
  };

  // instantly fetch messages sent in this room
  useEffect(() => {
    // get reference of the collection
    const messagesCol = collection(db, "messages");

    //make filtering settings
    const q = query(
      messagesCol,
      where("room", "==", room),
      orderBy("createdAt", "asc")
    );

    // instantly monitors changes in a collection
    // call the given function every time the collection changes
    // sends the documents in the collection as parameters
    onSnapshot(q, snapshot => {
      // array where data is temporarily kept
      const tempMsg = [];

      // return transcripts, access data, transfer to array
      snapshot.docs.forEach(doc => {
        tempMsg.push(doc.data());
      });

      // transfer messages to state
      setMessages(tempMsg);
    });
  }, []);

  return (
    <div className="chat-page">
      <header>
        <p>{auth.currentUser?.displayName}</p>
        <p>{room}</p>
        <button onClick={() => setRoom(null)}>Different Room</button>
      </header>

      <main>
        {messages.map((data, i) => (
          <Message key={i} data={data} />
        ))}
      </main>

      <form onSubmit={handleSubmit}>
        <input required placeholder="write your message" type="text" />
        <button>Send</button>
      </form>
    </div>
  );
};

export default ChatPage;
