export class LoginPage{
    constructor(page){
            this.page=page;
            this.userName = page.locator("input[aria-label='Username']");
            this.password = page.locator("input[aria-label='Password']");
            this.loginButton = page.locator("//div[contains(text(),'Login')]");
            this.errorMessage = page.locator("//div[@class='v-alert v-alert--outline error--text']");
            this.manipulative = page.locator('text=Manipulatives');

    } 
    async goto(){ 
        await this.page.goto('https://app.brainingcamp.com/login');
    }

    async login(userName, password){
        await this.userName.fill(userName);
        await this.password.fill(password);
        await this.loginButton.click()
    }
    
}
