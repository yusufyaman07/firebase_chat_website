import "../../styles/_room.scss";
import "../../styles/style.scss";
const RoomPage = ({ setRoom, setIsAuth }) => {
  //Form Gönderilince Oda adını alıyoruz
  const handleSubmit = e => {
    e.preventDefault();
    const room = e.target[0].value;
    setRoom(room.toUpperCase());
  };
  return (
    <form onSubmit={handleSubmit} className="room-page">
      <h1>Chat Room</h1>
      <p>Hangi odaya gireceğinizi giriniz</p>
      <input type="text" placeholder="ör: 8.Sezon Hafta İçi" />
      <button type="submmit">Odaya Gir</button>
      <button
        onClick={() => {
          setIsAuth(false);
          localStorage.removeItem("TOKEN");
        }}
        type="button"
      >
        Çıkış Yap
      </button>
    </form>
  );
};

export default RoomPage;
