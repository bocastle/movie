import React, { Component } from 'react';
import axios from 'react-native-axios';
import { Card, Button, CardTitle, CardText, CardImg, CardSubtitle , Row, Col} from 'reactstrap';

class moives extends Component {

    
    constructor(props){ //선언을 해주는거고
        super(props);
        console.log("검색창");

          this.state = {
            search : "", //변수명과 초기값을 넣어준다
            movie : [] 
          };
        };

    click = () => {
        this.setState({search: this.state.search});  
    }


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
    } */

    render(){
        console.log("render hello");
      
        /*  const movie = () => { 전역변수를 사용하자 oi li 빼고 카드로 해결해라
            const movie = []
        } */
        
        return(           
            <div>
                
                <input type="text" placeholder="검색한 단어를 입력해주세요"  onChange={e => {this.setState({search: e.target.value})}}></input>
                <button onClick={this.getMovies}>검색</button>
                검색할 단어 : {this.state.search}
                <button onClick={() => console.log(this.state.movie)}>영화값확인</button>
                
                    <ol> 
                        {movie.map(( title, index ) => (
                            <li key = {index}>
                                <span>{title}</span>
                            </li>
                        ))}
                    </ol>    
                    )
                
                }
                <Row>
                    <Col  sm="6">
                        <Card body>
                            <CardImg top width="100%" src="/logo.svg" alt="Card image cap"></CardImg>
                            <CardTitle>더미데이터</CardTitle>
                            <CardSubtitle>1994</CardSubtitle>
                            <CardText>City</CardText>
                            <Button>버튼</Button>
                        </Card> 
                    </Col>
                    <Col  sm="6">
                        <Card body>
                            <CardImg top width="100%" src="/logo.svg" alt="Card image cap"></CardImg>
                            <CardTitle>The Shawshank Red</CardTitle>
                            <CardSubtitle>1994</CardSubtitle>
                            <CardText>City</CardText>
                            <Button>버튼</Button>
                        </Card> 
                    </Col>
                </Row>
                <br></br>
                <Row> 
                    <Col sm="6">
                        <Card body>
                            <CardImg top width="100%" src="/logo.svg" alt="Card image cap"></CardImg>
                            <CardTitle>The Shawshank Red</CardTitle>
                            <CardSubtitle>1994</CardSubtitle>
                            <CardText>City</CardText>
                            <Button>버튼</Button>
                        </Card> 
                    </Col>
                    <Col sm="6">
                        <Card body>
                            <CardImg top width="100%" src="/logo.svg" alt="Card image cap"></CardImg>
                            <CardTitle>The Shawshank Red</CardTitle>
                            <CardSubtitle>1994</CardSubtitle>
                            <CardText>City</CardText>
                            <Button>버튼</Button>
                        </Card> 
                    </Col>
                </Row>

            </div>
        )
    
    }

}
export default movies;