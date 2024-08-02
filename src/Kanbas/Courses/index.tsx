import React from 'react';
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import Home from "./Home";
import Modules from "./Modules";
import CoursesNavigation from "./Navigation";
import Assignments from "./Assignments";
import Grades from "./Grades";
import AssignmentEditor from './Assignments/AssignmentEditor';
import PeopleTable from './People/Table';
import { FaAlignJustify } from 'react-icons/fa';



export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  return (
    <div id="wd-courses">
      <h2 className="text-danger"><FaAlignJustify className="me-4 fs-4 mb-1" /> 
      {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
                          <Route path="/" element={<Navigate to="Home"/>}/>
                          <Route path="/Home" element={<Home/>}/>
                          <Route path="/Modules" element={<Modules/>}/>
                          <Route path="/Assignments" element={<Assignments/>}/>
                          <Route path="/Grades" element={<Grades/>}/>
                          <Route path="/Assignments/:aid" element={<AssignmentEditor/>}/>
                          <Route path="/People" element={<PeopleTable />} />
                          <Route path="/People/:uid" element={<PeopleTable />} />
                          
            </Routes>
        </div>
      </div>
    </div>

  );
}