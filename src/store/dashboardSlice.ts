import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Employee, Task } from '../types';
import { employees as initialEmployees, tasks as initialTasks } from '../data/mockData';

interface DashboardState {
  employees: Employee[];
  tasks: Task[];
  activeTab: string;
  searchQuery: string;
  taskFilter: string;
  sidebarOpen: boolean;
}

const initialState: DashboardState = {
  employees: initialEmployees,
  tasks: initialTasks,
  activeTab: 'overview',
  searchQuery: '',
  taskFilter: 'all',
  sidebarOpen: true,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setActiveTab(state, action: PayloadAction<string>) {
      state.activeTab = action.payload;
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    setTaskFilter(state, action: PayloadAction<string>) {
      state.taskFilter = action.payload;
    },
    toggleSidebar(state) {
      state.sidebarOpen = !state.sidebarOpen;
    },
    updateTaskStatus(state, action: PayloadAction<{ id: string; status: Task['status'] }>) {
      const task = state.tasks.find(t => t.id === action.payload.id);
      if (task) task.status = action.payload.status;
    },
  },
});

export const { setActiveTab, setSearchQuery, setTaskFilter, toggleSidebar, updateTaskStatus } = dashboardSlice.actions;
export default dashboardSlice.reducer;
