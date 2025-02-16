// @generated
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Data {
    #[prost(message, repeated, tag="1")]
    pub initialize_candidate_list: ::prost::alloc::vec::Vec<InitializeCandidate>,
    #[prost(message, repeated, tag="2")]
    pub initialize_poll_list: ::prost::alloc::vec::Vec<InitializePoll>,
    #[prost(message, repeated, tag="3")]
    pub vote_list: ::prost::alloc::vec::Vec<Vote>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct InitializeCandidate {
    #[prost(string, tag="1")]
    pub trx_hash: ::prost::alloc::string::String,
    #[prost(string, tag="2")]
    pub candidate_name: ::prost::alloc::string::String,
    #[prost(uint64, tag="3")]
    pub poll_id: u64,
    #[prost(string, tag="4")]
    pub acct_signer: ::prost::alloc::string::String,
    #[prost(string, tag="5")]
    pub acct_poll: ::prost::alloc::string::String,
    #[prost(string, tag="6")]
    pub acct_candidate: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct InitializePoll {
    #[prost(string, tag="1")]
    pub trx_hash: ::prost::alloc::string::String,
    #[prost(uint64, tag="2")]
    pub poll_id: u64,
    #[prost(string, tag="3")]
    pub description: ::prost::alloc::string::String,
    #[prost(uint64, tag="4")]
    pub poll_start: u64,
    #[prost(uint64, tag="5")]
    pub poll_end: u64,
    #[prost(string, tag="6")]
    pub acct_signer: ::prost::alloc::string::String,
    #[prost(string, tag="7")]
    pub acct_poll: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Vote {
    #[prost(string, tag="1")]
    pub trx_hash: ::prost::alloc::string::String,
    #[prost(string, tag="2")]
    pub candidate_name: ::prost::alloc::string::String,
    #[prost(uint64, tag="3")]
    pub poll_id: u64,
    #[prost(string, tag="4")]
    pub acct_signer: ::prost::alloc::string::String,
    #[prost(string, tag="5")]
    pub acct_poll: ::prost::alloc::string::String,
    #[prost(string, tag="6")]
    pub acct_candidate: ::prost::alloc::string::String,
}
// @@protoc_insertion_point(module)
