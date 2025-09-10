import React, { useEffect, useState } from 'react';
import {
  conslutaionType,
  useUpdateDoctorConsultaion,
} from '../api/update-profile-info';
import { LuRefreshCcw } from 'react-icons/lu';
import { RiSettings5Fill } from 'react-icons/ri';
import { IoMdClose } from 'react-icons/io';
import MinimalInput from '@/components/ui/inputs/MinimalInput';
import AnimateButton from '@/lib/Animation/AnimateButton';
import Loader from '@/components/ui/loader/Loader';
import { errorToast } from '@/components/custom/toast';
import { useQueryClient } from '@tanstack/react-query';
import { QYERY_KEYS } from '@/lib/query-key';

export default function UpdateTitcketCost({
  ticketCost,
  ticketOption,
}: conslutaionType) {
    const queryClient = useQueryClient()
  const [update, setUpdate] = useState(false);
  const [ticket, setTicket] = useState({ ticketCost, ticketOption });
  const { isPending, updateConsultaionStatus,isSuccess } = useUpdateDoctorConsultaion();

  function handleSubmitClicked(e) {
    e.preventDefault();

    if (!ticket.ticketCost || ticket.ticketCost < 0) {
      errorToast('Please enter the ticket cost, and should be positive');
      return;
    }

    updateConsultaionStatus(ticket, {
      onSuccess: () => {
        queryClient.invalidateQueries({
            queryKey: [QYERY_KEYS.doctor.info]
        })
        setUpdate(false);
      },
    });
  }

  useEffect(() => {
    if(!update && !isSuccess) {
        setTicket({ ticketCost, ticketOption })
    }
  },[update])

  return (
    <>
      {isPending && (
        <Loader variant="bars" className="text-primary" size={80} />
      )}
      <div className="flex flex-col items-end">
        <div className='flex gap-4'>
          <h3 className='font-bold text-xl'>Consultaion</h3>
          {!update ? (
            <RiSettings5Fill
              size={25}
              className="text-primary cursor-pointer"
              onClick={() => setUpdate(true)}
            />
          ) : (
            <IoMdClose
              size={25}
              className="text-danger cursor-pointer"
              onClick={() => setUpdate(false)}
            />
          )}
        </div>

        <form onSubmit={handleSubmitClicked}>
          <div className="flex justify-between items-center">
            <span className="px-2 py-1 bg-primary my-2 rounded-md text-white font-bold">
              {ticket.ticketOption}
            </span>
            {update && (
              <LuRefreshCcw
                onClick={() =>
                  setTicket({
                    ...ticket,
                    ticketOption:
                      ticket.ticketOption === 'Any'
                        ? 'Request'
                        : ticket.ticketOption === 'None'
                        ? 'Any'
                        : 'None',
                  })
                }
                size={25}
                className="text-secondary hover:rotate-180 transition-all duration-300 cursor-pointer"
              />
            )}
          </div>
          {ticket.ticketOption != 'None' && (
            <MinimalInput
              type="text"
              lable={'consultaion cost'}
              unit="$"
              value={ticket.ticketCost}
              readOnly={!update}
              onChange={(e) =>
                setTicket({ ...ticket, ticketCost: e.target.value })
              }
            />
          )}

          {update && (
            <AnimateButton
              scale={0.9}
              className="btn-rounded text-white bg-danger border-1 flex-1 mt-5"
            >
              Apply
            </AnimateButton>
          )}
        </form>
      </div>
    </>
  );
}
