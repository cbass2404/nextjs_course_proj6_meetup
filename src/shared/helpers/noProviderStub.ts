export function noProviderStub(providerName: string): never {
  throw new Error(
    `You forgot to wrap your component in the <${providerName}>.`
  );
}
