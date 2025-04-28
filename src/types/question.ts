import {IButton} from "./button";

export interface IQuestion {
    id?: number,
    title?: string,
    buttons?: IButton[]
}
