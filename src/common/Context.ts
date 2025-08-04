export interface Context {
  correlationId: string;
  [key: string]: string | number | boolean | null | undefined;
}
