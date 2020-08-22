const path = require('path');
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const userDef = protoLoader.loadSync(
    path.resolve('src', 'grpc', 'proto', 'user.proto'),
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true,
    }
)

const user = grpc.loadPackageDefinition(userDef);

const userCliente = new user.UserService('0.0.0.0:3002', grpc.credentials.createInsecure());

module.exports = userCliente;