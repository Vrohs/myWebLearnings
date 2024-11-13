const http = require("http");
const fs = require("fs");

const PORT = 3001;

const server = http.createServer((req, res) => {

  fs.readFile("data.json", "utf-8", (err, data) => {
    
    if (err) {
    
      console.log(err);
      res.statusCode = 500;
      res.end('Internal Server Error');
    } else {
    
        const dataa = JSON.parse(data);
        const adults = dataa.filter((item) => item.age >= 18).map((item) => ({

          name: item.name,
          email: item.email
        }));


      fs.writeFile('adults.json', JSON.stringify(adults), (err) => {
        
        if (err) {
        
            console.error(err);
            res.statusCode = 500;
            res.end('Internal Server Error');
        } else {
        
            res.statusCode = 200;
            res.end('Script completed successfully.');
        }
    });
    }});

});




server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});