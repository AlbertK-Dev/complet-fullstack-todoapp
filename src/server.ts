import  express from 'express'
import {Application,Router ,  Response, NextFunction} from 'express'
import corsMid, { CorsConfig } from './middlewares/cors';
import errorMid from './middlewares/error';
import { AuthRequest } from './typings/customHttp';
import path from 'path';

interface ICors{
    config: CorsConfig;
    middleware: (req: AuthRequest, res: Response, next: NextFunction) => void

}


interface IExpressRoute{
    path: string;
    router: Router;
}

export class AppRoute implements IExpressRoute{
    private _path: string;
    private _router: Router;
    static  allPath: Array<string> = []; 

    constructor(path: string, router: Router) {
        this._path = path;
        this._router = router;
        AppRoute.allPath.push(path)
    }
    

    
    public get path() : string {
        return this._path;
    }
    public get router() : Router {
        return this._router;
    }  

}

export default class Server{

    readonly port: number;
    private _app: Application;
    private static _instance: boolean = false;
    private _cors_config = new CorsConfig();
    private _cors_mid = corsMid(this._cors_config);

    
    
    constructor(port:number) {
        this.port = port
        if (Server._instance) {
            throw new Error("instance of server already in use")
            
        } else {
            Server._instance = true
            this._app = express()
            this._cors_config.allowAllMethods()

        }
    }

    start() {
        console.clear()
        this._app.use(this._cors_mid)
        this._app.use(express.json())
        this._app.use(errorMid)
        this._app.use(express.static(path.join(__dirname, 'public')));
        this._app.get('/', (req: express.Request, res: express.Response, next: NextFunction) => {
            res.sendFile(path.join(__dirname,'..' ,'public', 'index.html'));
        })
        this._app.listen(this.port, () => {
            console.clear()
            console.log(`serveur démarrer avec succès sur le port ${this.port}`)
            
        })

        
    }

    public get app() : Application {
        return this._app
    }

    
    useRoute(route:AppRoute) {
        this._app.use(route.path,route.router)
    }
    
    
    
    
    public get cors() : CorsConfig {
        return this._cors_config
    }
    
        
    }

 