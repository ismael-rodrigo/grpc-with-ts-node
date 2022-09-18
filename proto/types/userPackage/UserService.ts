// Original file: proto/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Empy as _userPackage_Empy, Empy__Output as _userPackage_Empy__Output } from '../userPackage/Empy';
import type { Nums as _userPackage_Nums, Nums__Output as _userPackage_Nums__Output } from '../userPackage/Nums';
import type { NumsParams as _userPackage_NumsParams, NumsParams__Output as _userPackage_NumsParams__Output } from '../userPackage/NumsParams';
import type { User as _userPackage_User, User__Output as _userPackage_User__Output } from '../userPackage/User';
import type { UserId as _userPackage_UserId, UserId__Output as _userPackage_UserId__Output } from '../userPackage/UserId';
import type { UserListResponse as _userPackage_UserListResponse, UserListResponse__Output as _userPackage_UserListResponse__Output } from '../userPackage/UserListResponse';

export interface UserServiceClient extends grpc.Client {
  deleteUser(argument: _userPackage_UserId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_Empy__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _userPackage_UserId, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_Empy__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _userPackage_UserId, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_Empy__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _userPackage_UserId, callback: grpc.requestCallback<_userPackage_Empy__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _userPackage_UserId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_Empy__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _userPackage_UserId, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_Empy__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _userPackage_UserId, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_Empy__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _userPackage_UserId, callback: grpc.requestCallback<_userPackage_Empy__Output>): grpc.ClientUnaryCall;
  
  getUser(argument: _userPackage_UserId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  getUser(argument: _userPackage_UserId, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  getUser(argument: _userPackage_UserId, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  getUser(argument: _userPackage_UserId, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  getUser(argument: _userPackage_UserId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  getUser(argument: _userPackage_UserId, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  getUser(argument: _userPackage_UserId, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  getUser(argument: _userPackage_UserId, callback: grpc.requestCallback<_userPackage_User__Output>): grpc.ClientUnaryCall;
  
  list(argument: _userPackage_Empy, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_UserListResponse__Output>): grpc.ClientUnaryCall;
  list(argument: _userPackage_Empy, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_UserListResponse__Output>): grpc.ClientUnaryCall;
  list(argument: _userPackage_Empy, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_UserListResponse__Output>): grpc.ClientUnaryCall;
  list(argument: _userPackage_Empy, callback: grpc.requestCallback<_userPackage_UserListResponse__Output>): grpc.ClientUnaryCall;
  list(argument: _userPackage_Empy, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_UserListResponse__Output>): grpc.ClientUnaryCall;
  list(argument: _userPackage_Empy, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_UserListResponse__Output>): grpc.ClientUnaryCall;
  list(argument: _userPackage_Empy, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_UserListResponse__Output>): grpc.ClientUnaryCall;
  list(argument: _userPackage_Empy, callback: grpc.requestCallback<_userPackage_UserListResponse__Output>): grpc.ClientUnaryCall;
  
  nums(argument: _userPackage_NumsParams, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_userPackage_Nums__Output>;
  nums(argument: _userPackage_NumsParams, options?: grpc.CallOptions): grpc.ClientReadableStream<_userPackage_Nums__Output>;
  nums(argument: _userPackage_NumsParams, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_userPackage_Nums__Output>;
  nums(argument: _userPackage_NumsParams, options?: grpc.CallOptions): grpc.ClientReadableStream<_userPackage_Nums__Output>;
  
}

export interface UserServiceHandlers extends grpc.UntypedServiceImplementation {
  deleteUser: grpc.handleUnaryCall<_userPackage_UserId__Output, _userPackage_Empy>;
  
  getUser: grpc.handleUnaryCall<_userPackage_UserId__Output, _userPackage_User>;
  
  list: grpc.handleUnaryCall<_userPackage_Empy__Output, _userPackage_UserListResponse>;
  
  nums: grpc.handleServerStreamingCall<_userPackage_NumsParams__Output, _userPackage_Nums>;
  
}

export interface UserServiceDefinition extends grpc.ServiceDefinition {
  deleteUser: MethodDefinition<_userPackage_UserId, _userPackage_Empy, _userPackage_UserId__Output, _userPackage_Empy__Output>
  getUser: MethodDefinition<_userPackage_UserId, _userPackage_User, _userPackage_UserId__Output, _userPackage_User__Output>
  list: MethodDefinition<_userPackage_Empy, _userPackage_UserListResponse, _userPackage_Empy__Output, _userPackage_UserListResponse__Output>
  nums: MethodDefinition<_userPackage_NumsParams, _userPackage_Nums, _userPackage_NumsParams__Output, _userPackage_Nums__Output>
}
