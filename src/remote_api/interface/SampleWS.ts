// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { OwnedKeyExprWrapper } from "./OwnedKeyExprWrapper";
import type { SampleKindWS } from "./SampleKindWS";

export type SampleWS = {
  key_expr: OwnedKeyExprWrapper;
  value: Array<number>;
  kind: SampleKindWS;
  encoding: string;
  timestamp: string | null;
  congestion_control: number;
  priority: number;
  express: boolean;
  attachement: Array<number> | null;
};
