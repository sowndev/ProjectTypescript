import logger from '@infrastructure/logger/logger';
import express, { Request, Response } from 'express'
const app = express()
// Start the server
const port = Number(process.env.PORT || 3000);

app.get('/',(req:Request, res:Response)=>{
	logger.info({name:'son', age:18, location:{tinh:'Ho Chi Minh', TP:"CMS"}});
	logger.warn([{name:'son', age:18, location:{tinh:'Ho Chi Minh', TP:"CMS"}},{name:'son', age:18, location:'viet nam'},{name:'son', age:18, location:'viet nam'}]);
	logger.error("127.0.0.1 - there's no place like home");
	logger.error(new Error('somethign'))
	res.send('ok')
})

app.get('/logs',(req:Request, res:Response)=>{
	res.sendFile(process.cwd()+'/combined.log')
})
app.listen(port, () => {
	console.log(`Express server started on http://localhost:${port}`);
});

