import './AppSearch.css'
function AppSearch(props){
    const {search,onChange} = props
    return(    
        <div className="text-input">
        <input
        className='input'
        type='text'
        placeholder='search...'
        value={search}
        onChange={(e)=>{onChange(e.target.value)}}
        />
      </div>)
}
export default AppSearch