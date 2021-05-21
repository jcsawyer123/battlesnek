import { Router } from 'express';
import { addColors } from 'winston/lib/winston/config';
import * as Controllers from './controllers'

// import auth from './routes/auth';

// guaranteed to get dependencies
export default () => {
	const app = Router();

	console.log("Heresss")

	app.get('/', Controllers.handleIndex)
	app.post('/start', Controllers.handleStart)
	app.post('/move', Controllers.handleMove)
	app.post('/end', Controllers.handleEnd)

	return app
}