import { buildEventTopic } from '@unmonolith/transport';
import { USERS_AUTH_DOMAIN, USERS_AUTH_SERVICE } from './domain-and-service';

export const UsersAuthEventTopics = {
  userSignedInV1: topic('userSignedIn', 'v1'),
};

function topic(method: string, version: string): string {
  return buildEventTopic({
    domain: USERS_AUTH_DOMAIN,
    service: USERS_AUTH_SERVICE,
    method,
    version,
  });
}