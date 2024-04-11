import { Request, Response, NextFunction} from 'express';


export class CorsConfig {


    private _OriginAllowed: string[] = [];
    private _HeadersAllowed: string[] = [];
    private _MethodsAllowed: string[] = [];

    constructor(){
        
    }

   allowAll = () => {
        this._OriginAllowed = ["*"]
        this._HeadersAllowed = [
            'Origin',
            'X-Requested-With',
            'Content',
            'Accept',
            'Content-Type',
            'Authorization'
    
        ]
        this._MethodsAllowed = ['GET, POST, PUT, DELETE, PATCH, OPTIONS']
    }

    disAllowAll = () => {
        this._OriginAllowed = []
        this._HeadersAllowed = []
        this._MethodsAllowed = []
    }

    allowAllOrigin = () => {
        this._OriginAllowed = ["*"]
    }

    allowAllHeaders = () => {
        
        this._HeadersAllowed = [
            'Origin',
            'X-Requested-With',
            'Content',
            'Accept',
            'Content-Type',
            'Authorization'
    
        ]
    }

    allowAllMethods = () => {
        this._MethodsAllowed = ['GET, POST, PUT, DELETE, PATCH, OPTIONS']
    }
    
   getOriginsAllowed = () => {
    return this._OriginAllowed
    }
    /**
     * ajouter un domaine au cors
     * @param domain le domaine que vous souhaitez autorisez
     * @exemple "http://mydomain.com"
     */
    addOrigin = (domain: string) => {
        if (!this._OriginAllowed.includes(domain)) {
            this._OriginAllowed.push(domain)
        }   
    }
    removeOrigin = (domain: string) => {
            this._OriginAllowed = this._OriginAllowed.filter((allowedDomain) => {
                if (allowedDomain === domain) {
                    return false
                }
                return true

            })
    }

getHeadersAllowed = () => {
        return this._HeadersAllowed
        }
        addHeader = (header: string) => {
            if (!this._HeadersAllowed.includes(header)) {
                this._HeadersAllowed.push(header)
            }   
        }
        removeHeader = (header: string) => {
                this._HeadersAllowed = this._HeadersAllowed.filter((allowedHeader) => {
                    if (allowedHeader === header) {
                        return false
                    }
                    return true
    
                })
    }

    ///# endRegion
    
    getMethodsAllowed = () => {
        return this._MethodsAllowed
        }
        addMethod = (method: string) => {
            if (!this._MethodsAllowed.includes(method)) {
                this._MethodsAllowed.push(method)
            }   
        }
    removeMethod = (method: string) => {
        this._MethodsAllowed = this._MethodsAllowed.filter((allowedMethod) => {
                    if (allowedMethod === method) {
                        return false
                    }
                    return true
    
                })
        }
    


}




export default function corsMid(config: CorsConfig) {
    return (req: Request, res: Response, next: NextFunction) => {
        res.setHeader("Access-Control-Allow-Origin", config.getOriginsAllowed())
        res.setHeader("Access-Control-Allow-Headers", config.getHeadersAllowed())
        res.setHeader("Access-Control-Allow-Methods", config.getMethodsAllowed())
        next()
    }
}