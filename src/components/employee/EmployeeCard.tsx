import React, {useState} from 'react';
// @ts-ignore
import {Employee} from '../../models/Employee';
import {Card, CardContent, CardHeader, Typography} from "@material-ui/core";

export interface EmployeeCardProps {
    employee: Employee
}

export function EmployeeCard(props: EmployeeCardProps) {
    return (
        <Card className="employee">
            <CardHeader
                title={props.employee.lastName + ', ' + props.employee.firstName}
                subheader={props.employee.id}
            />
            <CardContent>
                <Typography>Job Title</Typography>
                <Typography>{props.employee.position}</Typography>
            </CardContent>
        </Card>
    )
}
