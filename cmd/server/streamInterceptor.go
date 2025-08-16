package main

import (
	"errors"
	"log"
	"io"
	"google.golang.org/grpc"
)

func myStreamServerInterceptor1(srv interface{}, stream grpc.ServerStream, info *grpc.StreamServerInfo, handler grpc.StreamHandler) error {
	log.Println("[pre] my stream server interceptor 1:", info.FullMethod)

	err := handler(srv, &myServerStreamWrapper1{stream})
	log.Println("[post] my stream server interceptor 1:")
	return err
}

type myServerStreamWrapper1 struct {
	grpc.ServerStream
}

func (s *myServerStreamWrapper1) RecvMsg(m interface{}) error {

	err := s.ServerStream.RecvMsg(m)

	if !errors.Is(err, io.EOF) {
		log.Println("[pre message] received message:", m)
	}

	return err
}

func (s *myServerStreamWrapper1) SendMsg(m interface{}) error {
	log.Println("[post message] sent message:", m)
	return s.ServerStream.SendMsg(m)
}