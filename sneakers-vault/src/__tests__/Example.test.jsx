import { describe, it, expect } from "vitest";

describe('jsdom env', () => {
    it('should have document defined', () => {
        expect(document).toBeDefined();
    });
});