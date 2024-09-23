import prisma from "../database/client";

export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { user, password } = req.body;
  
      // You can process the data here or store it in a database
      console.log('Received data:', { user, password });

      const teste = prisma.produtos.findMany({take:5});

      console.log(teste)
  
      return res.status(200).json({ message: 'Form submitted successfully!' });
    }
  
    return res.status(405).json({ message: 'Only POST requests allowed' });
}