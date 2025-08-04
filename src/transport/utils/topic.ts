export interface TopicParams {
  domain: string;
  service: string;
  method: string;
  version: string;
}

function validateParam(value: string): void {
  const regex = /[a-zA-Z0-9_]+/;
  if (!value.match(regex)) {
    throw new Error(`Invalid topic parameter '${value}'`);
  }
}

export function buildTopic(params: TopicParams): string {
  Object.values(params).forEach(validateParam);
  return `${params.domain}_${params.service}_${params.method}_${params.version}`;
}