import bodyParser from 'body-parser';
import express from 'express';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import cors from 'cors';
import compress from 'compress';
import compression from 'compression';
import  Template  from '../template';


const app = express();

/*...configure express ...*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(helmet());
app.use(cors());
// app.use(compress());
app.use(compression());

app.get('/', (req,res) => {
    res.status(200).send(Template())
});

export default app;