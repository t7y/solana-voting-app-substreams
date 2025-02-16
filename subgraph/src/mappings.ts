import { Protobuf } from "as-proto/assembly";
import { Data as protoData } from "./pb/substreams/v1/program/Data";
import { Poll, Candidate } from "../generated/schema";
import { log } from "@graphprotocol/graph-ts";

export function handleTriggers(bytes: Uint8Array): void {
  const input = Protobuf.decode<protoData>(bytes, protoData.decode);

  log.info("-------------------------", [])

  for (let i = 0; i < input.initializePollList.length; i++) {
    let initializePoll = input.initializePollList[i];

    log.info("poll detected: {}", [initializePoll.pollId.toString()])
    let pollEntity = new Poll(initializePoll.pollId.toString())
    pollEntity.save()

  }

  for (let i = 0; i < input.initializeCandidateList.length; i++) {
    let initializeCandidate = input.initializeCandidateList[i];

    let pollEntity = Poll.load(initializeCandidate.pollId.toString())
    if (pollEntity !== null) {
      let candidate = new Candidate(initializeCandidate.candidateName)
      candidate.name = initializeCandidate.candidateName;
      candidate.poll = pollEntity.id;
      candidate.count = 0;

      log.info("add candidate pollId: {}, candidate: {}", [initializeCandidate.pollId.toString(), initializeCandidate.candidateName]);
      candidate.save()
    }
  }

  for (let i = 0; i < input.voteList.length; i++) {
    let vote = input.voteList[i];

    let candidateEntity = Candidate.load(vote.candidateName);
    if (candidateEntity !== null) {
      candidateEntity.count += 1;

      log.info("vote candidate pollId: {}, candidate: {}", [vote.pollId.toString(), vote.candidateName]);
      candidateEntity.save()
    }
  }

}

