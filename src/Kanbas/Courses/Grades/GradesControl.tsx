import React from 'react';
import { FaPlus } from "react-icons/fa6";
import { FaSearch } from 'react-icons/fa';

export default function GradesControl() {
  return (
    <div id="wd-grade-controls" className="text-nowrap" >
    <div className=" input-group me-1 float-start" style={{ maxWidth: '300px' }}>
            <span className="input-group-text "><FaSearch /></span>
            <input type="text" className="form-control btn btn-lg border-gray" placeholder="Search..." />
            </div>

      <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Import
      </button>

      <button id="wd-add-module-btn" className="btn btn-lg btn-secondary me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Export
      </button>

    </div>
  );
}