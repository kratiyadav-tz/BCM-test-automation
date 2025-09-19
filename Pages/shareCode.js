export class ShareCode{
    constructor(page){

        this.page = page;
        this.shareCodeField = page.locator("//input[@placeholder='Share Code']");
        this.goButton = page.locator("//div[@class='go']");
        this.invalidErrorMessage = page.locator("//div[@class='red--text lighten-2 caption error-div']");
        this.incorrecrtErrorMessage = page.locator("//div[@class='red--text lighten-2 caption error-div']");
        this.emptyErrorMessage = page.locator("//div[@class='red--text lighten-2 caption error-div']");
        this.validShareCodeCondition = page.locator("//button[@class='v-btn v-btn--depressed theme--dark secondary']");
        this.shareButton = page.locator("button.v-btn.secondary");
        this.sharePopup = page.locator("//div[@class='flex title xs12']");
        this.shareCodeBox = page.locator("//div[@class='flex item_container xs12']//div[2]");
        this.shareText = page.locator("//li[normalize-space()='You must be logged in to use a Share Code or link.']");
    }

    async navigateToPage(){
         await this.page.goto('https://app.brainingcamp.com/');
    }

    async navigateToManipulativePage(){

         await this.page.goto('https://app.brainingcamp.com/manipulatives/algebra-tiles');
    }











}