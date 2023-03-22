import * as React from 'react';
import loading from '../../images/tail-spin.svg'
export interface ILoadingProps {
}

export function Loading (props: ILoadingProps) {
  return (
    <div>
        <img src={loading} alt="loading"/>
    </div>
  );
}
