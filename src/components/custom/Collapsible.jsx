import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

// eslint-disable-next-line react/prop-types
export default function Collapsible({ label, children, imageUrl  }) {
    const [open, setOpen] = useState(false);
    const [contentHeight, setContentHeight] = useState(0);
    const contentRef = useRef(null);
    const toggle = () => {
        flushSync(() => {setOpen(!open)});
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (contentRef.current) { 
            setContentHeight(contentRef.current.scrollHeight);

        }
    },[children]);
    return <>
            <button 
                type='button' 
                className='font-semibold text-base mb-4 bg-white rounded-lg flex items-center gap-3' 
                onClick={ toggle }
            >
                <img src={imageUrl}></img>
                <p className="grow">{label}</p>
            </button>
            <div className='overflow-hidden mb-3' style={{height: open ? contentHeight : 0, transition: 'height 0.3s'}}>
                <div ref={contentRef}>{children}</div>
            </div>

        </>
}
