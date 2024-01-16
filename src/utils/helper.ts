import { REGEX } from 'src/utils/constants';

export function validateEmail(email: string): boolean {
  return REGEX.EMAIL.test(email);
}

export function validatePhoneNumber(phone: string): boolean {
  return REGEX.PHONE.test(phone);
}

export function validateName(name: string): boolean {
  return REGEX.NAME.test(name);
}

export function isNotYYYYMMDD(dateStr: string) {
  const regex = /^(?!(\d{4})\/(\d{2})\/(\d{2})$).+$/;
  return regex.test(dateStr);
}
