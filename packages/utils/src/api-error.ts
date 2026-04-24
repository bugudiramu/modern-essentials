export class ApiError extends Error {
  public statusCode: number;
  public errors: string[];

  constructor(statusCode: number, message: string | string[], error?: string) {
    const mainMessage = Array.isArray(message) ? message[0] : message;
    super(mainMessage || error || "An unexpected error occurred");
    this.statusCode = statusCode;
    this.errors = Array.isArray(message) ? message : message ? [message] : [];
    this.name = "ApiError";
  }

  /**
   * Parses a standard NestJS error response from a Response object
   */
  static async fromResponse(response: Response): Promise<ApiError> {
    try {
      const data = await response.json();
      return new ApiError(
        data.statusCode || response.status,
        data.message,
        data.error,
      );
    } catch {
      return new ApiError(response.status, "An unexpected error occurred");
    }
  }

  /**
   * Helper to get a user-friendly error message
   */
  get friendlyMessage(): string {
    if (this.statusCode === 401)
      return "Your session has expired. Please log in again.";
    if (this.statusCode === 403)
      return "You do not have permission to perform this action.";
    if (this.statusCode === 404)
      return this.message || "The requested resource was not found.";
    if (this.statusCode >= 500)
      return "A server error occurred. Please try again later.";

    return this.message || "Something went wrong. Please try again.";
  }
}
