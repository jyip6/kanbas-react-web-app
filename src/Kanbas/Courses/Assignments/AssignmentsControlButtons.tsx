import React from 'react';
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { BsPlus } from 'react-icons/bs';
export default function AssignmentsControlButtons() {
  return (
    <div className="ms-auto mt-1 float-end">
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
);}