import React from 'react';

const InfoSvg = (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
    return (
        <div style={{cursor: 'help'}} {...props}>
            <svg width="22" height="22">
                <circle cx="11" cy="11" r="10" fill="rgba(0,0,0,0)" strokeWidth="1" stroke="rgb(255,255,255)"/>
                <text x='9.5' y='18' fill='white'>i</text>
            </svg>
        </div>
    );
};

export default InfoSvg;