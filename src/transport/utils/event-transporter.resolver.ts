import { EventTransporter, DefaultEventTransporter } from '../transporters';

export function resolveEventTransporter(
  domain: string,
  service: string,
): EventTransporter {
  // TODO Resolve the request transporter based on the domain and service
  // and environment variables.
  return DefaultEventTransporter.forFeature();
}