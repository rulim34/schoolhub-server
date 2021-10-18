import { HttpError } from './http.error';
import { Response } from '../types';

export class MethodNotAllowedError extends HttpError {
  public data: unknown;

  public constructor(message?: string, data?: unknown) {
    super(405);
    Object.setPrototypeOf(this, MethodNotAllowedError.prototype);
    this.message = message ?? 'Method not allowed.';
    this.data = data;
  }

  public toJson(): Response<unknown> {
    if (this.data) {
      return {
        success: false,
        message: this.message,
        data: this.data,
      };
    } else {
      return {
        success: false,
        message: this.message,
      };
    }
  }
}