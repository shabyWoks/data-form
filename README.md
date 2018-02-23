Data-Form
v0.0.2

npm install data-formss

It will provide you the Angular Form skeleton upon getting the input object.

Details about the process of generating form

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
data.mandatory= 0/1 for validation no/yes
data.noInLine= any positive number for no of options in one line.


1. For Input text box do the following
type, labelName, placeHolder, inputProp.type, inputProp.id, inputProp.minLen, inputProp.maxLen, inputProp.notAllowed

{ type: 1, labelName: 'UserName ', placeHolder: 'Username', inputProp: { type: 'text', id: 'username', minLen: "4", maxLen: "15", notAllowed: "$" } },

2. For a checkbox/checkbox group do the following
type, labelName, inputProp.type, inputProp.id, options.key, options.value, inline, noInOneLine, mandatory

{ type: 2, labelName: 'Gender: ', inputProp: { type: '', id: 'gender' }, options: [{ value: '0', key: 'Male' }, { value: '1', key: 'Female' }], inline : false, mandatory: 1, noInOneLine: 1 },

3. For a radio button/ radio group do the following
type, labelName, inputProp.type, inputProp.id, options.key, options.value, inline, noInOneLine

{ type: 3, labelName: 'Gender: ', inputProp: { type: '', id: 'gender' }, options: [{ value: '0', key: 'Male' }, { value: '1', key: 'Female' }], inline : true, noInOneLine: 1 }

4. For a text area do the following
type, labelName, placeHolder, inputProp.type, inputProp.id, inputProp.rowSize

{ type: 4, labelName: 'Comment: ', inputProp: { type: '', id: 'comment', rowSize: '2' } },

6. For a dropdown do the following
type, labelName, inputProp.type, inputProp.id, options.key, options.value, inline 

{ type: 6, labelName: 'Location: ', inputProp: { type: '', id: 'location' }, options: [{ value: '0', key: 'Chennai' }, { value: '1', key: 'Mumbai' }], inline : false},
