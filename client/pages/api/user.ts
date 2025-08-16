import type { NextApiRequest, NextApiResponse } from "next";
import { credentials, ServiceError } from "@grpc/grpc-js";

import { GreetingServiceClient } from "../../codegen/api/hello_grpc_pb";
import { HelloRequest, HelloResponse } from "../../codegen/api/hello_pb";

const Request = new HelloRequest();
const Client = new GreetingServiceClient(
  "localhost:28080",
  credentials.createInsecure()
)

export default async function handler(
  apiReq: NextApiRequest,
  apiRes: NextApiResponse
) {
  try {
    console.log('--------------------------------');
    const { id } = apiReq.body;
    console.log('--------------------------------');
    console.log(id);
    console.log(apiReq.body);
    console.log('--------------------------------');
    Request.setName(id);

    Client.hello(Request, (grpcErr: ServiceError | null, grpcRes: HelloResponse) => {
      if (grpcErr) {
        apiRes.status(500).json({
          error: grpcErr.message,
        });
      } else {
        apiRes.status(200).json({
          message: grpcRes.getMessage(),
        });
      }
    });
  } catch (error) {
    apiRes.status(400).json({
      error: "Invalid request body",
    });
  }
}