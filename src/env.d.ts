declare var process: {
  env: {
    NG_APP_ENV: string;
    // This is an application secret that is not found in github! replace with your own backend url.
    NG_APP_BACKEND_URI: string;
    AppAuthUser: string;
    AppAuthPassword: string;
  };
};
