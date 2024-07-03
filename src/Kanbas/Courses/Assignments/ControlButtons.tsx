import React from 'react';
import {IoEllipsisVertical} from "react-icons/io5";
import {FaCheckCircle, FaCircle, FaTrash} from "react-icons/fa";

interface ControlButtonsProps {
    onDeleteClick: () => void;
}

export default function ControlButtons({onDeleteClick}: ControlButtonsProps) {
    return (
        <div className="float-end">
            <span className="me-3 position-relative">
                <FaCheckCircle style={{top: "1px"}}
                               className="text-success me-1 position-absolute fs-3"/>
                <FaCircle className="text-white me-2 fs-6"/>
            </span>
            <FaTrash
                className="text-danger me-1 fs-5"
                style={{cursor: 'pointer'}}
                onClick={onDeleteClick}
            />
            <IoEllipsisVertical className="fs-4"/>
        </div>
    );
}