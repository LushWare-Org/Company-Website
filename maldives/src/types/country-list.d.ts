declare module "country-list" {
  export function getNames(): string[];
  export function getCode(name: string): string | undefined;
}
