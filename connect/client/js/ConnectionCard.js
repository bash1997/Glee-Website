class ConnectionCard extends React.Component{
    constructor(){
        super();

        this.state = {
            showStage: 0,
            questionIndex: 0,
            answer: '',
            answerArray:[],
            labels: ['Name:','Email:','Gender:','Birthday:','Phone:','Street Address:',
            'apt/unit/box:','City:','State:','Postal Code:','Household Members:','Platform:',
            'contact:', 'First Time:', 'Prayer Requests:']
        }

        this.handleShowClick = this.handleShowClick.bind(this);
        this.handleHideClick = this.handleHideClick.bind(this);
        
    }
    handleShowClick = () =>{
        this.setState({showStage: 1});
    }
    handleHideClick = () =>{
        this.setState({
            showStage: 0,
            questionIndex:0
        });
    }
    handleAnswer = event => {
        this.setState({ 
            answer: event.target.value
        });
    }
    updateAnswers = event => {
        event.preventDefault();
        //console.log( 'New Answer: ', this.state.answer);
        if(document.getElementById('nam') && this.state.answer ==='' || document.getElementById('ema') && this.state.answer ==='' || document.getElementById('pho') && this.state.answer ===''){
            alert('Question Required')
        }else{
            let label = this.state.labels.slice();
            let newFeed = this.state.answerArray.slice();
            let x = this.state.questionIndex
            newFeed.push(label[x] + ' ' + this.state.answer);
            //console.log('Label #' + x)
            this.setState({
                answer: "",
                answerArray: newFeed,
                questionIndex: this.state.questionIndex + 1
            });
            //console.log(this.state.answerArray)
        }
    };
    home(){
        return <h3>Fill out our Connection Card!</h3>
    }
    connectCard(){
        let index = this.state.questionIndex;
        let questionList = this.state.questionArray;
        let connectCardAnswers = this.state.answerArray.map(answer => <li>{answer}</li>)
        //console.log('question #:', index)
        let question;
        let questionArray = [
            <form className='questions'>
            <label for='nam'>Enter full Name:</label>
            <input 
            id='nam'
            type='text'
            placeholder='Full Name'
            value={this.state.answer}
            onChange={this.handleAnswer}
            />
            </form>,
            <form>
            <label for='ema'>Enter Email:</label>
            <input 
            id='ema'
            type='text'
            placeholder='Email Address'
            value={this.state.answer}
            onChange={this.handleAnswer}
            />
            </form>,
            <form>
            <label for='gen'>Gender:</label>
            <input 
            id='gen'
            type='text'
            placeholder='Gender'
            value={this.state.answer}
            onChange={this.handleAnswer}
            />
            </form>,
            <form>
            <label for='bir'>Date Of Birth:</label>
            <input 
            id='bir'
            type='date'
            placeholder='Birthday'
            value={this.state.answer}
            onChange={this.handleAnswer}
            />
            </form>,
            <form>
            <label for='pho'>Enter Phone Number</label>
            <input 
            id='pho'
            type='text'
            placeholder='Phone Number'
            value={this.state.answer}
            onChange={this.handleAnswer}
            />
            </form>,
            <form>
            <label for='add'>Enter Address:</label>
            <input 
            id='add'
            type='text'
            placeholder='Street Address'
            value={this.state.answer}
            onChange={this.handleAnswer}
            />
            </form>,
            <form>
            <label for='apt'>Enter Address:</label>
            <input 
            id='apt'
            type='text'
            placeholder='apt/unit/box'
            value={this.state.answer}
            onChange={this.handleAnswer}
            />
            </form>,
            <form>
            <label for='cit'>Enter Address:</label>
            <input 
            id='cit'
            type='text'
            placeholder='City'
            value={this.state.answer}
            onChange={this.handleAnswer}
            />
            </form>,
            <form>
            <label for='sta'>Enter Address:</label>
            <input 
            id='sta'
            type='text'
            placeholder='State'
            value={this.state.answer}
            onChange={this.handleAnswer}
            />
            </form>,
            <form>
            <label for='pos'>Enter Address:</label>
            <input 
            id='pos'
            type='text'
            placeholder='Postal Code'
            value={this.state.answer}
            onChange={this.handleAnswer}
            />
            </form>,
            <input 
            type='number'
            placeholder='Household Members'
            value={this.state.answer}
            onChange={this.handleAnswer}
            />,
            <input 
            type='text'
            placeholder='Which Platform are you joining from'
            value={this.state.answer}
            onChange={this.handleAnswer}
            />,
            <form>
            <label for='tex'>Text:</label>
            <input 
            id='tex'
            type='checkbox'
            placeholder='Preferred Method of Contact'
            value='Text'
            onChange={this.handleAnswer}
            />
            <label for='pho'>Phone:</label>
            <input 
            id='pho'
            type='checkbox'
            placeholder='Preferred Method of Contact'
            value='Phone'
            onChange={this.handleAnswer}
            />
            <label for='ema'>Email:</label>
            <input 
            id='ema'
            type='checkbox'
            placeholder='Preferred Method of Contact'
            value='Email'
            onChange={this.handleAnswer}
            />
            </form>,
            <form>
            <label for='yes'>First Time?</label><br></br>
            <label for='yes'>Yes</label>
            <input 
            id='yes'
            type='checkbox'
            placeholder='First Time'
            value='Yes'
            onChange={this.handleAnswer}
            />
            <label for='no'>No</label>
            <input 
            id='no'
            type='checkbox'
            placeholder='First Time'
            value='No'
            onChange={this.handleAnswer}
            />
            </form>
            ,
            <input 
            type='text'
            placeholder='Prayer Requests/Questions'
            value={this.state.answer}
            onChange={this.handleAnswer}
            />,
            <ul>{connectCardAnswers}</ul>
        ];
        if(index < 16 ){
            question = questionArray[index]
        }else{
            this.setState({
                questionIndex:0,
                answerArray:[]
            })
        }
        
        return(
            <form onSubmit={this.updateAnswers}>
                {question}
                <br></br>
                <input type='submit'/>
            </form>
        )
    }
    render(){
    let index = this.state.showStage;
    let display; 
    if (index == 0){
        display = this.home();
    }else if(index == 1){
        display = this.connectCard();
    }
        return(
            <div className='connectCard'>
                {display}
                <br></br>
                <button className='button-white' onClick={this.handleShowClick}>Show Card</button>
                <button className='button-white' onClick={this.handleHideClick}>Hide Card</button> 
            </div>
        )
        
    }
}
