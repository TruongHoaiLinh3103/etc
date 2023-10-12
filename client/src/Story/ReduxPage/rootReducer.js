const initState = {
    page: [],
    post: []
}
const rootReducer = (state = initState, action) =>
{
    switch(action.type){
        case 'DELETE__PAGE':
            let page = state.page
            page = page.filter(item => item.id !== action.payload.id)
            return{
                ...state, page
            }
        case 'ADD_PAGE':
            let Page = {id: action.payload.id, link:action.payload.link, img:action.payload.img, label:action.payload.label}
            return{
                ...state, page:[...state.page, Page]
            }
        default:
            return state
    }
}
export default rootReducer;