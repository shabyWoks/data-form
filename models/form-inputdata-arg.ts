import { Options } from "./options";
import { InputPropArgs } from "./input-prop";


export class FormInputDataArgs {
    
    type: number;
    labelName: string;
    placeHolder: string;
    inputProp: InputPropArgs;
    options: Array<Options>;
    inline: boolean; /*inline: true means options in same line, inline: false means options in different line.*/
    noInOneLine: number;/* it means no of option in one line */
    validationText: string;
    inValidationText: string;
    mandatory: number;
    
}