//tipo any
let randomvalor: any = 10;
randomvalor = true;      // OK
randomvalor = 'Arthur';   // OK

//tipo unknown
let randomValue: unknown = 10;

randomValue = true;
randomValue = 'Arthur';

if (typeof randomValue === "string") {
    console.log((randomValue as string).toUpperCase());    //* Returns Arthur to the console.
} else {
    console.log("Error - A string was expected here.");    //* Returns an error message.
}