import dotenv from 'dotenv';  // Usar import para dotenv
dotenv.config();  // Cargar las variables de entorno

import express from 'express';
import pool from './db/database.js';  // Asegúrate de que el archivo sea .js si usas ES Modules
import cors from 'cors';  // Habilitar CORS si es necesario

// Crear la aplicación Express
const app = express();
const port = process.env.PORT || 3000;  // Usar el puerto definido en las variables de entorno

// Usar CORS si es necesario
app.use(cors());

// Ruta principal
app.get('/', (_, res) => {
  res.send('¡Aplicación está funcionando!');
});

app.get('/api/data', async (_, res) => {
  try {
    // Realizamos la consulta a la base de datos
    const result = await pool.query('SELECT * FROM usuarios');

    // Verificamos si hay datos y los devolvemos en formato JSON
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'No se encontraron datos' });
    }

    res.json(result.rows);  // Responder con los datos en formato JSON

  } catch (err) {
    // Manejo de errores mejorado
    console.error('Error en la consulta a la base de datos:', err.message);
    console.error('Detalles del error:', err);

    // Enviar una respuesta con estado 500 y un mensaje de error claro
    res.status(500).json({ message: 'Error al obtener los datos', error: err.message });
  }
});



// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}/api/data`);
  console.log("DB Host:", process.env.DB_HOST);
console.log("DB Port:", process.env.DB_PORT);
console.log("DB Database:", process.env.DB_DATABASE);
console.log("DB user:", process.env.DB_USERNAME)

});

