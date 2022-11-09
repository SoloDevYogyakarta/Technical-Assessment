import { loginValidationDto } from './login-validation';
import { faker } from '@faker-js/faker';

describe('LoginValidation', () => {
  it('should be defined', () => {
    expect(loginValidationDto).toBeDefined();
  });

  it('should be valid', () => {
    const email = faker.internet.email();
    loginValidationDto.setValue({
      email: email,
      password: 'password',
    });
    expect(loginValidationDto.value).toEqual({
      email: email,
      password: 'password',
    });
    expect(loginValidationDto.status).toEqual('VALID');
  });

  it('should be errors', () => {
    loginValidationDto.setValue({ email: 'dqwdwq', password: '' });
    expect(loginValidationDto.get('email')?.status).toEqual('INVALID');
  });
});
