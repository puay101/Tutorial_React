import './TattooPost.css';
function TattooPost(props){
        const {tattoo,onBg} = props;
    return(
        <div className="tattoo-post">
            <div className="tattoo-post-bg" onClick={onBg}>
                <div className="tattoo-post-content">
                    <img src={tattoo.fullUl} />
                    <h4> {tattoo.title}   </h4>
                </div>
            </div>
        </div>
    );
}
export default TattooPost;
