// package: myapp
// file: api/hello.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as api_hello_pb from "../api/hello_pb";

interface IGreetingServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    hello: IGreetingServiceService_IHello;
    helloServerStream: IGreetingServiceService_IHelloServerStream;
    helloClientStream: IGreetingServiceService_IHelloClientStream;
    helloBiStream: IGreetingServiceService_IHelloBiStream;
}

interface IGreetingServiceService_IHello extends grpc.MethodDefinition<api_hello_pb.HelloRequest, api_hello_pb.HelloResponse> {
    path: "/myapp.GreetingService/Hello";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_hello_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<api_hello_pb.HelloRequest>;
    responseSerialize: grpc.serialize<api_hello_pb.HelloResponse>;
    responseDeserialize: grpc.deserialize<api_hello_pb.HelloResponse>;
}
interface IGreetingServiceService_IHelloServerStream extends grpc.MethodDefinition<api_hello_pb.HelloRequest, api_hello_pb.HelloResponse> {
    path: "/myapp.GreetingService/HelloServerStream";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<api_hello_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<api_hello_pb.HelloRequest>;
    responseSerialize: grpc.serialize<api_hello_pb.HelloResponse>;
    responseDeserialize: grpc.deserialize<api_hello_pb.HelloResponse>;
}
interface IGreetingServiceService_IHelloClientStream extends grpc.MethodDefinition<api_hello_pb.HelloRequest, api_hello_pb.HelloResponse> {
    path: "/myapp.GreetingService/HelloClientStream";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<api_hello_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<api_hello_pb.HelloRequest>;
    responseSerialize: grpc.serialize<api_hello_pb.HelloResponse>;
    responseDeserialize: grpc.deserialize<api_hello_pb.HelloResponse>;
}
interface IGreetingServiceService_IHelloBiStream extends grpc.MethodDefinition<api_hello_pb.HelloRequest, api_hello_pb.HelloResponse> {
    path: "/myapp.GreetingService/HelloBiStream";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<api_hello_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<api_hello_pb.HelloRequest>;
    responseSerialize: grpc.serialize<api_hello_pb.HelloResponse>;
    responseDeserialize: grpc.deserialize<api_hello_pb.HelloResponse>;
}

export const GreetingServiceService: IGreetingServiceService;

export interface IGreetingServiceServer extends grpc.UntypedServiceImplementation {
    hello: grpc.handleUnaryCall<api_hello_pb.HelloRequest, api_hello_pb.HelloResponse>;
    helloServerStream: grpc.handleServerStreamingCall<api_hello_pb.HelloRequest, api_hello_pb.HelloResponse>;
    helloClientStream: grpc.handleClientStreamingCall<api_hello_pb.HelloRequest, api_hello_pb.HelloResponse>;
    helloBiStream: grpc.handleBidiStreamingCall<api_hello_pb.HelloRequest, api_hello_pb.HelloResponse>;
}

export interface IGreetingServiceClient {
    hello(request: api_hello_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: api_hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    hello(request: api_hello_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    hello(request: api_hello_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    helloServerStream(request: api_hello_pb.HelloRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_hello_pb.HelloResponse>;
    helloServerStream(request: api_hello_pb.HelloRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_hello_pb.HelloResponse>;
    helloClientStream(callback: (error: grpc.ServiceError | null, response: api_hello_pb.HelloResponse) => void): grpc.ClientWritableStream<api_hello_pb.HelloRequest>;
    helloClientStream(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_hello_pb.HelloResponse) => void): grpc.ClientWritableStream<api_hello_pb.HelloRequest>;
    helloClientStream(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_hello_pb.HelloResponse) => void): grpc.ClientWritableStream<api_hello_pb.HelloRequest>;
    helloClientStream(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_hello_pb.HelloResponse) => void): grpc.ClientWritableStream<api_hello_pb.HelloRequest>;
    helloBiStream(): grpc.ClientDuplexStream<api_hello_pb.HelloRequest, api_hello_pb.HelloResponse>;
    helloBiStream(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<api_hello_pb.HelloRequest, api_hello_pb.HelloResponse>;
    helloBiStream(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<api_hello_pb.HelloRequest, api_hello_pb.HelloResponse>;
}

export class GreetingServiceClient extends grpc.Client implements IGreetingServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public hello(request: api_hello_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: api_hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    public hello(request: api_hello_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    public hello(request: api_hello_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    public helloServerStream(request: api_hello_pb.HelloRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_hello_pb.HelloResponse>;
    public helloServerStream(request: api_hello_pb.HelloRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_hello_pb.HelloResponse>;
    public helloClientStream(callback: (error: grpc.ServiceError | null, response: api_hello_pb.HelloResponse) => void): grpc.ClientWritableStream<api_hello_pb.HelloRequest>;
    public helloClientStream(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_hello_pb.HelloResponse) => void): grpc.ClientWritableStream<api_hello_pb.HelloRequest>;
    public helloClientStream(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_hello_pb.HelloResponse) => void): grpc.ClientWritableStream<api_hello_pb.HelloRequest>;
    public helloClientStream(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_hello_pb.HelloResponse) => void): grpc.ClientWritableStream<api_hello_pb.HelloRequest>;
    public helloBiStream(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<api_hello_pb.HelloRequest, api_hello_pb.HelloResponse>;
    public helloBiStream(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<api_hello_pb.HelloRequest, api_hello_pb.HelloResponse>;
}
