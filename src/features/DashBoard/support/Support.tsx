// import React from 'react';

import { ListOfMessage } from "./components/ListOfMessage";
import { Reply } from "./components/Reply";

export default function Support() {
  return (
    <div className='flex gap-5 p-3'>
    <ListOfMessage/>
    <Reply/>
    </div>
  );
}
