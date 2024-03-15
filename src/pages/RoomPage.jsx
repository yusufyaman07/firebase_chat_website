import "../../styles/_room.scss";
import "../../styles/style.scss";
const RoomPage = ({ setRoom, setIsAuth }) => {
  //When the form is submitted, we get the room name
  const handleSubmit = e => {
    e.preventDefault();
    const room = e.target[0].value;
    setRoom(room.toUpperCase());
  };
  return (
    <form onSubmit={handleSubmit} className="room-page">
      <h1>Chat Room</h1>
      <p>Enter which room you will enter</p>
      <input type="text" placeholder="ex: Season 8 Weekdays" />
      <button type="submmit">Enter the Room</button>
      <button
        onClick={() => {
          setIsAuth(false);
          localStorage.removeItem("TOKEN");
        }}
        type="button"
      >
        Log out
      </button>
    </form>
  );
};

export default RoomPage;
