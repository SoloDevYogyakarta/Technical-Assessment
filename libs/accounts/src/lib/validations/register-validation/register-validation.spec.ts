import { registerValidationDto } from './register-validation';
import { faker } from '@faker-js/faker';

describe('RegisterValidation', () => {
  it('should be defined', () => {
    expect(registerValidationDto).toBeDefined();
  });

  it('should be valid', () => {
    const fullname = `${faker.name.firstName()} ${faker.name.lastName()}`;
    const email = faker.internet.email();
    registerValidationDto.setValue({
      fullname: fullname,
      email: email,
      password: 'password',
      confirmation: 'password',
    });
    expect(registerValidationDto.value).toEqual({
      fullname: fullname,
      email: email,
      password: 'password',
      confirmation: 'password',
    });
    expect(registerValidationDto.status).toEqual('VALID');
  });

  it('should be error', () => {
    registerValidationDto.setValue({
      password: 'dwqkmdqkwmdwq',
      confirmation: 'kdmwqkmdqwdqw',
      email: 'dkwqmkdwq',
      fullname: 'kdmwqk',
    });
    expect(registerValidationDto.get('fullname')?.status).toEqual('VALID');
    expect(registerValidationDto.get('email')?.status).toEqual('INVALID');
    expect(registerValidationDto.get('password')?.status).toEqual('VALID');
    expect(registerValidationDto.get('confirmation')?.status).toEqual('VALID');
    expect(
      registerValidationDto.get('password')?.value ===
        registerValidationDto.get('confirmation')?.value
    ).toEqual(false);
  });
});
