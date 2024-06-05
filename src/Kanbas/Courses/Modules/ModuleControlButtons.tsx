import React from 'react';
import { BsGripVertical, BsPlus } from 'react-icons/bs';
import { IoEllipsisVertical } from 'react-icons/io5';
import GreenCheckmark from './GreenCheckmark';

const ModuleControlButtons = () => {
  return (
    <div className="d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center">
        <BsPlus className="me-2 fs-4" />
      </div>
    </div>
  );
};

export default ModuleControlButtons;
