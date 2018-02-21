import { Options } from "./options";
import { InputPropArgs } from "./input-prop";


export class FormInputDataArgs {
    //type= 1 means textbox control
    type: number;
    labelName: string;
    placeHolder: string;
    inputProp: InputPropArgs;
    options: Array<Options>;
    
    //inline: true means options in same line.
    //inline: false means options in different line.
    inline: boolean;
    validationText: string;
    inValidationText: string;
    mandatory: number;
}