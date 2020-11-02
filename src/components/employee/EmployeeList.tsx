import {Employee} from "../../models/Employee";
import React from "react";
import {EmployeeCard} from "./EmployeeCard";
import {GridList, GridListTile} from "@material-ui/core";

export interface EmployeeListProps {
    employees: Array<Employee>;
}

export function EmployeeList(props: EmployeeListProps) {
    const [results, setResults] = React.useState(props.employees);

    return(
        <GridList cols={4}>
            {results.map((employee) => (
                <GridListTile key={employee.id}>
                    {EmployeeCard({employee: employee})}
                </GridListTile>
            ))}

        </GridList>
    )
}
