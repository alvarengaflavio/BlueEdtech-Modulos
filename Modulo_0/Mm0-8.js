/*
    Mm0-8 Agora, imprima todas as tabuadas do número 1 ao 10.
*/
console.log("");
console.log("###############################################");
console.log("#######\t\tSUPER TABUADA\t\t#######");
console.log("###############################################");
console.log("");


for (let j = 1; j < 11; j++) {
    console.log("\tNúmero\t" + "      VEZES\t"  + "      IGUAL A");
    for (let i = 1; i < 21; i++) {
        console.log("\t" + j +"\tx\t"+i+"\t=\t"  + parseInt(j*i));
    }
    console.log("\n###############################################");
    console.log("###############################################\n");
}
console.log("");
