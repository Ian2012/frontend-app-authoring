import * as hooks from './hooks';
import { MockUseState } from '../../../testUtils';

const state = new MockUseState(hooks);

describe('Video Upload Editor hooks', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe('state hooks', () => {
    state.testGetter(state.keys.loading);
  });
  describe('using state', () => {
    beforeEach(() => { state.mock(); });
    afterEach(() => { state.restore(); });

    describe('Hooks for Video Upload', () => {
      beforeEach(() => {
        hooks.uploadEditor();
        hooks.uploader();
      });
      it('initialize state with correct values', () => {
        expect(state.stateVals.loading).toEqual(false);
      });
    });
  });
});
