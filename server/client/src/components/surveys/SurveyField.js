//SurveyField contains a logic to render a single label and text input

import React from 'react';

export default ({ input }) => {
    //console.log(input);
    return (
        <div>
            <input {...input} />
        </div>
    );
};