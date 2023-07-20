const fnames = [`Zhyryll`, `Imee`, `Rod`];

const ages = [21, 19, 17];

const boole = true;

const num1 = 16;
const num2 = 29; 

// console.log(fnames);


//EXAMPLE_1_EXPORT - Exporting pero expression gamit
// module.exports = num1 + num2; 

//EXAMPLE_2_EXPORT - Exporting properties with variables as values and more
module.exports = {
    fnames: fnames,
    ages: ages,
    boolyan: true,
    nname: `Rudolfo`,
    trigger: () => {
        console.log(`Ang Pogi ko Talaga`);
    }
}