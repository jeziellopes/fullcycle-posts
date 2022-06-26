import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Blank, Home, Post } from '@/pages'

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="*" element={<Blank />} />
      </Routes>
    </BrowserRouter>
  );
};