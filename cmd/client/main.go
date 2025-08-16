package main

import (
	"bufio"
	"context"
	"fmt"
	"log"
	"os"

	hellopb "golang-grpc/pkg/grpc"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

var (
	scanner *bufio.Scanner
	client hellopb.GreetingServiceClient
)

func main() {
	fmt.Println("start client.")

	// 1 標準入力から文字列を受取る
	scanner = bufio.NewScanner(os.Stdin)

	// 2 grpcに接続する
	address := "localhost:28080"
	conn, err := grpc.Dial(
		address,
		grpc.WithTransportCredentials(insecure.NewCredentials()),
		grpc.WithBlock(),
	)
	if err != nil {
		log.Fatal("Connection failed.")
		return
	}
	defer conn.Close()

	// 3  gRPCクライアントを生成する
	client = hellopb.NewGreetingServiceClient(conn)

	for {
		fmt.Println("1: send Request")
		fmt.Println("2: exit")
		fmt.Print("Enter number: ")

		scanner.Scan()
		in := scanner.Text()
		fmt.Println("")

		switch in {
		case "1":
			Hello()
		case "2":
			fmt.Println("bye.")
			goto M
		}
	}
M:
}

func Hello() {
	fmt.Println("Please enter your name.")
	scanner.Scan()
	name := scanner.Text()

	req := &hellopb.HelloRequest{
		Name: name,
	}

	res, err := client.Hello(context.Background(), req)
	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Println(res.GetMessage())
	}
}