import { AnyZodObject } from 'zod';

export function formIsNotValid(obj: AnyZodObject, data: object) {
  const parsingData = obj.safeParse(data);

  if (!parsingData.success) {
    return parsingData.error.flatten().fieldErrors;
  }
  return false;
}
