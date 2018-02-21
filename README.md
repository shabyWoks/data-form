Data-Form

It will provide you the html form skeleton upon getting the input object.

Generating form

Create a variable of FormInputDataArgs for every control you want.
FormInputDataArgs data= new FormInputDataArgs();

data.type= type of control,
data.labelName= "someName",
data.placeHolder= "somePlaceHolderName",
data.inputProp.type= "text/password/email/number/etc",
data.inputProp.id= "someUniqueId",
data.inputProp.minLen= "minLimitOfTextLength",
data.inputProp.maxLen= "maxLimitOfTextLength",
data.inputProp.notAllowed= "characters, separated, in, commas",
data.inline= "true/false for checkboxes and radio buttons"
data.options= [Arrays of Options i.e. key pair values]


1. For Input text box do the following
type, labelName, placeHolder, inputProp.type, inputProp.id, inputProp.minLen, inputProp.maxLen, inputProp.notAllowed

2. For Input text box do the following
type, labelName, placeHolder, inputProp.type, inputProp.id, inputProp.minLen, inputProp.maxLen, inputProp.notAllowed

N.B: Under Development.
