import React, {useContext} from 'react';
import {AlertContext} from '../context/alert/alertContext';

export const Alert = () => {
  
  const {alert, hide} = useContext(AlertContext);

  if(!alert) {
    return null;
  }

  return (
    <div class={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
      <strong>Внимание!</strong> {alert.text}
      <button onClick={hide} type="button" class="btn-close" aria-label="Close">&times;</button>
    </div>
  )
}