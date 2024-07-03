import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database"; 


const initialState = {
  assignments: assignments,
  assignment: {
    title: "",
    description: "",
    dueDate: "",
    points: 0,
  },
};


const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload }) => {
      state.assignments.push({ ...payload, _id: new Date().getTime().toString() });
    },
    deleteAssignment: (state, { payload }) => {
      state.assignments = state.assignments.filter((assignment) => assignment._id !== payload);
    },
    updateAssignment: (state, { payload }) => {
      state.assignments = state.assignments.map((assignment) =>
        assignment._id === payload._id ? payload : assignment
      );
    },
    setAssignment: (state, { payload }) => {
      state.assignment = payload;
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment, setAssignment } = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
