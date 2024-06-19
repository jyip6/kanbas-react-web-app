import React from 'react';
import { useParams, Link } from 'react-router-dom';
import * as db from '../../Database';

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const assignment = db.assignments.find(a => a._id === aid);

    if (!assignment) {
        return <div>Assignment not found</div>;
    }

    const defaultDescription = "The assignment is available online. Submit a link to the landing page of your web application running on Netlify. The landing page should include the following: Your full name and section, links to each of the lab assignments, link to the Kanbas application, and links to all relevant source code repositories. The Kanbas application should include a link to navigate back to the landing page.";
    const defaultPoints = 100;
    const defaultDueDate = "2024-06-30T23:59";
    const defaultAvailableFrom = "2024-06-01T00:00";

    return (
        <div id="wd-assignments-editor" className="container mt-4">
            <div className="mb-3">
                <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                <input id="wd-name" className="form-control" value={assignment.title} readOnly />
            </div>
            <div className="mb-3">
                <label htmlFor="wd-description" className="form-label">Description</label>
                <textarea id="wd-description" className="form-control" rows={5} defaultValue={defaultDescription} readOnly />
            </div>
            <div className="row mb-3">
                <div className="col-md-2 text-end align-self-start">
                    <label htmlFor="wd-points" className="form-label">Points</label>
                </div>
                <div className="col-md-10">
                    <input id="wd-points" className="form-control" value={defaultPoints} readOnly />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-2 text-end align-self-start">
                    <label htmlFor="wd-group" className="form-label">Assignment Group</label>
                </div>
                <div className="col-md-10">
                    <select id="wd-group" className="form-control">
                        <option value="assignments">ASSIGNMENTS</option>
                    </select>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-2 text-end align-self-start">
                    <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
                </div>
                <div className="col-md-10">
                    <select id="wd-display-grade-as" className="form-control">
                        <option value="percentage">Percentage</option>
                    </select>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-2 text-end align-self-start">
                    <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-6">
                    <div className="card mb-3">
                        <div className="card-body">
                            <div className="col-md-10">
                                <select id="wd-submission-type" className="form-control">
                                    <option value="online">Online</option>
                                </select>
                            </div>
                            <label className="form-label fw-bold">Online Entry Options</label>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="wd-text-entry" />
                                <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="wd-website-url" />
                                <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="wd-media-recordings" />
                                <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="wd-student-annotation" />
                                <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="wd-file-upload" />
                                <label className="form-check-label" htmlFor="wd-file-upload">File Uploads</label>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-6">
                    <div className="card mb-3 d-flex justify-content-end align-items-start">
                        <div className="card-body">
                            <div className="row mb-3">
                                <div className="col-md-4 text-end align-self-start">
                                    <label htmlFor="wd-assign-to" className="form-label">Assign to</label>
                                </div>
                                <div className="col-md-8">
                                    <input id="wd-assign-to" className="form-control" value="Everyone" readOnly />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-4 text-end align-self-start">
                                    <label htmlFor="wd-due-date" className="form-label">Due</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="datetime-local" id="wd-due-date" className="form-control" value={defaultDueDate} readOnly />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-4 text-end align-self-start">
                                    <label htmlFor="wd-available-from" className="form-label">Available from</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="datetime-local" id="wd-available-from" className="form-control" value={defaultAvailableFrom} readOnly />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-4 text-end align-self-start">
                                    <label htmlFor="wd-available-until" className="form-label">Until</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="datetime-local" id="wd-available-until" className="form-control" value="2024-06-30T00:00" readOnly />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-end">
                <Link to={`/Kanbas/Courses/${cid}/Assignments`} id="wd-cancel" className="btn btn-secondary me-2">Cancel</Link>
                <button id="wd-save" type="button" className="btn btn-success">Save</button>
            </div>
        </div>
    );
}
