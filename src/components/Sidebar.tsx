import React from 'react';
import { LayoutDashboard, Users, CheckSquare, Bell, Settings, ChevronLeft, Zap } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setActiveTab, toggleSidebar } from '../store/dashboardSlice';

const navItems = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'employees', label: 'Employees', icon: Users },
  { id: 'tasks', label: 'Tasks', icon: CheckSquare },
  { id: 'announcements', label: 'Announcements', icon: Bell },
  { id: 'settings', label: 'Settings', icon: Settings },
];

const Sidebar: React.FC = () => {
  const dispatch = useAppDispatch();
  const { activeTab, sidebarOpen } = useAppSelector(s => s.dashboard);

  return (
    <aside style={{
      width: sidebarOpen ? 220 : 64,
      background: '#0f172a',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      transition: 'width 0.3s ease',
      flexShrink: 0,
      position: 'relative',
    }}>
      {/* Logo */}
      <div style={{ padding: '20px 16px', display: 'flex', alignItems: 'center', gap: 10, borderBottom: '1px solid #1e293b' }}>
        <div style={{ background: '#e11d48', borderRadius: 8, width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Zap size={18} color="#fff" />
        </div>
        {sidebarOpen && <span style={{ color: '#fff', fontWeight: 700, fontSize: 16, whiteSpace: 'nowrap' }}>CorpSync</span>}
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: '12px 8px' }}>
        {navItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => dispatch(setActiveTab(id))}
            style={{
              width: '100%', display: 'flex', alignItems: 'center', gap: 12,
              padding: '10px 12px', borderRadius: 8, border: 'none', cursor: 'pointer',
              background: activeTab === id ? '#1e40af' : 'transparent',
              color: activeTab === id ? '#fff' : '#94a3b8',
              marginBottom: 4, transition: 'all 0.2s',
              justifyContent: sidebarOpen ? 'flex-start' : 'center',
            }}
          >
            <Icon size={18} />
            {sidebarOpen && <span style={{ fontSize: 14, whiteSpace: 'nowrap' }}>{label}</span>}
          </button>
        ))}
      </nav>

      {/* Collapse */}
      <button
        onClick={() => dispatch(toggleSidebar())}
        style={{
          margin: 12, padding: 10, borderRadius: 8, border: '1px solid #1e293b',
          background: 'transparent', color: '#94a3b8', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >
        <ChevronLeft size={16} style={{ transform: sidebarOpen ? 'rotate(0deg)' : 'rotate(180deg)', transition: 'transform 0.3s' }} />
      </button>
    </aside>
  );
};

export default Sidebar;
