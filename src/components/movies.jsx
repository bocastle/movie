import React, { Component } from 'react';
import axios from 'react-native-axios';
import { Card, Button, CardTitle, CardText, CardImg, CardSubtitle , Row, Col} from 'reactstrap';
import "./movie.css";

class moives extends Component {

    
    constructor(props){ //선언을 해주는거고
        super(props);
        console.log("검색창");

          this.state = {
            search : "", //변수명과 초기값을 넣어준다
            movie : [] 
          };
        };

    /* click = () => {
        this.setState({search: this.state.search});  
    } */


    //순서 url,data,config
    getMovies = async () => {
        console.log("getmove");
        if (this.state.search == '') {
            alert('검색어를 입력해주세요');
        } else {
            const url = `https://openapi.naver.com/v1/search/movie.json?query=${this.state.search}`;
            /* const data = {
                
            } */
            const config = {
                headers: {
                    'X-Naver-Client-Id': 'xRKbkM9iZjbYgV42ur02',
                    'X-Naver-Client-Secret': '7DM0OnNCQx'
                }
            }
            const movies = await axios.get(url, config);
            console.log("movies 값", movies);
            this.setState({movie: movies.data.items });
            movies.data.items.map((item, index) => {
                console.log(index);
                console.log(item.title);
                return null;
            })
         


        }
    }

    /* componentDidMount() {
        // this.getMovies();
    return (<CardTitle>{movie.title}</CardTitle>)
    } */

    render(){
        console.log("render hello");
      
        /*  const movie = () => { 전역변수를 사용하자 oi li 빼고 카드로 해결해라
            const movie = [] div를넣고 변수를 가지고온다.
        } */
        const { movie } = this.state;
        
        for (let i = 0; i < movie.length; i++) {
            const element = movie[i];
            
            console.log("render 값확인" ,movie);
        };

        return(           
            <div style={{backgroundColor:'gray'}}>
                
                <input type="text" placeholder="검색한 단어를 입력해주세요"  onChange={e => {this.setState({search: e.target.value})}}></input>
                <button onClick={this.getMovies}>검색</button>
                검색할 단어 : {this.state.search}
                <button onClick={() => console.log(this.state.movie)}>영화값확인</button>
                
                <Row>
                    {this.state.movie.map ((movie, i ) =>{
                        return (
                            <Col xs="12"sm="6" >
                                <Card className="movie" style = {{padding: '20px', margin:'10px', backgroundColor:'white'}}>
                                        <div key = {i}>
                                            <CardImg src={movie.image}></CardImg>
                                            <Card body style={{backgroundColor:'white', height: 'auto'}}>
                                            <CardTitle style={{color:'black', fontSize:'26px'}}>
                                                <div dangerouslySetInnerHTML={{__html: movie.title}}></div>
                                                {/* {movie.title} */}
                                            </CardTitle>
                                            <br></br>
                                            <CardSubtitle style={{color:'gray', fontSize:'20px'}}>{movie.subtitle}</CardSubtitle>
                                            <br></br>
                                            <CardText style={{color:'gray',fontSize:'15px'}}>{movie.pubDate}</CardText>
                                            </Card>
                                        </div>
                               
                                </Card>
                            </Col>
                        )                       
                    })}
                   {/*  <Col sm="6">
                        <Card body>
                            {this.state.movie.map (( movie , i) => {
                                return (
                                    <div key={i}>
                                        {movie.title}
                                    </div>
                                );
                            })}

                            {this.state.movie.map ((movie, i) => {
                                return (<movie title = {movie.title}; 
                         </Card>
                    </Col>    */}
                </Row>

                {/*     <ol> 
                        {movie.map(( title, index ) => (
                            <li key = {index}>
                                <span>{title}</span>
                            </li>
                        ))}
                    </ol>    
                    )
                
                } */}

                
                {/*  <Row>
                   
                    <Col sm="6">
                        <Card className="movie" style = {{padding: '10px'}}>
                            <Card body inverse style ={{ backgroundColor: 'gray'}}>
                                <CardImg img src="https://img5.yna.co.kr/photo/cms/2019/02/22/03/PCM20190222000003005_P2.jpg"></CardImg>
                                <h2 style={{ color: "blue"}}> 더미데이터</h2>
                                <CardSubtitle>1994</CardSubtitle>
                                <CardText>City</CardText>
                            </Card> 
                        </Card>
                    </Col>

                    <Col sm="6">
                        <Card className="movie" style = {{padding: '10px'}}>
                            <Card body inverse style ={{ backgroundColor: 'gray'}}>
                                <CardImg img src="https://img5.yna.co.kr/photo/cms/2019/02/22/03/PCM20190222000003005_P2.jpg"></CardImg>
                                <h2 style={{ color: "blue"}}> 더미데이터</h2>
                                <CardSubtitle>1994</CardSubtitle>
                                <CardText>City</CardText>
                            </Card> 
                        </Card>
                    </Col>
                </Row> */}
                

            </div>
        ) 
    
    }

}
export default moives;