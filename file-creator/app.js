import readline from "readline";
import fs from "fs";

const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
})

const fileCreation = () => {
    rl.question("Enter Your File Name" , (fileName) => {
        rl.question("Enter The Content For Your File" , (content) => {
            fs.writeFile(`${fileName}.txt` , content , (err) =>{
                if(err){
                    console.error(`Error Writing The File : , ${err.message} `)
                } else {
                    console.log(`File "${fileName}.txt Created Successfully !`);
                }
                rl.close();
            })
        })
    })

}
fileCreation();