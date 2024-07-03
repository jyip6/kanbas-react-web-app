import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addAssignment, updateAssignment } from './reducer';

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);

    const isNewAssignment = aid === 'new';
    const existingAssignment = isNewAssignment ? null : assignments.find((a: any) => a._id === aid);

    const [assignment, setAssignment] = useState({
        title: '',
        description: '',
        points: '',
        due_date: '',
        available_from_date: '',
        available_until_date: ''
    });

    useEffect(() => {
        if (existingAssignment) {
            setAssignment(existingAssignment);
        }
    }, [existingAssignment]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setAssignment(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newAssignment = {
            ...assignment,
            course: cid,
            _id: isNewAssignment ? new Date().getTime().toString() : aid
        };
        
        if (isNewAssignment) {
            dispatch(addAssignment(newAssignment));
        } else {
            dispatch(updateAssignment(newAssignment));
        }
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    const handleCancel = () => {
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    return (
        <div id='wd-assignment-editor'>
            <form onSubmit={handleSave}>
                <div className="col mb-3 ps-2">
                    <label htmlFor="wd-name" className="row-sm-5 row-form-label">
                        Assignment Name
                    </label>
                    <div className="row-sm-5">
                        <input id="wd-name" className="form-control" name="title"
                               value={assignment.title}
                               onChange={handleChange}/>
                    </div>
                </div>
                <br/>
                <div id="wd-description">
                    <div className="mb-3 row ps-2">
                        <div className="row-cols-sm-5 row-form-label">
                            <textarea
                                className="form-control"
                                id="wd-description"
                                name="description"
                                rows={15}
                                value={assignment.description}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>

                <br/>

                <div className="row mb-3 ps-2">
                    <div className="col text-end">
                        <label htmlFor="wd-points" className="col-form-label">
                            Points
                        </label>
                    </div>
                    <div className="col">
                        <input
                            id="wd-points"
                            name="points"
                            className="form-control"
                            value={assignment.points}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="row mb-3 ps-2">
                    <div className="col text-end">
                        <label htmlFor="wd-group" className="col-form-label">
                            Assignment Group
                        </label>
                    </div>
                    <div className="col">
                        <select id="wd-group" className="form-select">
                            <option value="ASSIGNMENT">ASSIGNMENTS</option>
                        </select>
                    </div>
                </div>

                <div className="row mb-3 ps-2">
                    <div className="col text-end">
                        <label htmlFor="wd-display-grades-as" className="col-form-label">
                            Display Grade as
                        </label>
                    </div>
                    <div className="col text-end">
                        <select id="wd-display-grades-as" className="form-select">
                            <option value="Percentage">Percentage</option>
                        </select>
                    </div>
                </div>

                <div className="row mb-3 ps-2">
                    <div className="col text-end">
                        <label htmlFor="wd-submission-type" className="col-form-label">
                            Submission Type
                        </label>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <select id="wd-submission-type" className="form-select ">
                                    <option value="Online">Online</option>
                                </select>

                                <label htmlFor="wd-online-dropdown" className="col-sm-7 col-form-label">
                                    Online Entry Options
                                </label>
                                <div className="col-sm-7">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="textEntry"/>
                                        <label className="form-check-label" htmlFor="textEntry">
                                            Text Entry
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="websiteUrl"
                                               defaultChecked/>
                                        <label className="form-check-label" htmlFor="websiteUrl">
                                            Website URL
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value=""
                                               id="mediaRecordings"/>
                                        <label className="form-check-label" htmlFor="mediaRecordings">
                                            Media Recordings
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value=""
                                               id="studentAnnotation"/>
                                        <label className="form-check-label" htmlFor="studentAnnotation">
                                            Student Annotation
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="fileUploads"/>
                                        <label className="form-check-label" htmlFor="fileUploads">
                                            File Uploads
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb-4 ps-2">
                    <div className="col text-end">
                        <label htmlFor="wd-assign" className="col-form-label">
                            Assign
                        </label>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <div className="col">
                                    <div className="col">
                                        <label htmlFor="wd-due-date" className="col-form-label">
                                            Due
                                        </label>
                                    </div>
                                    <div className="col">
                                        <input
                                            id="wd-due-date"
                                            name="due_date"
                                            className="form-control"
                                            type="date"
                                            value={assignment.due_date}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <br/>
                                </div>
                                <div className="col text-nowrap">
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="wd-available-from" className="col-form-label">
                                                Available from
                                            </label>
                                            <input
                                                id="wd-available-from"
                                                name="available_from_date"
                                                className="form-control"
                                                type="date"
                                                value={assignment.available_from_date}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="wd-available-until" className="col-form-label">
                                                Until
                                            </label>
                                            <input
                                                id="wd-available-until"
                                                name="available_until_date"
                                                className="form-control"
                                                type="date"
                                                value={assignment.available_until_date}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className={"row float-end"}>
                    <div className={"col"}>
                        <button type="button" id="wd-cancel" className={"btn btn-lg btn-secondary me-2"}
                                onClick={handleCancel}>Cancel
                        </button>
                        <button type="submit" id="wd-save" className={"btn btn-lg btn-danger"}>Save</button>
                    </div>
                </div>
            </form>
        </div>
    );
}