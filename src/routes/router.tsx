import { JoinRoom, Room } from "../View";
import { Routes, Route, BrowserRouter } from "react-router-dom";

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
