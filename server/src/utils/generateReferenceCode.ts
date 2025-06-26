import crypto from 'crypto';

export function generateReferenceCode(prefix = 'ENQ'): string {
    const randomHex = crypto.randomBytes(4).toString('hex').toUpperCase();
    return `${prefix}-${randomHex}`; // e.g., ENQ-7F4D3A1C
}
