import 'http';

declare module 'http' {
  interface IncomingHttpHeaders {
    id: string;
    expiresin: number;
  }
}
