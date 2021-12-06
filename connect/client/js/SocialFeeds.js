class SocialFeeds extends React.Component {
    constructor(){
        super();

        this.state = {
            componentIndex: 0,
            msg: '',
            feed:['Common', 'Practice'],
            prayFeed:['Prayer Request', 'Practice'],
            bibleFeed:['Bible Study', 'Practice']
        };

        this.handleShowClick = this.handleShowClick.bind(this);
        this.handleHideClick = this.handleHideClick.bind(this);
        this.handleCommonClick = this.handleCommonClick.bind(this);
        this.handlePrayerClick = this.handlePrayerClick.bind(this);
        this.handleBibleClick = this.handleBibleClick.bind(this);
    }
    handleShowClick = () => {
        this.setState({ componentIndex: 1});
    }
    handleHideClick = () => {
        this.setState({ componentIndex: 0});
    }
    handleCommonClick = () => {
        this.setState({ componentIndex: 2 });
    };
    handlePrayerClick = () => {
        this.setState({ componentIndex: 3 });
    };
    handleBibleClick = () => {
        this.setState({ componentIndex: 4 });
    };
    handleMsg = event => {
        this.setState({ msg: event.target.value});
    };

    updateFeed = event => {
        event.preventDefault();
        let newFeed = this.state.feed.slice();
        newFeed.push(this.state.msg);
        this.setState({
            msg: "",
            feed: newFeed
        });
        //console.log(this.state.feed, newFeed);
        //console.log('success');
    };

    updatePrayFeed = event => {
        event.preventDefault();
        let newfeed = this.state.prayFeed.slice();
        newfeed.push(this.state.msg);
        this.setState({
            msg:'',
            prayFeed: newfeed
        });
        //console.log(this.state.prayFeed, newfeed);
        //console.log('pray Success')
    }

    updateBibleFeed = event => {
        event.preventDefault();
        let newfeed = this.state.bibleFeed.slice();
        newfeed.push(this.state.msg);
        this.setState({
            msg:'',
            bibleFeed: newfeed
        });
        console.log(this.state.bibleFeed, newfeed);
        console.log('bible Success')
    }

    homePage(){
        return <h3>See all of our Social Feeds!</h3>
    };

    feedsList(){
        return(
        <div className="buttonList">
            <button className="button-white" onClick={this.handleCommonClick}>Common</button>
            <button className="button-white" onClick={this.handleBibleClick}>Bible Study</button>
            <button className='button-white' onClick={this.handlePrayerClick}>Prayer Request</button>
        </div>
        )
    };

    common(){
        let feed = this.state.feed.map(feedMsg => <li>{feedMsg}</li>);
        return (
            <div id="myModal" class="modal">
                <div class="modal-content">
                    <span class="close" onClick={this.handleShowClick}>&times;</span>
                    <h5>Common Feed</h5>
                    <div class="slidingBoxes">
                        <div class="chat_info">
                            <p>Users</p>
                        </div>
                        <div class='commonFeed'>
                            <ul> {feed} </ul>
                        </div>
                    </div>
                    <div class='commonFeedSubmit'>
                        <form onSubmit={this.updateFeed}>
                            <input 
                            type='text' 
                            placeholder="type here" 
                            value={this.state.msg} 
                            onChange={this.handleMsg} 
                            />
                            <input type='submit'/>
                        </form>
                        <p>Msg: {this.state.msg}</p>
                    </div>
                </div>
                
            </div>
        
        )
    };

    prayerRequest(){
        let prayFeed = this.state.prayFeed.map(feedMsg => <li>{feedMsg}</li>)
        return (
            <div id="myModal" class="modal">
                <div class="modal-content">
                    <span class="close" onClick={this.handleShowClick}>&times;</span>
                    <p>Prayer Request Feed</p>
                    <div class='prayerFeed'>
                        {prayFeed}
                    </div>
                    <div class='prayerFeedSubmit'>
                        <form onSubmit={this.updatePrayFeed}>
                            <input 
                            type="text"
                            placeholder='type here'
                            value={this.state.msg}
                            onChange={this.handleMsg}
                            />
                        </form>
                        <p>Msg: {this.state.msg}</p>
                    </div>

                </div>
                
            </div>
        
        )
    };

    bibleStudy(){
        let bibleFeed = this.state.bibleFeed.map(feedMsg => <li>{feedMsg}</li>)
        return (
            <div id="myModal" class="modal">
                <div class="modal-content">
                    <span class="close" onClick={this.handleShowClick}>&times;</span>
                    <p>Bible Study Feed</p>
                    <div class='bibleFeed'>
                        {bibleFeed}
                    </div>
                    <div class='bibleFeedSubmit'>
                        <form onSubmit={this.updateBibleFeed}>
                            <input 
                            type="text"
                            placeholder='type here'
                            value={this.state.msg}
                            onChange={this.handleMsg}
                            />
                        </form>
                    <p>Msg: {this.state.msg}</p>
                    </div>
                </div>
                
            </div>
        
        )
    };

    render(){
        let stage = this.state.componentIndex;
        let display;
        //console.log(stage, 'Assigned state to variable');
        if (stage == 0){
            display = this.homePage();
        }else if (stage == 1){
            display = this.feedsList();
            //console.log(display)
        }else if (stage == 2){
            display = this.common();
            //console.log(display)
        }else if (stage == 3){
            display = this.prayerRequest();
            //console.log(display)
        }else if (stage == 4){
            display = this.bibleStudy();
            //console.log(display)
        }
        return (
            <div className='socialFeed'>
            {display}
            <button className="button-white" onClick={this.handleShowClick}>Show Feeds</button>
            <button className="button-white" onClick={this.handleHideClick}>Hide Feeds</button>
            </div>
        )
    }
}