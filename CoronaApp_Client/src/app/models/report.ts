let count:number = 0;

export interface Report {
    id:number,
    startDate: Date | string,
    endDate: Date | string,
    city: string,
    address: string,
    userId: string
}