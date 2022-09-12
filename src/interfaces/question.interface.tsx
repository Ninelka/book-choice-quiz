import {IButton} from "./button.interface";

export interface IQuestion {
    id?: number,
    title?: string,
    buttons?: IButton[]
}
