import MainInput from '@/components/ui/inputs/MainInput';

export default function PaymentForm() {
  return (
    <div className="rounded-box">
      <h4 className="sub-header text-lg flex justify-between items-center gap-3 text-secondary font-medium mb-2">
        Payment section
      </h4>
      <form className='space-y-4'>
        <div className='flex gap-2 flex-col sm:flex-row'>
          <MainInput
            type="text"
            lable="Name of card"
            placeHolder="your card name ..."
          />
          <MainInput
            type="text"
            lable="Card number"
            placeHolder="Your card number ..."
          />
        </div>
        <div className='flex gap-2 flex-col sm:flex-row'>
          <MainInput
            type="text"
            lable="Expiry date"
            placeHolder="Enter expiry date ... "
          />
          <MainInput
            type="text"
            lable="Zip/postal code"
            placeHolder="Your postal code ..."
          />
        </div>
      </form>
    </div>
  );
}
