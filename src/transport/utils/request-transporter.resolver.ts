import { LocalRequestTransporter, RequestTransporter } from '../transporters';

export function resolveRequestTransporter(
  domain: string,
  service: string,
): RequestTransporter {
  return LocalRequestTransporter.forFeature();
}