import React, { useState } from 'react';
import { useParams } from "react-router";
import AssignmentsControl from "./AssignmentsControl";
import AssignmentControlButtons from "./AssignmentsControlButtons";
import { BsGripVertical } from "react-icons/bs";
import ControlButtons from "./ControlButtons";
import { GoTriangleDown } from "react-icons/go";
import { TfiPencilAlt } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment } from "./reducer";

export default function Assignments() {
    const { cid } = useParams();
    const dispatch = useDispatch();
    const assignments = useSelector((state: any) => 
        state.assignmentsReducer.assignments.filter((assignment: any) => assignment.course === cid)
    );

    const [showConfirmDialog, setShowConfirmDialog] = useState(false);
    const [assignmentToDelete, setAssignmentToDelete] = useState<string | null>(null);

    const handleDeleteClick = (assignmentId: string) => {
        setAssignmentToDelete(assignmentId);
        setShowConfirmDialog(true);
    };

    const handleConfirmDelete = () => {
        if (assignmentToDelete) {
            dispatch(deleteAssignment(assignmentToDelete));
        }
        setShowConfirmDialog(false);
        setAssignmentToDelete(null);
    };

    const handleCancelDelete = () => {
        setShowConfirmDialog(false);
        setAssignmentToDelete(null);
    };

    return (
        <div id="wd-assignment">
            <AssignmentsControl/>
            <br/><br/>
            <ul id="wd-assignment-title" className="list-group rounded-0">
                <li className="wd-title list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-1 fs-3"/>
                        <GoTriangleDown className="me-1 fs-3"/>
                        ASSIGNMENTS
                        <AssignmentControlButtons/>
                    </div>
                    <ul className="wd-assignment-list list-group rounded-0" style={{borderLeft: '5px solid green'}}>
                    {assignments.map((assignment: any) => (
                        <li key={assignment._id} className="wd-assignment-list-item list-group-item p-3 ps-1">
                            <div className="d-flex align-items-center flex-grow-1">
                                <BsGripVertical className="me-1 fs-3"/>
                                <TfiPencilAlt className="me-4 fs-5 text-success"/>
                                <span className="d-inline-block">
                                    <a className="wd-assignment-list-item fw-bold"
                                    href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                                    style={{color: 'black'}}>
                                        {assignment.title}
                                    </a>
                                    <div className="ms-0">
                                        <div className="d-flex align-items-center">
                                            <div className="text-danger">Multiple Modules</div>
                                            <div className="ms-2">|</div>
                                            <div className="fw-bold ms-2"> Not available until</div>
                                            <div className="ms-2">{assignment.available}</div>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <div className="fw-bold">Due</div>
                                            <div className="ms-2">{assignment.due}</div>
                                            <div className={"ms-2"}> | </div>
                                            <div className="ms-2"> {assignment.points} pts </div>
                                        </div>
                                    </div>
                                </span>
                                <div className="ms-auto">
                                    <ControlButtons onDeleteClick={() => handleDeleteClick(assignment._id)} />
                                </div>
                            </div>
                        </li>
                    ))}
                    </ul>
                </li>
            </ul>

            {showConfirmDialog && (
                <div className="modal" style={{display: 'block', backgroundColor: 'rgba(0,0,0,0.5)'}}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Confirm Deletion</h5>
                                <button type="button" className="btn-close" onClick={handleCancelDelete}></button>
                            </div>
                            <div className="modal-body">
                                Are you sure you want to remove this assignment?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleCancelDelete}>Cancel</button>
                                <button type="button" className="btn btn-danger" onClick={handleConfirmDelete}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}