// import type { NextApiRequest, NextApiResponse } from 'next';
// import db from '../../../lib/db';

// interface ResponseData {
//     message: string;
//     id?: number;
//     error?: string;
//     result?: any; // For debugging (optional)
// }

// export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
//     if (req.method !== 'POST') {
//         return res.status(405).json({ message: 'Method not allowed' });
//     }

//     const { name, email, message } = req.body;

//     // Validate input
//     if (!name || typeof name !== 'string' || name.trim().length === 0) {
//         return res.status(400).json({ message: 'Name is required and must be a non-empty string' });
//     }
//     if (!email || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
//         return res.status(400).json({ message: 'Valid email is required' });
//     }
//     if (!message || typeof message !== 'string' || message.trim().length === 0) {
//         return res.status(400).json({ message: 'Message is required and must be a non-empty string' });
//     }

//     try {
//         // Optional: Test DB connection
//         await db.query('SELECT 1');

//         // Log for debugging
//         console.log('Inserting:', name, email, message);

//         const [result]: any = await db.execute(
//             'INSERT INTO msg (`name`, `email`, `message`) VALUES (?, ?, ?)',
//             [name.trim(), email.trim(), message.trim()]
//         );

//         console.log('Insert result:', result);

//         if (result && result.affectedRows === 1) {
//             return res.status(201).json({ message: 'Data saved successfully', id: result.insertId });
//         } else {
//             return res.status(500).json({ message: 'Insert did not succeed', result: result });
//         }
//     } catch (error: any) {
//         console.error('Database error:', error);
//         let errorMessage = 'Error saving data';

//         if (error instanceof Error) {
//             errorMessage += `: ${error.message}`;
//             if ('code' in error) {
//                 switch (error.code) {
//                     case 'ER_NO_SUCH_TABLE':
//                         errorMessage = 'Database table "msg" does not exist';
//                         break;
//                     case 'ER_DUP_ENTRY':
//                         errorMessage = 'Duplicate entry for email';
//                         break;
//                     case 'ER_ACCESS_DENIED_ERROR':
//                         errorMessage = 'Database access denied';
//                         break;
//                 }
//             }
//         }

//         return res.status(500).json({ message: errorMessage, error: String(error) });
//     }
// }
