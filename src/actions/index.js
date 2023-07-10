export const incrementOff = () =>{
    return {
        type: 'INCREMENT_OFF',
        payload : {
            name: 'off',
            valor: 1
        }
    }
};
export const incrementGibson = () =>{
    return {
        type: 'INCREMENT_GIBSON',
        payload : {
            name: 'gibson',
            valor: 1
        }
    }
};
export const incrementStanley = () =>{
    return {
        type: 'INCREMENT_STANLEY',
        payload : {
            name: 'stanley',
            valor: 1
        }
    }
};

export const decrementOff = () =>{
    return {
        type: 'DECREMENT',
        payload: 'off'
    }
};
export const decrementGibson = () =>{
    return {
        type: 'DECREMENT',
        payload:'gibson'
    }
};export const decrementStanley = () =>{
    return {
        type: 'DECREMENT',
        payload: 'stanley'
    }
};
