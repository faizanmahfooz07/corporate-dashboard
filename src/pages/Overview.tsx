import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { Users, CheckSquare, Clock, TrendingUp } from 'lucide-react';
import { activityData, departmentData, employees, tasks } from '../data/mockData';

const COLORS = ['#1e40af', '#e11d48', '#0891b2', '#059669', '#d97706'];

const MetricCard: React.FC<{ label: string; value: string | number; change: number; icon: React.ReactNode; color: string }> = ({ label, value, change, icon, color }) => (
  <div style={{ background: '#fff', borderRadius: 12, padding: 20, flex: 1, boxShadow: '0 1px 3px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <div>
        <p style={{ margin: 0, fontSize: 13, color: '#64748b' }}>{label}</p>
        <p style={{ margin: '6px 0 0', fontSize: 28, fontWeight: 700, color: '#0f172a' }}>{value}</p>
      </div>
      <div style={{ background: color + '18', borderRadius: 10, padding: 10 }}>
        {icon}
      </div>
    </div>
    <p style={{ margin: '10px 0 0', fontSize: 13, color: change >= 0 ? '#059669' : '#e11d48' }}>
      {change >= 0 ? '▲' : '▼'} {Math.abs(change)}% vs last week
    </p>
  </div>
);

const Overview: React.FC = () => {
  const activeCount = employees.filter(e => e.status === 'active').length;
  const doneCount = tasks.filter(t => t.status === 'done').length;
  const pendingCount = tasks.filter(t => t.status === 'todo').length;

  return (
    <div style={{ padding: 24, overflowY: 'auto', height: '100%' }}>
      {/* Metrics */}
      <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
        <MetricCard label="Total Employees" value={employees.length} change={8} icon={<Users size={20} color="#1e40af" />} color="#1e40af" />
        <MetricCard label="Active Today" value={activeCount} change={5} icon={<TrendingUp size={20} color="#059669" />} color="#059669" />
        <MetricCard label="Tasks Completed" value={doneCount} change={12} icon={<CheckSquare size={20} color="#0891b2" />} color="#0891b2" />
        <MetricCard label="Pending Tasks" value={pendingCount} change={-3} icon={<Clock size={20} color="#e11d48" />} color="#e11d48" />
      </div>

      {/* Charts Row */}
      <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
        {/* Bar Chart */}
        <div style={{ flex: 2, background: '#fff', borderRadius: 12, padding: 20, boxShadow: '0 1px 3px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0' }}>
          <h3 style={{ margin: '0 0 16px', fontSize: 15, fontWeight: 600, color: '#0f172a' }}>Weekly Activity</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={activityData}>
              <XAxis dataKey="day" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="tasks" fill="#1e40af" radius={[4, 4, 0, 0]} name="Tasks" />
              <Bar dataKey="meetings" fill="#0891b2" radius={[4, 4, 0, 0]} name="Meetings" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div style={{ flex: 1, background: '#fff', borderRadius: 12, padding: 20, boxShadow: '0 1px 3px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0' }}>
          <h3 style={{ margin: '0 0 16px', fontSize: 15, fontWeight: 600, color: '#0f172a' }}>Dept. Distribution</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={departmentData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value">
                {departmentData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Tasks */}
      <div style={{ background: '#fff', borderRadius: 12, padding: 20, boxShadow: '0 1px 3px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0' }}>
        <h3 style={{ margin: '0 0 16px', fontSize: 15, fontWeight: 600, color: '#0f172a' }}>Recent Tasks</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
              {['Task', 'Assignee', 'Priority', 'Status', 'Deadline'].map(h => (
                <th key={h} style={{ textAlign: 'left', padding: '8px 12px', fontSize: 12, color: '#94a3b8', fontWeight: 600 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tasks.slice(0, 4).map(task => (
              <tr key={task.id} style={{ borderBottom: '1px solid #f8fafc' }}>
                <td style={{ padding: '10px 12px', fontSize: 14, color: '#0f172a' }}>{task.title}</td>
                <td style={{ padding: '10px 12px', fontSize: 14, color: '#64748b' }}>{task.assignee}</td>
                <td style={{ padding: '10px 12px' }}>
                  <span style={{ fontSize: 12, padding: '2px 8px', borderRadius: 20, background: task.priority === 'high' ? '#fee2e2' : task.priority === 'medium' ? '#fef9c3' : '#dcfce7', color: task.priority === 'high' ? '#dc2626' : task.priority === 'medium' ? '#ca8a04' : '#16a34a', fontWeight: 600 }}>
                    {task.priority}
                  </span>
                </td>
                <td style={{ padding: '10px 12px' }}>
                  <span style={{ fontSize: 12, padding: '2px 8px', borderRadius: 20, background: task.status === 'done' ? '#dcfce7' : task.status === 'in-progress' ? '#dbeafe' : '#f1f5f9', color: task.status === 'done' ? '#16a34a' : task.status === 'in-progress' ? '#1e40af' : '#64748b', fontWeight: 600 }}>
                    {task.status}
                  </span>
                </td>
                <td style={{ padding: '10px 12px', fontSize: 14, color: '#64748b' }}>{task.deadline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Overview;
