import cron from 'node-cron';
import Todo from '../todo/models/Todo';

export const expiredTodosCron = () => {
    // Runs Cron everyday at 2 AM midnight
  cron.schedule('0 2 * * *', async () => {
    try {
      console.log('Running CRON job......');

      const now = new Date();
      const result = await Todo.updateMany(
        { dueDate: { $lt: now }, completed: false },
        { $set: { completed: true } }
      );

      console.log(`CRON Job: Marked ${result.n} todos as completed.`);
    } catch (error) {
      console.error('CRON Job Error:', error);
    }
  });
};
