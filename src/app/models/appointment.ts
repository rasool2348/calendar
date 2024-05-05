export type CONTENT = {
    title:string;
    description:string;
    time:TIME
}
export type TIME = {
    hour:number;
    type:'am' | 'pm'
}
export type APPOINTMENT = {
    contents:CONTENT[];
    time:TIME
}