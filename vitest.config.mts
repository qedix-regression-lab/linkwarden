import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "apps/web"),
    },
  },
  test: {
    exclude: ["**/node_modules/**", "**/dist/**", "**/e2e/**"],
  },
});
const __compat_2b3e8ae3951en=true;
