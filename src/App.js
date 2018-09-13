import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'home'
    }
  }
  switchView = (view) => {
    this.setState({
      view: view
    })
  }
  render() {
    const viewContainerMapping = {
      'home': <Home view={this.state.view} switchView={this.switchView.bind(this)} />,
      'shot': <Shot view={this.state.view} switchView={this.switchView.bind(this)} />,
    }
    let container = viewContainerMapping[this.state.view];
    return (
      <div className="App">
        {container}
      </div>
    );
  }
}
export default App;

/* Views */
class Home extends Component {
  render() {
    return (
      <section className="home view">
        <nav>
          <h1 className="shot-logo mv0"></h1>
          <ButtonTool size="large" text="Settings" icon="/images/icon-settings.svg"/>
        </nav>
        <main>
          <div className="cards center">
            <ShotCard switchView={this.props.switchView.bind(this)}/>
            <ShotCard switchView={this.props.switchView.bind(this)}/>
            <ShotCard switchView={this.props.switchView.bind(this)}/>
            <ShotCard switchView={this.props.switchView.bind(this)}/>
            <ShotCard switchView={this.props.switchView.bind(this)}/>
            <ShotCard switchView={this.props.switchView.bind(this)}/>
            <ShotCard switchView={this.props.switchView.bind(this)}/>
            <ShotCard switchView={this.props.switchView.bind(this)}/>
          </div>
        </main>
        <Footer/>
      </section>
    );
  }
}

class Shot extends Component {
  render() {
    return (
      <section className="shot view">
        <nav>
          <div className="shot-tools">
            <div onClick={() => this.props.switchView("home")}>
              <ButtonTool size="large" text="All Shots" icon="/images/icon-shots.svg"/>
            </div>
            <div className="shot-info">
              <h1 className="mv0">This is a shot title</h1>
              <ul className="list mv1">
                <li className="link">https://www.thisisalink.com</li>
                <li>Just now</li>
                <li>Expires in 12 days</li>
              </ul>
            </div>
          </div>
          <div className="shot-tools">
            <ButtonTool size="large" text="Settings" icon="/images/icon-settings.svg"/>
          </div>
        </nav>
        <main>
          <div className="shot-floating-tools center bg-white shadow">
            <ButtonTool text="Favorite" icon="/images/icon-heart.svg"/>
            <ButtonTool text="Draw" icon="/images/icon-pen.svg"/>
            <ButtonTool text="Copy" icon="/images/icon-copy.svg"/>
            <ButtonTool text="Download" icon="/images/icon-download.svg"/>
            <ButtonTool text="Share" icon="/images/icon-share.svg"/>
            <ButtonTool text="Delete" icon="/images/icon-trash.svg"/>
          </div>
          <div className="shot-container center">
            <img className="shot-image" src="https://fakeimg.pl/800x600/ffffff/cccccc/"/>
          </div>
        </main>
        <Footer/>
      </section>
    )
  }

}

/* Components */
function ButtonTool(props) {
  var icon = {
    background: "url("+props.icon+")",
    backgroundSize: "contain",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat"

  }
  var cn = "button-tool-small";
  let tooltip = (<Tooltips text={props.text}/>);
  if(props.size === "large") {
    cn = "button-tool";
    tooltip = null;
  }
  return (
    <div className={cn}>
      <div>
        <div className="button-tool__icon center" style={icon}></div>
        <p className="tc mt2 mb0 fw7">{props.text}</p>
      </div>
      {tooltip}
    </div>
  )
}

function Tooltips(props) {
  return (
    <div className="tooltips absolute">
      <label className="tc mv0 fw7">{props.text}</label>
    </div>
  ) 
}

function ShotCard(props) {
  return (
    <div className="shot-card bg-silver" onClick={() => props.switchView("shot")}></div>
  )
}

function Footer() {
  return (
    <footer className="main-footer">
      <a className="main-footer__moz-logo"></a>
      <ul className="main-footer__links">
        <li><a>Terms</a></li>
        <li><a>Privacy Notice</a></li>
        <li><a>FAQs</a></li>
        <li><a>Report Shot</a></li>
        <li><a>Report IP Infringement</a></li>
        <li><a>Give Feedback</a></li>
        <li><a>GitHub</a></li>
        <li><a>Remove All Data</a></li>
      </ul>
    </footer>
  )
}
