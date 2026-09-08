import type {Locator, Page} from '@playwright/test'
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
    readonly UsernameInput: Locator;
    readonly PasswordInput: Locator;
    readonly LoginButton: Locator;

    constructor(page: Page) {
        super(page);
        this.UsernameInput = page.locator('#user-name');
        this.PasswordInput = page.locator('#password');
        this.LoginButton = page.locator('#login-button');
    }


    async login(username: string, password: string): Promise<void> {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }

    async enterUsername(username: string): Promise<void> {
        await this.UsernameInput.fill(username);
    }

    async enterPassword(password: string): Promise<void> {
        await this.PasswordInput.fill(password);
    }

    async clickLoginButton(): Promise<void> {
        await this.LoginButton.click();
    }

    async isLoginSuccessful(): Promise<boolean> {
        return await this.page.locator('[data-test="title"]', { hasText: 'Products' }).isVisible();
    }


    

}