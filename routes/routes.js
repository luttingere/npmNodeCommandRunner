
const util = require('util');
const { spawn } = require('child_process');
var appRouter = function(app) {
  app.get("/long_filling_process", function(req, res) {
    
    runLongFillingProcess(req,res);


  });
};

async function runLongFillingProcess(httpRequest, httpResponse){

  const npmCommand = spawn('npm',['init','--prefix','/Users/eduardoluttinger/test']);
  npmCommand.stdout.on('data', (data) => {
    console.log(data.toString());
  });
  
  npmCommand.stderr.on('data', (data) => {
    console.log(data.toString());
  });
  
  npmCommand.on('exit', (code) => {
    console.log(`Child exited with code ${code}`);
  });
}



module.exports = appRouter;
