import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
    beforeEach(() => {
        vi.spyOn(window, 'alert').mockImplementation(() => {});
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });
    
    it('renders the form with email and password fields', () => {
        const wrapper = mount(LoginForm);
        expect(wrapper.find('input[type="email"]').exists()).toBe(true);
        expect(wrapper.find('input[type="password"]').exists()).toBe(true);
        expect(wrapper.find('button[type="submit"]').exists()).toBe(true);
    })

    it('shows an error message when email is invalid', async () => {
        const wrapper = mount(LoginForm);
        const emailInput = wrapper.find('input[type="email"]');
        await emailInput.setValue('invalid-email');
        await wrapper.find('button[type="submit"]').trigger('submit.prevent');
        expect(wrapper.text()).toContain('Invalid email format');
    })

    it('shows an error message when password is less than 6 characters', async () => {
        const wrapper = mount(LoginForm);
        const passwordInput = wrapper.find('input[type="password"]');
        await passwordInput.setValue('12345');
        await wrapper.find('button[type="submit"]').trigger('submit.prevent');
        expect(wrapper.text()).toContain('Password must be at least 6 characters');
    })

    it('submits the form when inputs are valid', async () => {
        const wrapper = mount(LoginForm);
    
        const emailInput = wrapper.find('input[type="email"]');
        const passwordInput = wrapper.find('input[type="password"]');
    
        await emailInput.setValue('test@example.com');
        await passwordInput.setValue('123456');
    
        await wrapper.find('button[type="submit"]').trigger('submit.prevent');
    
        expect(wrapper.text()).not.toContain('Invalid email format');
        expect(wrapper.text()).not.toContain('Password must be at least 6 characters');
        expect(window.alert).toHaveBeenCalledWith('Form submitted successfully!');
    });
});