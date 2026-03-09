import { 
  HTTPRequestTransporter,
  LocalRequestTransporter,
  RequestTransporter,
} from '../transporters';

export function resolveRequestTransporter(
  domain: string,
  service: string,
): RequestTransporter {
  const domainEnvVar = domain.replace(/-/g, '_').toUpperCase();
  const serviceEnvVar = service.replace(/-/g, '_').toUpperCase();

  const envVarName = `${domainEnvVar}_${serviceEnvVar}_REQUEST_TRANSPORTER`;
  const envVarValue = process.env[envVarName];

  // local
  if (envVarValue === 'local' || !envVarValue || envVarValue === '') {
    return LocalRequestTransporter.forFeature();
  }

  // http
  if (envVarValue.startsWith('http')) {
    return HTTPRequestTransporter.forFeature({ url: envVarValue });
  }

  throw new Error(
    `Invalid request transporter environment variable: ${envVarValue}`
  );
}