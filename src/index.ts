import MongoDB from "./database/config";
import normalizePort from "./helpers/normalizePort";
import Server from "./server"
import 'dotenv/config';




const port = normalizePort(process.env.PORT || 3002)

if (typeof port !== 'number') {
    
    throw new Error(port) 
  }

const MyDB = new MongoDB(process.env.MONGODB_CONNEXION_STRING!)
MyDB.connect()
const MyServer = new Server(port)
MyServer.cors.allowAll()
MyServer.start()

export default MyServer.app