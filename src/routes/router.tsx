import { Routes, Route, BrowserRouter } from "react-router-dom";
import { JoinRoom, Room } from "../View";

const RoutesChat = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JoinRoom />} />
        <Route path="/chat" element={<Room />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesChat;
