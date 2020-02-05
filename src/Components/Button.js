import React from 'react';
import Button from '@material-ui/core/Button';

const Buttonabcd = (props) => {
    return (
        <div>
        <Button variant="contained" color="primary">
          {props.name}
         </Button>
        </div>
    );
};

export default Buttonabcd;