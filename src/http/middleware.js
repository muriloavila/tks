import userCliente from '../grpc/services/user';

const middleware = async (req, res, next) => {

        const authHeader = req.headers.authorization;
        
        await userCliente.validToken({authHeader: authHeader}, (err, response) => {
            if(err || !response.user) 
                res.status(401).send(err);
            else
                next();
        }); 
}

export default middleware;