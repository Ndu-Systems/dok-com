import { ViewsModule } from './views.module';

describe('LayoutModule', () => {
    let layoutModule: ViewsModule;

    beforeEach(() => {
        layoutModule = new ViewsModule();
    });

    it('should create an instance', () => {
        expect(layoutModule).toBeTruthy();
    });
});
