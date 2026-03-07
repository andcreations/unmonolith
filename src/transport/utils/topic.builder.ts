export interface TopicParams {
  domain: string;
  service: string;
  method: string;
  version: string;
}

export function validateParam(value: string): void {
  const regex = /[a-zA-Z0-9_]+/;
  if (!value.match(regex)) {
    throw new Error(`Invalid topic parameter '${value}'`);
  }
}