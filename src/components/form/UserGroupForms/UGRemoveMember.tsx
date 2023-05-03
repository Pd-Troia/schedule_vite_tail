// UG = UserGroup
import * as React from 'react'
import { member } from '../../layout/Panel/UserGroup'
import { UGSelectChange } from './UGSelectChange'

export interface IUsrGroupsRemoveMemberProps {
    members: member[]
}

export function UsrGroupsRemoveMember(props: IUsrGroupsRemoveMemberProps) {
    return <UGSelectChange />
}
