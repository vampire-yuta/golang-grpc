// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var api_hello_pb = require('../api/hello_pb.js');

function serialize_myapp_HelloRequest(arg) {
  if (!(arg instanceof api_hello_pb.HelloRequest)) {
    throw new Error('Expected argument of type myapp.HelloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_myapp_HelloRequest(buffer_arg) {
  return api_hello_pb.HelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_myapp_HelloResponse(arg) {
  if (!(arg instanceof api_hello_pb.HelloResponse)) {
    throw new Error('Expected argument of type myapp.HelloResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_myapp_HelloResponse(buffer_arg) {
  return api_hello_pb.HelloResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var GreetingServiceService = exports.GreetingServiceService = {
  // サーバーが持つメソッドの定義
hello: {
    path: '/myapp.GreetingService/Hello',
    requestStream: false,
    responseStream: false,
    requestType: api_hello_pb.HelloRequest,
    responseType: api_hello_pb.HelloResponse,
    requestSerialize: serialize_myapp_HelloRequest,
    requestDeserialize: deserialize_myapp_HelloRequest,
    responseSerialize: serialize_myapp_HelloResponse,
    responseDeserialize: deserialize_myapp_HelloResponse,
  },
  // サーバーストリーミング
helloServerStream: {
    path: '/myapp.GreetingService/HelloServerStream',
    requestStream: false,
    responseStream: true,
    requestType: api_hello_pb.HelloRequest,
    responseType: api_hello_pb.HelloResponse,
    requestSerialize: serialize_myapp_HelloRequest,
    requestDeserialize: deserialize_myapp_HelloRequest,
    responseSerialize: serialize_myapp_HelloResponse,
    responseDeserialize: deserialize_myapp_HelloResponse,
  },
  // クライアントストリーミング
helloClientStream: {
    path: '/myapp.GreetingService/HelloClientStream',
    requestStream: true,
    responseStream: false,
    requestType: api_hello_pb.HelloRequest,
    responseType: api_hello_pb.HelloResponse,
    requestSerialize: serialize_myapp_HelloRequest,
    requestDeserialize: deserialize_myapp_HelloRequest,
    responseSerialize: serialize_myapp_HelloResponse,
    responseDeserialize: deserialize_myapp_HelloResponse,
  },
  // 双方向ストリーミング
helloBiStream: {
    path: '/myapp.GreetingService/HelloBiStream',
    requestStream: true,
    responseStream: true,
    requestType: api_hello_pb.HelloRequest,
    responseType: api_hello_pb.HelloResponse,
    requestSerialize: serialize_myapp_HelloRequest,
    requestDeserialize: deserialize_myapp_HelloRequest,
    responseSerialize: serialize_myapp_HelloResponse,
    responseDeserialize: deserialize_myapp_HelloResponse,
  },
};

exports.GreetingServiceClient = grpc.makeGenericClientConstructor(GreetingServiceService, 'GreetingService');
