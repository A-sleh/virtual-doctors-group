import { UseFormRegister } from 'react-hook-form';

import ZodErrors from '@/components/custom/ZodErrors';
import MainInput from '@/components/ui/inputs/MainInput';

import {
  consultaionInput,
  consultaionInputErrorMessage,
} from '@/features/Consultation/api/create-consultaion';

export default function PaymentForm({
  register,
  filedInvalidMessage,
}: {
  register: UseFormRegister<consultaionInput>;
  filedInvalidMessage: consultaionInputErrorMessage | undefined;
}) {
  return (
    <div className="rounded-box">
      <h4 className="sub-header text-lg flex justify-between items-center gap-3 text-secondary font-medium mb-2">
        Payment section
      </h4>
      <form className="space-y-4 overflow-auto">
        <div className="flex gap-2 flex-col sm:flex-row ">
          <div className="flex-1">
            <MainInput
              type="text"
              lable="Name of card"
              placeHolder="your card name ..."
              {...register('cardName')}
            />
            <ZodErrors error={filedInvalidMessage?.cardName} />
          </div>
          <div className="flex-1">
            <MainInput
              type="text"
              lable="Card number"
              placeHolder="Your card number ..."
              {...register('cardNumber')}
            />
            <ZodErrors error={filedInvalidMessage?.cardNumber} />
          </div>
        </div>
        <div className="flex gap-2 flex-col sm:flex-row">
          <div className="flex-1">
            <MainInput
              type="text"
              lable="Expiry date"
              placeHolder="Enter expiry date ... "
              {...register('expirDate')}
            />
            <ZodErrors error={filedInvalidMessage?.expirDate} />
          </div>
          <div className="flex-1">
            <MainInput
              type="text"
              lable="Zip/postal code"
              placeHolder="Your postal code ..."
              {...register('postalCode')}
            />
            <ZodErrors error={filedInvalidMessage?.postalCode} />
          </div>
        </div>
      </form>
    </div>
  );
}
