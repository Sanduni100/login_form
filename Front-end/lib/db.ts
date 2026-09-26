// import mysql from 'mysql2/promise';

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: 'Raveesha1@#',
//     database: 'react_form_db',
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0,
// });

// export default pool;







//not needed

// import sql from 'mssql';

// const config = {
//     user: process.env.DB_USER || 'sa',
//     password: process.env.DB_PASSWORD || 'Raveesha1@#',
//     server: process.env.DB_SERVER || 'localhost',
//     database: process.env.DB_NAME || 'react_form_ms_db',
//     options: {
//         encrypt: false, // Set to true if using Azure
//         trustServerCertificate: true, // For local dev
//     },
// };

// let pool: sql.ConnectionPool | null = null;

// export async function getConnection() {
//     if (!pool) {
//         pool = await sql.connect(config);
//     }
//     return pool;
// }