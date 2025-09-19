export class ResourcesPage{
    constructor(page){
             this.page = page;
             this.resourceLink = page.locator("//div[normalize-space()='Resources']");
             this.resourcePageTitle = page.locator("//h1[@class='text-center text-oxford-blue font-bold']");
             this.ideasSection = page.locator("//h3[normalize-space()='Ideas']");
             this.exploreButton = page.locator("//a[@href='/ideas']//span[@class='v-btn__content'][normalize-space()='Explore']");
             this.code = page.locator('.card-container.align-stretch.fill-height i[role="button"]').nth(1);
             this.copied = page.locator("//span[@id='VG7XY2XP_confirm']");

    }

    async navigateToResourcePage(){

           await this.page.goto("https://www.brainingcamp.com/resources");
    }

    }
