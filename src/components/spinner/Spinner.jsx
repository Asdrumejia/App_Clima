import React from 'react';
import S from './Spinner.module.css';


const Spinner = () => {

    return(

        <div className={S.lds_ripple} >
            <div></div>
            <div></div>
        </div>

    );
};


export default Spinner;
