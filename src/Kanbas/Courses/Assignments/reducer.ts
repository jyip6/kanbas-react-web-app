import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 定义 Assignment 接口
interface Assignment {
    _id: string;
    title: string;
    course: string;
    available: string;
    due: string;
    points: string;
    due_date: string;
    available_from_date: string;
    until_date?: string;
    description: string;
    editing?: boolean;
}

// 定义初始状态的类型
interface AssignmentsState {
    assignments: Assignment[];
}

const initialState: AssignmentsState = {
    assignments: [],
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        setAssignments: (state, action: PayloadAction<Assignment[]>) => {
            state.assignments = action.payload;
        },
        addAssignment: (state, { payload: assignment }: PayloadAction<Assignment>) => {
            const newAssignment: Assignment = {
                _id: new Date().getTime().toString(),
                title: assignment.title,
                course: assignment.course,
                available: assignment.available,
                due: assignment.due,
                points: assignment.points,
                due_date: assignment.due_date,
                available_from_date: assignment.available_from_date,
                until_date: assignment.until_date,
                description: assignment.description,
            };
            state.assignments = [...state.assignments, newAssignment];
        },
        deleteAssignment: (state, { payload: assignmentId }: PayloadAction<string>) => {
            state.assignments = state.assignments.filter(
                (a: Assignment) => a._id !== assignmentId
            );
        },
        updateAssignment: (state, { payload: assignment }: PayloadAction<Assignment>) => {
            state.assignments = state.assignments.map((a: Assignment) =>
                a._id === assignment._id ? assignment : a
            );
        },
        editAssignment: (state, { payload: assignmentId }: PayloadAction<string>) => {
            state.assignments = state.assignments.map((a: Assignment) =>
                a._id === assignmentId ? { ...a, editing: true } : a
            );
        },
    },
});

export const {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    editAssignment,
    setAssignments,
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
