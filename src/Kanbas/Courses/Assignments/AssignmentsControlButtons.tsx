import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus, FaTrash, FaPencilAlt } from "react-icons/fa";

interface AssignmentControlButtonsProps {
  assignmentId?: string;
  onEditClick?: (id: string) => void;
  onDeleteClick?: (id: string) => void;
}

export default function AssignmentControlButtons({ assignmentId, onEditClick, onDeleteClick }: AssignmentControlButtonsProps) {
  const handleEditClick = () => {
    if (onEditClick && assignmentId) {
      onEditClick(assignmentId);
    }
  };

  const handleDeleteClick = () => {
    if (onDeleteClick && assignmentId) {
      onDeleteClick(assignmentId);
    }
  };

  return (
    <div className="float-end">
      <span className="rounded-pill border border-dark me-3 px-1 py-2">
        40% of Total
      </span>
      <FaPencilAlt className="text-primary me-3" onClick={handleEditClick} />
      <FaTrash className="text-danger me-3" onClick={handleDeleteClick} />
      <FaPlus className="me-1 fs-4" />
      <IoEllipsisVertical className="me-1 fs-4" />
    </div>
  );
}
