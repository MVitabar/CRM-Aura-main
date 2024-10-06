import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/product"
          element={<>Hello world, welcome to producto page</>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
