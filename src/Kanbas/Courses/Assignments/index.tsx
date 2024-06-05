import React from 'react';
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { MdCheckCircle } from "react-icons/md";
import ModulesControls from './AssignmentsControl';
import AssignmentsControlButtons from './AssignmentsControlButtons';
import { IoEllipsisVertical } from "react-icons/io5";

export default function Assignments() {
    return (
        <div id="wd-assignments">
            <ModulesControls /><br /><br /><br /><br />
            <ul className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-3 fs-5 border-0">
                    <div className="d-flex justify-content-between align-items-center p-3 ps-2 bg-light border-bottom">
                        <div className="d-flex align-items-center">
                            <BsGripVertical className="me-2 fs-3" />
                            <h5 className="mb-0">ASSIGNMENTS</h5>
                        </div>
                        <div className="d-flex align-items-center">
                            <span className="badge bg-light" style={{ color: 'black', border: '1px solid black'}}>40% of Total</span>
                            <BsPlus className="fs-4 ms-3" />
                            <IoEllipsisVertical className="fs-4 ms-3" />
                        </div>
                    </div>
                    <ul className="list-group rounded-0 rounded-0 border-5 border-start border-success">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <div>
                                <BsGripVertical className="me-2" />
                                <a href="#/Kanbas/Courses/1234/Assignments/123" className="text-decoration-none" style={{ color: 'black'}}>
                                    A1
                                </a>
                                <small className="text-muted d-block">Multiple Modules | Not available until May 6 at 12:00am | Due May 13 at 11:59pm | 100 pts</small>
                            </div>
                            <MdCheckCircle className="text-success" />
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <div>
                                <BsGripVertical className="me-2" />
                                <a href="#/Kanbas/Courses/1234/Assignments/123" className="text-decoration-none" style={{ color: 'black' }}>
                                    A2
                                </a>
                                <small className="text-muted d-block">Multiple Modules | Not available until May 13 at 12:00am | Due May 20 at 11:59pm | 100 pts</small>
                            </div>
                            <MdCheckCircle className="text-success" />
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <div>
                                <BsGripVertical className="me-2" />
                                <a href="#/Kanbas/Courses/1234/Assignments/123" className="text-decoration-none" style={{ color: 'black' }}>
                                    A3
                                </a>
                                <small className="text-muted d-block">Multiple Modules | Not available until May 20 at 12:00am | Due May 27 at 11:59pm | 100 pts</small>
                            </div>
                            <MdCheckCircle className="text-success" />
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
