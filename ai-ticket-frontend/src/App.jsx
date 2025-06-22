import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/signup";
import LoginPage from "./pages/login";
import Tickets from "./pages/tickets";
import TicketDetailsPage from "./pages/ticket";   // <-- important!
import CheckAuth from "./components/check-auth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/tickets"
          element={
            <CheckAuth>
              <Tickets />
            </CheckAuth>
          }
        />
        <Route
          path="/tickets/:id"
          element={
            <CheckAuth>
              <TicketDetailsPage />
            </CheckAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
