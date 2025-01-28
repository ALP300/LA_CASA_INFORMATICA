import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import indexRoute from './routes/index.js';
import { Conectar } from './public/services/conexion.js';


const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.json());
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');

const corsOptions = {
  origin: 'https://la-casa-informatica-6.onrender.com',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
// Usar rutas
app.use(indexRoute);


// Servir archivos estáticos
app.use(express.static(join(__dirname, 'public')));

// Conectar a la base de datos
Conectar();

// Iniciar el servidor
app.listen(3000, () => {
  console.log("El servidor está siendo escuchado por el puerto 3000");
});
