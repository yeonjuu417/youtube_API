import React,{Component} from "react";
import Nav from "./Nav";
import VideoPlayer from "./VideoPlayer";
import VideoList from "./VideoList";
import { searchYouTube } from "../searchYouTube";
//import { YOUTUBE_API_KEY } from "../../config/youtube";
import { fakeData } from "./__test__/fakeData";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos:fakeData,
      currentVideo:fakeData[0],
      keyword:"",
    }    
  }
    
  handleClick(e){
    const title = e.target.textContent;
    const data = this.state.videos;
    const filterData = data.filter(el => el.snippet.title === title);
    this.setState({currentVideo : filterData[0]})
  }

  keywordChange(e){
    this.setState({keyword : e.target.value })
  }

  searchVideo(){ // 검색버튼 클릭시 실행
    searchYouTube(
      {
        query: this.state.keyword , 
        max: 5, 
        key: YOUTUBE_API_KEY,
      },
      (data) =>{//data = data.items
        this.setState({videos : data, currentVideo : data[0]})
      }
    )
  }

  render(){
    const {videos,currentVideo} = this.state
    return(
      <div>
    <Nav searchVideo={this.searchVideo.bind(this)} keywordChange={this.keywordChange.bind(this)} />
    <div className="parent">
      <VideoPlayer video ={currentVideo || fakeData[0]}/>
      <VideoList videos={videos} handleClick={this.handleClick.bind(this)}/>
    </div>
  </div>
    )
}
}

export default App;
