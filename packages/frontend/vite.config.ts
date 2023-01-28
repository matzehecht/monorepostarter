import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const plugins = [svgr(), react()];

  if (!Boolean(env.DISABLE_ESLINT_PLUGIN)) {
    plugins.unshift(eslint());
  }

  return {
    plugins,
  };
});
