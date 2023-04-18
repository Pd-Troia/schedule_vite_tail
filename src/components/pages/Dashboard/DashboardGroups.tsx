import * as React from 'react';
import { CreateUserGroup } from '../../layout/DashBoard/CreateUserGroup';

export interface IDashboardGroupsProps {
}

export function DashboardGroups (props: IDashboardGroupsProps) {  
  return (
    <div className='flex justify-center'>
      <CreateUserGroup/>
    </div>
  );
}

