import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';

describe('Smoke Tests', () => {
  it('should have required environment', () => {
    expect(typeof process.env).toBe('object');
  });

  it('should have package.json with name', () => {
    const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf-8'));
    expect(pkg.name).toBeTruthy();
  });

  it('should have valid entry point', () => {
    const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf-8'));
    expect(pkg.main || pkg.bin || pkg.scripts?.start || pkg.scripts?.dev).toBeTruthy();
  });
});
