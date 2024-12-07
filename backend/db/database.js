// db/database.js
import pkg from 'pg';  // Importa el paquete 'pg' completo
const { Pool } = pkg;  // Extrae 'Pool' del paquete

import dotenv from 'dotenv';  
dotenv.config();  // Cargar las variables de entorno desde .env

// Crear la instancia de Pool para la conexión a PostgreSQL
const pool = new Pool({
  user: process.env.DB_USERNAME,  // Usar las variables de entorno
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});



  // Verificar la conexión al iniciar la aplicación
pool.connect()
.then(() => console.log('Conexión exitosa a la base de datos'))
.catch(err => {
  console.error('Error al conectar a la base de datos:', err);
  process.exit(1);  // Detener la aplicación si no puede conectar
});

// Exportar la instancia para usarla en otros archivos
export default pool;
