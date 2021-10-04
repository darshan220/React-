import { ADD_TO_CART } from '../Constants';

const initialState = {
    cardData: []
}

export default function cartItem(state=initialState,action)
{
        switch(action.type)
        {
            case ADD_to_CART:
                return {
                    ...state,
                    cardData:action.data
                }
                break;
            default: 
            return state
        }

}