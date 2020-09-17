

const iState={

	name: 'ramesh',
	wishes:['eat','code','sleep'],
	movieId : '',
}

const reducer =(state=iState,action) => 
{ if (action.type === 'CHANGE_NAME'){

		return { name: action.payload};

	}else if (action.type === 'CHANGE_ID'){

		return { name: action.payload};
	}
	
	return state;
}


export default reducer;