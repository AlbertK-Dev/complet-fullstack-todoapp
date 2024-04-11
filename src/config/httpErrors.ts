// httpErrors.ts

// 100 Continue
export const Continue = {
    code: 100,
    message: {
        en: 'Continue',
        fr: 'Continuer'
    },
    description: {
        en: 'The server has received the request headers and the client should proceed to send the request body.',
        fr: 'Le serveur a reçu les en-têtes de la requête et le client doit maintenant envoyer le corps de la requête.'
    }
};

// 101 Switching Protocols
export const SwitchingProtocols = {
    code: 101,
    message: {
        en: 'Switching Protocols',
        fr: 'Changement de protocole'
    },
    description: {
        en: 'The server is switching protocols as requested by the client.',
        fr: 'Le serveur accepte le changement de protocole proposé par le client.'
    }
};

// 200 OK
export const OK = {
    code: 200,
    message: {
        en: 'OK',
        fr: 'OK'
    },
    description: {
        en: 'The request has succeeded.',
        fr: 'La requête a réussi.'
    }
};

// 201 Created
export const Created = {
    code: 201,
    message: {
        en: 'Created',
        fr: 'Créé'
    },
    description: {
        en: 'The request has been fulfilled and resulted in a new resource being created.',
        fr: 'La requête a été traitée avec succès et une nouvelle ressource a été créée.'
    }
};

// 204 No Content
export const NoContent = {
    code: 204,
    message: {
        en: 'No Content',
        fr: 'Pas de contenu'
    },
    description: {
        en: 'The server has successfully fulfilled the request and there is no additional content to send in the response.',
        fr: 'Le serveur a traité la requête avec succès et il n\'y a pas de contenu supplémentaire à renvoyer dans la réponse.'
    }
};

// 304 Not Modified
export const NotModified = {
    code: 304,
    message: {
        en: 'Not Modified',
        fr: 'Non modifié'
    },
    description: {
        en: 'Indicates that the resource has not been modified since the version specified by the request headers.',
        fr: 'Indique que la ressource n\'a pas été modifiée depuis la version spécifiée par les en-têtes de la requête.'
    }
};

// 400 Bad Request
export const BadRequest = {
    code: 400,
    message: {
        en: 'Bad Request',
        fr: 'Mauvaise requête'
    },
    description: {
        en: 'The syntax of the request is incorrect.',
        fr: 'La syntaxe de la requête est incorrecte.'
    }
};

// 401 Unauthorized
export const Unauthorized = {
    code: 401,
    message: {
        en: 'Unauthorized',
        fr: 'Non autorisé'
    },
    description: {
        en: 'The client must authenticate to get the response.',
        fr: 'Le client doit s\'authentifier pour obtenir la réponse.'
    }
};

// 403 Forbidden
export const Forbidden = {
    code: 403,
    message: {
        en: 'Forbidden',
        fr: 'Interdit'
    },
    description: {
        en: 'The server refuses to respond to the request.',
        fr: 'Le serveur refuse de répondre à la requête.'
    }
};

// 404 Not Found
export const NotFound = {
    code: 404,
    message: {
        en: 'Not Found',
        fr: 'Non trouvé'
    },
    description: {
        en: 'The requested resource could not be found on the server.',
        fr: 'La ressource demandée n\'a pas été trouvée sur le serveur.'
    }
};

// 405 Method Not Allowed
export const MethodNotAllowed = {
    code: 405,
    message: {
        en: 'Method Not Allowed',
        fr: 'Méthode non autorisée'
    },
    description: {
        en: 'The method specified in the request is not allowed for the resource identified by the request URI.',
        fr: 'La méthode spécifiée dans la requête n\'est pas autorisée pour la ressource identifiée par l\'URI de la requête.'
    }
};

// 500 Internal Server Error
export const InternalServerError = {
    code: 500,
    message: {
        en: 'Internal Server Error',
        fr: 'Erreur interne du serveur'
    },
    description: {
        en: 'An unexpected condition was encountered by the server while processing the request.',
        fr: 'Une erreur interne du serveur s\'est produite.'
    }
};
