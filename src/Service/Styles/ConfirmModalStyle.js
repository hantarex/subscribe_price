import {StyleSheet} from 'aphrodite-jss';

const opacityKeyframes = {
    'from': {
        opacity: 0,
    },

    'to': {
        opacity: 1,
    }
};

export default StyleSheet.create({
    red: {
        '& .modal-content': {
            borderTop: 'solid 7px #e74c3c'
        }
    },
    green: {
        '& .modal-content': {
            borderTop: 'solid 7px #2ecc71'
        }
    },
    greenText: {
        color: '#2ecc71'
    },
    fade: {
        animation: 'fadein 2s',
        '@global': {
            '@keyframes fadein': opacityKeyframes
        }
    },
    subscribe_price: {
        backgroundColor: '#e2f0f5',
        borderRadius: '3px',
        padding: '5px 9px',
        '& span':{
            marginLeft: '10px'
        },
        '& label':{
            margin: 0
        }
    },
    subscribe_item: {
        backgroundColor: '#e2f0f5',
        borderRadius: '3px',
        padding: '5px 9px',
        '& span':{
            marginLeft: '10px'
        },
        '& label':{
            margin: 0
        }
    }
})