import { TopicParams, validateParam } from './topic.builder';

export function buildEventTopic(params: TopicParams): string {
  Object.values(params).forEach(validateParam);
  return (
    `${params.domain}_${params.service}_` +
    `${params.method}$event_${params.version}`
  );
}