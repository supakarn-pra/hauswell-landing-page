import { Routes, Route } from "react-router-dom";
import HausInsure from "@/pages/HausInsure";
import NotFound from "@/pages/not-found";

export function App() {
  return (
      <Routes>
        <Route path="/" element={<HausInsure />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}

export default App;
