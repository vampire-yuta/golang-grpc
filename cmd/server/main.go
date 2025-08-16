package main

import (
	"context"
	"errors"
	"fmt"
	"io"
	"log"
	"net"
	"os"
	"os/signal"
	"time"

	hellopb "golang-grpc/pkg/grpc"
	// "google.golang.org/genproto/googleapis/rpc/errdetails"
	"google.golang.org/grpc"
	// "google.golang.org/grpc/codes"
	"google.golang.org/grpc/reflection"
	// "google.golang.org/grpc/status"
)

type myServer struct {
	hellopb.UnimplementedGreetingServiceServer
}

func (s *myServer) Hello(ctx context.Context, req *hellopb.HelloRequest) (*hellopb.HelloResponse, error) {
	return &hellopb.HelloResponse{
		Message: fmt.Sprintf("Hello, %s!", req.GetName()),
	}, nil
	// err := status.Errorf(codes.Unknown, "unknown error")
	// return nil, err
	// stat := status.New(codes.Unknown, "unknown error")
	// stat, _ = stat.WithDetails(&errdetails.DebugInfo{
	// 	Detail: "detail reason of err",
	// })
	// err := stat.Err()

	// return &hellopb.HelloResponse{
	// 	Message: "Hello, %s!",
	// }, err
}

func (s *myServer) HelloServerStream(req *hellopb.HelloRequest, stream hellopb.GreetingService_HelloServerStreamServer) error {
	resCount := 10
	fmt.Println("HelloServerStream")
	for i := 0; i < resCount; i++ {
		// Sendを使っている
		if err := stream.Send(&hellopb.HelloResponse{
			Message: fmt.Sprintf("Hello, %s! %d", req.GetName(), i),
		}); err != nil {
			return err
		}
		time.Sleep(time.Second * 1)
	}
	return nil
}

func (s *myServer) HelloClientStream(stream hellopb.GreetingService_HelloClientStreamServer) error {
	nameList := make([]string, 0)
	fmt.Println("HelloClientStream")
	for {
		req, err := stream.Recv()
		if errors.Is(err, io.EOF) {
			message := fmt.Sprintf("Hello, %v!", nameList)
			return stream.SendAndClose(&hellopb.HelloResponse{
				Message: message,
			})
		}
		if err != nil {
			return err
		}
		nameList = append(nameList, req.GetName())
	}
	return nil
}

func (s *myServer) HelloBiStream(stream hellopb.GreetingService_HelloBiStreamServer) error {
	for {
		req, err := stream.Recv()
		if errors.Is(err, io.EOF) {
			return nil
		}
		if err != nil {
			return err
		}
		message := fmt.Sprintf("Hello, %v!", req.GetName())
		if err := stream.Send(&hellopb.HelloResponse{
			Message: message,
		}); err != nil {
			return err
		}
	}
}

func NewMyServer() *myServer {
	return &myServer{}
}

func main() {

	port := 28080

	listener, err := net.Listen("tcp", fmt.Sprintf(":%d", port))
	if err != nil {
		panic(err)
	}

	s := grpc.NewServer(
		// grpc.UnaryInterceptor(myUnaryServerInterceptor1),
		grpc.StreamInterceptor(myStreamServerInterceptor1),
	)

	hellopb.RegisterGreetingServiceServer(s, NewMyServer())

	reflection.Register(s)

	go func() {
		log.Printf("start gRPC server port: %v", port)
		s.Serve(listener)
	}()

	quit := make(chan os.Signal, 1)
	signal.Notify(quit, os.Interrupt)
	<-quit
	log.Println("stopping gRPC server...")
	s.GracefulStop()
}
