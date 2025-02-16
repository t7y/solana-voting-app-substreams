// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.3

import { Writer, Reader } from "as-proto/assembly";

export class InitializeCandidate {
  static encode(message: InitializeCandidate, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.trxHash);

    writer.uint32(18);
    writer.string(message.candidateName);

    writer.uint32(24);
    writer.uint64(message.pollId);

    writer.uint32(34);
    writer.string(message.acctSigner);

    writer.uint32(42);
    writer.string(message.acctPoll);

    writer.uint32(50);
    writer.string(message.acctCandidate);
  }

  static decode(reader: Reader, length: i32): InitializeCandidate {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new InitializeCandidate();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trxHash = reader.string();
          break;

        case 2:
          message.candidateName = reader.string();
          break;

        case 3:
          message.pollId = reader.uint64();
          break;

        case 4:
          message.acctSigner = reader.string();
          break;

        case 5:
          message.acctPoll = reader.string();
          break;

        case 6:
          message.acctCandidate = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  trxHash: string;
  candidateName: string;
  pollId: u64;
  acctSigner: string;
  acctPoll: string;
  acctCandidate: string;

  constructor(
    trxHash: string = "",
    candidateName: string = "",
    pollId: u64 = 0,
    acctSigner: string = "",
    acctPoll: string = "",
    acctCandidate: string = ""
  ) {
    this.trxHash = trxHash;
    this.candidateName = candidateName;
    this.pollId = pollId;
    this.acctSigner = acctSigner;
    this.acctPoll = acctPoll;
    this.acctCandidate = acctCandidate;
  }
}
