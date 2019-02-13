interface IEnv {
    isProduction: boolean;
    isTesting: boolean;
    isDevelopment: boolean;
}

declare const env: IEnv;

export { env };
