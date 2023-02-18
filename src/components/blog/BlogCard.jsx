import ReactTooltip from "react-tooltip";

const BlogCard = (props) => {
    const post = props.post;

    var tooltip_span = [];
    //Hacky way to get the subtitle from the Medium post DO NOT RECOMEND
    var subtitle = post.content.match(/<h4>(.*?)<\/h4>/);

    post.categories.map((element, i) => {
        tooltip_span.push(
            <span key={i} className="blog_card_category">
                #{element}
            </span>
        ); 
    });

    return (
        <div className="list_inner">
            <a
                href={post.link}
                target="_blank"
                rel="noreferrer"
                className="blog_card"
            >
            <div className="thumb">
            <img
                src={post.thumbnail}
                alt={post.title}  
                data-tip
                data-for={props.index + '_' + post.title}
            />
            <ReactTooltip
                id={props.index + '_' + post.title}
                place="bottom"
                variant="light"
                noArrow="true"
                className="tooltip-wrapper"
            >
                <div className="blog_tooltip">
                    <span>{subtitle[1]}</span>
                </div>
            </ReactTooltip>
            </div>
            <article>
                <h1>{post.title}</h1>
                <div className="blog_card_categories">
                    {tooltip_span}
                </div>
                <span>{new Date(post.pubDate).toLocaleDateString('en-gb', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}</span>
            </article>
            </a>
        </div>

        // <div className="list_inner">
        //     <div className="image">
        //     <a
        //         href={post.link}
        //         target="_blank"
        //         rel="noreferrer"
        //         className="details"
        //     >
        //         <img
        //             src={post.thumbnail}
        //             data-tip
        //             data-for={props.index + '_' + post.title}
        //             alt="portfolio"
        //         />
        //         <ReactTooltip
        //             id={props.index + '_' + post.title}
        //             place="bottom"
        //             type="light"
        //             effect="float"
        //             className="tooltip-wrapper"
        //         >
        //             <div className="blog_tooltip">
        //                 <h5>Categories</h5>
        //                 {tooltip_span}
        //             </div>
        //         </ReactTooltip>
        //     </a>
        //     </div>
        //     <div className="post-info">
        //     <h5 className="post-title">{post.title}</h5>
        //     <h5 className="post-date">{new Date(post.pubDate).toLocaleDateString('en-gb', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}</h5>
        //     </div>
        // </div>
    );
}

export default BlogCard;