export class LoginPage {

    page: any;
    username_textbox: any;
    password_textbox: any;
    login_button: any;

    constructor(page) {
        this.page = page;
        this.username_textbox = page.getByRole('textbox', { name: 'Username' });
        this.password_textbox = page.getByRole('textbox', { name: 'Password' });
        this.login_button = page.getByRole('button', { name: ' Login' });

    }

    async goToLoginPage() {
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }


    async login(username: string, password: string) {
        await this.username_textbox.click();
        await this.username_textbox.fill(username);
        await this.password_textbox.click();
        await this.password_textbox.fill(password);
        await this.login_button.click();
    }

}