import { describe, it, jest, expect } from '@jest/globals';
import { mount } from '@vue/test-utils';
import UsesExampleElement from './tst/UsesExampleElement.vue';
import UsesOtherElement from './tst/UsesOtherElement.vue';

describe('vtu-plugin-stub-custom-elements', () => {
    it('should render UsesExampleComponent without console warnings', () => {
        const spy = jest.spyOn(console, 'warn');
        
        mount(UsesExampleElement);

        expect(spy).not.toHaveBeenCalled();
    });

    it('should render UsesOtherComponent without console warnings', () => {
        const spy = jest.spyOn(console, 'warn');

        mount(UsesOtherElement);

        expect(spy).not.toHaveBeenCalled();
    });
});