export interface TabItems{
    id: string;
    title: string;
    content: () => JSX.Element; 
}