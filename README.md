Data-Form
v0.0.2

npm install data-formss

It will provide you the Angular Form skeleton upon getting the input object.

Details about the process of generating form


<data-form [input-parameter]= "data" [post-url]="url" (getFormData)="functionName($event)"></data-form>

--Save these array of objects in 'data' and pass the variable as above.
--If the form data has to be passed to some url then pass a variable 'url' having some relative or complete address.
--If you want to get form data just pass some function to 'getFormData' and create a function with same name having one parameter in your component.

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

{ type: 6, labelName: 'Location: ', inputProp: { type: '', id: 'location' }, options: [{ value: '0', key: 'Chennai' }, { value: '1', key: 'Mumbai' }], inline : false}

