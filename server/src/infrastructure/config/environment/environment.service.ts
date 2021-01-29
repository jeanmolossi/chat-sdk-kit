export interface IEnvironmenConfig {
  [key: string]: string;
}

export class EnvironmentService {
  private readonly environmentConfig: IEnvironmenConfig;

  constructor() {
    this.environmentConfig = EnvironmentService.validateInput({
      ...process.env,
    });
  }

  private static validateInput(
    environmentConfig: IEnvironmenConfig,
  ): IEnvironmenConfig {
    const {
      API_HOST,
      API_PORT,
      API_ACCESS_TOKEN_TTL_IN_MINUTES,
      API_ACCESS_TOKEN_SECRET,
      DB_HOST,
      DB_PORT,
    } = environmentConfig;

    const envVarsSchema: IEnvironmenConfig = {
      API_HOST: API_HOST || 'localhost',
      API_PORT: API_PORT || '3001',
      API_ACCESS_TOKEN_TTL_IN_MINUTES: API_ACCESS_TOKEN_TTL_IN_MINUTES || '60',
      API_ACCESS_TOKEN_SECRET: API_ACCESS_TOKEN_SECRET || 'secret_fallback',
      DB_HOST: DB_HOST || 'localhost',
      DB_PORT: DB_PORT || '27017',
    };

    return envVarsSchema;
  }

  get(key: string): string {
    return this.environmentConfig[key];
  }
}
