import React from 'react';
import AdminSidebar from '../components/AdminUserSidebar';
import AdminTestPageContent from '../Admin-body-content/AdminTestPageContent';

function AdminTestPage() {
  return (
    <>
      <AdminSidebar/>
      <main>
         <AdminTestPageContent />
      </main>
    </>
  );
}

export default AdminTestPage;
