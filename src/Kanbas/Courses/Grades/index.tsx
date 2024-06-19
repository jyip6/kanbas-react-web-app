import React from 'react';
import { FaFileImport, FaFileExport, FaFilter, FaSearch, FaCog, FaChevronDown } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import * as db from '../../Database';

const Grades = () => {
    const { cid, aid } = useParams();
    const assignmentGrades = db.grades.filter(grade => grade.assignment === aid);
    const enrolledStudents = db.enrollments.filter(enrollment => enrollment.course === cid);

    const studentsGrades = enrolledStudents.map(enrollment => {
        const studentGrade = assignmentGrades.find(grade => grade.student === enrollment.user);
        const student = db.users.find(user => user._id === enrollment.user);
        const studentName = student ? `${student.firstName} ${student.lastName}` : 'Unknown Student';
        return {
            studentName,
            grade: studentGrade ? studentGrade.grade : 'N/A'
        };
    });

    return (
        <div className="container-fluid mt-4">
            <div className="d-flex justify-content-end mb-3">
                <button type="button" className="btn btn-outline-secondary me-2">
                    <FaFileImport className="me-2" /> Import
                </button>
                <div className="dropdown">
                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        <FaFileExport className="me-2" /> Export
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                        <li><a className="dropdown-item" href="#">Export as CSV</a></li>
                        <li><a className="dropdown-item" href="#">Export as Excel</a></li>
                    </ul>
                </div>
                <button type="button" className="btn btn-outline-secondary ms-2">
                    <FaCog />
                </button>
            </div>
            
            <div className="container-fluid mt-4">
                <div className="row mb-3">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="search-students" className="form-label">Student Names</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><FaSearch /></span>
                            </div>
                            <input type="text" className="form-control" id="search-students" placeholder="Search Students" />
                            <div className="input-group-append">
                                <span className="input-group-text"><FaChevronDown /></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="search-assignments" className="form-label">Assignment Names</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><FaSearch /></span>
                            </div>
                            <input type="text" className="form-control" id="search-assignments" placeholder="Search Assignments" />
                            <div className="input-group-append">
                                <span className="input-group-text"><FaChevronDown /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            <div className="row mb-3">
                <div className="col-md-12">
                    <button type="button" className="btn btn-outline-secondary">
                        <FaFilter className="me-2" /> Apply Filters
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="table-responsive">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Student Name</th>
                                    <th>A1 SETUP<br />Out of 100</th>
                                    <th>A2 HTML<br />Out of 100</th>
                                    <th>A3 CSS<br />Out of 100</th>
                                    <th>A4 BOOTSTRAP<br />Out of 100</th>
                                </tr>
                            </thead>
                            <tbody>
                                {studentsGrades.map(({ studentName, grade }) => (
                                    <tr key={studentName}>
                                        <td className="text-danger">{studentName}</td>
                                        <td>{grade}</td>
                                        <td>{grade}</td>
                                        <td>{grade}</td>
                                        <td>{grade}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Grades;
