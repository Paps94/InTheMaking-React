
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGhost, faComment, faDog, faDoorOpen, faPersonFalling, faMosquito, faToiletPaperSlash, faPoop, faSkullCrossbones, faKeyboard, 
    faArrowsDownToPeople, faBed, faHandFist, faMagnifyingGlass, faUtensils, faDumpsterFire, faEye, faSocks, faBullhorn, faPeopleArrows,
    faBaseball, faToiletPaper, faBroom

} from "@fortawesome/free-solid-svg-icons";

const Subordinates = () => {

    return (
        <div className="subordinate-main">
            <img data-aos="zoom-in-down" data-aos-duration="2000" data-aos-delay="500" className="loki_top_left" src="img/subordinates/loki1.png" alt="Loki" />
            <img data-aos="zoom-in-up" data-aos-duration="2000" data-aos-delay="750" className="billie_bot_right" src="img/subordinates/billie.png" alt="Billie" />

            <div className="loki">
                <h1>Loki <span data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000"data-aos-anchor-placement="top-bottom">- devour of treats | destructor of deposits | bane of my existence | master explorer | cuddle bug</span></h1>
                <div className="subordinate_qualities">
                    <span ><FontAwesomeIcon icon={faHandFist}/>Will introduce you to his right paw if you pick him up</span>
                    <span ><FontAwesomeIcon icon={faUtensils}/>Will start causing damage around if breakfast is late.</span>
                    <span ><FontAwesomeIcon icon={faBullhorn}/>Will scream for pets no matter the hour of the day.. or night</span>
                    <span ><FontAwesomeIcon icon={faToiletPaperSlash}/>Cannot hide his <FontAwesomeIcon icon={faPoop}/> to save his life. PS it's vile... <FontAwesomeIcon icon={faSkullCrossbones}/></span>
                    <span ><FontAwesomeIcon icon={faPersonFalling}/>Tripping hazard in the shadows</span>
                    <span ><FontAwesomeIcon icon={faBed}/>Likes to sleep on my hand while I am working and it melts my soul every time</span>
                    <span ><FontAwesomeIcon icon={faSocks}/>Has a foot fetish I think but not 100% certain</span>
                    <span ><FontAwesomeIcon icon={faEye}/>Likes to watch you shower but is only interested to join if you are a girl</span>
                    <span ><FontAwesomeIcon icon={faDumpsterFire}/>Has a weird beef with caulk hence why he earned the nickname "Destructor of Deposits"</span>
                    <span ><FontAwesomeIcon icon={faMosquito}/>Hunts down, kills and eats flies for fun</span>
                    <span ><FontAwesomeIcon icon={faMagnifyingGlass}/>Curious about everything and anything. Will wake you up at 3am to let him go outside.</span>
                    <span ><FontAwesomeIcon icon={faArrowsDownToPeople}/>Likes to micromanage. Will take over your <FontAwesomeIcon icon={faKeyboard}/> when you are not looking</span>
                    <span ><FontAwesomeIcon icon={faDoorOpen}/>Always the first to welcome guests by the door.</span>
                </div>
            </div>
            <div className="divider"></div>
            <div className="billie">
                <h1>Billie <span data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000" data-aos-anchor-placement="top-bottom">- collector of strings | fetcher of balls | throw-up machine | 100% evil | dick head</span></h1>
                <div className="subordinate_qualities">
                    <span ><FontAwesomeIcon icon={faGhost}/>Dissapears as soon as she hears the door</span>
                    <span ><FontAwesomeIcon icon={faEye}/>Likes to watch you sleep</span>
                    <span ><FontAwesomeIcon icon={faComment}/>100% thinks she is better than you</span>
                    <span ><FontAwesomeIcon icon={faDog}/>I am about 85% certain she thinks she is a dog</span>
                    <span ><FontAwesomeIcon icon={faPeopleArrows}/>Will only approach you if she needs something</span>
                    <span ><FontAwesomeIcon icon={faBaseball}/>Will bring you a ball to play fetch but never brings it back</span>
                    <span ><FontAwesomeIcon icon={faToiletPaper}/>Actually a great scooper 10/7</span>
                    <span ><FontAwesomeIcon icon={faDumpsterFire}/>Has a weird obsession with strings.</span>
                    <span ><FontAwesomeIcon icon={faBroom}/>Is the reason the roomba is always stuck.</span>
                    <span ><FontAwesomeIcon icon={faUtensils}/>She is way too picky with food in comparison to how little variety she can digest without throwing up.</span>
                </div>
            </div>
        </div>
    );
};

export default Subordinates;