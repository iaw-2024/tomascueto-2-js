const express = require("express");
const app = express();  
const path = require('path'); // Módulo para trabajar con rutas de archivos
const fs = require('fs'); // Módulo para trabajar con los archivos en sí.

//para usar EJS como motor de plantillas
app.set('view engine', 'ejs');

//Configuración para correr en Vercel
const PORT = process.env.PORT || 3001;


app.get("/express",(req, res) =>{

    try {
        const filePath = path.join(__dirname,'..','public','express', 'index.html');
        
        res.sendFile(filePath); // Envía el contenido del archivo como respuesta
    } catch (error) {
        console.error('Error al leer el archivo HTML:', error);
        res.status(500).send('Error internoW del servidor');
    }

});

app.get("/expressdatos",(req, res) => {
  const pathArchivoJSON = path.join(__dirname, '..','public','express', 'datos.json');

  let datosJSON;
  try {
   
    fs.readFile(pathArchivoJSON, 'utf8', (err, data) => {
      if (err) {
        console.error("Error al leer el archivo JSON:", err);
        return res.status(500).json({ error: "Error interno del servidor" });
      }
      
      datosJSON = JSON.parse(data);
      res.render('../public/express/listaExpress.ejs', { juegos: datosJSON });

    });
  } catch (error) {
    console.error("Error al procesar la solicitud:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});



app.get('/json', async (req, res) => {
    const pathArchivoJSON = path.join(__dirname, '..','public','express', 'datos.json');
    try {
     
      fs.readFile(pathArchivoJSON, 'utf8', (err, data) => {
        if (err) {
          console.error("Error al leer el archivo JSON:", err);
          return res.status(500).json({ error: "Error interno del servidor" });
        }
        
        // Convertir los datos a objeto JSON
        const datosJSON = JSON.parse(data);
        
        // Enviar el JSON como respuesta
        res.json(datosJSON);
      });
    } catch (error) {
      console.error("Error al procesar la solicitud:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });


  app.get("/cliente_servidor",(req, res) =>{

    try {
        const filePath = path.join(__dirname,'..','public','cliente_servidor', 'index.html');
        
        res.sendFile(filePath); // Envía el contenido del archivo como respuesta
    } catch (error) {
        console.error('Error al leer el archivo HTML:', error);
        res.status(500).send('Error internoW del servidor');
    }
  
  });
  

app.use(express.static(path.join(__dirname,'..','public')));
console.log(path.join(__dirname,'..','public'))

app.listen(PORT, () => console.log("Server ready on port 3001."));

module.exports = app;
