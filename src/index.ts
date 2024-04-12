import MongoDB from "./database/config";
import normalizePort from "./helpers/normalizePort";
import todoRouter from "./routers/todoRouter";
import userRouter from "./routers/userRouter";
import Server, { AppRoute } from "./server"
import 'dotenv/config';

// define port
const port = normalizePort(process.env.PORT || 3002)
if (typeof port !== 'number') {
    throw new Error(port) 
}
  


//define all routes here : n'oubliez pas de l'inclure dans le serveur avec la methode useRouter
const todoRoute: AppRoute = new AppRoute('/todos', todoRouter)
const userRoute: AppRoute = new AppRoute('/users',userRouter)




// db instance
const MyDB = new MongoDB(process.env.MONGODB_CONNEXION_STRING!)
MyDB.connect()

//server instance
const MyServer = new Server(port)

//server -> allow all CORS
MyServer.cors.allowAll()

//server -> add routes
MyServer.useRoute(todoRoute)
MyServer.useRoute(userRoute)

//server -> start
MyServer.start()

export default MyServer.app