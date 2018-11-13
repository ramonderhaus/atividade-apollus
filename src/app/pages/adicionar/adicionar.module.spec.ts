import { AdicionarModule } from './adicionar.module';

describe('AdicionarModule', () => {
  let adicionarModule: AdicionarModule;

  beforeEach(() => {
    adicionarModule = new AdicionarModule();
  });

  it('should create an instance', () => {
    expect(adicionarModule).toBeTruthy();
  });
});
