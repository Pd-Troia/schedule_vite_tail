import * as React from 'react';
import { member } from '../../layout/Panel/UserGroup';
import { UserGroupSelectChange } from './UserGroupSelectChange';


export interface IUsrGroupsRemoveMemberProps {
    members:member[]
}

export function UsrGroupsRemoveMember (props: IUsrGroupsRemoveMemberProps) {
    
    return (
    <UserGroupSelectChange/>
  );
}
