import React, { useEffect } from 'react';

function withLogging(WrappedComponent) {
    return function(props) {
        useEffect(() => {
            console.log(`${WrappedComponent.name} is mounted`);
            return () => {
                console.log(`${WrappedComponent.name} is unmounted`);
            }
        }, [])
        return <WrappedComponent />;
    };
}

export default withLogging;