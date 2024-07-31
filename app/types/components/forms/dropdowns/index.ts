export interface PropsDropDownsType {
    label?: string,
    value: any;
    Icon?: any,
    data: {
        label: string,
        value: any
    }[],
    setValue: (text: any) => void;
}