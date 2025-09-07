import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import { useColorModeValue } from "./components/ui/color-mode";

function App() {
  return (
    <>
      <Box minHeight={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
        {/* Navbar */}
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
