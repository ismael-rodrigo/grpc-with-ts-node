import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { ProtoGrpcType } from './proto/types/user'
import { UserServiceHandlers } from './proto/types/userPackage/UserService'
import { Empy__Output } from './proto/types/userPackage/Empy'
import { UserListResponse } from './proto/types/userPackage/UserListResponse'
import { UserId__Output } from './proto/types/userPackage/UserId'
import { User } from './proto/types/userPackage/User'
import { NumsParams__Output } from './proto/types/userPackage/NumsParams'
import { Nums } from './proto/types/userPackage/Nums'

const PROTO_FILE = './proto/user.proto'


const packageDef = protoLoader.loadSync(path.resolve(__dirname,PROTO_FILE))

const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType


//grpcObj.userPackage.UserService.service

let fakeDB = [
    {id:1 , name:'ismael'},
    {id:2, name:'rodrigo'},
    {id:3, name:'sousa'},
    {id:4, name:'brasil'},
]

const server = new grpc.Server()


const listUsers = (
    request:grpc.ServerUnaryCall<Empy__Output, UserListResponse>,
    callback:grpc.sendUnaryData<UserListResponse>) => {  
    callback(null,{
        users:fakeDB
    })

}
const getUser = (
    req:grpc.ServerUnaryCall<UserId__Output, User>,
    callback:grpc.sendUnaryData<User>,
    ) => {

    const user = fakeDB.find((user)=>user.id === req.request.id) 

    if(user)callback(null,user)
    else callback({
        code: 400,
        message: "invalid input",
      })
}

const deleteUser = (
    req:grpc.ServerUnaryCall<UserId__Output, User>,
    callback:grpc.sendUnaryData<User>,
    ) => {

    fakeDB = fakeDB.filter((user)=> user.id != req.request.id) 

    if(fakeDB)callback({
        code: 201,
        message: "User deleted",
      })

    else callback({
        code: 400,
        message: "Users DB not object",
      })
}

const streamNumbers = (call:grpc.ServerWritableStream<NumsParams__Output, Nums>)=>{
    let runCount = 0
    const {maxNumber=10 , timeOut=100} = call.request

    const id = setInterval(()=>{
        runCount = runCount+1
        call.write({number:runCount})

       
        if(runCount>maxNumber){
            clearInterval(id)
            call.end()
        }

    },timeOut)

}




server.addService(grpcObj.userPackage.UserService.service , {
    
    list:listUsers,
    getUser:getUser,
    deleteUser:deleteUser, 
    nums:streamNumbers,

} as UserServiceHandlers)


server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure() , 
    (err , port)=>{
        console.log('started server : ' ,port)
        server.start()
})



