import Header from '../Header/Header';
import TwoColumns from '../TwoColumns/TwoColumns';
import Techniques from '../Techniques/Techniques';
import * as constants from '../../utils/constants'
import './App.css';
import Video from '../Video/Video';
import Feynman from '../Feynman/Feynman';
import Facts from '../Facts/Facts';
import AboutBook from '../AboutBook/AboutBook';
import Principles from '../Principles/Principles';
import Resources from '../Resources/Resources';
import Footer from '../Footer/Footer';

export default function App() {
  return (
    <>
      <Header
        headerInfo={constants.headerInfo} />
        <TwoColumns
        data={constants.description}/>
        <Techniques
        techniques = {constants.techniques}
        data = {constants.cardData} />
        <Video
        header={constants.video_header}/>
        <TwoColumns
        data={constants.oakley}/>
        <Feynman/>
        <Facts
        data = {constants.facts_title}
        table={constants.facts}/>
        <AboutBook
        data={constants.about_book}/>
        <Principles
        data={constants.principles}
        principles={constants.principles_data}/>
        <Resources
        data={constants.resources}
        links={constants.resources_data}/>
        <Footer
        links={constants.nav_about}/>
    </>
  );
}

