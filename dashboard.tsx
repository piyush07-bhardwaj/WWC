import React from 'react';
import { TreeIcon, Sprout, Map, AlertTriangle } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <DashboardCard
          title="Total Trees Planted"
          value="12,458"
          icon={TreeIcon}
          color="green"
        />
        <DashboardCard
          title="Active Projects"
          value="8"
          icon={Sprout}
          color="blue"
        />
        <DashboardCard
          title="Sites"
          value="15"
          icon={Map}
          color="purple"
        />
        <DashboardCard
          title="Critical Sites"
          value="2"
          icon={AlertTriangle}
          color="red"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { action: 'New trees planted', project: 'Amazon Restoration', count: 250 },
              { action: 'Site inspection completed', project: 'Highland Recovery', count: null },
              { action: 'Project milestone reached', project: 'Coastal Mangroves', count: null },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between border-b pb-2">
                <div>
                  <p className="font-medium text-gray-800">{activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.project}</p>
                </div>
                {activity.count && (
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                    +{activity.count} trees
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Project Health Overview</h2>
          <div className="space-y-4">
            {[
              { name: 'Amazon Restoration', health: 95, status: 'Excellent' },
              { name: 'Highland Recovery', health: 82, status: 'Good' },
              { name: 'Coastal Mangroves', health: 68, status: 'Fair' },
            ].map((project, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{project.name}</span>
                  <span className="text-sm">{project.status}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 rounded-full h-2"
                    style={{ width: `${project.health}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const DashboardCard = ({ title, value, icon: Icon, color }) => {
  const colorClasses = {
    green: 'bg-green-100 text-green-800',
    blue: 'bg-blue-100 text-blue-800',
    purple: 'bg-purple-100 text-purple-800',
    red: 'bg-red-100 text-red-800',
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-semibold text-gray-900">{value}</p>
        </div>
        <div className={`p-3 rounded-full ${colorClasses[color]}`}>
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
