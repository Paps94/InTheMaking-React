import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import Loader from "../miscellaneous/Loader";
import CommingSoon from "../miscellaneous/ComingSoon";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@antreasPaps'
    }, requestOptions)
    .then((result) => {
      console.log(result);
      length = result.data.items.length;
      setPosts(result.data.items);
      setLoading(false);
    })
  }, []);

  var length = 0;
  var categories = "";
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var requestOptions = {
      method: "get",
      headers: myHeaders,
      redirect: "follow",
  };

  var settings = {
    dots: false,
    arrow: true,
    infinite: length > 3,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          arrow: false,
          autoplay: false,
          draggable: true,
          speed: 300,
          dots: true,
        },
      },
    ],
  };


  if (isLoading) {
    return <Loader/>;
  }

  
  if (posts.length == 0) {
    return <CommingSoon/>;
  }

  return (
    <div className="portfolio_inner my_carousel gallery_zoom">
      <ul data-aos="fade-right" data-aos-duration="1200">
        <Slider {...settings}>
        {posts.map((post, i) => (
          <li key={i}>
            <div className="list_inner">
              <div className="image">
                <a
                  href={post.link}
                  target="_blank"
                  rel="noreferrer"
                  className="details"
                >
                  <img
                    src={post.thumbnail}
                    data-tip
                    data-for={post.title + i}
                    alt="portfolio"
                  />
                  <ReactTooltip
                    id={post.title + i}
                    place="bottom"
                    type="light"
                    effect="float"
                    className="tooltip-wrapper"
                  >
                    <div>
                      <h5>Categories</h5>
                      {post.categories.forEach(element => {
                        let asd = element.charAt(0).toUpperCase() + element.slice(1);
                        categories += asd + ' ';
                      })}
                      <span>{categories}</span>
                    </div>
                  </ReactTooltip>
                </a>
              </div>
              <div className="post-info">
                <h5 className="post-title">{post.title}</h5>
                <h5 className="post-date">{new Date(post.pubDate).toLocaleDateString('en-gb', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}</h5>
              </div>
            </div>
          </li>
        ))}
        </Slider>
      </ul>
    </div>
  );
};

export default Blog;
