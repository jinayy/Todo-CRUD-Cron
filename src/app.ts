import express, { Application, Request, Response } from 'express';
import todoRoutes from './todo/routes/todo.routes';
import userRoutes from './user/routes/user.routes';

const app: Application = express();

app.use(express.json());

app.use('/api/', userRoutes);
app.use('/api/', todoRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world!');
});

export default app;
