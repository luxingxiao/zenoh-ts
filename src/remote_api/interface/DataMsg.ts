// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { QueryableMsg } from "./QueryableMsg";
import type { ReplyWS } from "./ReplyWS";
import type { SampleWS } from "./SampleWS";

export type DataMsg =
  | {
      PublisherPut: {
        id: string;
        payload: Array<number>;
        attachment: Array<number> | null;
        encoding: string | null;
      };
    }
  | { Sample: [SampleWS, string] }
  | { GetReply: ReplyWS }
  | { Queryable: QueryableMsg };
