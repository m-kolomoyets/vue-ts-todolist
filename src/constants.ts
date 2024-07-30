export const ARRAY_NOT_FOUND_INDEX = -1

export class CustomResponse {
  constructor(
    public status: 'success' | 'error',
    public message?: string
  ) {}
}
