//IMPORT_1 - naka-import and naka store sa isang variable.
const imprt = require('./persons');

//IMPORT_2 - pwede lang mag import ng ganito kung yung naka export sa kabilang file is naka object. Kung ano lang yung nakalagay na property, yun lang yung maa-access
const {fnames, ages, trigger} = require('./persons');


//IMPORT_1 - Idi-display lahat ng laman. If object siya with properties and values, Both properties and values yung idi-display niya
console.log(imprt); 


//IMPORT_2 - Idi-display niya yung expecific value ng kung ano mang property or variable yung naka import
// console.log(imprt.fnames, imprt.ages, imprt.nname, imprt.boolyan, imprt.trigger()); 
console.log(fnames, ages, trigger());



// console.log(persons);