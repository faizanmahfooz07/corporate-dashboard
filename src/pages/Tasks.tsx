import React from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setTaskFilter, updateTaskStatus } from '../store/dashboardSlice';
import { Task } from '../types';

const priorityColor: Record<string, { bg: string; text: string }> = {
  high: { bg: '#fee2e2', text: '#dc2626' },
  medium: { bg: '#fef9c3', text: '#ca8a04' },
  low: { bg: '#dcfce7', text: '#16a34a' },
};

const Tasks: React.FC = () => {
  const dispatch = useAppDispatch();
  const { tasks, taskFilter, searchQuery } = useAppSelector(s => s.dashboard);

  const filtered = tasks.filter(t => {
    const matchesFilter = taskFilter === 'all' || t.status === taskFilter;
    const matchesSearch = t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.assignee.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const filters = ['all', 'todo', 'in-progress', 'done'];

  return (
    <div style={{ padding: 24 }}>
      {/* Filter tabs */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
        {filters.map(f => (
          <button key={f} onClick={() => dispatch(setTaskFilter(f))}
            style={{ padding: '7px 16px', borderRadius: 20, border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 600, background: taskFilter === f ? '#1e40af' : '#f1f5f9', color: taskFilter === f ? '#fff' : '#64748b', transition: 'all 0.2s' }}>
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* Task list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {filtered.map(task => (
          <div key={task.id} style={{ background: '#fff', borderRadius: 12, padding: '16px 20px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ flex: 1 }}>
              <p style={{ margin: 0, fontWeight: 600, color: '#0f172a', fontSize: 15, textDecoration: task.status === 'done' ? 'line-through' : 'none' }}>{task.title}</p>
              <p style={{ margin: '4px 0 0', fontSize: 13, color: '#64748b' }}>Assigned to: {task.assignee} · Due: {task.deadline}</p>
            </div>
            <span style={{ fontSize: 12, fontWeight: 600, padding: '3px 10px', borderRadius: 20, background: priorityColor[task.priority].bg, color: priorityColor[task.priority].text }}>
              {task.priority}
            </span>
            <select
              value={task.status}
              onChange={e => dispatch(updateTaskStatus({ id: task.id, status: e.target.value as Task['status'] }))}
              style={{ padding: '6px 10px', borderRadius: 8, border: '1px solid #e2e8f0', fontSize: 13, color: '#0f172a', cursor: 'pointer', outline: 'none' }}>
              <option value="todo">Todo</option>
              <option value="in-progress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </div>
        ))}
        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: 60, color: '#94a3b8' }}>No tasks found.</div>
        )}
      </div>
    </div>
  );
};

export default Tasks;
