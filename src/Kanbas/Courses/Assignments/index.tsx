import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { MdCheckCircle } from "react-icons/md";
import ModulesControls from './AssignmentsControl';
import AssignmentsControlButtons from './AssignmentsControlButtons';
import { IoEllipsisVertical } from "react-icons/io5";
import { RiNewspaperLine } from "react-icons/ri";
import * as db from '../../Database'; 

export default function Assignments() {
    const { cid } = useParams();
    const assignments = db.assignments.filter(assignment => assignment.course === cid);

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
                    <ul className="list-group rounded-0 border-5 border-start border-success">
                        {assignments.map(assignment => (
                            <li key={assignment._id} className="list-group-item d-flex align-items-start">
                                <BsGripVertical className="me-2 fs-3" />
                                <RiNewspaperLine className="me-2 fs-3"/>
                                <div>
                                    <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} className="text-decoration-none" style={{ color: 'black' }}>
                                        {assignment.title}
                                    </Link>
                                    <div className="d-flex flex-column">
                                        <span className="text-muted">
                                            <span style={{color:'red'}}>Multiple Modules</span> | <strong>Not available</strong> until May 13 at 12:00am
                                        </span>
                                        <span className="text-muted"><strong>Due</strong> May 13 at 11:59pm | 100 pts</span>
                                    </div>
                                </div>
                                <AssignmentsControlButtons/>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </div>
    );
}
