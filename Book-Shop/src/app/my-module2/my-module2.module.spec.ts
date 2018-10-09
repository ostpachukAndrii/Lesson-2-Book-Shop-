import { MyModule2Module } from './my-module2.module';

describe('MyModule2Module', () => {
  let myModule2Module: MyModule2Module;

  beforeEach(() => {
    myModule2Module = new MyModule2Module();
  });

  it('should create an instance', () => {
    expect(myModule2Module).toBeTruthy();
  });
});
