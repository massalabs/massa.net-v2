/// <reference types="vite/client" />

declare module '*.html?raw' {
  const content: string
  export default content
}

interface ImportMetaEnv {
  readonly VITE_PLAUSIBLE_API_HOST?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

