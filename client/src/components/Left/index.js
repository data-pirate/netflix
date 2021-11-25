// import Featured from './Featured';
import Featured from './../Featured'
import Header from './../Header';
import List from './../List';

const ColoredLine = ({ color }) => (
    <hr
        style={{
            marginTop: 1,
            height: 1,
            color: color,
            backgroundColor: color,
        }}
    />
);

function Left(){
    return (
        <div className="left">
            <Header />
            <Featured />
            <List listName = "Continue Watching"/>
            <ColoredLine color = "orange"/>
            <List listName = "Popular on Netflix"/>
            <ColoredLine color = "orange"/>
        </div>
    )
}

export default Left;