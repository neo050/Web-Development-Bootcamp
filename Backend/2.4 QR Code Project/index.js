/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import qr from "qr-image"
import fs from "node:fs"
inquirer.prompt([{message:"What is the URL that we will turn into a QR?",name:"url"}]).then((ans)=>{
    console.log(ans.url)
    
    var qr_svg= qr.image(ans.url);
    qr_svg.pipe(fs.createWriteStream('UrlToQR.png'));
    fs.writeFile("UrlToQR.txt",ans.url,(err)=>
    {
        if(err) throw err;
        console.log("The file has been saved!");
    });
}).catch((error) => {
    if (error)throw error;
    console.log("Everything went well.!");

    }
  );

  


  