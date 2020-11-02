export interface Employee {
    id: number;
    firstName: string;
    lastName: string;
    position: string;
    directReports?: Array<number>;
}

