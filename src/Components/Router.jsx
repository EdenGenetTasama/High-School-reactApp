import React from "react";
import Teacher from './teacher.component/teacher'
import Students from    './student.component/student'
import Parents from "./parents.component/parents";

import { Routes, Route, BrowserRouter, Link } from "react-router-dom";

const Router= () => {
    return (
      <Routes>
        <Route path="/Students" element={<Students />} />
        <Route path="/Teacher" element={<Teacher />} />
        <Route path="/Parents" element={<Parents />} />
      </Routes>
    );
  };
  
  export default Router;