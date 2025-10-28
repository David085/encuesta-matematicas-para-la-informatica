export class EmailValidator {
    static isValid(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    static toLowerCase(email: string): string {
        return email.toLowerCase();
    }
}