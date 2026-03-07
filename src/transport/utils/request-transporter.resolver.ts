import { LocalRequestTransporter, RequestTransporter } from '../transporters';

export function resolveRequestTransporter(
  domain: string,
  service: string,
): RequestTransporter {
  // TODO Resolve the request transporter based on the domain and service
  // and environment variables.
  return LocalRequestTransporter.forFeature();
}