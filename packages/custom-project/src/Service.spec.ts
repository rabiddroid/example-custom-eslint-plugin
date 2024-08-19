import { describe, it, expect } from 'vitest';
import { Service } from './Service';

describe('Service', () => {
    it('should return the correct greeting message', () => {
        const service = new Service();
        const greeting = service.greet();
        expect(greeting).toBe('Hello from Service');
    });
});