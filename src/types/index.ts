export interface Employee {
  id: string;
  name: string;
  department: string;
  role: string;
  status: 'active' | 'on-leave' | 'remote';
  avatar: string;
  joinDate: string;
}

export interface Task {
  id: string;
  title: string;
  assignee: string;
  priority: 'high' | 'medium' | 'low';
  status: 'todo' | 'in-progress' | 'done';
  deadline: string;
}

export interface Announcement {
  id: string;
  title: string;
  body: string;
  date: string;
  tag: string;
}

export interface MetricCard {
  label: string;
  value: string | number;
  change: number;
  icon: string;
}
